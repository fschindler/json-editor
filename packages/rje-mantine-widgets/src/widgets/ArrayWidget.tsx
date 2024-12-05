import { ActionIcon, Button, InputWrapper, Menu, MenuDropdown, Table } from '@mantine/core';
import { widget, WidgetPlugin, ArrayNode, DefaultNodeOptions, Widget, WidgetField } from '@sagold/react-json-editor';
import { Icon } from '../components/icon/Icon';

// for comparison https://github.com/sueddeutsche/editron/blob/master/src/editors/arrayeditor/index.ts
// and https://github.com/sueddeutsche/editron/blob/master/src/editors/arrayeditor/ArrayItem.ts

export type ArrayOptions = DefaultNodeOptions<{
    /** if set, will add an accordion in the given toggle state */
    collapsed?: boolean;
    // sortable?: SortableOptions;
    /** if set, will add an edit-json action to edit, copy and paste json-data for this location */
    editJson?: {
        enabled?: boolean;
        // modalSize?: WidgetModalSize;
        /** if true, will update on each change if input is a valid json format */
        liveUpdate?: boolean;
    };
    /** Is set internally to true to add a delete option for this object. */
    isOptional?: boolean;
    /** set to true to show inline button at the end of the array to add another item */
    inlineAddItemOption?: boolean;
    /** if true will add a separator line to the header */
    headerSeparator?: boolean;
    /** header font size relative to 1 (em). Defaults to 1 */
    headerFontSize?: number;
    /** set to false to deactivate any array-controls */
    controls?: boolean;
    /** set to true to inline description */
    descriptionInline?: boolean;
}>;

// copy of rje-widgets -- maybe rje utility?
function getActionStates(node: ArrayNode) {
    const minItems = node.schema.minItems || 0;
    let isAddEnabled = node.schema.maxItems == null ? true : node.children.length < node.schema.maxItems;
    if (
        Array.isArray(node.schema.items) &&
        (node.schema.additionalItems === false || node.schema.additionalItems == null)
    ) {
        isAddEnabled = node.children.length < node.schema.items.length;
    }
    return { isAddEnabled, isDeleteEnabled: minItems < node.children.length };
}

export const ArrayWidget = widget<ArrayNode<ArrayOptions>>(({ editor, node, options }) => {
    const childOptions = {};

    const { isAddEnabled, isDeleteEnabled } = getActionStates(node);

    return (
        <WidgetField widgetType="array" node={node} options={options} showError={false} showDescription={false}>
            <InputWrapper
                description={options.description}
                label={options.title}
                error={node.errors.map((e) => e.message).join('\n')}
            >
                <Table striped withRowBorders={false}>
                    <Table.Tbody>
                        {node.children.map((child) => (
                            <Table.Tr key={child.id}>
                                <Table.Td width={'100%'}>
                                    <Widget
                                        key={child.id}
                                        node={child}
                                        editor={editor}
                                        options={{
                                            ...childOptions
                                        }}
                                    />
                                </Table.Td>
                                <Table.Td valign="top" align="right">
                                    <Menu position="left">
                                        <Menu.Target>
                                            <ActionIcon variant="transparent">
                                                <Icon>menu</Icon>
                                            </ActionIcon>
                                        </Menu.Target>
                                        <Menu.Dropdown>
                                            <ActionIcon
                                                variant="transparent"
                                                aria-label="delete"
                                                disabled={!isDeleteEnabled || options.readOnly || options.disabled}
                                                onClick={() => editor.removeValue(child.pointer)}
                                            >
                                                <Icon>delete</Icon>
                                            </ActionIcon>
                                            <ActionIcon
                                                variant="transparent"
                                                aria-label="move-up"
                                                disabled={child.property === '0'}
                                                onClick={() =>
                                                    editor.moveItem(child.pointer, parseInt(child.property) - 1)
                                                }
                                            >
                                                <Icon>keyboard_arrow_up</Icon>
                                            </ActionIcon>
                                            <ActionIcon
                                                variant="transparent"
                                                aria-label="move-down"
                                                disabled={child.property === `${node.children.length - 1}`}
                                                onClick={() =>
                                                    editor.moveItem(child.pointer, parseInt(child.property) + 1)
                                                }
                                            >
                                                <Icon>keyboard_arrow_down</Icon>
                                            </ActionIcon>
                                        </Menu.Dropdown>
                                    </Menu>
                                </Table.Td>
                            </Table.Tr>
                        ))}
                        <Table.Tr>
                            <Table.Td colSpan={2} valign="middle" align="center">
                                {isAddEnabled && (
                                    <Button
                                        variant="light"
                                        disabled={options.readOnly || options.disabled}
                                        onClick={() => {
                                            const insertOptions = editor.getArrayAddOptions(node);
                                            if (insertOptions[0]) {
                                                editor.appendItem(node, insertOptions[0]);
                                            }
                                        }}
                                    >
                                        <Icon>add</Icon>
                                    </Button>
                                )}
                            </Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                </Table>
            </InputWrapper>
        </WidgetField>
    );
});

export const ArrayWidgetPlugin: WidgetPlugin<ArrayNode> = {
    id: 'array-widget',
    use: (node) => node.schema.type === 'array',
    Widget: ArrayWidget
};
