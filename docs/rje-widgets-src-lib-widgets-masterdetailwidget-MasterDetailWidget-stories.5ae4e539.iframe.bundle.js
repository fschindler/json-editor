"use strict";(self.webpackChunkjson_editor=self.webpackChunkjson_editor||[]).push([[4290],{"./packages/rje-widgets/src/lib/widgets/masterdetailwidget/MasterDetailWidget.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{List:()=>List,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_sagold_react_json_editor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react-json-editor/src/index.ts"),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/rje-widgets/src/lib/widgets/index.tsx"),_MasterDetailWidget__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/rje-widgets/src/lib/widgets/masterdetailwidget/MasterDetailWidget.tsx"),_components_theme_Theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/rje-widgets/src/lib/components/theme/Theme.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"packages/rje-widgets/MasterDetailWidget",component:_MasterDetailWidget__WEBPACK_IMPORTED_MODULE_3__.L,argTypes:{data:{control:{type:"object"}},schema:{control:{type:"object"}}}},List=(({data,schema})=>{const[node,editor]=(0,_sagold_react_json_editor__WEBPACK_IMPORTED_MODULE_1__.jE)({schema,widgets:_index__WEBPACK_IMPORTED_MODULE_2__.D,plugins:[_sagold_react_json_editor__WEBPACK_IMPORTED_MODULE_1__.AY],data,validate:!0});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_theme_Theme__WEBPACK_IMPORTED_MODULE_4__.Q,{style:{width:400},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MasterDetailWidget__WEBPACK_IMPORTED_MODULE_3__.L,{node,editor,options:{header:{inverted:!0}}})})}).bind({});List.args={data:[{title:"first value",value:1},{title:"wrong value type",value:"four"}],schema:{title:"Contents",description:"MasterDetailWidget will delegates child widgets to a modal window",type:"array",options:{descriptionInline:!0,sortable:{enabled:!0}},items:{title:"content item",type:"object",options:{previewValue:"title"},properties:{title:{type:"string"},value:{type:"number",minimum:1}}}}};const __namedExportsOrder=["List"];List.parameters={...List.parameters,docs:{...List.parameters?.docs,source:{originalSource:"({\n  data,\n  schema\n}) => {\n  const [node, editor] = useEditor<ParentNode>({\n    schema,\n    widgets,\n    plugins: [RemoteEnumOptionsPlugin],\n    data,\n    validate: true\n  });\n  return <Theme style={{\n    width: 400\n  }}>\n      <MasterDetailWidget node={node} editor={editor} options={{\n      header: {\n        inverted: true\n      }\n    }} />\n    </Theme>;\n}",...List.parameters?.docs?.source}}}}}]);