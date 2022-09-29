import { Draft, JSONPointer, JSONError } from 'json-schema-library';
import {
    Node,
    ObjectNode,
    ArrayNode,
    isValueNode,
    isParentNode,
    isJSONError,
    ParentNode,
    isNode,
    Change,
    JSONSchema
} from '../types';
import { create } from '../node/create';
import { json } from '../node/json';
import { split, set as setPointer, join } from 'gson-pointer';
import { invalidPathError } from '../errors';
import { getChildNodeIndex, getChildNode } from '../node/getChildNode';
import { deepEqual } from 'fast-equals';

const cp = <T = any>(value: T): T => JSON.parse(JSON.stringify(value));

function getSchemaOfChild(draft: Draft, parentNode: Node, childProperty: string, value: any): JSONSchema | JSONError {
    const data = json(parentNode) as Record<string, unknown>;
    data[childProperty] = value;
    const schema = draft.step(childProperty, parentNode.schema, data, parentNode.pointer);
    // unknown property in schema
    if (isJSONError(schema)) {
        if (schema.code !== 'unknown-property-error') {
            console.log(`failed retrieving schema for '${parentNode.pointer}/${childProperty}'`);
            console.log(schema);
            return schema;
        }
        return draft.createSchemaOf(value);
    }
    return schema;
}

function resolveIfThenElse(
    core: Draft,
    targetNode: ObjectNode,
    pointerToValue: string,
    value: unknown
): [ObjectNode, Change[]] {
    if (!targetNode.schema.if || !(targetNode.schema.then || targetNode.schema.else)) {
        return [targetNode, []];
    }

    const thenSchema = { type: 'object', ...(targetNode.schema.then as JSONSchema) } as JSONSchema;
    const elseSchema = { type: 'object', ...(targetNode.schema.else as JSONSchema) } as JSONSchema;

    const currentTargetData = json(targetNode);
    const currentIsValid = core.isValid(currentTargetData, targetNode.schema.if as JSONSchema);

    let newTargetData = setPointer(cp(currentTargetData), pointerToValue, value);
    const newTargetValid = core.isValid(newTargetData, targetNode.schema.if as JSONSchema);

    // only update children on changed if-result
    if (currentIsValid === newTargetValid) {
        return [targetNode, []];
    }

    const currentSchema = currentIsValid ? thenSchema : elseSchema;
    const newSchema = newTargetValid ? thenSchema : elseSchema;

    const currentNodes = create<ObjectNode>(core, currentTargetData, currentSchema, targetNode.pointer);
    const currentPointers = currentNodes.children.map((c) => c.pointer);

    // remove previous schema
    targetNode.children = targetNode.children.filter((child) => !currentPointers.includes(child.pointer));

    newTargetData = core.getTemplate(newTargetData, newSchema);
    const newNodes = create<ObjectNode>(core, newTargetData, newSchema, targetNode.pointer).children;
    targetNode.children = targetNode.children.concat(...newNodes);

    // @todo add changeset
    return [targetNode, []];
}

function resolveDependencies(
    core: Draft,
    targetNode: ObjectNode,
    pointerToValue: string[],
    value: unknown
): [ObjectNode, Change[]] {
    const changeSet: Change[] = [];

    // replace whole object and reuse currently edited node
    if (!targetNode.schema.dependencies) {
        return [targetNode, changeSet];
    }
    // @todo improve diff
    // if next key is a key in dependencies, recreate whole node and
    // let `create` do the complex work
    const changedProperty = pointerToValue[0];
    const dependencyAffected = targetNode.schema.dependencies[changedProperty] != null;
    if (!dependencyAffected) {
        return [targetNode, changeSet];
    }
    // store current edited child for later, we have to reuse it
    const currentlyEditedChild = getChildNode(targetNode, pointerToValue[0]);

    // rebuild this object with updated data
    const currentData = json(targetNode) as Record<string, unknown>;
    setPointer(currentData, join(pointerToValue), value);
    changeSet.push({
        type: 'delete',
        node: targetNode
    });

    // note: we may not replace edited child, but must update it
    const newTargetNode = create<ObjectNode>(core, currentData, targetNode.schema, targetNode.pointer);
    changeSet.push({
        type: 'create',
        node: newTargetNode
    });

    const nextChildIndex = getChildNodeIndex(newTargetNode, pointerToValue[0]);
    // @ts-ignore
    newTargetNode.children[nextChildIndex] = currentlyEditedChild;
    targetNode.children = newTargetNode.children;
    return [targetNode, changeSet];
}

