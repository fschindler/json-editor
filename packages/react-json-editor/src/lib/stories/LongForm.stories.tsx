import { useJsonEditor, defaultWidgets } from '../../index';
import { Form } from 'semantic-ui-react';
import { NavigationWidget } from '../widgets/navigationwidget/NavigationWidget';
import { data, schema } from './data/longform';

export default {
    title: 'Example',
    argTypes: {
        data: { control: { type: 'object' }, defaultValue: data },
        schema: { control: { type: 'object' }, defaultValue: schema }
    }
};

export const LongForm = () => {
    const [node, editor] = useJsonEditor({ data, schema, widgets: defaultWidgets, plugins: [] });
    const WidgetComponent = editor.getWidget(node);

    return (
        <div style={{ display: 'flex' }}>
            <div
                style={{
                    width: '20%',
                    position: 'fixed',
                    height: '100%',
                    paddingBottom: 48,
                    marginRight: 24,
                    borderRight: '1px solid black',
                    overflow: 'scroll',
                    boxSizing: 'border-box'
                }}
            >
                <div style={{ paddingRight: 24 }}>
                    <NavigationWidget node={node} editor={editor} />
                </div>
            </div>
            <div style={{ marginLeft: '20%', paddingLeft: 48 }}>
                <Form error>
                    <WidgetComponent node={node} editor={editor} />
                </Form>
            </div>
        </div>
    );
};
