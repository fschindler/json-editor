import { Draft } from 'json-schema-library';
import { ValueNode, isJsonError, ParentNode, isNode, Change, FileNode } from '../../types';
import { _createNode } from '../../node/createNode';
import { getChildIndex } from '../../node/getChildNode';
import { deepEqual } from 'fast-equals';
import { getSchemaOfChild } from './getSchemaOfChild';

/**
 * updates or replaces value node
 *
 * @param parent - parentNode to 'child'
 */
export function updateValueNode(draft: Draft, parent: ParentNode, child: ValueNode | FileNode, value: any) {
    // console.log('update', child.pointer, value);
    const targetIndex = getChildIndex(parent, child.property);
    const changeSet: Change[] = [];
    if (typeof child.value === typeof value) {
        const newChild = { ...child };
        parent.children[targetIndex] = newChild;
        // @change update node
        newChild.value = value;
        changeSet.push({ type: 'update', node: newChild });
        return changeSet;
    }

    const schemaNode = getSchemaOfChild(draft, parent, child.property, value);
    if (isJsonError(schemaNode)) {
        return schemaNode;
    }

    if (deepEqual(schemaNode.schema, child.schema)) {
        const newChild = { ...child };
        parent.children[targetIndex] = newChild;
        // @change update node
        newChild.value = value;
        changeSet.push({ type: 'update', node: newChild });
        return changeSet;
    }

    // const childPointer = `${parent.pointer}/${child.property}`;
    if (isNode(parent.children[targetIndex])) {
        // @change replace node
        changeSet.push({ type: 'delete', node: parent.children[targetIndex] });
    }
    parent.children[targetIndex] = _createNode(schemaNode, value, parent.type === 'array');
    changeSet.push({ type: 'create', node: parent.children[targetIndex] });
    return changeSet;
}
