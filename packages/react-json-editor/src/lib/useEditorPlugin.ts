import { HeadlessEditor, Plugin, deepEqual } from "headless-json-editor";
import { useMemo, useRef } from "react";
import { Editor } from "./Editor";


/**
 * register a plugin-instance to json-editor
 * Note: plugins having a state will be reset
 */
export function useEditorPlugin<T extends Plugin, E extends HeadlessEditor>
    (editor?: E, plugin?: T, options?: Parameters<T>[1]) {
    const ref = useRef<Parameters<T>[0]>();
    const optionsChanged = options !== ref.current && !deepEqual(options, ref.current);
    return useMemo(() => {
        if (editor && plugin) {
            ref.current = options;
            const instance = editor.addPlugin(plugin, options);
            if (instance) {
                editor.plugins = editor.plugins.filter(p => p === instance || p.id !== instance.id);
                return instance;
            }
        }
        return undefined;
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [editor, plugin, optionsChanged]
    );
}
