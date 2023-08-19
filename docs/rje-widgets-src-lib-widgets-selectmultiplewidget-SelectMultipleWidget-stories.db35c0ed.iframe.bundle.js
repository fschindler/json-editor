"use strict";(self.webpackChunkjson_editor=self.webpackChunkjson_editor||[]).push([[5134],{"./packages/rje-widgets/src/lib/widgets/selectmultiplewidget/SelectMultipleWidget.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ErrorState:()=>ErrorState,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SelectMultipleWidget_stories});__webpack_require__("./node_modules/react/index.js");var src=__webpack_require__("./packages/react-json-editor/src/index.ts"),widgets=__webpack_require__("./packages/rje-widgets/src/lib/widgets/index.tsx"),WidgetField=__webpack_require__("./packages/rje-widgets/src/lib/components/widgetfield/WidgetField.tsx"),TagList=__webpack_require__("./packages/rje-widgets/src/lib/components/taglist/TagList.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SelectMultipleWidget=(0,src.Zg)((function(_ref){var _ref2,node=_ref.node,options=_ref.options,setValue=_ref.setValue,hasError=node.errors.length>0,selectedKeys=(0,src.AV)(node),enumValues=node.schema.items.enum||[],titles=null!==(_ref2=options.enum)&&void 0!==_ref2?_ref2:[],items=enumValues.map((function(id){var _titles$id;return{id,name:null!==(_titles$id=titles[id])&&void 0!==_titles$id?_titles$id:id}}));return(0,jsx_runtime.jsx)(WidgetField.b,{widgetType:"select-multiple",node,options,children:(0,jsx_runtime.jsx)(TagList.P,{id:node.id,title:options.title,required:options.required,error:hasError,disabled:options.disabled,selectionMode:"multiple",selectedKeys,items,displayValue:function displayValue(item){return item.name},onSelectionChange:function onSelectionChange(selection){var selectedValues=Array.from(selection);setValue(selectedValues)}})})}));try{SelectMultipleWidget.displayName="SelectMultipleWidget",SelectMultipleWidget.__docgenInfo={description:"",displayName:"SelectMultipleWidget",props:{node:{defaultValue:null,description:"",name:"node",required:!0,type:{name:"ArrayNode<DefaultNodeOptions>"}},editor:{defaultValue:null,description:"",name:"editor",required:!0,type:{name:"JsonEditor<unknown>"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"Partial<DefaultNodeOptions>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/rje-widgets/src/lib/widgets/selectmultiplewidget/SelectMultipleWidget.tsx#SelectMultipleWidget"]={docgenInfo:SelectMultipleWidget.__docgenInfo,name:"SelectMultipleWidget",path:"packages/rje-widgets/src/lib/widgets/selectmultiplewidget/SelectMultipleWidget.tsx#SelectMultipleWidget"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_ErrorState$parameter,_ErrorState$parameter2,Theme=__webpack_require__("./packages/rje-widgets/src/lib/components/theme/Theme.tsx");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["data","schema","format"];function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function StringWidgetStory(_ref){var data=_ref.data,schema=_ref.schema,format=_ref.format,options=_objectWithoutProperties(_ref,_excluded),s=_objectSpread(_objectSpread({},schema),{},{format}),_useJsonEditor2=_slicedToArray((0,src.mO)({schema:s,widgets:widgets.D,data,validate:!0}),2),node=_useJsonEditor2[0],editor=_useJsonEditor2[1];return(0,jsx_runtime.jsx)(Theme.Q,{children:(0,jsx_runtime.jsx)(SelectMultipleWidget,{node,editor,options})})}StringWidgetStory.displayName="StringWidgetStory";const SelectMultipleWidget_stories={title:"packages/rje-widgets/SelectMultipleWidget",component:StringWidgetStory,argTypes:{placeholder:{control:{type:"text"}},liveUpdate:{control:{type:"boolean"}},icon:{control:{type:"text"}},swapIconPosition:{control:{type:"boolean"}},tag:{control:{type:"text"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},required:{control:{type:"boolean"}},format:{control:{type:"select"},options:["text","password"]}}};var Default={args:{data:["banana"],liveUpdate:!1,icon:void 0,tag:void 0,swapIconPosition:!1,disabled:!1,readOnly:!1,required:!1,schema:{type:"array",uniqueItems:!0,items:{type:"string",enum:["apple","banana","peach","lemon","cabbage"]}}}},ErrorState={args:{data:["nails"],schema:{title:"MultiSelect Error State",type:"array",uniqueItems:!0,items:{type:"string",enum:["apple","banana","peach","lemon","cabbage"],maxLength:3}}}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    data: ['banana'],\n    liveUpdate: false,\n    icon: undefined,\n    tag: undefined,\n    swapIconPosition: false,\n    disabled: false,\n    readOnly: false,\n    required: false,\n    schema: {\n      type: 'array',\n      uniqueItems: true,\n      items: {\n        type: 'string',\n        enum: ['apple', 'banana', 'peach', 'lemon', 'cabbage']\n      }\n    }\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),ErrorState.parameters=_objectSpread(_objectSpread({},ErrorState.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ErrorState$parameter=ErrorState.parameters)||void 0===_ErrorState$parameter?void 0:_ErrorState$parameter.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    data: ['nails'],\n    schema: {\n      title: 'MultiSelect Error State',\n      type: 'array',\n      uniqueItems: true,\n      items: {\n        type: 'string',\n        enum: ['apple', 'banana', 'peach', 'lemon', 'cabbage'],\n        maxLength: 3\n      }\n    }\n  }\n}"},null===(_ErrorState$parameter2=ErrorState.parameters)||void 0===_ErrorState$parameter2||null===(_ErrorState$parameter2=_ErrorState$parameter2.docs)||void 0===_ErrorState$parameter2?void 0:_ErrorState$parameter2.source)})});var __namedExportsOrder=["Default","ErrorState"]}}]);