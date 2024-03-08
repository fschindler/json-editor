import gp from '@sagold/json-pointer';
import { DefaultNodeOptions, create } from '../node/create';
import { Draft, JsonError, JsonPointer } from "json-schema-library";
import { get } from "../node/get";
import { json } from "../node/json";
import { Node, isJsonError, Change, ParentNode, JsonSchema } from '../types';
import { unlinkPath } from './unlinkPath';

/**
 * Recreate a json-editor ast node at the given location.
 * Use this to update a node's json-schema which was modified in its source.
 *
 * @param he - instance of headless-json-editor
 * @param rootNode - root node of current json-editor ast
 * @param targetNode - node to be recreated
 * @return [newRootNode, listOfChanges]
 */
export function update<T extends Node = Node>(
  draft: Draft,
  ast: T,
  pointer: JsonPointer
): [JsonError | T, Change[]?] {
  const targetNode = get(ast, pointer);
  if (isJsonError(targetNode)) {
    return [targetNode];
  }
  // unlink nodes along the path, ensuring we do not modify the previous ast
  const result = unlinkPath(ast, pointer);
  if (isJsonError(result)) {
    return [result];
  }
  // get the uptodate json-schema of this node
  const schema = draft.getSchema({
    pointer,
    data: json(ast),
  });

  if (isJsonError(schema)) {
    return [schema];
  }

  const [newRootNode] = result;
  // create new node and replace the old one with it
  const newNode = create(draft, json(targetNode), schema, pointer);
  const [pointerToParent] = gp.splitLast(pointer);
  const parentNode = get(newRootNode, pointerToParent) as ParentNode;
  parentNode.children = parentNode.children.map((node) =>
    node.pointer === targetNode.pointer ? newNode : node
  );

  // return the new root node and a list of changes
  return [
    newRootNode,
    [
      { type: 'delete', node: targetNode },
      { type: 'create', node: newNode },
    ],
  ];
}

/**
 * updates schema of a node
 */
export function updateSchema(rootNode: Node, pointer: JsonPointer, schema: JsonSchema): [JsonError] | [Node, Change[]] {
    const result = unlinkPath(rootNode, pointer);
    if (isJsonError(result)) {
        return [result];
    }

    const [root, targetNode] = result;
    targetNode.schema = schema;

    return [root, [{ type: 'update', node: targetNode }]];
}

/**
 * updates options of a node
 */
export function updateOptions(
    rootNode: Node,
    pointer: JsonPointer,
    options: DefaultNodeOptions
): [JsonError] | [Node, Change[]] {
    const result = unlinkPath(rootNode, pointer);
    if (isJsonError(result)) {
        return [result];
    }

    const [root, targetNode] = result;
    targetNode.options = options;

    return [root, [{ type: 'update', node: targetNode }]];
}
