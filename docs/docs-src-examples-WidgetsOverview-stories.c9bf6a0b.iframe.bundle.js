"use strict";(self.webpackChunkjson_editor=self.webpackChunkjson_editor||[]).push([[8566],{"./packages/docs/src/examples/WidgetsOverview.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultWidgets:()=>DefaultWidgets,__namedExportsOrder:()=>__namedExportsOrder,default:()=>WidgetsOverview_stories});var features=__webpack_require__("./packages/docs/src/examples/data/features.ts"),src=__webpack_require__("./packages/headless-json-editor/src/index.ts"),react_json_editor_src=__webpack_require__("./packages/react-json-editor/src/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),rje_widgets_src=__webpack_require__("./packages/rje-widgets/src/index.ts"),Theme=__webpack_require__("./packages/rje-widgets/src/lib/components/theme/Theme.tsx"),jsx_runtime=(__webpack_require__("./node_modules/@uiw/react-codemirror/esm/index.js"),__webpack_require__("./packages/rje-code-widgets/src/lib/useCodeMirrorOnBlur.ts"),__webpack_require__("./node_modules/markdown-to-jsx/dist/index.modern.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function createCodeWidgetPlugin(_ref){var extensions=_ref.extensions,format=_ref.format;if("string"!=typeof format)throw new Error("Format is required to create a code widget. Given: '".concat(format,"'"));return{id:"".concat(format,"-code-widget"),use:function use(node){return"string"===node.schema.type&&node.schema.format===format},Widget:widget((function(_ref2){var _options$theme,node=_ref2.node,options=_ref2.options,setValue=(_ref2.editor,_ref2.setValue),ref=_slicedToArray(useCodeMirrorOnBlur(setValue,node.pointer),1)[0],onChangeListener={};return options.liveUpdate?onChangeListener.onChange=setValue:onChangeListener.ref=ref,_jsxs(Widget.Field,{widgetType:"code",node,options,showDescription:!1,children:[_jsx(Label,{children:options.title}),_jsx(CodeMirror,_objectSpread({value:node.value,basicSetup:options.setup,editable:!1===options.disabled,extensions,height:options.height,minHeight:options.minHeight,maxHeight:options.maxHeight,indentWithTab:options.indentWithTab,placeholder:options.placeholder,readOnly:options.readOnly,theme:null!==(_options$theme=options.theme)&&void 0!==_options$theme?_options$theme:"light"},onChangeListener)),options.description&&_jsx(Widget.Description,{children:_jsx(Markdown,{children:options.description})})]})}))}}try{createCodeWidgetPlugin.displayName="createCodeWidgetPlugin",createCodeWidgetPlugin.__docgenInfo={description:"",displayName:"createCodeWidgetPlugin",props:{extensions:{defaultValue:null,description:"",name:"extensions",required:!0,type:{name:"Extension[]"}},format:{defaultValue:null,description:"format the widget should register to",name:"format",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/rje-code-widgets/src/lib/codewidget/CodeWidget.tsx#createCodeWidgetPlugin"]={docgenInfo:createCodeWidgetPlugin.__docgenInfo,name:"createCodeWidgetPlugin",path:"packages/rje-code-widgets/src/lib/codewidget/CodeWidget.tsx#createCodeWidgetPlugin"})}catch(__react_docgen_typescript_loader_error){}var _DefaultWidgets$param,_DefaultWidgets$param2,JsonWidget=__webpack_require__("./packages/rje-code-widgets/src/lib/jsonwidget/JsonWidget.tsx");function WidgetsOverview_stories_typeof(obj){return WidgetsOverview_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},WidgetsOverview_stories_typeof(obj)}function WidgetsOverview_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function WidgetsOverview_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?WidgetsOverview_stories_ownKeys(Object(source),!0).forEach((function(key){WidgetsOverview_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):WidgetsOverview_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function WidgetsOverview_stories_defineProperty(obj,key,value){return(key=function WidgetsOverview_stories_toPropertyKey(arg){var key=function WidgetsOverview_stories_toPrimitive(input,hint){if("object"!==WidgetsOverview_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==WidgetsOverview_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===WidgetsOverview_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return WidgetsOverview_stories_arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||WidgetsOverview_stories_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function WidgetsOverview_stories_slicedToArray(arr,i){return function WidgetsOverview_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function WidgetsOverview_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||WidgetsOverview_stories_unsupportedIterableToArray(arr,i)||function WidgetsOverview_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function WidgetsOverview_stories_unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return WidgetsOverview_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?WidgetsOverview_stories_arrayLikeToArray(o,minLen):void 0}}function WidgetsOverview_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const WidgetsOverview_stories={title:"Examples/Widgets"};var Template=function Template(){var editor=(0,react.useRef)(null),_useState2=WidgetsOverview_stories_slicedToArray((0,react.useState)(features.a),2),editorData=_useState2[0],setEditorData=_useState2[1];return(0,react.useEffect)((function(){window.changeData=function(){return setEditorData({text:"mimimi"})},window.getErrors=function(){var _editor$current;return(0,src.R0)(null===(_editor$current=editor.current)||void 0===_editor$current?void 0:_editor$current.getState())},window.getData=function(){var _editor$current2;return(0,src.AV)(null===(_editor$current2=editor.current)||void 0===_editor$current2?void 0:_editor$current2.getState())},window.getState=function(){var _editor$current3;return null===(_editor$current3=editor.current)||void 0===_editor$current3?void 0:_editor$current3.getState()}}),[features.a]),(0,jsx_runtime.jsx)(Theme.Q,{children:(0,jsx_runtime.jsx)(react_json_editor_src.R_,{widgets:[JsonWidget.N8].concat(_toConsumableArray(rje_widgets_src.DA)),ref:editor,data:editorData,schema:features.f,validate:!0,liveUpdate:!0,onChange:function onChange(data){}})})};Template.displayName="Template";var DefaultWidgets=Template.bind({});DefaultWidgets.parameters=WidgetsOverview_stories_objectSpread(WidgetsOverview_stories_objectSpread({},DefaultWidgets.parameters),{},{docs:WidgetsOverview_stories_objectSpread(WidgetsOverview_stories_objectSpread({},null===(_DefaultWidgets$param=DefaultWidgets.parameters)||void 0===_DefaultWidgets$param?void 0:_DefaultWidgets$param.docs),{},{source:WidgetsOverview_stories_objectSpread({originalSource:"() => {\n  const editor = useRef<JsonEditor>(null);\n  const [editorData, setEditorData] = useState(data);\n  useEffect(() => {\n    // @ts-ignore\n    window.changeData = () => setEditorData({\n      text: 'mimimi'\n    });\n    // @ts-ignore\n    window.getErrors = () => errors(editor.current?.getState());\n    // @ts-ignore\n    window.getData = () => json(editor.current?.getState());\n    // @ts-ignore\n    window.getState = () => editor.current?.getState();\n  }, [data]);\n  return <Theme>\n            <JsonForm widgets={[JsonWidgetPlugin, ...widgets]} ref={editor} data={editorData} schema={schema} validate={true} liveUpdate={true} onChange={data => {\n      // console.log('change data in editor', editor);\n      // setEditorData({ text: 'mimimi' });\n    }} />\n        </Theme>;\n}"},null===(_DefaultWidgets$param2=DefaultWidgets.parameters)||void 0===_DefaultWidgets$param2||null===(_DefaultWidgets$param2=_DefaultWidgets$param2.docs)||void 0===_DefaultWidgets$param2?void 0:_DefaultWidgets$param2.source)})});var __namedExportsOrder=["DefaultWidgets"]},"./packages/docs/src/examples/data/features.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>data,f:()=>schema});var data={text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ita multo sanguine profuso in laetitia et in victoria est mortuus. Graccho, eius fere, aequalí? Illum mallem levares, quo optimum atque humanissimum virum, Cn. Quod dicit Epicurus etiam de voluptate, quae minime sint voluptates, eas obscurari saepe et obrui. Duo Reges: constructio interrete. Sed mehercule pergrata mihi oratio tua. Omnis enim est natura diligens sui. Illa argumenta propria videamus, cur omnia sint paria peccata. Atque his de rebus et splendida est eorum et illustris oratio.",anUnknownItem:{description:"unknown items are optional if `additionalItems!=false` and can be removed"}},schema={type:"object",title:"Widgets Overview",description:"This form consists of all basic widgets exposed by rje-widgets and some of their variations",options:{descriptionInline:!0,headerFontSize:1.75,editJson:{enabled:!0,liveUpdate:!0}},required:["string","stringPlaceholder","stringValidation","stringReadonly","stringDisabled","text","nullHeadline","nullField","numberHeadline","number","numberIcons","booleanHeadline","boolean","booleanOptions","selectionHeadline","selection","constHeadline","const","objectIntro","fileHeadline","file","imageFile","readOnlyFile","array","arrayOfStrings","arrayOfUniqueStrings","arrayItemSelection","arrayHeadline","json"],properties:{string:{title:"Simple text input",type:"string"},stringPlaceholder:{title:"Text input with formatting options",type:"string",options:{icon:"sentiment_calm",label:"username",placeholder:"your username"},description:"Text inputs can have a placeholder, icon and label"},stringValidation:{title:"Text input with valiation rules",type:"string",options:{icon:"app_registration",swapIconPosition:!0},description:"The required option is triggered by adding a property to required properties and adding a `minLength: 1` validation rule",minLength:1},stringReadonly:{options:{readOnly:!0},title:"Read only text input",type:"string",default:"Using readOnly option, the input text is still selectable by a user"},stringDisabled:{options:{disabled:!0},title:"Disabled text input",type:"string",default:"Note that disabled text input prevent user interaction like selecting the text"},text:{options:{disabled:!1},type:"string",title:"Textarea",format:"textarea",description:"Setting `format: textarea` triggers the textarea widget for strings",minLength:1},nullHeadline:{type:"null",options:{separator:!0},title:"Inline header",description:"json-schema `null`-type can be used to add additional information. With the option `separator:true` you can add an additional horizontal line."},nullField:{type:"null",title:"",description:"Null type with empty title and without separator"},numberHeadline:{type:"null",options:{separator:!0},title:"NUMBER INPUT"},numberIcons:{title:"Number input with formatting options",description:"also numbers can have icons",type:"number",options:{icon:"cake",placeholder:"your last name",label:"year"},defaultValue:null},number:{title:"Number input with validation rules",description:"Number input allowing a maximum of 2020",type:"number",default:2023,maximum:2020},booleanHeadline:{type:"null",options:{separator:!0},title:"BOOLEAN INPUT"},boolean:{title:"Default boolean input",description:"Boolean value without any options",type:"boolean"},booleanOptions:{title:"True if should be interactive",description:'Adding `options: { type: "checkbox"}` will render the boolean as checkbox',type:"boolean",options:{type:"checkbox"},default:!0},selectionHeadline:{type:"null",options:{separator:!0},title:"ENUM INPUT"},selection:{title:"Enum selection",description:"Enum selection with custom title values",type:"string",enum:["dark","light"],defaultValue:"dark theme",options:{enum:['Select option "dark"','Select option "light"']}},constHeadline:{type:"null",options:{separator:!0},title:"CONST",description:"const values are disabled when correct"},const:{type:"string",title:"const value",const:"schema form tree"},fileHeadline:{type:"null",options:{separator:!0},title:"FILE INPUT"},imageFile:{title:"File selection with mime type",description:"File selection can have valid types restricted, e.g. to images",options:{accept:"image/*"},type:["string","object"],format:"file"},file:{title:"Required file selection",type:["string","object"],format:"file",minLength:1},readOnlyFile:{title:"Read only file selection with image preview",description:"file selection can have an imageUrlTemplate to render images",options:{accept:"image/*",readOnly:!0,imageUrlTemplate:"https://images.unsplash.com/{{value}}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"},type:["string","object"],format:"file",default:"photo-1666694421187-75957423ee77"},objectIntro:{type:"object",title:"Objects",description:"Objects wrap children, they can have their own header, description and actions.",required:["typeSelection","property","dependency","ifthenelse","ifthen","headline1","headline2","collapsible","card"],properties:{property:{type:"string"},headline2:{type:"object",title:"Nested object headline inverted",description:"Object colors can also be inverted, e.g. `{options: { header: { inverted: true }}}`",options:{classNames:["rje-theme--inverted"],header:{inverted:!0,color:"blue"}},required:["property"],properties:{property:{type:"string"}}},headline1:{type:"object",title:"Nested object headline with color",description:"Object support a color option, e.g. `{options: { header: { color: 'blue' }}}`. This object contains an optional property which will show an options button to add this property.",options:{header:{color:"blue"}},required:["property"],properties:{property:{type:"string"},optionalProperty:{type:"string"}}},typeSelection:{type:"object",title:"Form type selection",description:"Type selection using oneOf schema",options:{header:{color:"black"}},oneOfProperty:"type",oneOf:[{type:"object",title:"Schema Type One",required:["type","property"],properties:{type:{type:"string",const:"first"},property:{type:"number",title:"A number for option one",default:1}}},{type:"object",title:"Schema Type Two",required:["type","property"],properties:{type:{type:"string",const:"second"},property:{type:"string",title:"Schema two property",default:"a string"}}}]},dependency:{options:{header:{color:"black"}},title:"dependency",description:"support for schema dependencies, where an additional schema is activated if a given input exists",type:"object",properties:{firstname:{title:"first name",description:"if a name is given, last name will be active",type:"string"}},dependencies:{firstname:{required:["lastname"],properties:{lastname:{title:"last name",type:"string"}}}}},ifthenelse:{title:"if-then-else",description:"switch schema based on schema validation. ",type:"object",options:{header:{color:"black"}},required:["toggle"],properties:{toggle:{title:"Toggle for conditional schema",description:"if this content contains more than five characters another schema will be used",type:"string",default:"123456"}},if:{required:["toggle"],properties:{toggle:{type:"string",maxLength:5}}},then:{required:["toggleOn"],properties:{toggleOn:{title:"toggle off",description:"the toggle has less than 5 characters",type:"string"}}},else:{required:["toggleOff"],properties:{toggleOff:{title:"toggle on",description:"the toggle has more than 5 characters",type:"string",enum:["select 1","select 2","select 3"]}}}},ifthen:{title:"if-then",description:"switch schema based on schema validation. ",type:"object",options:{header:{inverted:!1,color:"black"}},required:["toggle"],properties:{toggle:{title:"Toggle for conditional schema",description:"if this content contains more than five characters an additional schema will be used",type:"string"}},if:{required:["toggle"],properties:{toggle:{type:"string",minLength:6}}},then:{required:["toggleOff"],properties:{toggleOff:{title:"dynamic schema",description:"the toggle has more than 5 characters",type:"string",enum:["select 1","select 2","select 3"]}}}},collapsible:{type:"object",title:"Nested object headline inverted",description:"Object which is initially collapsed using `{ options: { collapsed: true }}`",options:{collapsed:!0,header:{color:"black"}},required:["property"],properties:{property:{type:"string"}}},card:{type:"object",title:"Object with card layout",description:"You can style objects in card layoue using `options:{ layout: { type: 'card' } }`",options:{layout:{type:"card"}},required:["property"],properties:{property:{type:"string"},optionalProperty:{type:"string"}}}}},array:{title:"Default Array",description:"A list of strings that accepts an any number of items",type:"array",options:{classNames:["rje-theme--inverted"]},items:{type:"object",title:"object with a property",required:["property"],properties:{property:{type:"string"}}}},arrayOfStrings:{title:"Array of strings",description:"Multiselect widget has been configured to register for a simple list of strings",type:"array",items:{type:"string"},default:["first item"]},arrayOfUniqueStrings:{title:"Array of unique strings",type:"array",items:{type:"string"},uniqueItems:!0,default:["one","one"]},arrayItemSelection:{type:"array",title:"Array with item selection",description:"Array with items.oneOf statement and activated drag&drop support.",minItems:1,options:{sortable:{enabled:!0},editJson:{enabled:!0,liveUpdate:!0}},default:[{type:"header",text:"my header"}],items:{oneOf:[{id:"header",title:"header",type:"object",required:["type","text"],properties:{type:{type:"string",const:"header",options:{hidden:!0}},text:{type:"string"}}},{id:"paragraph",title:"paragraph",type:"object",required:["type","text"],properties:{type:{type:"string",const:"paragraph",options:{hidden:!0}},format:"textarea",text:{type:"string"}}}]}},arrayHeadline:{type:"array",title:"Array headline options",options:{header:{inverted:!0,color:"teal"}},items:{type:"number"},description:"Array headline options are the same as for object headlines. They can be inverted and have a color"},json:{type:"object",format:"json",required:["title","subtitle"],properties:{title:{type:"string",minLength:1},subtitle:{type:"string"},version:{type:"number"}}}}}}}]);