/**
 * set (add, update) given data to location of json pointer
 */
export function set<T extends Node = Node>(
    core: Draft,
    previousRoot: T,
    pointer: JSONPointer,
    value: any
): [JSONError] | [T, Change[]] {
    const changeSet: Change[] = [];
    const frags = split(pointer);
    const newRootNode = { ...previousRoot };
    let parentNode: Node = newRootNode; // @todo this might be really bad
    let targetIndex = -1;
    let targetNode: Node | null = newRootNode;
    let childProperty = ''; // @todo this might be really bad
    while (frags.length > 0) {
        if (!targetNode || !isParentNode(targetNode)) {
            return [
                invalidPathError({
                    pointer,
                    reason: 'expected parent data to be object or array',
                    where: 'resolving json pointer to node in transform.change'
                })
            ];
        }

        // in case our current node has a oneOf statement, the schema might
        // change and must replace the whole subtree
        if (targetNode.schema.oneOf || targetNode.schema.oneOfSchema) {
            // build new data starting from parentNode
            const dataFromParentNode = json(parentNode) as Record<string, unknown>;
            setPointer(dataFromParentNode, join(childProperty, frags), value);
            // we know that the previoius node has to be a parent
            const parent = parentNode as ObjectNode | ArrayNode;
            // from parent retrieve the new oneOf schema
            const childSchema = core.step(childProperty, parentNode.schema, dataFromParentNode, parentNode.pointer);
            // in case the schema is different, replace the subtree and return
            let index = getChildNodeIndex(parentNode, childProperty);
            if (index === -1) {
                index = parent.type === 'array' ? parseInt(childProperty) : parent.children.length;
            }

            const currentSchema = parent.children[index]?.schema;
            if (currentSchema == null || !deepEqual(childSchema, currentSchema)) {
                // @change replace node
                if (isNode(parent.children[index])) {
                    changeSet.push({
                        type: 'delete',
                        node: parent.children[index]
                    });
                }
                parent.children[index] = create(
                    core,
                    dataFromParentNode[childProperty],
                    childSchema,
                    `${parentNode.pointer}/${childProperty}`
                );
                // @change create node
                changeSet.push({
                    type: 'create',
                    node: parent.children[index]
                });
                return [newRootNode, changeSet];
            }
        }

        if (targetNode?.type === 'object' && targetNode.schema.if) {
            const [newTargetNode, changes] = resolveIfThenElse(core, targetNode, join(frags), value);
            targetNode = newTargetNode;
            changeSet.push(...changes);
        }

        if (targetNode?.type === 'object' && targetNode.schema.dependencies) {
            // replace whole object and reuse currently edited node
            const [newTargetNode, changes] = resolveDependencies(core, targetNode, frags, value);
            targetNode = newTargetNode;
            changeSet.push(...changes);
        }

        // unlink children of current node
        targetNode.children = [...targetNode.children];
        childProperty = frags.shift() as string;
        targetIndex = getChildNodeIndex(targetNode, childProperty);

        if (targetIndex >= 0) {
            // unlink and assign next child node
            // @todo unnecessary unlink for last target node
            targetNode.children[targetIndex] = {
                ...targetNode.children[targetIndex]
            };
            // update nodes for next iteration of end result
            parentNode = targetNode;
            targetNode = targetNode.children[targetIndex];
        } else {
            // targetIndex = parentNode.type === 'object' ? targetNode.children.length : parseInt(childProperty);
            // new node
            parentNode = targetNode;
            targetNode = null;
        }

        const itemsSchema = parentNode.schema?.items as JSONSchema;
        if (itemsSchema?.oneOf) {
            // build new data starting from parentNode
            const dataFromParentNode = json(parentNode) as unknown[];
            setPointer(dataFromParentNode, join(childProperty, frags), value);
            // from parent retrieve the new oneOf schema
            const childSchema = core.step(childProperty, parentNode.schema, dataFromParentNode, parentNode.pointer);

            // we know that the previoius node has to be a array parent
            const parent = parentNode as ArrayNode;
            const childIndex = parseInt(childProperty);
            const currentSchema = parent.children[childIndex]?.schema;
            if (currentSchema == null || !deepEqual(childSchema, currentSchema)) {
                // @change replace node
                if (isNode(parent.children[childIndex])) {
                    changeSet.push({
                        type: 'delete',
                        node: parent.children[childIndex]
                    });
                }
                parent.children[childIndex] = create(
                    core,
                    dataFromParentNode[childIndex],
                    childSchema,
                    `${parentNode.pointer}/${childProperty}`
                );
                // @change create node
                changeSet.push({
                    type: 'create',
                    node: parent.children[childIndex]
                });
                return [newRootNode, changeSet];
            }
        }
    }

    // new property or item
    if (targetNode == null) {
        if (parentNode.type === 'array' && `${parseInt(childProperty)}` !== childProperty) {
            return [
                invalidPathError({
                    pointer,
                    reason: `child property '${childProperty}' to array is not a number`,
                    where: 'resolving target node in transform.change'
                })
            ];
        }

        const schema = getSchemaOfChild(core, parentNode, childProperty, value);
        if (isJSONError(schema)) {
            return [schema];
        }

        const childPointer = `${parentNode.pointer}/${childProperty}`;
        const childIndex =
            parentNode.type === 'object' ? parentNode.children.length : (childProperty as unknown as number);
        (parentNode as ObjectNode).children[childIndex] = create(core, value, schema, childPointer);
        // @change create node
        changeSet.push({
            type: 'create',
            node: (parentNode as ObjectNode).children[childIndex]
        });
        return [newRootNode, changeSet];
    }

    // simple node update, targetNode has already been unlinked/cloned
    if (isValueNode(targetNode)) {
        if (typeof targetNode.value === typeof value) {
            // @change update node
            targetNode.value = value;
            changeSet.push({ type: 'update', node: targetNode });
            return [newRootNode, changeSet];
        }

        const schema = getSchemaOfChild(core, parentNode, childProperty, value);
        if (isJSONError(schema)) {
            return [schema];
        }

        if (deepEqual(schema, targetNode.schema)) {
            // @change update node
            targetNode.value = value;
            changeSet.push({ type: 'update', node: targetNode });
            return [newRootNode, changeSet];
        }

        const childPointer = `${parentNode.pointer}/${childProperty}`;
        // @change create node
        if (isNode((parentNode as ObjectNode).children[targetIndex])) {
            changeSet.push({
                type: 'delete',
                node: (parentNode as ObjectNode).children[targetIndex]
            });
        }
        (parentNode as ObjectNode).children[targetIndex] = create(core, value, schema, childPointer);
        changeSet.push({
            type: 'create',
            node: (parentNode as ObjectNode).children[targetIndex]
        });
        return [newRootNode, changeSet];
    }

    // replace node, creating new object or array tree
    if (isParentNode(targetNode)) {
        const schema = getSchemaOfChild(core, parentNode, childProperty, value);
        if (isJSONError(schema)) {
            return [schema];
        }

        const parent = parentNode as ParentNode;
        const previousNode = parent.children[targetIndex] as ParentNode;
        const nextNode = create(core, value, schema, targetNode.pointer);

        // @todo sync old subtree with new subtree
        parent.children[targetIndex] = nextNode;

        if (deepEqual(previousNode.schema, nextNode.schema)) {
            const next = nextNode as ParentNode;
            // @change update parent, replace children
            changeSet.push({ type: 'update', node: nextNode });
            previousNode.children.forEach((childNode) => changeSet.push({ type: 'delete', node: childNode }));
            // @todo why can next node be missing children?
            next.children?.forEach((childNode) => changeSet.push({ type: 'create', node: childNode }));
        } else {
            // @change replace node
            changeSet.push({ type: 'delete', node: previousNode });
            changeSet.push({
                type: 'create',
                node: parent.children[targetIndex]
            });
        }

        return [newRootNode, changeSet];
    }

    throw new Error('Invalid state in transform.change');
}
