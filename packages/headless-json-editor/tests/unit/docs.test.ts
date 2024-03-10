import { strict as assert } from 'assert';
import { HeadlessEditor } from '../../src/HeadlessEditor';
import { JsonSchema } from '../../src/types';

describe('docs', () => {
    it('should log list of strings', () => {
        // import { HeadlessJsonEditor } from 'headless-json-editor';
        const jsonSchema = { type: 'array', items: { type: 'string' } } as JsonSchema;
        const he = new HeadlessEditor({ schema: jsonSchema, data: ['first item'] });
        let rootNode = he.getNode();
        rootNode = he.setValue('#/1', 124);
        // console.log(JSON.stringify(rootNode, null, 2));
        // render(rootNode);
    });
});
