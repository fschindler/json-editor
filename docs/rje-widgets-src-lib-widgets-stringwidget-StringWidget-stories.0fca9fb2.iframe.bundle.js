"use strict";(self.webpackChunkjson_editor=self.webpackChunkjson_editor||[]).push([[7493],{"./packages/rje-widgets/src/lib/widgets/stringwidget/StringWidget.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ErrorState:()=>ErrorState,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_sagold_react_json_editor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react-json-editor/src/index.ts"),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/rje-widgets/src/lib/widgets/index.tsx"),_StringWidget__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/rje-widgets/src/lib/widgets/stringwidget/StringWidget.tsx"),_components_theme_Theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/rje-widgets/src/lib/components/theme/Theme.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"packages/rje-widgets/StringWidget",component:function StringWidgetStory({data,schema,format,...options}){const s={...schema,format},[node,editor]=(0,_sagold_react_json_editor__WEBPACK_IMPORTED_MODULE_1__.jE)({schema:s,widgets:_index__WEBPACK_IMPORTED_MODULE_2__.D,data,validate:!0});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_theme_Theme__WEBPACK_IMPORTED_MODULE_4__.Q,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StringWidget__WEBPACK_IMPORTED_MODULE_3__.L,{node,editor,options})})},argTypes:{data:{control:{type:"text"}},placeholder:{control:{type:"text"}},liveUpdate:{control:{type:"boolean"}},icon:{control:{type:"text"}},swapIconPosition:{control:{type:"boolean"}},tag:{control:{type:"text"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},required:{control:{type:"boolean"}},format:{control:{type:"select"},options:["text","password"]}}},Default={args:{data:"some input string",liveUpdate:!1,icon:void 0,tag:void 0,swapIconPosition:!1,disabled:!1,readOnly:!1,required:!1,schema:{title:"Default string widget",type:"string",maxLength:20,description:"options could go into storybook controls"}}},ErrorState={args:{data:"some input string",schema:{title:"Default string widget",type:"string",maxLength:4}}},__namedExportsOrder=["Default","ErrorState"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    data: 'some input string',\n    liveUpdate: false,\n    icon: undefined,\n    tag: undefined,\n    swapIconPosition: false,\n    disabled: false,\n    readOnly: false,\n    required: false,\n    schema: {\n      title: 'Default string widget',\n      type: 'string',\n      maxLength: 20,\n      description: 'options could go into storybook controls'\n    }\n  }\n}",...Default.parameters?.docs?.source}}},ErrorState.parameters={...ErrorState.parameters,docs:{...ErrorState.parameters?.docs,source:{originalSource:"{\n  args: {\n    data: 'some input string',\n    schema: {\n      title: 'Default string widget',\n      type: 'string',\n      maxLength: 4\n    }\n  }\n}",...ErrorState.parameters?.docs?.source}}}}}]);