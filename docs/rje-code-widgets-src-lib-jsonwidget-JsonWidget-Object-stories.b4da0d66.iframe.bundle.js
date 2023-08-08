"use strict";(self.webpackChunkjson_editor=self.webpackChunkjson_editor||[]).push([[8731],{"./packages/rje-code-widgets/src/lib/jsonwidget/JsonWidget.Object.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_sagold_react_json_editor__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react-json-editor/src/index.ts"),_sagold_rje_widgets__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/rje-widgets/src/index.ts"),_JsonWidget__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/rje-code-widgets/src/lib/jsonwidget/JsonWidget.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./packages/rje-code-widgets/src/lib/rje-code-widgets.scss"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const __WEBPACK_DEFAULT_EXPORT__={title:"packages/rje-code-widgets/JsonWidget/Object",component:_JsonWidget__WEBPACK_IMPORTED_MODULE_2__.jb,argTypes:{},render:function render(_ref){var schema=_ref.schema,data=_ref.data;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sagold_rje_widgets__WEBPACK_IMPORTED_MODULE_1__.Q2,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sagold_react_json_editor__WEBPACK_IMPORTED_MODULE_0__.R_,{addOptionalProps:!1,schema,data,widgets:[_JsonWidget__WEBPACK_IMPORTED_MODULE_2__.N8].concat(_toConsumableArray(_sagold_rje_widgets__WEBPACK_IMPORTED_MODULE_1__.ZP))})})}};var Default={args:{schema:{type:"object",format:"json",required:["string","number","object"],properties:{string:{type:"string",title:"a string value"},number:{type:"number",title:"a number value",description:"if this value is a string, it will get converted as number or not stored at all - but still being displayed"},object:{type:"object",title:"an object with required title and subTitle",required:["title"],properties:{title:{type:"string"},subTitle:{type:"string"}}}}}}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    schema: {\n      type: 'object',\n      format: 'json',\n      required: ['string', 'number', 'object'],\n      properties: {\n        string: {\n          type: 'string',\n          title: 'a string value'\n        },\n        number: {\n          type: 'number',\n          title: 'a number value',\n          description: 'if this value is a string, it will get converted as number or not stored at all - but still being displayed'\n        },\n        object: {\n          type: 'object',\n          title: 'an object with required title and subTitle',\n          required: ['title'],\n          properties: {\n            title: {\n              type: 'string'\n            },\n            subTitle: {\n              type: 'string'\n            }\n          }\n        }\n      }\n    }\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});var __namedExportsOrder=["Default"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./packages/rje-code-widgets/src/lib/rje-code-widgets.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.cm-theme-light,.cm-theme-dark{border:0px solid rgba(0,0,0,0) !important;color:rgba(0,0,0,.87)}.rje-theme--light .cm-gutters{background-color:rgba(255,255,255,.6)}.rje-theme--light .cm-editor{border:1px solid #cacdce;border-radius:4px;box-sizing:border-box}.rje-theme--light .cm-editor.cm-focused{border-color:rgb(var(--rje-color-light-primary))}.rje-theme--dark .cm-gutters{background-color:rgba(255,255,255,.05)}.rje-theme--dark .cm-editor{border:1px solid #474849;border-radius:4px;box-sizing:border-box}.rje-theme--dark .cm-editor.cm-focused{border-color:rgb(var(--rje-color-dark-primary))}.cm-editor.cm-focused{outline:none !important}.field.error>.cm-theme-light>.cm-editor,.field.error>.cm-theme-dark>.cm-editor{border-color:#9f3a38;background:rgba(224,180,180,.25)}.cm-theme-light .cm-editor .cm-gutters{backdrop-filter:blur(25px);border-top-left-radius:4px;border-bottom-left-radius:4px;overflow:hidden}.cm-lint-marker{border-radius:100%;border-color:rgba(255,255,255,.7);background-color:#ae242d;box-sizing:border-box}.cm-lint-marker.cm-lint-marker-error{content:"" !important}.rje-field .cm-tooltip{border:1px solid rgba(255,255,255,.1);border-radius:4px;box-sizing:border-box;background-color:rgb(var(--rje-color-light-primary));backdrop-filter:blur(25px);max-width:600px;box-shadow:0 1px 3px rgba(0,0,0,.1),0 6px 12px rgba(0,0,0,.08)}.rje-field .cm-tooltip li.cm-diagnostic-error{border-left-color:#ae242d}.rje-field .cm-tooltip .cm-diagnostic{color:#fff}.rje-code-tooltip--jsonschema{padding:4px 8px;font-size:.9em;color:#ccc;max-width:640px;min-width:100px}.rje-code-tooltip--jsonschema h1{font-size:1.1em;color:#fafafa;font-weight:500;line-height:1.5em;padding-bottom:.2em;margin:0}.rje-code-tooltip--pointer{font-size:.65em;padding:.2em}',"",{version:3,sources:["webpack://./packages/rje-code-widgets/src/lib/rje-code-widgets.scss","webpack://./packages/rje-widgets/src/lib/design.scss"],names:[],mappings:"AAEA,+BAEI,yCAAA,CACA,qBAAA,CAIA,8BACI,qCCCW,CDEf,6BCkCA,wBAAA,CACA,iBA7CY,CA8CZ,qBAAA,CDjCI,wCACI,gDAAA,CAMR,6BACI,sCCLU,CDQd,4BCoBA,wBAAA,CACA,iBA7CY,CA8CZ,qBAAA,CDnBI,uCACI,+CAAA,CAKZ,sBACI,uBAAA,CAGJ,+EAEI,oBAAA,CACA,gCAAA,CAGJ,uCACI,0BAAA,CACA,0BC7CY,CD8CZ,6BC9CY,CD+CZ,eAAA,CAGJ,gBAMI,kBAAA,CACA,iCChDiB,CDiDjB,wBChDgB,CDiDhB,qBAAA,CAEA,qCACI,qBAAA,CAYR,uBC9BI,qCAAA,CACA,iBA7CY,CA8CZ,qBAAA,CDgCA,oDAAA,CACA,0BAAA,CACA,eAAA,CACA,8DC1DA,CD4DA,8CACI,yBC1EY,CD6EhB,sCACI,UAAA,CAKR,8BACI,eAAA,CACA,cAAA,CAEA,UAAA,CACA,eAAA,CACA,eAAA,CAGJ,iCACI,eAAA,CACA,aAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CACA,QAAA,CAGJ,2BACI,eAAA,CACA,YAAA",sourcesContent:["@import '../../../rje-widgets/src/lib/design';\n\n.cm-theme-light,\n.cm-theme-dark {\n    border: 0px solid transparent !important;\n    color: rgba(0, 0, 0, 0.87);\n}\n\n.rje-theme--light {\n    .cm-gutters {\n        background-color: $color-light-fill;\n    }\n\n    .cm-editor {\n        @include border-style($color-light-grey-1);\n\n        &.cm-focused {\n            border-color: rgb(var(--rje-color-light-primary));\n        }\n    }\n}\n\n.rje-theme--dark {\n    .cm-gutters {\n        background-color: $color-dark-fill;\n    }\n\n    .cm-editor {\n        @include border-style($color-dark-grey-1);\n\n        &.cm-focused {\n            border-color: rgb(var(--rje-color-dark-primary));\n        }\n    }\n}\n\n.cm-editor.cm-focused {\n    outline: none !important;\n}\n\n.field.error > .cm-theme-light > .cm-editor,\n.field.error > .cm-theme-dark > .cm-editor {\n    border-color: #9f3a38;\n    background: rgba(224, 180, 180, 0.25);\n}\n\n.cm-theme-light .cm-editor .cm-gutters {\n    backdrop-filter: blur(25px);\n    border-top-left-radius: $border-radius;\n    border-bottom-left-radius: $border-radius;\n    overflow: hidden;\n}\n\n.cm-lint-marker {\n    // border-color: #9f3a38;\n    // border-radius: 100%;\n    // border: 2px solid #9f3a38;\n    // background-color: #e0b4b4;\n\n    border-radius: 100%;\n    border-color: $color-light-stroke;\n    background-color: $color-light-error;\n    box-sizing: border-box;\n\n    &.cm-lint-marker-error {\n        content: '' !important;\n    }\n}\n\n/*\n    .cm-tooltip-hover.cm-tooltip.cm-tooltip-above\n        .cm-tooltip-section\n\n    ul.cm-tooltip-lint.cm-tooltip.cm-tooltip-below\n        li.cm-diagnostic cm-diagnostic-error\n            span.cm-diagnosticText\n*/\n.rje-field .cm-tooltip {\n    // @include border-style($color-light-grey-1);\n    // background-color: $color-light-fill;\n    @include border-style($color-dark-stroke);\n    background-color: rgb(var(--rje-color-light-primary));\n    backdrop-filter: blur(25px);\n    max-width: 600px;\n    box-shadow: $shadow-elevated;\n\n    li.cm-diagnostic-error {\n        border-left-color: $color-light-error;\n    }\n\n    .cm-diagnostic {\n        color: #fff;\n    }\n}\n\n/* json-schema tooltip */\n.rje-code-tooltip--jsonschema {\n    padding: 4px 8px;\n    font-size: 0.9em;\n    // color: $color-light-grey-1;\n    color: #ccc;\n    max-width: 640px;\n    min-width: 100px;\n}\n\n.rje-code-tooltip--jsonschema h1 {\n    font-size: 1.1em;\n    color: #fafafa;\n    font-weight: 500;\n    line-height: 1.5em;\n    padding-bottom: 0.2em;\n    margin: 0;\n}\n\n.rje-code-tooltip--pointer {\n    font-size: 0.65em;\n    padding: 0.2em;\n}\n","@use 'sass:math';\n\n$unit: 8 !default;\n$border-radius: 4px !default;\n$border-width: 1px !default;\n$base-font-size: 16 !default;\n$color-black: rgb(0, 0, 0) !default;\n$color-white: rgb(255, 255, 255) !default;\n\n$color-light-grey-1: rgb(202, 205, 206) !default;\n$color-light-grey-2: rgb(120, 123, 124) !default;\n$color-light-fill: rgba(255, 255, 255, 0.6) !default;\n$color-light-stroke: rgba(255, 255, 255, 0.7) !default;\n$color-light-error: rgb(174, 36, 45) !default;\n$color-light-warning: rgb(231, 171, 15) !default;\n$color-light-success: rgb(37, 165, 65) !default;\n\n$color-dark-grey-1: rgb(71, 72, 73) !default;\n$color-dark-grey-2: rgb(120, 123, 124) !default;\n$color-dark-fill: rgba(255, 255, 255, 0.05) !default;\n$color-dark-stroke: rgba(255, 255, 255, 0.1) !default;\n$color-dark-error: rgb(241, 31, 44) !default;\n$color-dark-warning: rgb(248, 193, 49) !default;\n$color-dark-success: rgb(58, 213, 55) !default;\n\n$shadow-elevated:\n    0 1px 3px rgb(0, 0, 0, 0.1),\n    0 6px 12px rgb(0, 0, 0, 0.08);\n\n@mixin icon-font() {\n    user-select: none;\n    max-width: 2em;\n    font-family: 'Icon';\n    font-weight: normal;\n    font-style: normal;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    -moz-font-feature-settings: 'liga';\n    -moz-osx-font-smoothing: grayscale;\n}\n\n@mixin border-style($color) {\n    border: $border-width solid $color;\n    border-radius: $border-radius;\n    box-sizing: border-box;\n}\n\n@mixin surface-modal($theme: 'light') {\n    @if $theme == 'dark' {\n        @include border-style($color-dark-stroke);\n        background: $color-black;\n    } @else if $theme == 'light' {\n        @include border-style($color-light-stroke);\n        background: $color-white;\n    }\n}\n\n@mixin elevated($theme: 'light') {\n    @if $theme == 'dark' {\n        @include border-style($color-dark-grey-1);\n        background: $color-dark-fill;\n    } @else if $theme == 'light' {\n        @include border-style($color-light-grey-1);\n        background: $color-light-fill;\n    }\n}\n\n@mixin flat($theme: 'light') {\n    @if $theme == 'dark' {\n        @include border-style($color-dark-grey-1);\n        background: $color-dark-fill;\n    } @else if $theme == 'light' {\n        @include border-style($color-light-grey-1);\n        background: $color-light-fill;\n    }\n}\n\n@mixin input-elevated($theme: 'light') {\n    @if $theme == 'dark' {\n        @include border-style($color-dark-grey-1);\n        background: $color-dark-fill;\n        caret-color: rgb(var(--rje-color-dark-primary));\n    } @else if $theme == 'light' {\n        @include border-style($color-light-grey-1);\n        background: $color-light-fill;\n        caret-color: rgb(var(--rje-color-light-primary));\n    }\n    outline: 0;\n}\n\n@mixin input-flat($theme: 'light') {\n    @if $theme == 'dark' {\n        @include border-style($color-dark-grey-1);\n        background: $color-light-fill;\n        caret-color: rgb(var(--rje-color-light-primary));\n    } @else if $theme == 'light' {\n        @include border-style($color-light-grey-1);\n        background: $color-dark-fill;\n        caret-color: rgb(var(--rje-color-dark-primary));\n    }\n    outline: 0;\n}\n\n@mixin primary-elevated($theme: 'light') {\n    @if $theme == 'dark' {\n        @include border-style($color-dark-stroke);\n        background: rgb(var(--rje-color-dark-primary));\n    } @else if $theme == 'light' {\n        @include border-style($color-light-stroke);\n        background: rgb(var(--rje-color-light-primary));\n    }\n}\n\n@mixin primary-flat($theme: 'light') {\n    @if $theme == 'dark' {\n        @include border-style($color-dark-stroke);\n        background: $color-dark-grey-1;\n    } @else if $theme == 'light' {\n        @include border-style($color-light-stroke);\n        background: $color-light-grey-1;\n    }\n}\n\n@mixin clickable() {\n    &:not([disabled]) {\n        cursor: pointer;\n        pointer-events: all;\n    }\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    user-select: none;\n    outline: 0;\n}\n\n@function em($px, $base: $base-font-size) {\n    @return math.div($px, $base) * 1em;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./packages/rje-code-widgets/src/lib/rje-code-widgets.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_rje_code_widgets_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./packages/rje-code-widgets/src/lib/rje-code-widgets.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_rje_code_widgets_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_rje_code_widgets_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_rje_code_widgets_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_3_rje_code_widgets_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);