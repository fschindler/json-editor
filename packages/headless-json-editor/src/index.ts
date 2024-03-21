// settings
import { setErrorMessages } from './settings';
// create
import { createNode, getOptions, DefaultNodeOptions } from './node/createNode';
import { getData } from './node/getData';
// traversal
import { getErrors } from './node/getErrors';
import { findNode } from './node/findNode';
import { getNodeList } from './node/getNodeList';
import { getNode } from './node/getNode';
import { getNodeTrace } from './node/getNodeTrace';
import { getChildNode } from './node/getChildNode';
// transformation
import { setValue } from './transform/setValue';
import { removeNode } from './transform/removeNode';
import { moveNode } from './transform/moveNode';
import { unlinkAll } from './transform/unlinkAll';
import { unlinkPath } from './transform/unlinkPath';
import { updateNode, updateSchema, updateOptions } from './transform/updateNode';
// hje
import {
    HeadlessEditor,
    HeadlessEditorOptions,
    Plugin, PluginInstance,
} from './HeadlessEditor';
// plugins
import { EventLoggerPlugin } from './plugins/EventLoggerPlugin';
import { RemoteEnumOptionsPlugin } from './plugins/RemoteEnumOptionsPlugin';
import { OnChangePlugin, OnChangeListener } from './plugins/OnChangePlugin';
import { HistoryPlugin } from './plugins/HistoryPlugin';
import { SetOptionTitleToPlugin } from './plugins/SetOptionTitleToPlugin';
// validation
import { updateErrors } from './validate/updateErrors';
import { validateNode, splitErrors } from './validate/validateNode';
// jlib export
import { isJsonError, JsonError } from 'json-schema-library';
// bundled tools
export { deepEqual } from 'fast-equals';
// types and type guards
import {
    ArrayNode,
    BooleanNode,
    Change,
    JsonSchema,
    Node,
    NodeType,
    NullNode,
    NumberNode,
    ObjectNode,
    ParentNode,
    PluginEvent,
    StringNode,
    ValueNode,
    isChangeEvent,
    isNode,
    isParentNode,
    isValueNode
} from './types';

export {
    createNode,
    getErrors,
    EventLoggerPlugin,
    findNode,
    getNodeList,
    getNode,
    getChildNode,
    validateNode,
    getOptions,
    HeadlessEditor,
    HistoryPlugin,
    isChangeEvent,
    isJsonError,
    isNode,
    isParentNode,
    isValueNode,
    getData,
    moveNode,
    OnChangePlugin,
    RemoteEnumOptionsPlugin,
    removeNode,
    setValue,
    setErrorMessages,
    SetOptionTitleToPlugin,
    splitErrors,
    getNodeTrace,
    unlinkAll,
    unlinkPath,
    updateNode,
    updateErrors,
    updateOptions,
    updateSchema
};

export type {
    ArrayNode,
    BooleanNode,
    Change,
    DefaultNodeOptions,
    HeadlessEditorOptions,
    JsonSchema,
    JsonError,
    Plugin,
    PluginInstance,
    PluginEvent,
    Node,
    NodeType,
    NullNode,
    NumberNode,
    ObjectNode,
    OnChangeListener,
    ParentNode,
    StringNode,
    ValueNode
};
