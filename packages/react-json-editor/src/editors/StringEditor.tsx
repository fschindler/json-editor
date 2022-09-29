import { StringNode } from '@sagold/headless-json-editor';
import { EditorPlugin } from '../types';
import { Form, Dropdown } from 'semantic-ui-react';
import { valueEditor } from './decorators';

export const StringEditor = valueEditor<StringNode>(({ node, setValue }) => {
    const disabled = node.options.disabled || (node.schema.const && node.errors.length === 0);

    return (
        <div data-type="string" className={disabled ? 'disabled' : 'enabled'}>
            <Form.Input
                id={node.pointer}
                type="text"
                disabled={disabled}
                value={node.value}
                error={node.errors.length > 0 && node.errors.map((e) => e.message)}
                label={node.options.title}
                onChange={(e, { value }) => setValue(value)}
            />
            {<div className="description">{node.options.description as string}</div>}
        </div>
    );
});

export const StringEditorPlugin: EditorPlugin = {
    id: 'string-editor',
    use: (node) => node.schema.type === 'string',
    Editor: StringEditor
};

export const SelectEditor = valueEditor<StringNode>(({ node, setValue }) => {
    const titles = (node.options.enum as string[]) ?? [];
    // @ts-ignore
    const options = node.schema.enum.map((value, index) => ({
        key: index,
        value,
        text: titles[index] ?? value
    }));

    return (
        <div data-type="string">
            <Form.Field id={node.pointer} error={node.errors.length > 0 && node.errors.map((e) => e.message)}>
                <label>{node.options.title ?? node.property}</label>
                <Dropdown
                    selection
                    onChange={(event, { value }) => setValue(value as string)}
                    value={node.value}
                    options={options}
                />
            </Form.Field>
            {<div className="description">{node.options.description}</div>}
        </div>
    );
});
