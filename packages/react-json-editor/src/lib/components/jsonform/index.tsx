import { Form } from 'semantic-ui-react';
import { RemoteEnumOptionsPlugin, JSONSchema, Node, json } from 'headless-json-editor';
import { useJsonEditor } from '../../useJsonEditor';
import { defaultEditors } from '../../../index';

// import { createContext } from 'react';
// export const ModalContext = createContext({});

export type JsonFormProps = {
    schema: JSONSchema;
    data: unknown;
    onChange?: (data: unknown, root: Node) => void;
};

export function JsonForm({ schema, data, onChange }: JsonFormProps) {
    const [node, instance] = useJsonEditor({
        schema,
        editors: defaultEditors,
        onChange,
        plugins: [RemoteEnumOptionsPlugin],
        data
    });
    // @ts-ignore
    window['jsonNode'] = node;
    // @ts-ignore
    window['validate'] = () => instance.core.validate(json(node));
    if (node == null) {
        return <Form error />;
    }

    const ChildEditor = instance.getEditor(node);
    return (
        <Form error>
            <ChildEditor node={node} instance={instance} />
        </Form>
    );
}
