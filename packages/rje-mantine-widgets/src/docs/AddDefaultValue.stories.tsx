import { UseEditorOptions, useEditor } from '@sagold/react-json-editor';
import { widgets } from '@sagold/rje-mantine-widgets';
import { StoryObj } from '@storybook/react';
import { MantineThemeDecorator } from './MantineThemeDecorator';

export default {
    title: 'packages/rje-mantine-widgets/examples/AddDefaultValue',
    component: Form,
    decorators: [MantineThemeDecorator]
};

type Story = StoryObj<UseEditorOptions>;
function Form({ data, schema }: UseEditorOptions) {
    const [node, editor] = useEditor({ data, schema, widgets, plugins: [], onChange: console.log });
    const WidgetComponent = editor.getWidget(node);
    return <WidgetComponent node={node} editor={editor} />;
}

export const InvalidData: Story = {
    args: {
        validate: true,
        data: ['a title'],
        schema: {
            title: 'additionalItems: { type: "number" }',
            type: 'array',
            items: [
                {
                    title: 'Title',
                    type: 'string'
                }
            ],
            additionalItems: {
                title: 'Additional number',
                type: 'number',
                default: 1
            }
        }
    }
};
