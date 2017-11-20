/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (file) {
  return "static/svg/" + file + ".svg";
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _styles = __webpack_require__(3);

var _styles2 = _interopRequireDefault(_styles);

var _draggable = __webpack_require__(11);

var _draggable2 = _interopRequireDefault(_draggable);

var _include = __webpack_require__(12);

var _include2 = _interopRequireDefault(_include);

var _data = __webpack_require__(13);

var _data2 = _interopRequireDefault(_data);

var _components = __webpack_require__(15);

var _components2 = _interopRequireDefault(_components);

var _toggle = __webpack_require__(16);

var _toggle2 = _interopRequireDefault(_toggle);

var _clear = __webpack_require__(17);

var _clear2 = _interopRequireDefault(_clear);

var _svg = __webpack_require__(1);

var _svg2 = _interopRequireDefault(_svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new Vue({
  el: '#stage',

  data: _data2.default,

  components: _components2.default,

  methods: {
    toggle: _toggle2.default,
    clear: _clear2.default,
    svg: _svg2.default
  },

  mounted: function mounted() {}
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(9)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  line-height: 1.15;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */ }\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct display in IE 9-.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\ntemplate,\n[hidden] {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\na:active,\na:hover {\n  outline-width: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Restore the font weight unset by the previous rule.\n */\noptgroup {\n  font-weight: bold; }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n@font-face {\n  font-family: 'pix Chicago';\n  src: url(" + __webpack_require__(0) + ");\n  src: url(" + __webpack_require__(0) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(6) + ") format(\"woff\"), url(" + __webpack_require__(7) + ") format(\"truetype\"), url(" + __webpack_require__(8) + "#pixChicago) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n@keyframes blinking {\n  from {\n    color: black; }\n  to {\n    color: transparent; } }\n\n.blink {\n  animation: blinking 1.2s infinite;\n  animation-timing-function: cubic-bezier(1, 0, 0, 1); }\n\n.dragging, .dragging * {\n  cursor: move; }\n\nhtml {\n  font-size: 16px; }\n\nbody {\n  font-family: \"VT323\", monospace;\n  font-size: 1.375rem;\n  color: black;\n  background-color: white;\n  margin: 0;\n  padding: 0; }\n\nsvg {\n  max-width: 100%;\n  height: auto; }\n\npolygon {\n  fill: white; }\n\npath {\n  fill: black; }\n\n.bg1 {\n  background-image: linear-gradient(45deg, black 50%, transparent 50%), linear-gradient(-45deg, black 50%, transparent 50%), linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(-45deg, transparent 50%, black 50%);\n  background-size: 2px 2px;\n  background-position: 0 0, 1px 0, 1px -1px, 0px 1px; }\n\n.screen {\n  height: calc(100vh - 25px);\n  display: grid;\n  grid-template-columns: repeat(12, 1fr); }\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.clearfix {\n  *zoom: 1; }\n  .clearfix:before, .clearfix:after {\n    content: \"\";\n    display: table; }\n  .clearfix:after {\n    clear: both; }\n\n.top-bar {\n  background-color: white;\n  z-index: 100;\n  border-bottom: 2px solid black;\n  font-family: \"pix Chicago\";\n  font-size: 0.875rem; }\n\n.menu {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 10px 0; }\n  .menu li {\n    margin: 0 0.625rem; }\n  .menu a {\n    color: inherit;\n    text-decoration: none; }\n\n.has-dropdown {\n  position: relative;\n  cursor: pointer; }\n\n.dropdown {\n  padding: 0.3125rem 0;\n  margin: 10px 0 0 0;\n  list-style: none;\n  position: absolute;\n  top: 100%;\n  left: -0.625rem;\n  background-color: white;\n  border: 2px solid black;\n  display: none; }\n  .dropdown li {\n    padding: 0.625rem 0.9375rem;\n    margin: 0;\n    white-space: nowrap; }\n    .dropdown li:hover {\n      background-color: black;\n      color: white; }\n\n.is-active .dropdown {\n  display: block; }\n\n.icons {\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  grid-column-start: 12; }\n  .icons .icon-element {\n    margin-bottom: 30px; }\n\n.trash {\n  margin-top: auto; }\n\n.icon-element {\n  max-width: 100%;\n  text-align: center;\n  line-height: 1.25rem; }\n  .icon-element svg {\n    width: 72px;\n    height: 72px; }\n  .icon-element p {\n    margin: 0;\n    line-height: 1.1875rem;\n    background-color: white;\n    text-align: center;\n    white-space: nowrap; }\n\n.window {\n  position: absolute;\n  top: calc(50% - 130px);\n  left: 0.9375rem;\n  width: 31.25rem;\n  max-width: calc(100% - 30px);\n  background-color: white;\n  border: 2px solid black; }\n  @media (min-width: 769px) {\n    .window {\n      left: calc(50% - 250px); } }\n  .window .icon-element {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: flex-end; }\n  .window svg {\n    height: 50px; }\n\n.window-header {\n  text-align: center;\n  border-bottom: 2px solid black;\n  padding: 5px; }\n\n.stripes {\n  background: repeating-linear-gradient(0deg, black, black 2px, white 0, white 6px); }\n\n.inner-window {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-areas: \"a b c\"; }\n\n.window-title {\n  margin: 0;\n  padding: 10px 15px;\n  display: inline-block;\n  background-color: white;\n  font-family: \"pix Chicago\";\n  font-size: 0.75rem;\n  text-transform: capitalize;\n  grid-area: b; }\n\n.window-close {\n  grid-area: c;\n  text-align: right; }\n\n.window-body {\n  min-height: 260px;\n  padding: 5px; }\n\n.close-button {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 0;\n  background-color: white;\n  border: 1px solid black;\n  padding: 6px 0; }\n\n.window-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr); }\n\n.grid-item {\n  padding: 1rem; }\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,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"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgRm9udEZvcmdlIDIwMTYxMDEzIGF0IFNhdCBBcHIgMTMgMTQ6NDY6MjIgMjAwMgogQnkgLCwsCmF0bi4KPC9tZXRhZGF0YT4KPGRlZnM+Cjxmb250IGlkPSJwaXhDaGljYWdvIiBob3Jpei1hZHYteD0iODc1IiA+CiAgPGZvbnQtZmFjZSAKICAgIGZvbnQtZmFtaWx5PSJwaXggQ2hpY2FnbyIKICAgIGZvbnQtd2VpZ2h0PSI0MDAiCiAgICBmb250LXN0cmV0Y2g9Im5vcm1hbCIKICAgIHVuaXRzLXBlci1lbT0iMTAwMCIKICAgIHBhbm9zZS0xPSIwIDAgMCAwIDAgMCAwIDAgMCAwIgogICAgYXNjZW50PSI4MDAiCiAgICBkZXNjZW50PSItMjAwIgogICAgeC1oZWlnaHQ9Ijg3NCIKICAgIGNhcC1oZWlnaHQ9IjExMjQiCiAgICBiYm94PSIwIC0zNzUgMTc0OSAxNDk5IgogICAgdW5kZXJsaW5lLXRoaWNrbmVzcz0iNTAiCiAgICB1bmRlcmxpbmUtcG9zaXRpb249Ii0xNzUiCiAgICB1bmljb2RlLXJhbmdlPSJVKzAwMjAtMjEyMiIKICAvPgo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iNTAwIiAKZD0iTTAgMGgzNzV2NjI1aC0zNzV2LTYyNXpNMTI1IDEyNXYzNzVoMTI1di0zNzVoLTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iLm5vdGRlZiIgaG9yaXotYWR2LXg9IjUwMCIgCmQ9Ik0wIDBoMzc1djYyNWgtMzc1di02MjV6TTEyNSAxMjV2Mzc1aDEyNXYtMzc1aC0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Ii5udWxsIiBob3Jpei1hZHYteD0iMCIgCiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im5vbm1hcmtpbmdyZXR1cm4iIGhvcml6LWFkdi14PSI1MDAiIAogLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJzcGFjZSIgdW5pY29kZT0iICIgaG9yaXotYWR2LXg9IjUwMCIgCiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InNwYWNlIiB1bmljb2RlPSImI3hhMDsiIGhvcml6LWFkdi14PSI1MDAiIAogLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJBIiB1bmljb2RlPSIhIiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMGgyNDl2MjQ5aC0yNDl2LTI0OXpNMCAzNzVoMjQ5djc0OWgtMjQ5di03NDl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InF1b3RlZGJsIiB1bmljb2RlPSImI3gyMjsiIGhvcml6LWFkdi14PSI1MDAiIApkPSJNMCA3NTBoMTI0djM3NGgtMTI0di0zNzR6TTI1MCA3NTBoMTI0djM3NGgtMTI0di0zNzR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im51bWJlcnNpZ24iIHVuaWNvZGU9IiMiIGhvcml6LWFkdi14PSIxMTI1IiAKZD0iTTUwMCAxMjVoMTI0bDEgMTI1aDI0OXYxMjRoLTEyNXY1MDBoLTI0OXYtMTI0aDEyNXYtMzc1bC0yNTEgLTF2NTAwaC0xMjR2LTQ5OWwtMjUwIC0xdi0xMjRoMTI1di0xMjVoMTI0bDEgMTI1aDI1MHYtMTI1ek03NTAgODc1aDEyNHYyNDloLTEyNHYtMjQ5ek0zNzUgODc1aDEyNHYyNDloLTEyNHYtMjQ5eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJkb2xsYXIiIHVuaWNvZGU9IiQiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMjUwIC0xMjVoMTI0bDEgMTI1aDEyNHYxMjRoLTEyNWwxIDI1MWgxMjV2LTI1MGgxMjR2Mzc0aC0xMjV2MTI1aC0xMjVsMSAzNzZoMTI0djEyNGgtMTI1djEyNWgtMTI0di0xMjRsLTEyNSAtMXYtMTI0aDEyNXYtMjUwbC0xMjYgLTF2MjUwaC0xMjR2LTM3NGgxMjV2LTEyNWgxMjV2LTM3NWwtMTI1IC0xdi0xMjRoMTI1di0xMjV6TTAgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgODc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJwZXJjZW50IiB1bmljb2RlPSIlIiBob3Jpei1hZHYteD0iMTI1MCIgCmQ9Ik0yNTAgMGgxMjR2MjQ5aC0xMjR2LTI0OXpNNzUwIDBoMjQ5djEyNGgtMjQ5di0xMjR6TTYyNSAxMjVoMTI0djI0OWgtMTI0di0yNDl6TTM3NSAyNTBoMTI0djI0OWgtMTI0di0yNDl6TTEwMDAgMTI1aDEyNHYyNDloLTEyNHYtMjQ5ek04NzUgMzc1aDEyNHYxMjRoLTI0OXYtMTI0aDEyNXpNNTAwIDUwMGgxMjRsMSAxMjVoMTI0djI0OWgtMTI0di0xMjRoLTEyNXYtMjUwek0yNTAgNjI1aDEyNHYxMjRoLTI0OXYtMTI0aDEyNXpNMCA3NTBoMTI0CnYyNDloLTEyNHYtMjQ5ek0zNzUgNzUwaDEyNHYyNDloLTEyNHYtMjQ5ek03NTAgODc1aDEyNHYyNDloLTM3NHYtMTI0aDI1MHYtMTI1ek0xMjUgMTAwMGgyNDl2MTI0aC0yNDl2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYW1wZXJzYW5kIiB1bmljb2RlPSImI3gyNjsiIGhvcml6LWFkdi14PSIxMTI1IiAKZD0iTTEyNSAwaDQ5OWwxIDEyNWgxMjRsMSAyNTBoMTI0djEyNGgtMzc0di0zNzRsLTI1MSAtMWwxIDM3NmgxMjR2MjQ5aC0xMjVsMSAyNTFoMjUwdi0xMjVoMjQ5djI0OWgtNjI0di0xMjRsLTEyNSAtMXYtMjQ5aDEyNXYtMjUwbC0xMjUgLTF2LTM3NGgxMjV2LTEyNXpNODc1IDUwMGgxMjR2Mzc0aC0xMjR2LTM3NHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icXVvdGVzaW5nbGUiIHVuaWNvZGU9IiciIGhvcml6LWFkdi14PSIyNTAiIApkPSJNMCA3NTBoMTI0djM3NGgtMTI0di0zNzR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InBhcmVubGVmdCIgdW5pY29kZT0iKCIgaG9yaXotYWR2LXg9IjUwMCIgCmQ9Ik0wIDBoMTI1di0xMjVoMjQ5djEyNGgtMTI1bDEgMTEyNmgxMjR2MTI0aC0yNDl2LTEyNGgtMTI1di0xMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJwYXJlbnJpZ2h0IiB1bmljb2RlPSIpIiBob3Jpei1hZHYteD0iNTAwIiAKZD0iTTAgLTEyNWgyNDlsMSAxMjVoMTI0djExMjRoLTEyNXYxMjVoLTI0OXYtMTI0aDEyNXYtMTEyNWgtMTI1di0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImFzdGVyaXNrIiB1bmljb2RlPSIqIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTI1MCAzNzVoMTI0bDEgMjUwaDEyNHYyNDloLTEyNXYyNTBoLTEyNHYtMjQ5bC0xMjUgLTF2LTI0OWgxMjV2LTI1MHpNMCA1MDBoMTI0djEyNGgtMTI0di0xMjR6TTUwMCA1MDBoMTI0djEyNGgtMTI0di0xMjR6TTAgODc1aDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgODc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJwbHVzIiB1bmljb2RlPSIrIiBob3Jpei1hZHYteD0iMTAwMCIgCmQ9Ik0zNzUgMTI1aDEyNGwxIDI1MGgzNzR2MTI0aC0zNzV2MjUwaC0xMjR2LTI0OWwtMzc1IC0xdi0xMjRoMzc1di0yNTB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImNvbW1hIiB1bmljb2RlPSIsIiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMGgxMjV2LTEyNWgxMjR2Mzc0aC0yNDl2LTI0OXpNMCAtMjUwaDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJoeXBoZW4iIHVuaWNvZGU9Ii0iIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMzc1IDM3NWgyNDl2MTI0aC02MjR2LTEyNGgzNzV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InBlcmlvZCIgdW5pY29kZT0iLiIgaG9yaXotYWR2LXg9IjM3NSIgCmQ9Ik0wIDBoMjQ5djI0OWgtMjQ5di0yNDl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InNsYXNoIiB1bmljb2RlPSIvIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgMGgxMjR2MTI0aC0xMjR2LTEyNHpNMTI1IDEyNWgxMjR2Mzc0aC0xMjR2LTM3NHpNMjUwIDUwMGgxMjR2MjQ5aC0xMjR2LTI0OXpNMzc1IDc1MGgxMjR2Mzc0aC0xMjR2LTM3NHpNNTAwIDExMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Inplcm8iIHVuaWNvZGU9IjAiIApkPSJNMTI1IDBoNDk5bDEgMTI1aDEyNHY4NzRoLTEyNXYxMjVoLTEyNHYtMjQ5bC0xMjUgLTF2LTI0OWgxMjV2LTUwMGwtMjUxIC0xbDEgMjUxaDEyNGwxIDEyNWgxMjR2MTI0aC0yNTBsMSAzNzZoMjQ5djEyNGgtMzc0di0xMjRsLTEyNSAtMXYtODc0aDEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJvbmUiIHVuaWNvZGU9IjEiIGhvcml6LWFkdi14PSIzNzUiIApkPSJNMCAwaDI0OXYxMTI0aC0xMjR2LTEyNGgtMTI1di0xMDAweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ0d28iIHVuaWNvZGU9IjIiIApkPSJNMCAwaDc0OXYxMjRoLTUwMGwxIDEyNmgxMjRsMSAxMjVoMTI0bDEgMTI1aDEyNGwxIDEyNWgxMjR2Mzc0aC0xMjV2MTI1aC00OTl2LTEyNGgzNzV2LTM3NWwtMTI1IC0xdi0xMjRsLTEyNSAtMXYtMTI0bC0xMjUgLTF2LTEyNGgtMTI1di0yNTB6TTAgODc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ0aHJlZSIgdW5pY29kZT0iMyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djQ5OWgtMTI1djEyNWgtMTI1bDEgMTI2aDEyNGwxIDEyNWgxMjR2MTI0aC03NDl2LTEyNGgzNzV2LTEyNWwtMTI1IC0xdi0xMjRsLTEyNSAtMXYtMTI0aDM3NXYtNTAwaC0zNzV2LTEyNXpNMCAxMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImZvdXIiIHVuaWNvZGU9IjQiIGhvcml6LWFkdi14PSIxMDAwIiAKZD0iTTUwMCAwaDI0OWwxIDM3NWgxMjR2MTI0aC0xMjV2NjI1aC0yNDl2LTEyNGwtMTI1IC0xdi0xMjRoMTI1di0zNzVsLTI1MSAtMXYyNTBoLTEyNHYtMTI0bC0xMjUgLTF2LTI0OWg1MDB2LTM3NXpNMjUwIDc1MGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZml2ZSIgdW5pY29kZT0iNSIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djQ5OWgtMTI1djEyNWgtMzc1bDEgMjUxaDQ5OXYxMjRoLTc0OXYtNDk5aDUwMHYtNTAwaC0zNzV2LTEyNXpNMCAxMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InNpeCIgdW5pY29kZT0iNiIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djQ5OWgtMTI1djEyNWgtMzc1bDEgMTI2aDEyNGwxIDEyNWgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi0xMjRsLTEyNSAtMXYtMjQ5aDUwMHYtNTAwbC0yNTEgLTF2NTAwaC0yNDl2LTQ5OWgxMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ic2V2ZW4iIHVuaWNvZGU9IjciIGhvcml6LWFkdi14PSIxMDAwIiAKZD0iTTM3NSAwaDI0OWwxIDUwMGgxMjRsMSAyNTBoMTI0djM3NGgtODc0di0xMjRoNjI1di0yNTBsLTEyNSAtMXYtMjQ5aC0xMjV2LTUwMHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZWlnaHQiIHVuaWNvZGU9IjgiIApkPSJNMTI1IDBoNDk5bDEgMTI1aDEyNHYzNzRoLTI0OXYtMzc0bC0yNTEgLTF2Mzc1aC0yNDl2LTM3NGgxMjV2LTEyNXpNMjUwIDUwMGgyNDl2MTI0aC0yNDl2LTEyNHpNNTAwIDYyNWgyNDl2Mzc0aC0xMjV2MTI1aC00OTl2LTEyNGwtMTI1IC0xdi0zNzRoMjQ5bDEgMzc1aDI1MHYtMzc1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJuaW5lIiB1bmljb2RlPSI5IiAKZD0iTTEyNSAwaDM3NGwxIDEyNWgxMjRsMSAxMjVoMTI0djc0OWgtMTI1djEyNWgtMTI0di02MjRsLTI1MSAtMWwxIDUwMWgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi00OTloMTI1di0xMjVoMzc1di0xMjVsLTEyNSAtMXYtMTI0aC0yNTB2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iY29sb24iIHVuaWNvZGU9IjoiIGhvcml6LWFkdi14PSIzNzUiIApkPSJNMCAwaDI0OXYyNDloLTI0OXYtMjQ5ek0wIDYyNWgyNDl2MjQ5aC0yNDl2LTI0OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ic2VtaWNvbG9uIiB1bmljb2RlPSI7IiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMGgxMjV2LTEyNWgxMjR2Mzc0aC0yNDl2LTI0OXpNMCAtMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0wIDYyNWgyNDl2MjQ5aC0yNDl2LTI0OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ibGVzcyIgdW5pY29kZT0iJiN4M2M7IiAKZD0iTTUwMCAxMjVoMTI0djEyNGgtMTI1djEyNWgtMTI1djEyNWgtMTI1bDEgMTI2aDEyNGwxIDEyNWgxMjRsMSAxMjVoMTI0djEyNGgtMjQ5di0xMjRsLTEyNSAtMXYtMTI0bC0xMjUgLTF2LTEyNGwtMTI1IC0xdi0xMjRoMTI1di0xMjVoMTI1di0xMjVoMTI1di0xMjVoMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJlcXVhbCIgdW5pY29kZT0iPSIgCmQ9Ik0wIDI1MGg3NDl2MTI0aC03NDl2LTEyNHpNMCA1MDBoNzQ5djEyNGgtNzQ5di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImdyZWF0ZXIiIHVuaWNvZGU9IiYjeDNlOyIgCmQ9Ik0xMjUgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek0yNTAgMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMzc1aDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgNTAwaDI0OXYxMjRoLTI0OXYtMTI0ek0zNzUgNjI1aDEyNHYxMjRoLTEyNHYtMTI0ek0yNTAgNzUwaDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgODc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJxdWVzdGlvbiIgdW5pY29kZT0iPyIgCmQ9Ik0yNTAgMGgyNDl2MjQ5aC0yNDl2LTI0OXpNMzc1IDM3NWgxMjRsMSAyNTBoMTI0bDEgMTI1aDEyNHYyNDloLTEyNXYxMjVoLTQ5OXYtMTI0aDM3NXYtMjUwbC0xMjUgLTF2LTEyNGwtMTI1IC0xdi0yNDloMTI1ek0wIDg3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYXQiIHVuaWNvZGU9IkAiIGhvcml6LWFkdi14PSIxMjUwIiAKZD0iTTI1MCAwaDYyNHYxMjRoLTYyNHYtMTI0ek0xMjUgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek0wIDI1MGgxMjR2NjI0aC0xMjR2LTYyNHpNMzc1IDI1MGg3NDl2NjI0aC0xMjR2LTQ5OWwtMjUxIC0xdjUwMGgtMzc0di0xMjRoMjUwdi0zNzVoLTI1MHYtMTI1ek0yNTAgMzc1aDEyNHYzNzRoLTEyNHYtMzc0ek04NzUgODc1aDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgODc1aDEyNHYxMjRoLTEyNHYtMTI0ek0yNTAgMTAwMGg2MjR2MTI0aC02MjQKdi0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImdseXBoMzYiIHVuaWNvZGU9IkEiIApkPSJNMCAwaDI0OWwxIDUwMGgyNTB2LTUwMGgyNDl2OTk5aC0xMjV2MTI1aC0xMjR2LTQ5OWwtMjUxIC0xbDEgMzc2aDI0OXYxMjRoLTM3NHYtMTI0aC0xMjV2LTEwMDB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IkIiIHVuaWNvZGU9IkIiIApkPSJNMCAwaDYyNGwxIDEyNWgxMjR2Mzc0aC0yNDl2LTM3NGwtMjUxIC0xbDEgMzc2aDI0OXYxMjRoLTI1MGwxIDM3NmgyNTB2LTM3NWgyNDl2Mzc0aC0xMjV2MTI1aC02MjR2LTExMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IkMiIHVuaWNvZGU9IkMiIApkPSJNMTI1IDBoNDk5djEyNGgtMzc1bDEgODc2aDM3NHYxMjRoLTQ5OXYtMTI0bC0xMjUgLTF2LTg3NGgxMjV2LTEyNXpNNjI1IDEyNWgxMjR2MTI0aC0xMjR2LTEyNHpNNjI1IDg3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iRCIgdW5pY29kZT0iRCIgCmQ9Ik0wIDBoNjI0bDEgMTI1aDEyNHY4NzRoLTEyNXYxMjVoLTEyNHYtOTk5bC0yNTEgLTFsMSA4NzZoMjQ5djEyNGgtNDk5di0xMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJFIiB1bmljb2RlPSJFIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgMGg2MjR2MTI0aC0zNzVsMSAzNzZoMjQ5djEyNGgtMjUwbDEgMzc2aDM3NHYxMjRoLTYyNHYtMTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iRiIgdW5pY29kZT0iRiIgaG9yaXotYWR2LXg9Ijc1MCIgCmQ9Ik0wIDBoMjQ5bDEgNTAwaDI0OXYxMjRoLTI1MGwxIDM3NmgzNzR2MTI0aC02MjR2LTExMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IkciIHVuaWNvZGU9IkciIApkPSJNMTI1IDBoNDk5bDEgMTI1aDEyNHY0OTloLTI0OXYtNDk5bC0yNTEgLTFsMSA4NzZoMzc0djEyNGgtNDk5di0xMjRsLTEyNSAtMXYtODc0aDEyNXYtMTI1ek02MjUgODc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJIIiB1bmljb2RlPSJIIiAKZD0iTTAgMGgyNDlsMSA1MDBoMjUwdi01MDBoMjQ5djExMjRoLTI0OXYtNDk5bC0yNTEgLTF2NTAwaC0yNDl2LTExMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IkkiIHVuaWNvZGU9IkkiIGhvcml6LWFkdi14PSIzNzUiIApkPSJNMCAwaDI0OXYxMTI0aC0yNDl2LTExMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IkoiIHVuaWNvZGU9IkoiIApkPSJNMTI1IDBoNDk5bDEgMTI1aDEyNHY5OTloLTI0OXYtOTk5bC0yNTEgLTF2Mzc1aC0yNDl2LTM3NGgxMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iSyIgdW5pY29kZT0iSyIgaG9yaXotYWR2LXg9IjEwMDAiIApkPSJNMCAwaDI0OWwxIDM3NWgxMjR2Mzc0aC0xMjV2Mzc1aC0yNDl2LTExMjR6TTYyNSAwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgNzUwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgODc1aDEyNHYxMjRoLTEyNHYtMTI0ek02MjUgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iTCIgdW5pY29kZT0iTCIgaG9yaXotYWR2LXg9Ijc1MCIgCmQ9Ik0wIDBoNjI0djEyNGgtMzc1djEwMDBoLTI0OXYtMTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iTSIgdW5pY29kZT0iTSIgaG9yaXotYWR2LXg9IjEzNzUiIApkPSJNMCAwaDEyNGwxIDYyNWgxMjV2LTEyNWgxMjV2LTEyNWgxMjV2LTEyNWgxMjRsMSAxMjVoMTI0bDEgMTI1aDEyNGwxIDEyNWgxMjV2LTYyNWgyNDl2MTEyNGgtMjQ5di0xMjRsLTEyNSAtMXYtMTI0bC0xMjUgLTF2LTEyNGwtMTI1IC0xdi0xMjRsLTEyNiAtMXYxMjVoLTEyNXYxMjVoLTEyNXYxMjVoLTEyNXYxMjVoLTEyNHYtMTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iTiIgdW5pY29kZT0iTiIgaG9yaXotYWR2LXg9IjEwMDAiIApkPSJNMCAwaDEyNGwxIDYyNWgxMjV2LTEyNWgxMjV2LTEyNWgxMjV2LTEyNWgxMjV2LTEyNWgxMjV2LTEyNWgxMjR2MTEyNGgtMTI0di02MjRsLTEyNiAtMXYxMjVoLTEyNXYxMjVoLTEyNXYxMjVoLTEyNXYxMjVoLTEyNXYxMjVoLTEyNHYtMTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iTyIgdW5pY29kZT0iTyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djg3NGgtMTI1djEyNWgtMTI0di05OTlsLTI1MSAtMWwxIDg3NmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi04NzRoMTI1di0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IlAiIHVuaWNvZGU9IlAiIApkPSJNMCAwaDI0OWwxIDUwMGgzNzRsMSAxMjVoMTI0djM3NGgtMTI1djEyNWgtMTI0di00OTlsLTI1MSAtMWwxIDM3NmgyNDl2MTI0aC00OTl2LTExMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IlEiIHVuaWNvZGU9IlEiIApkPSJNNTAwIC0xMjVoMjQ5djEyNGgtMTI1bDEgMTI2aDEyNHY4NzRoLTEyNXYxMjVoLTQ5OXYtMTI0aDM3NXYtODc1bC0yNTEgLTF2ODc1aC0yNDl2LTg3NGgxMjV2LTEyNWgzNzV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iUiIgdW5pY29kZT0iUiIgCmQ9Ik0wIDBoMjQ5bDEgNTAwaDI1MHYtNTAwaDI0OXY0OTloLTEyNWwxIDEyNmgxMjR2Mzc0aC0xMjV2MTI1aC0xMjR2LTQ5OWwtMjUxIC0xbDEgMzc2aDI0OXYxMjRoLTQ5OXYtMTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iUyIgdW5pY29kZT0iUyIgaG9yaXotYWR2LXg9Ijc1MCIgCmQ9Ik0xMjUgMGgzNzRsMSAxMjVoMTI0djM3NGgtMTI1djEyNWgtMTI1djEyNWgtMTI1bDEgMjUxaDI0OXYxMjRoLTM3NHYtMTI0bC0xMjUgLTF2LTM3NGgxMjV2LTEyNWgxMjV2LTEyNWgxMjV2LTI1MGgtMjUwdi0xMjV6TTAgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgODc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJUIiB1bmljb2RlPSJUIiBob3Jpei1hZHYteD0iMTEyNSIgCmQ9Ik0zNzUgMGgyNDlsMSAxMDAwaDM3NHYxMjRoLTk5OXYtMTI0aDM3NXYtMTAwMHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iVSIgdW5pY29kZT0iVSIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djk5OWgtMjQ5di05OTlsLTI1MSAtMXYxMDAwaC0yNDl2LTk5OWgxMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iViIgdW5pY29kZT0iViIgCmQ9Ik0wIDBoNDk5djEyNGgtMjUwdjEwMDBoLTI0OXYtMTEyNHpNNTAwIDEyNWgxMjRsMSAxMjVoMTI0djg3NGgtMjQ5di05OTl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IlciIHVuaWNvZGU9IlciIGhvcml6LWFkdi14PSIxMzc1IiAKZD0iTTAgMGg5OTl2MTI0aC0yNTB2MTAwMGgtMjQ5di05OTlsLTI1MSAtMXYxMDAwaC0yNDl2LTExMjR6TTEwMDAgMTI1aDEyNGwxIDEyNWgxMjR2ODc0aC0yNDl2LTk5OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iWCIgdW5pY29kZT0iWCIgCmQ9Ik0wIDBoMjQ5djQ5OWgtMjQ5di00OTl6TTUwMCAwaDI0OXY0OTloLTI0OXYtNDk5ek0yNTAgNTAwaDI0OXYxMjRoLTI0OXYtMTI0ek01MDAgNjI1aDI0OXY0OTloLTI0OXYtNDk5ek0xMjUgNjI1aDEyNHY0OTloLTI0OXYtNDk5aDEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iWSIgdW5pY29kZT0iWSIgCmQ9Ik0yNTAgMGgyNDlsMSA1MDBoMTI0bDEgMTI1aDEyNHY0OTloLTI0OXYtNDk5bC0yNTEgLTF2NTAwaC0yNDl2LTQ5OWgxMjV2LTEyNWgxMjV2LTUwMHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iWiIgdW5pY29kZT0iWiIgCmQ9Ik0wIDBoNzQ5djEyNGgtNTAwbDEgMTI2aDEyNGwxIDI1MGgxMjRsMSAxMjVoMTI0bDEgMjUwaDEyNHYyNDloLTc0OXYtMTI0aDM3NXYtMjUwbC0xMjUgLTF2LTI0OWwtMTI1IC0xdi0yNDloLTEyNXYtMjUweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJicmFja2V0bGVmdCIgdW5pY29kZT0iWyIgaG9yaXotYWR2LXg9IjM3NSIgCmQ9Ik0wIDB2LTEyNWgyNDl2MTM3NGgtMjQ5di0xMjQ5eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJiYWNrc2xhc2giIHVuaWNvZGU9IlwiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNNTAwIDBoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAxMjVoMTI0djM3NGgtMTI0di0zNzR6TTI1MCA1MDBoMTI0djI0OWgtMTI0di0yNDl6TTEyNSA3NTBoMTI0djM3NGgtMTI0di0zNzR6TTAgMTEyNWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYnJhY2tldHJpZ2h0IiB1bmljb2RlPSJdIiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMHYtMTI1aDI0OXYxMzc0aC0yNDl2LTEyNDl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImFzY2lpY2lyY3VtIiB1bmljb2RlPSJeIiAKZD0iTTAgNzUwaDI0OWwxIDEyNWgyNTB2LTEyNWgyNDl2MTI0aC0xMjV2MTI1aC0xMjV2MTI1aC0yNDl2LTEyNGwtMTI1IC0xdi0xMjRoLTEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmRlcnNjb3JlIiB1bmljb2RlPSJfIiBob3Jpei1hZHYteD0iMTEyNSIgCmQ9Ik0wIC0xMjVoOTk5djEyNGgtOTk5di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImdyYXZlIiB1bmljb2RlPSJgIiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTEyNSAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0wIDExMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImEiIHVuaWNvZGU9ImEiIApkPSJNMTI1IDBoNjI0djc0OWgtMTI1djEyNWgtNDk5di0xMjRoMzc1di0yNTBsLTM3NSAtMXYtMTI0aDM3NXYtMjUwbC0yNTEgLTF2MjUwaC0yNDl2LTI0OWgxMjV2LTEyNXpNMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImIiIHVuaWNvZGU9ImIiIApkPSJNMCAwaDYyNGwxIDEyNWgxMjR2NjI0aC0xMjV2MTI1aC0xMjR2LTc0OWwtMjUxIC0xbDEgNjI2aDI0OXYxMjRoLTI1MHYyNTBoLTI0OXYtMTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYyIgdW5pY29kZT0iYyIgaG9yaXotYWR2LXg9Ijc1MCIgCmQ9Ik0xMjUgMGgzNzR2MTI0aC0yNTBsMSA2MjZoMjQ5djEyNGgtMzc0di0xMjRsLTEyNSAtMXYtNjI0aDEyNXYtMTI1ek01MDAgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgNjI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJkIiB1bmljb2RlPSJkIiAKZD0iTTEyNSAwaDYyNHYxMTI0aC0yNDl2LTk5OWwtMjUxIC0xbDEgNjI2aDI0OXYxMjRoLTM3NHYtMTI0bC0xMjUgLTF2LTYyNGgxMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZSIgdW5pY29kZT0iZSIgCmQ9Ik0xMjUgMGg0OTl2MTI0aC0zNzVsMSAyNTFoNDk5djM3NGgtMTI1djEyNWgtMTI0di0zNzRsLTI1MSAtMWwxIDI1MWgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi02MjRoMTI1di0xMjV6TTYyNSAxMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImYiIHVuaWNvZGU9ImYiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMTI1IDBoMjQ5bDEgNzUwaDEyNHYxMjRoLTEyNWwxIDEyNmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi0xMjRsLTEyNSAtMXYtMTI0aDEyNXYtNzUweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJnIiB1bmljb2RlPSJnIiAKZD0iTTAgLTI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNMTI1IC0zNzVoNDk5bDEgMTI1aDEyNHYxMTI0aC02MjR2LTEyNGgzNzV2LTYyNWwtMjUxIC0xdjYyNWgtMjQ5di02MjRoMTI1di0xMjVoMzc1di0yNTBoLTM3NXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJoIiB1bmljb2RlPSJoIiAKZD0iTTAgMGgyNDlsMSA3NTBoMjUwdi03NTBoMjQ5djc0OWgtMTI1djEyNWgtMzc1djI1MGgtMjQ5di0xMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJpIiB1bmljb2RlPSJpIiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMGgyNDl2ODc0aC0yNDl2LTg3NHpNMCAxMDAwaDI0OXYxMjRoLTI0OXYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJqIiB1bmljb2RlPSJqIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgLTEyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMTI1IC0yNTBoMzc0bDEgMTI1aDEyNHY5OTloLTI0OXYtOTk5aC0yNTB2LTEyNXpNMzc1IDEwMDBoMjQ5djEyNGgtMjQ5di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImsiIHVuaWNvZGU9ImsiIGhvcml6LWFkdi14PSIxMDAwIiAKZD0iTTAgMGgyNDlsMSAyNTBoMTI1di0xMjVoMTI1di0xMjVoMjQ5djEyNGgtMTI1djEyNWgtMTI1djEyNWgtMjUwbDEgMTI2aDI0OWwxIDEyNWgxMjRsMSAxMjVoMTI0djEyNGgtMjQ5di0xMjRsLTEyNSAtMXYtMTI0bC0xMjYgLTF2NTAwaC0yNDl2LTExMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImwiIHVuaWNvZGU9ImwiIGhvcml6LWFkdi14PSIzNzUiIApkPSJNMCAwaDI0OXYxMTI0aC0yNDl2LTExMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im0iIHVuaWNvZGU9Im0iIGhvcml6LWFkdi14PSIxMzc1IiAKZD0iTTAgMGgyNDlsMSA3NTBoMjUwdi03NTBoMjQ5djc0OWgtMTI1djEyNWgtNjI0di04NzR6TTEwMDAgMGgyNDl2NzQ5aC0xMjV2MTI1aC0zNzR2LTEyNGgyNTB2LTc1MHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ibiIgdW5pY29kZT0ibiIgCmQ9Ik0wIDBoMjQ5bDEgNzUwaDI1MHYtNzUwaDI0OXY3NDloLTEyNXYxMjVoLTYyNHYtODc0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJvIiB1bmljb2RlPSJvIiAKZD0iTTEyNSAwaDQ5OWwxIDEyNWgxMjR2NjI0aC0xMjV2MTI1aC0xMjR2LTc0OWwtMjUxIC0xbDEgNjI2aDI0OXYxMjRoLTM3NHYtMTI0bC0xMjUgLTF2LTYyNGgxMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icCIgdW5pY29kZT0icCIgCmQ9Ik0wIDB2LTI1MGgyNDlsMSAyNTBoMzc0bDEgMTI1aDEyNHY2MjRoLTEyNXYxMjVoLTEyNHYtNzQ5bC0yNTEgLTFsMSA2MjZoMjQ5djEyNGgtNDk5di04NzR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InEiIHVuaWNvZGU9InEiIApkPSJNNTAwIC0yNTBoMjQ5djExMjRoLTI0OXYtNzQ5bC0yNTEgLTFsMSA2MjZoMjQ5djEyNGgtMzc0di0xMjRsLTEyNSAtMXYtNjI0aDEyNXYtMTI1aDM3NXYtMjUweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJyIiB1bmljb2RlPSJyIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgMGgyNDlsMSA2MjVoMzc0djI0OWgtMjQ5di0xMjRsLTEyNiAtMXYxMjVoLTI0OXYtODc0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJzIiB1bmljb2RlPSJzIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTEyNSAwaDM3NGwxIDEyNWgxMjR2MjQ5aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjVsMSAxMjZoMjQ5djEyNGgtMzc0di0xMjRsLTEyNSAtMXYtMjQ5aDEyNXYtMTI1aDEyNXYtMTI1aDEyNXYtMTI1aC0yNTB2LTEyNXpNMCAxMjVoMTI0djEyNGgtMTI0di0xMjR6TTUwMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InQiIHVuaWNvZGU9InQiIGhvcml6LWFkdi14PSI2MjUiIApkPSJNMjUwIDBoMjQ5djEyNGgtMTI1bDEgNjI2aDEyNHYxMjRoLTEyNXYyNTBoLTI0OXYtMjQ5bC0xMjUgLTF2LTEyNGgxMjV2LTYyNWgxMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idSIgdW5pY29kZT0idSIgCmQ9Ik0xMjUgMGg2MjR2ODc0aC0yNDl2LTc0OWwtMjUxIC0xdjc1MGgtMjQ5di03NDloMTI1di0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InYiIHVuaWNvZGU9InYiIApkPSJNMCAwaDQ5OXYxMjRoLTI1MHY3NTBoLTI0OXYtODc0ek01MDAgMTI1aDEyNGwxIDEyNWgxMjR2NjI0aC0yNDl2LTc0OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idyIgdW5pY29kZT0idyIgaG9yaXotYWR2LXg9IjEzNzUiIApkPSJNMCAwaDk5OXYxMjRoLTI1MHY3NTBoLTI0OXYtNzQ5bC0yNTEgLTF2NzUwaC0yNDl2LTg3NHpNMTAwMCAxMjVoMTI0bDEgMTI1aDEyNHY2MjRoLTI0OXYtNzQ5eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ4IiB1bmljb2RlPSJ4IiAKZD0iTTAgMGgyNDl2Mzc0aC0yNDl2LTM3NHpNNTAwIDBoMjQ5djM3NGgtMjQ5di0zNzR6TTM3NSAzNzVoMTI0djEyNGgtMjQ5di0xMjRoMTI1ek0wIDUwMGgyNDl2Mzc0aC0yNDl2LTM3NHpNNTAwIDUwMGgyNDl2Mzc0aC0yNDl2LTM3NHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ieSIgdW5pY29kZT0ieSIgCmQ9Ik0wIC0yNTBoMTI0djEyNGgtMTI0di0xMjR6TTEyNSAtMzc1aDQ5OWwxIDEyNWgxMjR2MTEyNGgtMjQ5di03NDlsLTI1MSAtMXY3NTBoLTI0OXYtNzQ5aDEyNXYtMTI1aDM3NXYtMjUwaC0zNzV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ieiIgdW5pY29kZT0ieiIgCmQ9Ik0wIDBoNzQ5djEyNGgtNTAwdjI1MGgtMTI0di0xMjRoLTEyNXYtMjUwek0yNTAgMzc1aDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgNTAwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgNjI1aDEyNGwxIDEyNWgxMjR2MTI0aC03NDl2LTEyNGg1MDB2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYnJhY2VsZWZ0IiB1bmljb2RlPSJ7IiBob3Jpei1hZHYteD0iNTAwIiAKZD0iTTI1MCAtMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgMGgxMjR2NDk5aC0xMjR2LTQ5OXpNMCA1MDBoMTI0djEyNGgtMTI0di0xMjR6TTEyNSA2MjVoMTI0djQ5OWgtMTI0di00OTl6TTI1MCAxMTI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJiYXIiIHVuaWNvZGU9InwiIGhvcml6LWFkdi14PSIyNTAiIApkPSJNMCAwdi0xMjVoMTI0djEzNzRoLTEyNHYtMTI0OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYnJhY2VyaWdodCIgdW5pY29kZT0ifSIgaG9yaXotYWR2LXg9IjUwMCIgCmQ9Ik0wIC0xMjVoMTI0djEyNGgtMTI0di0xMjR6TTEyNSAwaDEyNHY0OTloLTEyNHYtNDk5ek0yNTAgNTAwaDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgNjI1aDEyNHY0OTloLTEyNHYtNDk5ek0wIDExMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImFzY2lpdGlsZGUiIHVuaWNvZGU9In4iIApkPSJNNTAwIDYyNWgxMjR2MTI0aC0yNDl2LTEyNGgxMjV6TTAgNjI1aDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgNzUwaDI0OXYxMjRoLTI0OXYtMTI0ek02MjUgNzUwaDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmkwMDdGIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgMGg2MjR2MTQ5OWgtMTI0di0xMzc0bC0zNzYgLTFsMSAxMjUxaDM3NHYxMjRoLTQ5OXYtMTQ5OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pMDA4MCIgaG9yaXotYWR2LXg9Ijc1MCIgCmQ9Ik0wIDBoNjI0djE0OTloLTEyNHYtMTM3NGwtMzc2IC0xbDEgMTI1MWgzNzR2MTI0aC00OTl2LTE0OTl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaTAwODEiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMCAwaDYyNHYxNDk5aC0xMjR2LTEzNzRsLTM3NiAtMWwxIDEyNTFoMzc0djEyNGgtNDk5di0xNDk5eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmkwMDhEIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgMGg2MjR2MTQ5OWgtMTI0di0xMzc0bC0zNzYgLTFsMSAxMjUxaDM3NHYxMjRoLTQ5OXYtMTQ5OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pMDA4RSIgCmQ9Ik0wIDBoNzQ5djEyNGgtNTAwbDEgMTI2aDEyNGwxIDI1MGgxMjRsMSAxMjVoMTI0bDEgMjUwaDEyNHYyNDloLTc0OXYtMTI0aDM3NXYtMjUwbC0xMjUgLTF2LTI0OWwtMTI1IC0xdi0yNDloLTEyNXYtMjUwek0yNTAgMTI1MGgyNDlsMSAxMjVoMTI0djEyNGgtNDk5di0xMjRoMTI1di0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaTAwOEYiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMCAwaDYyNHYxNDk5aC0xMjR2LTEzNzRsLTM3NiAtMWwxIDEyNTFoMzc0djEyNGgtNDk5di0xNDk5eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmkwMDkwIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgMGg2MjR2MTQ5OWgtMTI0di0xMzc0bC0zNzYgLTFsMSAxMjUxaDM3NHYxMjRoLTQ5OXYtMTQ5OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pMDA5RCIgaG9yaXotYWR2LXg9Ijc1MCIgCmQ9Ik0wIDBoNjI0djE0OTloLTEyNHYtMTM3NGwtMzc2IC0xbDEgMTI1MWgzNzR2MTI0aC00OTl2LTE0OTl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaTAwOUUiIApkPSJNMCAwaDc0OXYxMjRoLTUwMHYyNTBoLTEyNHYtMTI0aC0xMjV2LTI1MHpNMjUwIDM3NWgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDUwMGgxMjR2MTI0aC0xMjR2LTEyNHpNNTAwIDYyNWgxMjRsMSAxMjVoMTI0djEyNGgtNzQ5di0xMjRoNTAwdi0xMjV6TTI1MCAxMDAwaDI0OWwxIDEyNWgxMjR2MTI0aC00OTl2LTEyNGgxMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZXhjbGFtZG93biIgdW5pY29kZT0iJiN4YTE7IiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMGgyNDl2NzQ5aC0yNDl2LTc0OXpNMCA4NzVoMjQ5djI0OWgtMjQ5di0yNDl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImNlbnQiIHVuaWNvZGU9IiYjeGEyOyIgaG9yaXotYWR2LXg9IjYyNSIgCmQ9Ik0yNTAgMjUwaDEyNGwxIDEyNWgxMjR2MjQ5aC0xMjVsMSAyNTFoMTI0djI0OWgtMTI1djEyNWgtMTI0di0xMjRsLTEyNSAtMXYtMTI0aDEyNXYtNTAwbC0xMjUgLTF2LTEyNGgxMjV2LTEyNXpNMCA1MDBoMTI0djQ5OWgtMTI0di00OTl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InN0ZXJsaW5nIiB1bmljb2RlPSImI3hhMzsiIGhvcml6LWFkdi14PSIxMDAwIiAKZD0iTTAgMGg3NDl2MTI0aC0zNzVsMSAzNzZoMTI0djEyNGgtMTI1bDEgMzc2aDI0OXYxMjRoLTM3NHYtMTI0bC0xMjUgLTF2LTM3NGwtMTI1IC0xdi0xMjRoMTI1di0zNzVoLTEyNXYtMTI1ek03NTAgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek02MjUgODc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJjdXJyZW5jeSIgdW5pY29kZT0iJiN4YTQ7IiAKZD0iTTAgMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek02MjUgMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMzc1aDEyNHY0OTloLTEyNHYtMzc0bC0yNTEgLTFsMSAyNTFoMjQ5djEyNGgtMzc0di00OTloMzc1ek0wIDg3NWgxMjR2MTI0aC0xMjR2LTEyNHpNNjI1IDg3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ieWVuIiB1bmljb2RlPSImI3hhNTsiIApkPSJNMjUwIDBoMjQ5bDEgMjUwaDI0OXYxMjRoLTI1MGwxIDEyNmgyNDl2MTI0aC0xMjVsMSAxMjZoMTI0djM3NGgtMjQ5di0zNzRsLTI1MSAtMXYzNzVoLTI0OXYtMzc0aDEyNXYtMTI1bC0xMjUgLTF2LTEyNGgyNTB2LTEyNWwtMjUwIC0xdi0xMjRoMjUwdi0yNTB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImJyb2tlbmJhciIgdW5pY29kZT0iJiN4YTY7IiBob3Jpei1hZHYteD0iMjUwIiAKZD0iTTAgMHYtMTI1aDEyNHY2MjRoLTEyNHYtNDk5ek0wIDYyNWgxMjR2NjI0aC0xMjR2LTYyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ic2VjdGlvbiIgdW5pY29kZT0iJiN4YTc7IiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgLTI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNMTI1IC0zNzVoMzc0djEyNGgtMzc0di0xMjR6TTUwMCAtMjUwaDEyNHYyNDloLTEyNHYtMjQ5ek0zNzUgMGgxMjR2MTI0aC0xMjR2LTEyNHpNMjUwIDEyNWgxMjR2MTI0aC0xMjR2LTEyNHpNNTAwIDEyNWgxMjR2MjQ5aC0xMjR2LTI0OXpNMTI1IDI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNMCAzNzVoMTI0djI0OWgtMTI0di0yNDl6TTM3NSAzNzVoMTI0djEyNGgtMTI0di0xMjR6TTI1MCA1MDAKaDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgNjI1aDEyNHYxMjRoLTEyNHYtMTI0ek0wIDc1MGgxMjR2MjQ5aC0xMjR2LTI0OXpNNTAwIDg3NWgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDEwMDBoMTI0djEyNGgtMzc0di0xMjRoMjUweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJkaWVyZXNpcyIgdW5pY29kZT0iJiN4YTg7IiBob3Jpei1hZHYteD0iNjI1IiAKZD0iTTAgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDEwMDBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImNvcHlyaWdodCIgdW5pY29kZT0iJiN4YTk7IiBob3Jpei1hZHYteD0iMTEyNSIgCmQ9Ik0xMjUgMGg3NDlsMSAxMjVoMTI0djg3NGgtMTI0di03NDlsLTEyNSAtMXYtMTI0bC01MDEgLTF2MTI1aC0xMjVsMSA2MjZoMTI0bDEgMTI1aDUwMHYtMTI1aDEyNHYyNDloLTc0OXYtMTI0bC0xMjUgLTF2LTg3NGgxMjV2LTEyNXpNMzc1IDI1MGgyNDl2MTI0aC0yNDl2LTEyNHpNNjI1IDM3NWgxMjR2MTI0aC0xMjR2LTEyNHpNMjUwIDM3NWgxMjR2Mzc0aC0xMjR2LTM3NHpNNjI1IDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDc1MGgyNDkKdjEyNGgtMjQ5di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im9yZGZlbWluaW5lIiB1bmljb2RlPSImI3hhYTsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMzc1IDEyNWgyNDl2MTI0aC02MjR2LTEyNGgzNzV6TTM3NSAzNzVoMjQ5djYyNGgtMTI1djEyNWgtMzc0di0xMjRoMjUwdi01MDBsLTEyNiAtMWwxIDI1MWgxMjR2MTI0aC0yNDl2LTEyNGwtMTI1IC0xdi0yNDloMTI1di0xMjVoMjUwek0wIDg3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZ3VpbGxlbW90bGVmdCIgdW5pY29kZT0iJiN4YWI7IiBob3Jpei1hZHYteD0iMTAwMCIgCmQ9Ik0zNzUgMGgxMjR2MTI0aC0xMjR2LTEyNHpNNzUwIDBoMTI0djEyNGgtMTI0di0xMjR6TTYyNSAxMjVoMTI0djEyNGgtMTI0di0xMjR6TTI1MCAxMjVoMTI0djEyNGgtMTI0di0xMjR6TTEyNSAyNTBoMTI0djEyNGgtMTI0di0xMjR6TTUwMCAyNTBoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAzNzVoMTI0djEyNGgtMTI0di0xMjR6TTAgMzc1aDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgNTAwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgNTAwaDEyNAp2MTI0aC0xMjR2LTEyNHpNNjI1IDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMjUwIDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDc1MGgxMjR2MTI0aC0xMjR2LTEyNHpNNzUwIDc1MGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ibG9naWNhbG5vdCIgdW5pY29kZT0iJiN4YWM7IiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTUwMCAxMjVoMTI0djM3NGgtNjI0di0xMjRoNTAwdi0yNTB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaTAwQUQiIHVuaWNvZGU9IiYjeGFkOyIgCmQ9Ik01MDAgMzc1aDI0OXYxMjRoLTc0OXYtMTI0aDUwMHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icmVnaXN0ZXJlZCIgdW5pY29kZT0iJiN4YWU7IiBob3Jpei1hZHYteD0iMTEyNSIgCmQ9Ik0xMjUgMGg3NDlsMSAxMjVoMTI0djg3NGgtMTI0di03NDlsLTEyNSAtMXYtMTI0bC01MDEgLTF2MTI1aC0xMjVsMSA2MjZoMTI0bDEgMTI1aDUwMHYtMTI1aDEyNHYyNDloLTc0OXYtMTI0bC0xMjUgLTF2LTg3NGgxMjV2LTEyNXpNMjUwIDI1MGgxMjRsMSAyNTBoMjQ5djEyNGgtMjUwbDEgMTI2aDI1MHYtMTI1aDEyNHYyNDloLTQ5OXYtNjI0ek02MjUgMjUwaDEyNHYyNDloLTEyNHYtMjQ5eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJtYWNyb24iIHVuaWNvZGU9IiYjeGFmOyIgaG9yaXotYWR2LXg9IjYyNSIgCmQ9Ik0wIDEwMDBoNDk5djEyNGgtNDk5di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImRlZ3JlZSIgdW5pY29kZT0iJiN4YjA7IiBob3Jpei1hZHYteD0iNjI1IiAKZD0iTTI1MCA2MjVoMTI0djEyNGgtMjQ5di0xMjRoMTI1ek0wIDc1MGgxMjR2MjQ5aC0xMjR2LTI0OXpNMzc1IDc1MGgxMjR2MjQ5aC0xMjR2LTI0OXpNMTI1IDEwMDBoMjQ5djEyNGgtMjQ5di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InBsdXNtaW51cyIgdW5pY29kZT0iJiN4YjE7IiBob3Jpei1hZHYteD0iMTAwMCIgCmQ9Ik0wIDBoODc0djEyNGgtODc0di0xMjR6TTM3NSAyNTBoMTI0bDEgMjUwaDM3NHYxMjRoLTM3NXYyNTBoLTEyNHYtMjQ5bC0zNzUgLTF2LTEyNGgzNzV2LTI1MHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pMDBCMiIgdW5pY29kZT0iJiN4YjI7IiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgMjUwaDYyNHYxMjRoLTM3NWwxIDEyNmgxMjRsMSAxMjVoMTI0bDEgMTI1aDEyNHYyNDloLTEyNXYxMjVoLTM3NHYtMTI0aDI1MHYtMjUwbC0xMjUgLTF2LTEyNGwtMTI1IC0xdi0xMjRoLTEyNXYtMjUwek0wIDg3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pMDBCMyIgdW5pY29kZT0iJiN4YjM7IiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgMjUwaDQ5OWwxIDEyNWgxMjR2Mzc0aC0yNTB2MTI1aC0xMjR2LTEyNGwtMTI1IC0xdi0xMjRoMjUwdi0yNTBsLTI1MSAtMXYxMjVoLTEyNHYtMjQ5ek0zNzUgODc1aDI0OXYyNDloLTYyNHYtMTI0aDM3NXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJhY3V0ZSIgdW5pY29kZT0iJiN4YjQ7IiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHpNMTI1IDExMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im11IiB1bmljb2RlPSImI3hiNTsiIGhvcml6LWFkdi14PSIxMTI1IiAKZD0iTTAgMHYtMjUwaDI0OWwxIDI1MGgzNzR2MTI0aC0yNTBsMSA1MDFoMTI0djI0OWgtMjQ5di0xMjRsLTEyNSAtMXYtNjI0aC0xMjV2LTEyNXpNNzUwIDBoMjQ5djEyNGgtMTI1bDEgNjI2aDEyNHYxMjRoLTI0OXYtMTI0bC0xMjUgLTF2LTYyNGgxMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icGFyYWdyYXBoIiB1bmljb2RlPSImI3hiNjsiIGhvcml6LWFkdi14PSIxMTI1IiAKZD0iTTYyNSAwaDEyNGwxIDEwMDBoMTI1di0xMDAwaDEyNHYxMTI0aC0zNzR2LTQ5OWwtMzc2IC0xbDEgMzc2aDM3NHYxMjRoLTQ5OXYtMTI0bC0xMjUgLTF2LTM3NGgxMjV2LTEyNWg1MDB2LTUwMHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icGVyaW9kY2VudGVyZWQiIHVuaWNvZGU9IiYjeGI3OyIgaG9yaXotYWR2LXg9IjM3NSIgCmQ9Ik0wIDM3NWgyNDl2MjQ5aC0yNDl2LTI0OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iY2VkaWxsYSIgdW5pY29kZT0iJiN4Yjg7IiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgLTEyNWgxMjV2LTEyNWwtMTI1IC0xdi0xMjRoMjQ5djM3NGgtMjQ5di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaTAwQjkiIHVuaWNvZGU9IiYjeGI5OyIgaG9yaXotYWR2LXg9IjM3NSIgCmQ9Ik0wIDI1MGgyNDl2ODc0aC0xMjR2LTEyNGgtMTI1di03NTB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im9yZG1hc2N1bGluZSIgdW5pY29kZT0iJiN4YmE7IiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTM3NSAxMjVoMjQ5djEyNGgtNjI0di0xMjRoMzc1ek0zNzUgMzc1aDEyNGwxIDEyNWgxMjR2NDk5aC0xMjV2MTI1aC0xMjR2LTYyNGwtMTI2IC0xbDEgNTAxaDEyNHYxMjRoLTI0OXYtMTI0bC0xMjUgLTF2LTQ5OWgxMjV2LTEyNWgyNTB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Imd1aWxsZW1vdHJpZ2h0IiB1bmljb2RlPSImI3hiYjsiIGhvcml6LWFkdi14PSIxMDAwIiAKZD0iTTAgMGgxMjRsMSAxMjVoMTI0bDEgMTI1aDEyNGwxIDEyNWgxMjR2MTI0aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjR2LTI0OWgxMjV2LTEyNWgxMjV2LTEyNWwtMTI1IC0xdi0xMjRoLTEyNXYtMjUwek0zNzUgMGgxMjRsMSAxMjVoMTI0bDEgMTI1aDEyNGwxIDEyNWgxMjR2MTI0aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjR2LTI0OWgxMjV2LTEyNWgxMjV2LTEyNWwtMTI1IC0xdi0xMjRoLTEyNXYtMjUweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJvbmVxdWFydGVyIiB1bmljb2RlPSImI3hiYzsiIGhvcml6LWFkdi14PSIxNTAwIiAKZD0iTTI1MCAwaDEyNGwxIDEyNWgxMjRsMSAzNzVoMTI0bDEgMzc1aDEyNHYyNDloLTEyNHYtMTI0bC0xMjUgLTF2LTM3NGwtMTI1IC0xdi0zNzRoLTEyNXYtMjUwek0xMDAwIDBoMjQ5bDEgMjUwaDEyNHYxMjRoLTEyNXY1MDBoLTM3NHYtMjQ5aDEyNXYtMjUwbC0xMjYgLTF2MjUwaC0xMjR2LTEyNGwtMTI1IC0xdi0yNDloMzc1di0yNTB6TTAgMjUwaDI0OXY4NzRoLTEyNHYtMTI0aC0xMjV2LTc1MHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ib25laGFsZiIgdW5pY29kZT0iJiN4YmQ7IiBob3Jpei1hZHYteD0iMTUwMCIgCmQ9Ik0yNTAgMGgxMjRsMSAxMjVoMTI0bDEgMzc1aDEyNGwxIDM3NWgxMjR2MjQ5aC0xMjR2LTEyNGwtMTI1IC0xdi0zNzRsLTEyNSAtMXYtMzc0aC0xMjV2LTI1MHpNNzUwIDBoNjI0djEyNGgtMzc1bDEgMTI2aDEyNGwxIDEyNWgxMjRsMSAxMjVoMTI0djI0OWgtMTI1djEyNWgtMzc0di0xMjRoMjUwdi0yNTBsLTEyNSAtMXYtMTI0bC0xMjUgLTF2LTEyNGgtMTI1di0yNTB6TTAgMjUwaDI0OXY4NzRoLTEyNHYtMTI0aC0xMjV2LTc1MHoKTTc1MCA2MjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InRocmVlcXVhcnRlcnMiIHVuaWNvZGU9IiYjeGJlOyIgaG9yaXotYWR2LXg9IjE4NzUiIApkPSJNNjI1IDBoMTI0bDEgMTI1aDEyNGwxIDM3NWgxMjRsMSAzNzVoMTI0djI0OWgtMTI0di0xMjRsLTEyNSAtMXYtMzc0bC0xMjUgLTF2LTM3NGgtMTI1di0yNTB6TTEzNzUgMGgyNDlsMSAyNTBoMTI0djEyNGgtMTI1djUwMGgtMzc0di0yNDloMTI1di0yNTBsLTEyNiAtMXYyNTBoLTEyNHYtMTI0bC0xMjUgLTF2LTI0OWgzNzV2LTI1MHpNMCAyNTBoNDk5bDEgMTI1aDEyNHYzNzRoLTI1MHYxMjVoLTEyNHYtMTI0bC0xMjUgLTF2LTEyNGgyNTAKdi0yNTBsLTI1MSAtMXYxMjVoLTEyNHYtMjQ5ek01MDAgODc1aDEyNHYyNDloLTYyNHYtMTI0aDM3NXYtMTI1aDEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icXVlc3Rpb25kb3duIiB1bmljb2RlPSImI3hiZjsiIApkPSJNMTI1IDBoNDk5djEyNGgtMzc1bDEgMjUxaDEyNGwxIDEyNWgxMjR2MjQ5aC0yNDl2LTI0OWwtMTI1IC0xdi0xMjRsLTEyNSAtMXYtMjQ5aDEyNXYtMTI1ek02MjUgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgODc1aDEyNHYyNDloLTI0OXYtMjQ5aDEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iQWdyYXZlIiB1bmljb2RlPSImI3hjMDsiIApkPSJNMCAwaDI0OWwxIDUwMGgyNTB2LTUwMGgyNDl2OTk5aC0xMjV2MTI1aC0xMjR2LTQ5OWwtMjUxIC0xbDEgMzc2aDI0OXYxMjRoLTM3NHYtMTI0aC0xMjV2LTEwMDB6TTM3NSAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0yNTAgMTM3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iQWFjdXRlIiB1bmljb2RlPSImI3hjMTsiIApkPSJNMCAwaDI0OWwxIDUwMGgyNTB2LTUwMGgyNDl2OTk5aC0xMjV2MTI1aC0xMjR2LTQ5OWwtMjUxIC0xbDEgMzc2aDI0OXYxMjRoLTM3NHYtMTI0aC0xMjV2LTEwMDB6TTI1MCAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTM3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iQWNpcmN1bWZsZXgiIHVuaWNvZGU9IiYjeGMyOyIgCmQ9Ik0wIDBoMjQ5bDEgNTAwaDI1MHYtNTAwaDI0OXY5OTloLTEyNXYxMjVoLTEyNHYtNDk5bC0yNTEgLTFsMSAzNzZoMjQ5djEyNGgtMzc0di0xMjRoLTEyNXYtMTAwMHpNMTI1IDEyNTBoNDk5djEyNGgtMTI1djEyNWgtMjQ5di0xMjRoLTEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJBdGlsZGUiIHVuaWNvZGU9IiYjeGMzOyIgCmQ9Ik0wIDBoMjQ5bDEgNTAwaDI1MHYtNTAwaDI0OXY5OTloLTEyNXYxMjVoLTEyNHYtNDk5bC0yNTEgLTFsMSAzNzZoMjQ5djEyNGgtMzc0di0xMjRoLTEyNXYtMTAwMHpNMCAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTI1MGgyNDl2MTI0aC0yNDl2LTEyNHpNMjUwIDEzNzVoMTI0djEyNGgtMjQ5di0xMjRoMTI1ek02MjUgMTM3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iQWRpZXJlc2lzIiB1bmljb2RlPSImI3hjNDsiIApkPSJNMCAwaDI0OWwxIDUwMGgyNTB2LTUwMGgyNDl2OTk5aC0xMjV2MTI1aC0xMjR2LTQ5OWwtMjUxIC0xbDEgMzc2aDI0OXYxMjRoLTM3NHYtMTI0aC0xMjV2LTEwMDB6TTEyNSAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMTI1MGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iQXJpbmciIHVuaWNvZGU9IiYjeGM1OyIgCmQ9Ik0wIDBoMjQ5bDEgNTAwaDI1MHYtNTAwaDI0OXY5OTloLTEyNXYzNzVoLTEyNHYtNzQ5bC0yNTEgLTFsMSAzNzZoMjQ5djEyNGgtMjUwdjI1MGgtMTI0di0zNzRoLTEyNXYtMTAwMHpNMzc1IDEzNzVoMTI0djEyNGgtMjQ5di0xMjRoMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJBRSIgdW5pY29kZT0iJiN4YzY7IiBob3Jpei1hZHYteD0iMTI1MCIgCmQ9Ik0wIDBoMjQ5bDEgNTAwaDI1MHYtNTAwaDYyNHYxMjRoLTM3NWwxIDM3NmgyNDl2MTI0aC0yNTBsMSAzNzZoMzc0djEyNGgtNjI0di00OTlsLTI1MSAtMWwxIDM3NmgyNDl2MTI0aC0zNzR2LTEyNGgtMTI1di0xMDAweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJDY2VkaWxsYSIgdW5pY29kZT0iJiN4Yzc7IiAKZD0iTTM3NSAtMzc1aDI0OXY0OTloLTM3NWwxIDg3NmgzNzR2MTI0aC00OTl2LTEyNGwtMTI1IC0xdi04NzRoMTI1di0xMjVoMTI1di0xMjVoMjUwdi0xMjVoLTEyNXYtMTI1ek02MjUgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek02MjUgODc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJFZ3JhdmUiIHVuaWNvZGU9IiYjeGM4OyIgaG9yaXotYWR2LXg9Ijc1MCIgCmQ9Ik0wIDBoNjI0djEyNGgtMzc1bDEgMzc2aDI0OXYxMjRoLTI1MGwxIDM3NmgzNzR2MTI0aC02MjR2LTExMjR6TTI1MCAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgMTM3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iRWFjdXRlIiB1bmljb2RlPSImI3hjOTsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMCAwaDYyNHYxMjRoLTM3NWwxIDM3NmgyNDl2MTI0aC0yNTBsMSAzNzZoMzc0djEyNGgtNjI0di0xMTI0ek0yNTAgMTI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDEzNzVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IkVjaXJjdW1mbGV4IiB1bmljb2RlPSImI3hjYTsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMCAwaDYyNHYxMjRoLTM3NWwxIDM3NmgyNDl2MTI0aC0yNTBsMSAzNzZoMzc0djEyNGgtNjI0di0xMTI0ek0wIDEyNTBoNDk5djEyNGgtMTI1djEyNWgtMjQ5di0xMjRoLTEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJFZGllcmVzaXMiIHVuaWNvZGU9IiYjeGNiOyIgaG9yaXotYWR2LXg9Ijc1MCIgCmQ9Ik0wIDBoNjI0djEyNGgtMzc1bDEgMzc2aDI0OXYxMjRoLTI1MGwxIDM3NmgzNzR2MTI0aC02MjR2LTExMjR6TTAgMTI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDEyNTBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IklncmF2ZSIgdW5pY29kZT0iJiN4Y2M7IiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMGgyNDl2MTEyNGgtMjQ5di0xMTI0ek0xMjUgMTI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNMCAxMzc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJJYWN1dGUiIHVuaWNvZGU9IiYjeGNkOyIgaG9yaXotYWR2LXg9IjM3NSIgCmQ9Ik0wIDBoMjQ5djExMjRoLTI0OXYtMTEyNHpNMCAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgMTM3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iSWNpcmN1bWZsZXgiIHVuaWNvZGU9IiYjeGNlOyIgaG9yaXotYWR2LXg9IjYyNSIgCmQ9Ik0xMjUgMGgyNDl2MTEyNGgtMjQ5di0xMTI0ek0wIDEyNTBoNDk5djEyNGgtMTI1djEyNWgtMjQ5di0xMjRoLTEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJJZGllcmVzaXMiIHVuaWNvZGU9IiYjeGNmOyIgaG9yaXotYWR2LXg9IjYyNSIgCmQ9Ik0xMjUgMGgyNDl2MTEyNGgtMjQ5di0xMTI0ek0wIDEyNTBoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJFdGgiIHVuaWNvZGU9IiYjeGQwOyIgaG9yaXotYWR2LXg9IjEwMDAiIApkPSJNMTI1IDBoNjI0bDEgMTI1aDEyNHY4NzRoLTEyNXYxMjVoLTEyNHYtOTk5bC0yNTEgLTFsMSAzNzZoMTI0djEyNGgtMTI1bDEgMzc2aDI0OXYxMjRoLTQ5OXYtNDk5bC0xMjUgLTF2LTEyNGgxMjV2LTUwMHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iTnRpbGRlIiB1bmljb2RlPSImI3hkMTsiIGhvcml6LWFkdi14PSIxMDAwIiAKZD0iTTAgMGgxMjRsMSA2MjVoMTI1di0xMjVoMTI1di0xMjVoMTI1di0xMjVoMTI1di0xMjVoMTI1di0xMjVoMTI0djExMjRoLTEyNHYtNjI0bC0xMjYgLTF2MTI1aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjR2LTExMjR6TTEyNSAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMTI1MGgyNDl2MTI0aC0yNDl2LTEyNHpNMzc1IDEzNzVoMTI0djEyNGgtMjQ5di0xMjRoMTI1ek03NTAgMTM3NWgxMjR2MTI0aC0xMjQKdi0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Ik9ncmF2ZSIgdW5pY29kZT0iJiN4ZDI7IiAKZD0iTTEyNSAwaDQ5OWwxIDEyNWgxMjR2ODc0aC0xMjV2MTI1aC0xMjR2LTk5OWwtMjUxIC0xbDEgODc2aDI0OXYxMjRoLTM3NHYtMTI0bC0xMjUgLTF2LTg3NGgxMjV2LTEyNXpNMzc1IDEyNTBoMTI0djEyNGgtMTI0di0xMjR6TTI1MCAxMzc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJPYWN1dGUiIHVuaWNvZGU9IiYjeGQzOyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djg3NGgtMTI1djEyNWgtMTI0di05OTlsLTI1MSAtMWwxIDg3NmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi04NzRoMTI1di0xMjV6TTI1MCAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTM3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iT2NpcmN1bWZsZXgiIHVuaWNvZGU9IiYjeGQ0OyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djg3NGgtMTI1djEyNWgtMTI0di05OTlsLTI1MSAtMWwxIDg3NmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi04NzRoMTI1di0xMjV6TTEyNSAxMjUwaDQ5OXYxMjRoLTEyNXYxMjVoLTI0OXYtMTI0aC0xMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iT3RpbGRlIiB1bmljb2RlPSImI3hkNTsiIApkPSJNMTI1IDBoNDk5bDEgMTI1aDEyNHY4NzRoLTEyNXYxMjVoLTEyNHYtOTk5bC0yNTEgLTFsMSA4NzZoMjQ5djEyNGgtMzc0di0xMjRsLTEyNSAtMXYtODc0aDEyNXYtMTI1ek0wIDEyNTBoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAxMjUwaDI0OXYxMjRoLTI0OXYtMTI0ek0yNTAgMTM3NWgxMjR2MTI0aC0yNDl2LTEyNGgxMjV6TTYyNSAxMzc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJPZGllcmVzaXMiIHVuaWNvZGU9IiYjeGQ2OyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djg3NGgtMTI1djEyNWgtMTI0di05OTlsLTI1MSAtMWwxIDg3NmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi04NzRoMTI1di0xMjV6TTEyNSAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMTI1MGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ibXVsdGlwbHkiIHVuaWNvZGU9IiYjeGQ3OyIgCmQ9Ik0xMjUgMTI1aDEyNGwxIDEyNWgxMjRsMSAxMjVoMTI0djI0OWgtMjUwdjEyNWgtMTI1djEyNWgtMTI0di0yNDloMTI1di0xMjVoMTI1di0xMjVsLTEyNSAtMXYtMTI0bC0xMjUgLTF2LTEyNGgxMjV6TTUwMCAyNTBoMTI0djEyNGgtMTI0di0xMjR6TTYyNSAxMjVoMTI0djEyNGgtMTI0di0xMjR6TTUwMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6TTYyNSA3NTBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Ik9zbGFzaCIgdW5pY29kZT0iJiN4ZDg7IiAKZD0iTTAgMGg2MjRsMSAxMjVoMTI0djk5OWgtMjQ5di0yNDlsLTEyNSAtMXYtMjQ5aDEyNXYtNTAwbC0yNTEgLTFsMSAyNTFoMTI0bDEgMTI1aDEyNHYxMjRoLTI1MGwxIDM3NmgyNDl2MTI0aC0zNzR2LTEyNGgtMTI1di0xMDAweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJVZ3JhdmUiIHVuaWNvZGU9IiYjeGQ5OyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djk5OWgtMjQ5di05OTlsLTI1MSAtMXYxMDAwaC0yNDl2LTk5OWgxMjV2LTEyNXpNMzc1IDEyNTBoMTI0djEyNGgtMTI0di0xMjR6TTI1MCAxMzc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJVYWN1dGUiIHVuaWNvZGU9IiYjeGRhOyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djk5OWgtMjQ5di05OTlsLTI1MSAtMXYxMDAwaC0yNDl2LTk5OWgxMjV2LTEyNXpNMjUwIDEyNTBoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAxMzc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJVY2lyY3VtZmxleCIgdW5pY29kZT0iJiN4ZGI7IiAKZD0iTTEyNSAwaDQ5OWwxIDEyNWgxMjR2OTk5aC0yNDl2LTk5OWwtMjUxIC0xdjEwMDBoLTI0OXYtOTk5aDEyNXYtMTI1ek0xMjUgMTI1MGg0OTl2MTI0aC0xMjV2MTI1aC0yNDl2LTEyNGgtMTI1di0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IlVkaWVyZXNpcyIgdW5pY29kZT0iJiN4ZGM7IiAKZD0iTTEyNSAwaDQ5OWwxIDEyNWgxMjR2OTk5aC0yNDl2LTk5OWwtMjUxIC0xdjEwMDBoLTI0OXYtOTk5aDEyNXYtMTI1ek0xMjUgMTI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNNTAwIDEyNTBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IllhY3V0ZSIgdW5pY29kZT0iJiN4ZGQ7IiAKZD0iTTI1MCAwaDI0OWwxIDUwMGgxMjRsMSAxMjVoMTI0djQ5OWgtMjQ5di00OTlsLTI1MSAtMXY1MDBoLTI0OXYtNDk5aDEyNXYtMTI1aDEyNXYtNTAwek0yNTAgMTI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDEzNzVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IlRob3JuIiB1bmljb2RlPSImI3hkZTsiIApkPSJNMCAwaDI0OWwxIDI1MGgzNzRsMSAxMjVoMTI0djM3NGgtMTI1djEyNWgtMTI0di00OTlsLTI1MSAtMWwxIDM3NmgyNDl2MTI0aC0yNTB2MjUwaC0yNDl2LTExMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Imdlcm1hbmRibHMiIHVuaWNvZGU9IiYjeGRmOyIgCmQ9Ik0wIDBoMjQ5bDEgMTAwMGgyNTB2LTI1MGwtMTI1IC0xdi0yNDloMTI1di0zNzVsLTEyNSAtMXYtMTI0aDI0OWwxIDEyNWgxMjR2Mzc0aC0xMjVsMSAyNTFoMTI0djI0OWgtMTI1djEyNWgtNDk5di0xMjRoLTEyNXYtMTAwMHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYWdyYXZlIiB1bmljb2RlPSImI3hlMDsiIApkPSJNMTI1IDBoNjI0djc0OWgtMTI1djEyNWgtNDk5di0xMjRoMzc1di0yNTBsLTM3NSAtMXYtMTI0aDM3NXYtMjUwbC0yNTEgLTF2MjUwaC0yNDl2LTI0OWgxMjV2LTEyNXpNMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0yNTAgMTEyNWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYWFjdXRlIiB1bmljb2RlPSImI3hlMTsiIApkPSJNMTI1IDBoNjI0djc0OWgtMTI1djEyNWgtNDk5di0xMjRoMzc1di0yNTBsLTM3NSAtMXYtMTI0aDM3NXYtMjUwbC0yNTEgLTF2MjUwaC0yNDl2LTI0OWgxMjV2LTEyNXpNMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6TTI1MCAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTEyNWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYWNpcmN1bWZsZXgiIHVuaWNvZGU9IiYjeGUyOyIgCmQ9Ik0xMjUgMGg2MjR2NzQ5aC0xMjV2MTI1aC00OTl2LTEyNGgzNzV2LTI1MGwtMzc1IC0xdi0xMjRoMzc1di0yNTBsLTI1MSAtMXYyNTBoLTI0OXYtMjQ5aDEyNXYtMTI1ek0wIDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMTI1IDEwMDBoNDk5djEyNGgtMTI1djEyNWgtMjQ5di0xMjRoLTEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJhdGlsZGUiIHVuaWNvZGU9IiYjeGUzOyIgCmQ9Ik0xMjUgMGg2MjR2NzQ5aC0xMjV2MTI1aC00OTl2LTEyNGgzNzV2LTI1MGwtMzc1IC0xdi0xMjRoMzc1di0yNTBsLTI1MSAtMXYyNTBoLTI0OXYtMjQ5aDEyNXYtMTI1ek0wIDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMCAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTAwMGgyNDl2MTI0aC0yNDl2LTEyNHpNMjUwIDExMjVoMTI0djEyNGgtMjQ5di0xMjRoMTI1ek02MjUgMTEyNWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYWRpZXJlc2lzIiB1bmljb2RlPSImI3hlNDsiIApkPSJNMTI1IDBoNjI0djc0OWgtMTI1djEyNWgtNDk5di0xMjRoMzc1di0yNTBsLTM3NSAtMXYtMTI0aDM3NXYtMjUwbC0yNTEgLTF2MjUwaC0yNDl2LTI0OWgxMjV2LTEyNXpNMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6TTEyNSAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYXJpbmciIHVuaWNvZGU9IiYjeGU1OyIgCmQ9Ik0xMjUgMGg2MjR2NzQ5aC0xMjV2MTI1aC00OTl2LTEyNGgzNzV2LTI1MGwtMzc1IC0xdi0xMjRoMzc1di0yNTBsLTI1MSAtMXYyNTBoLTI0OXYtMjQ5aDEyNXYtMTI1ek0wIDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMjUwIDEwMDBoMjQ5djEyNGgtMjQ5di0xMjR6TTUwMCAxMTI1aDEyNHYyNDloLTEyNHYtMjQ5ek0xMjUgMTEyNWgxMjR2MjQ5aC0xMjR2LTI0OXpNMzc1IDEzNzVoMTI0djEyNGgtMjQ5di0xMjRoMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJhZSIgdW5pY29kZT0iJiN4ZTY7IiBob3Jpei1hZHYteD0iMTM3NSIgCmQ9Ik0xMjUgMGg5OTl2MTI0aC0zNzVsMSAyNTFoNDk5djM3NGgtMTI1djEyNWgtMTI0di0zNzRsLTI1MSAtMWwxIDI1MWgyNDl2MTI0aC04NzR2LTEyNGgzNzV2LTI1MGwtMzc1IC0xdi0xMjRoMzc1di0yNTBsLTI1MSAtMXYyNTBoLTI0OXYtMjQ5aDEyNXYtMTI1ek0xMTI1IDEyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImNjZWRpbGxhIiB1bmljb2RlPSImI3hlNzsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMjUwIC0zNzVoMjQ5djQ5OWgtMjUwbDEgNjI2aDI0OXYxMjRoLTM3NHYtMTI0bC0xMjUgLTF2LTYyNGgxMjV2LTEyNWgxMjV2LTEyNWgxMjV2LTEyNWgtMTI1di0xMjV6TTUwMCAxMjVoMTI0djEyNGgtMTI0di0xMjR6TTUwMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImVncmF2ZSIgdW5pY29kZT0iJiN4ZTg7IiAKZD0iTTEyNSAwaDQ5OXYxMjRoLTM3NWwxIDI1MWg0OTl2Mzc0aC0xMjV2MTI1aC0xMjR2LTM3NGwtMjUxIC0xbDEgMjUxaDI0OXYxMjRoLTM3NHYtMTI0bC0xMjUgLTF2LTYyNGgxMjV2LTEyNXpNNjI1IDEyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDEwMDBoMTI0djEyNGgtMTI0di0xMjR6TTI1MCAxMTI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJlYWN1dGUiIHVuaWNvZGU9IiYjeGU5OyIgCmQ9Ik0xMjUgMGg0OTl2MTI0aC0zNzVsMSAyNTFoNDk5djM3NGgtMTI1djEyNWgtMTI0di0zNzRsLTI1MSAtMWwxIDI1MWgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi02MjRoMTI1di0xMjV6TTYyNSAxMjVoMTI0djEyNGgtMTI0di0xMjR6TTI1MCAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTEyNWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZWNpcmN1bWZsZXgiIHVuaWNvZGU9IiYjeGVhOyIgCmQ9Ik0xMjUgMGg0OTl2MTI0aC0zNzVsMSAyNTFoNDk5djM3NGgtMTI1djEyNWgtMTI0di0zNzRsLTI1MSAtMWwxIDI1MWgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi02MjRoMTI1di0xMjV6TTYyNSAxMjVoMTI0djEyNGgtMTI0di0xMjR6TTEyNSAxMDAwaDQ5OXYxMjRoLTEyNXYxMjVoLTI0OXYtMTI0aC0xMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZWRpZXJlc2lzIiB1bmljb2RlPSImI3hlYjsiIApkPSJNMTI1IDBoNDk5djEyNGgtMzc1bDEgMjUxaDQ5OXYzNzRoLTEyNXYxMjVoLTEyNHYtMzc0bC0yNTEgLTFsMSAyNTFoMjQ5djEyNGgtMzc0di0xMjRsLTEyNSAtMXYtNjI0aDEyNXYtMTI1ek02MjUgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHpNNTAwIDEwMDBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImlncmF2ZSIgdW5pY29kZT0iJiN4ZWM7IiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMGgyNDl2ODc0aC0yNDl2LTg3NHpNMTI1IDEwMDBoMTI0djEyNGgtMTI0di0xMjR6TTAgMTEyNWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iaWFjdXRlIiB1bmljb2RlPSImI3hlZDsiIGhvcml6LWFkdi14PSIzNzUiIApkPSJNMCAwaDI0OXY4NzRoLTI0OXYtODc0ek0wIDEwMDBoMTI0djEyNGgtMTI0di0xMjR6TTEyNSAxMTI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJpY2lyY3VtZmxleCIgdW5pY29kZT0iJiN4ZWU7IiBob3Jpei1hZHYteD0iNjI1IiAKZD0iTTEyNSAwaDI0OXY4NzRoLTI0OXYtODc0ek0wIDEwMDBoNDk5djEyNGgtMTI1djEyNWgtMjQ5di0xMjRoLTEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJpZGllcmVzaXMiIHVuaWNvZGU9IiYjeGVmOyIgaG9yaXotYWR2LXg9IjYyNSIgCmQ9Ik0xMjUgMGgyNDl2ODc0aC0yNDl2LTg3NHpNMCAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZXRoIiB1bmljb2RlPSImI3hmMDsiIApkPSJNMTI1IDBoNDk5bDEgMTI1aDEyNHY3NDloLTEyNXYyNTBoLTQ5OXYtMTI0aDEyNXYtMTI1aDI1MHYtMTI1bC0zNzUgLTF2LTEyNGgzNzV2LTUwMGwtMjUxIC0xdjUwMGgtMjQ5di00OTloMTI1di0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im50aWxkZSIgdW5pY29kZT0iJiN4ZjE7IiAKZD0iTTAgMGgyNDlsMSA3NTBoMjUwdi03NTBoMjQ5djc0OWgtMTI1djEyNWgtNjI0di04NzR6TTAgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDEwMDBoMjQ5djEyNGgtMjQ5di0xMjR6TTI1MCAxMTI1aDEyNHYxMjRoLTI0OXYtMTI0aDEyNXpNNjI1IDExMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im9ncmF2ZSIgdW5pY29kZT0iJiN4ZjI7IiAKZD0iTTEyNSAwaDQ5OWwxIDEyNWgxMjR2NjI0aC0xMjV2MTI1aC0xMjR2LTc0OWwtMjUxIC0xbDEgNjI2aDI0OXYxMjRoLTM3NHYtMTI0bC0xMjUgLTF2LTYyNGgxMjV2LTEyNXpNMzc1IDEwMDBoMTI0djEyNGgtMTI0di0xMjR6TTI1MCAxMTI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJvYWN1dGUiIHVuaWNvZGU9IiYjeGYzOyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djYyNGgtMTI1djEyNWgtMTI0di03NDlsLTI1MSAtMWwxIDYyNmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi02MjRoMTI1di0xMjV6TTI1MCAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTEyNWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ib2NpcmN1bWZsZXgiIHVuaWNvZGU9IiYjeGY0OyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djYyNGgtMTI1djEyNWgtMTI0di03NDlsLTI1MSAtMWwxIDYyNmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi02MjRoMTI1di0xMjV6TTEyNSAxMDAwaDQ5OXYxMjRoLTEyNXYxMjVoLTI0OXYtMTI0aC0xMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ib3RpbGRlIiB1bmljb2RlPSImI3hmNTsiIApkPSJNMTI1IDBoNDk5bDEgMTI1aDEyNHY2MjRoLTEyNXYxMjVoLTEyNHYtNzQ5bC0yNTEgLTFsMSA2MjZoMjQ5djEyNGgtMzc0di0xMjRsLTEyNSAtMXYtNjI0aDEyNXYtMTI1ek0wIDEwMDBoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAxMDAwaDI0OXYxMjRoLTI0OXYtMTI0ek0yNTAgMTEyNWgxMjR2MTI0aC0yNDl2LTEyNGgxMjV6TTYyNSAxMTI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJvZGllcmVzaXMiIHVuaWNvZGU9IiYjeGY2OyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djYyNGgtMTI1djEyNWgtMTI0di03NDlsLTI1MSAtMWwxIDYyNmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi02MjRoMTI1di0xMjV6TTEyNSAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZGl2aWRlIiB1bmljb2RlPSImI3hmNzsiIGhvcml6LWFkdi14PSIxMDAwIiAKZD0iTTM3NSAxMjVoMTI0djEyNGgtMTI0di0xMjR6TTYyNSAzNzVoMjQ5djEyNGgtODc0di0xMjRoNjI1ek0zNzUgNjI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJvc2xhc2giIHVuaWNvZGU9IiYjeGY4OyIgCmQ9Ik0wIDBoNjI0bDEgMTI1aDEyNHY3NDloLTI0OXYtMjQ5bC0xMjUgLTF2LTEyNGgxMjV2LTM3NWwtMjUxIC0xbDEgMTI2aDEyNHYyNDloLTEyNWwxIDI1MWgyNDl2MTI0aC0zNzR2LTEyNGgtMTI1di03NTB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVncmF2ZSIgdW5pY29kZT0iJiN4Zjk7IiAKZD0iTTEyNSAwaDYyNHY4NzRoLTI0OXYtNzQ5bC0yNTEgLTF2NzUwaC0yNDl2LTc0OWgxMjV2LTEyNXpNMzc1IDEwMDBoMTI0djEyNGgtMTI0di0xMjR6TTI1MCAxMTI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1YWN1dGUiIHVuaWNvZGU9IiYjeGZhOyIgCmQ9Ik0xMjUgMGg2MjR2ODc0aC0yNDl2LTc0OWwtMjUxIC0xdjc1MGgtMjQ5di03NDloMTI1di0xMjV6TTI1MCAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTEyNWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idWNpcmN1bWZsZXgiIHVuaWNvZGU9IiYjeGZiOyIgCmQ9Ik0xMjUgMGg2MjR2ODc0aC0yNDl2LTc0OWwtMjUxIC0xdjc1MGgtMjQ5di03NDloMTI1di0xMjV6TTEyNSAxMDAwaDQ5OXYxMjRoLTEyNXYxMjVoLTI0OXYtMTI0aC0xMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idWRpZXJlc2lzIiB1bmljb2RlPSImI3hmYzsiIApkPSJNMTI1IDBoNjI0djg3NGgtMjQ5di03NDlsLTI1MSAtMXY3NTBoLTI0OXYtNzQ5aDEyNXYtMTI1ek0xMjUgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHpNNTAwIDEwMDBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InlhY3V0ZSIgdW5pY29kZT0iJiN4ZmQ7IiAKZD0iTTAgLTI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNMTI1IC0zNzVoNDk5bDEgMTI1aDEyNHYxMTI0aC0yNDl2LTc0OWwtMjUxIC0xdjc1MGgtMjQ5di03NDloMTI1di0xMjVoMzc1di0yNTBoLTM3NXYtMTI1ek0yNTAgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDExMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InRob3JuIiB1bmljb2RlPSImI3hmZTsiIApkPSJNMCAwdi0yNTBoMjQ5bDEgMjUwaDM3NGwxIDEyNWgxMjR2NjI0aC0xMjV2MTI1aC0xMjR2LTc0OWwtMjUxIC0xbDEgNjI2aDI0OXYxMjRoLTI1MHYyNTBoLTI0OXYtMTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ieWRpZXJlc2lzIiB1bmljb2RlPSImI3hmZjsiIApkPSJNMCAtMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgLTM3NWg0OTlsMSAxMjVoMTI0djExMjRoLTI0OXYtNzQ5bC0yNTEgLTF2NzUwaC0yNDl2LTc0OWgxMjV2LTEyNWgzNzV2LTI1MGgtMzc1di0xMjV6TTUwMCAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iQW1hY3JvbiIgdW5pY29kZT0iJiN4MTAwOyIgaG9yaXotYWR2LXg9IjI1MCIgCmQ9Ik0wIDBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Ik9FIiB1bmljb2RlPSImI3gxNTI7IiBob3Jpei1hZHYteD0iMTI1MCIgCmQ9Ik0xMjUgMGg5OTl2MTI0aC0zNzVsMSAzNzZoMjQ5djEyNGgtMjUwbDEgMzc2aDM3NHYxMjRoLTYyNHYtOTk5bC0yNTEgLTFsMSA4NzZoMjQ5djEyNGgtMzc0di0xMjRsLTEyNSAtMXYtODc0aDEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJvZSIgdW5pY29kZT0iJiN4MTUzOyIgaG9yaXotYWR2LXg9IjEzNzUiIApkPSJNMTI1IDBoOTk5djEyNGgtMzc1bDEgMjUxaDQ5OXYzNzRoLTEyNXYxMjVoLTEyNHYtMzc0bC0yNTEgLTFsMSAyNTFoMjQ5djEyNGgtNDk5di03NDlsLTI1MSAtMWwxIDYyNmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi02MjRoMTI1di0xMjV6TTExMjUgMTI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJTY2Fyb24iIHVuaWNvZGU9IiYjeDE2MDsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMTI1IDBoMzc0bDEgMTI1aDEyNHYzNzRoLTEyNXYxMjVoLTEyNXYxMjVoLTEyNWwxIDI1MWgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi0zNzRoMTI1di0xMjVoMTI1di0xMjVoMTI1di0yNTBoLTI1MHYtMTI1ek0wIDEyNWgxMjR2MTI0aC0xMjR2LTEyNHpNNTAwIDg3NWgxMjR2MTI0aC0xMjR2LTEyNHpNMjUwIDEyNTBoMjQ5bDEgMTI1aDEyNHYxMjRoLTQ5OXYtMTI0aDEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJzY2Fyb24iIHVuaWNvZGU9IiYjeDE2MTsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMTI1IDBoMzc0bDEgMTI1aDEyNHYyNDloLTEyNXYxMjVoLTEyNXYxMjVoLTEyNWwxIDEyNmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi0yNDloMTI1di0xMjVoMTI1di0xMjVoMTI1di0xMjVoLTI1MHYtMTI1ek0wIDEyNWgxMjR2MTI0aC0xMjR2LTEyNHpNNTAwIDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMjUwIDEwMDBoMjQ5bDEgMTI1aDEyNHYxMjRoLTQ5OXYtMTI0aDEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJZZGllcmVzaXMiIHVuaWNvZGU9IiYjeDE3ODsiIApkPSJNMjUwIDBoMjQ5bDEgNTAwaDEyNGwxIDEyNWgxMjR2NDk5aC0yNDl2LTQ5OWwtMjUxIC0xdjUwMGgtMjQ5di00OTloMTI1di0xMjVoMTI1di01MDB6TTEyNSAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMTI1MGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZmxvcmluIiB1bmljb2RlPSImI3gxOTI7IiBob3Jpei1hZHYteD0iNjI1IiAKZD0iTTAgLTI1MGgyNDlsMSAxMjVoMTI0bDEgNzUwaDEyNHYxMjRoLTEyNWwxIDI1MWgxMjR2MTI0aC0yNDl2LTEyNGwtMTI1IC0xdi0yNDlsLTEyNSAtMXYtMTI0aDEyNXYtNzUwaC0xMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iY2lyY3VtZmxleCIgdW5pY29kZT0iJiN4MmM2OyIgaG9yaXotYWR2LXg9IjYyNSIgCmQ9Ik0wIDEwMDBoNDk5djEyNGgtMTI1djEyNWgtMjQ5di0xMjRoLTEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ0aWxkZSIgdW5pY29kZT0iJiN4MmRjOyIgCmQ9Ik0wIDEwMDBoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAxMDAwaDI0OXYxMjRoLTI0OXYtMTI0ek0yNTAgMTEyNWgxMjR2MTI0aC0yNDl2LTEyNGgxMjV6TTYyNSAxMTI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJlbmRhc2giIHVuaWNvZGU9IiYjeDIwMTM7IiBob3Jpei1hZHYteD0iNjI1IiAKZD0iTTI1MCAzNzVoMjQ5djEyNGgtNDk5di0xMjRoMjUweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJlbWRhc2giIHVuaWNvZGU9IiYjeDIwMTQ7IiBob3Jpei1hZHYteD0iMTEyNSIgCmQ9Ik03NTAgMzc1aDI0OXYxMjRoLTk5OXYtMTI0aDc1MHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icXVvdGVsZWZ0IiB1bmljb2RlPSImI3gyMDE4OyIgaG9yaXotYWR2LXg9IjM3NSIgCmQ9Ik0wIDYyNWgyNDl2MjQ5aC0xMjV2MTI1aC0xMjR2LTM3NHpNMTI1IDEwMDBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InF1b3RlcmlnaHQiIHVuaWNvZGU9IiYjeDIwMTk7IiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgNjI1aDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgNzUwaDEyNHYzNzRoLTI0OXYtMjQ5aDEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJxdW90ZXNpbmdsYmFzZSIgdW5pY29kZT0iJiN4MjAxYTsiIGhvcml6LWFkdi14PSIzNzUiIApkPSJNMCAwaDEyNXYtMTI1aDEyNHYzNzRoLTI0OXYtMjQ5ek0wIC0yNTBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InF1b3RlZGJsbGVmdCIgdW5pY29kZT0iJiN4MjAxYzsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMzc1IDYyNWgyNDl2MjQ5aC0xMjV2MTI1aC0xMjR2LTM3NHpNMTI1IDYyNWgxMjR2MjQ5aC0xMjV2MTI1aC0xMjR2LTM3NGgxMjV6TTEyNSAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icXVvdGVkYmxyaWdodCIgdW5pY29kZT0iJiN4MjAxZDsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMzc1IDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6TTEyNSA3NTBoMTI0djM3NGgtMjQ5di0yNDloMTI1di0xMjV6TTUwMCA3NTBoMTI0djM3NGgtMjQ5di0yNDloMTI1di0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InF1b3RlZGJsYmFzZSIgdW5pY29kZT0iJiN4MjAxZTsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMCAwaDEyNXYtMTI1aDEyNHYzNzRoLTI0OXYtMjQ5ek0wIC0yNTBoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAtMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMGgxMjV2LTEyNWgxMjR2Mzc0aC0yNDl2LTI0OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZGFnZ2VyIiB1bmljb2RlPSImI3gyMDIwOyIgaG9yaXotYWR2LXg9IjUwMCIgCmQ9Ik0xMjUgNTAwaDEyNGwxIDM3NWgxMjR2MTI0aC0xMjV2MTI1aC0xMjR2LTEyNGwtMTI1IC0xdi0xMjRoMTI1di0zNzV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImRhZ2dlcmRibCIgdW5pY29kZT0iJiN4MjAyMTsiIGhvcml6LWFkdi14PSI1MDAiIApkPSJNMTI1IDM3NWgxMjRsMSAxMjVoMTI0djEyNGgtMTI1bDEgMjUxaDEyNHYxMjRoLTEyNXYxMjVoLTEyNHYtMTI0bC0xMjUgLTF2LTEyNGgxMjV2LTI1MGwtMTI1IC0xdi0xMjRoMTI1di0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImJ1bGxldCIgdW5pY29kZT0iJiN4MjAyMjsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMTI1IDI1MGgzNzRsMSAxMjVoMTI0djM3NGgtMTI1djEyNWgtMzc0di0xMjRsLTEyNSAtMXYtMzc0aDEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJlbGxpcHNpcyIgdW5pY29kZT0iJiN4MjAyNjsiIGhvcml6LWFkdi14PSIxMzc1IiAKZD0iTTAgMGgyNDl2MjQ5aC0yNDl2LTI0OXpNNTAwIDBoMjQ5djI0OWgtMjQ5di0yNDl6TTEwMDAgMGgyNDl2MjQ5aC0yNDl2LTI0OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icGVydGhvdXNhbmQiIHVuaWNvZGU9IiYjeDIwMzA7IiBob3Jpei1hZHYteD0iMTc1MCIgCmQ9Ik0yNTAgMGgxMjR2MTI0aC0xMjR2LTEyNHpNNzUwIDBoMjQ5djEyNGgtMjQ5di0xMjR6TTEyNTAgMGgyNDl2MTI0aC0yNDl2LTEyNHpNMTEyNSAxMjVoMTI0djI0OWgtMjQ5di0yNDloMTI1ek02MjUgMTI1aDEyNHYyNDloLTEyNHYtMjQ5ek0zNzUgMTI1aDEyNHYyNDloLTEyNHYtMjQ5ek0xNTAwIDEyNWgxMjR2MjQ5aC0xMjR2LTI0OXpNMTM3NSAzNzVoMTI0djEyNGgtMjQ5di0xMjRoMTI1ek04NzUgMzc1aDEyNHYxMjRoLTI0OXYtMTI0CmgxMjV6TTUwMCAzNzVoMTI0bDEgMjUwaDEyNGwxIDM3NWgxMjR2MTI0aC0zNzR2LTEyNGgxMjV2LTI1MGgtMTI1di0zNzV6TTI1MCA2MjVoMTI0djEyNGgtMjQ5di0xMjRoMTI1ek0wIDc1MGgxMjR2MjQ5aC0xMjR2LTI0OXpNMzc1IDc1MGgxMjR2MjQ5aC0xMjR2LTI0OXpNMTI1IDEwMDBoMjQ5djEyNGgtMjQ5di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Imd1aWxzaW5nbGxlZnQiIHVuaWNvZGU9IiYjeDIwMzk7IiBob3Jpei1hZHYteD0iNjI1IiAKZD0iTTM3NSAwaDEyNHYxMjRoLTEyNHYtMTI0ek0yNTAgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0wIDM3NWgxMjR2MTI0aC0xMjR2LTEyNHpNMTI1IDUwMGgxMjR2MTI0aC0xMjR2LTEyNHpNMjUwIDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDc1MGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZ3VpbHNpbmdscmlnaHQiIHVuaWNvZGU9IiYjeDIwM2E7IiBob3Jpei1hZHYteD0iNjI1IiAKZD0iTTAgMGgxMjRsMSAxMjVoMTI0bDEgMTI1aDEyNGwxIDEyNWgxMjR2MTI0aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjR2LTI0OWgxMjV2LTEyNWgxMjV2LTEyNWwtMTI1IC0xdi0xMjRoLTEyNXYtMjUweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ0cmFkZW1hcmsiIHVuaWNvZGU9IiYjeDIxMjI7IiBob3Jpei1hZHYteD0iMTI1MCIgCmQ9Ik01MDAgNjI1aDEyNGwxIDI1MGgxMjR2MTI0aC0xMjV2MTI1aC0xMjR2LTQ5OXpNMTI1IDYyNWgxMjRsMSAzNzVoMTI0djEyNGgtMzc0di0xMjRoMTI1di0zNzV6TTc1MCA3NTBoMjUwdi0xMjVoMTI0djQ5OWgtMTI0di0xMjRsLTEyNSAtMXYtMTI0aC0xMjV2LTEyNXoiIC8+CiAgPC9mb250Pgo8L2RlZnM+PC9zdmc+Cg=="

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(10);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// draggable
var interact = __webpack_require__(18);

exports.default = Vue.directive('draggable', {
  bind: function bind(el, binding) {
    interact(el, {
      allowFrom: el.querySelector(binding.value)
    }).draggable({

      restrict: {
        restriction: '#desktop',
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },

      onmove: dragMoveListener
    });

    function dragMoveListener(event) {
      var target = event.target,
          x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
          y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

      target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }

    window.dragMoveListener = dragMoveListener;
  }

});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// include
exports.default = Vue.directive('include', {
  bind: function bind(el, binding) {
    fetch(binding.value).then(function (response) {
      return response.text();
    }).then(function (text) {
      el.innerHTML = text;
    }).catch(console.error.bind(console));
  }
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = __webpack_require__(14);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: _data2.default,
  message: 'hello',
  content: {},
  drag: true,
  open: false
}; // data

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {"generic":{"message":"window","items":[{"icon":"document","name":"Document"},{"icon":"app","name":"App"},{"icon":"folder","name":"Folder"},{"icon":"document","name":"File"}]},"another":{"message":"another","items":[{"icon":"document","name":"Document"}]},"trash":{"message":"trash","items":[{"icon":"document","name":"Document"}]}}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _svg = __webpack_require__(1);

var _svg2 = _interopRequireDefault(_svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// components
exports.default = {
  'window': {
    template: '#window',
    props: ['post'],
    methods: {
      svg: _svg2.default
    }
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (event) {
  this.clear();
  event.target.classList.add('is-active');
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (event) {
  document.querySelectorAll('.has-dropdown').forEach(function (selector) {
    selector.classList.remove('is-active');
  });
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * interact.js v1.2.8
 *
 * Copyright (c) 2012-2015 Taye Adeyemi <dev@taye.me>
 * Open source under the MIT License.
 * https://raw.github.com/taye/interact.js/master/LICENSE
 */
(function (realWindow) {
    'use strict';

    // return early if there's no window to work with (eg. Node.js)
    if (!realWindow) { return; }

    var // get wrapped window if using Shadow DOM polyfill
        window = (function () {
            // create a TextNode
            var el = realWindow.document.createTextNode('');

            // check if it's wrapped by a polyfill
            if (el.ownerDocument !== realWindow.document
                && typeof realWindow.wrap === 'function'
                && realWindow.wrap(el) === el) {
                // return wrapped window
                return realWindow.wrap(realWindow);
            }

            // no Shadow DOM polyfil or native implementation
            return realWindow;
        }()),

        document           = window.document,
        DocumentFragment   = window.DocumentFragment   || blank,
        SVGElement         = window.SVGElement         || blank,
        SVGSVGElement      = window.SVGSVGElement      || blank,
        SVGElementInstance = window.SVGElementInstance || blank,
        HTMLElement        = window.HTMLElement        || window.Element,

        PointerEvent = (window.PointerEvent || window.MSPointerEvent),
        pEventTypes,

        hypot = Math.hypot || function (x, y) { return Math.sqrt(x * x + y * y); },

        tmpXY = {},     // reduce object creation in getXY()

        documents       = [],   // all documents being listened to

        interactables   = [],   // all set interactables
        interactions    = [],   // all interactions

        dynamicDrop     = false,

        // {
        //      type: {
        //          selectors: ['selector', ...],
        //          contexts : [document, ...],
        //          listeners: [[listener, useCapture], ...]
        //      }
        //  }
        delegatedEvents = {},

        defaultOptions = {
            base: {
                accept        : null,
                actionChecker : null,
                styleCursor   : true,
                preventDefault: 'auto',
                origin        : { x: 0, y: 0 },
                deltaSource   : 'page',
                allowFrom     : null,
                ignoreFrom    : null,
                _context      : document,
                dropChecker   : null
            },

            drag: {
                enabled: false,
                manualStart: true,
                max: Infinity,
                maxPerElement: 1,

                snap: null,
                restrict: null,
                inertia: null,
                autoScroll: null,

                axis: 'xy'
            },

            drop: {
                enabled: false,
                accept: null,
                overlap: 'pointer'
            },

            resize: {
                enabled: false,
                manualStart: false,
                max: Infinity,
                maxPerElement: 1,

                snap: null,
                restrict: null,
                inertia: null,
                autoScroll: null,

                square: false,
                preserveAspectRatio: false,
                axis: 'xy',

                // use default margin
                margin: NaN,

                // object with props left, right, top, bottom which are
                // true/false values to resize when the pointer is over that edge,
                // CSS selectors to match the handles for each direction
                // or the Elements for each handle
                edges: null,

                // a value of 'none' will limit the resize rect to a minimum of 0x0
                // 'negate' will alow the rect to have negative width/height
                // 'reposition' will keep the width/height positive by swapping
                // the top and bottom edges and/or swapping the left and right edges
                invert: 'none'
            },

            gesture: {
                manualStart: false,
                enabled: false,
                max: Infinity,
                maxPerElement: 1,

                restrict: null
            },

            perAction: {
                manualStart: false,
                max: Infinity,
                maxPerElement: 1,

                snap: {
                    enabled     : false,
                    endOnly     : false,
                    range       : Infinity,
                    targets     : null,
                    offsets     : null,

                    relativePoints: null
                },

                restrict: {
                    enabled: false,
                    endOnly: false
                },

                autoScroll: {
                    enabled     : false,
                    container   : null,     // the item that is scrolled (Window or HTMLElement)
                    margin      : 60,
                    speed       : 300       // the scroll speed in pixels per second
                },

                inertia: {
                    enabled          : false,
                    resistance       : 10,    // the lambda in exponential decay
                    minSpeed         : 100,   // target speed must be above this for inertia to start
                    endSpeed         : 10,    // the speed at which inertia is slow enough to stop
                    allowResume      : true,  // allow resuming an action in inertia phase
                    zeroResumeDelta  : true,  // if an action is resumed after launch, set dx/dy to 0
                    smoothEndDuration: 300    // animate to snap/restrict endOnly if there's no inertia
                }
            },

            _holdDuration: 600
        },

        // Things related to autoScroll
        autoScroll = {
            interaction: null,
            i: null,    // the handle returned by window.setInterval
            x: 0, y: 0, // Direction each pulse is to scroll in

            // scroll the window by the values in scroll.x/y
            scroll: function () {
                var options = autoScroll.interaction.target.options[autoScroll.interaction.prepared.name].autoScroll,
                    container = options.container || getWindow(autoScroll.interaction.element),
                    now = new Date().getTime(),
                    // change in time in seconds
                    dtx = (now - autoScroll.prevTimeX) / 1000,
                    dty = (now - autoScroll.prevTimeY) / 1000,
                    vx, vy, sx, sy;

                // displacement
                if (options.velocity) {
                  vx = options.velocity.x;
                  vy = options.velocity.y;
                }
                else {
                  vx = vy = options.speed
                }
 
                sx = vx * dtx;
                sy = vy * dty;

                if (sx >= 1 || sy >= 1) {
                    if (isWindow(container)) {
                        container.scrollBy(autoScroll.x * sx, autoScroll.y * sy);
                    }
                    else if (container) {
                        container.scrollLeft += autoScroll.x * sx;
                        container.scrollTop  += autoScroll.y * sy;
                    }

                    if (sx >=1) autoScroll.prevTimeX = now;
                    if (sy >= 1) autoScroll.prevTimeY = now;
                }

                if (autoScroll.isScrolling) {
                    cancelFrame(autoScroll.i);
                    autoScroll.i = reqFrame(autoScroll.scroll);
                }
            },

            isScrolling: false,
            prevTimeX: 0,
            prevTimeY: 0,

            start: function (interaction) {
                autoScroll.isScrolling = true;
                cancelFrame(autoScroll.i);

                autoScroll.interaction = interaction;
                autoScroll.prevTimeX = new Date().getTime();
                autoScroll.prevTimeY = new Date().getTime();
                autoScroll.i = reqFrame(autoScroll.scroll);
            },

            stop: function () {
                autoScroll.isScrolling = false;
                cancelFrame(autoScroll.i);
            }
        },

        // Does the browser support touch input?
        supportsTouch = (('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch),

        // Does the browser support PointerEvents
        // Avoid PointerEvent bugs introduced in Chrome 55
        supportsPointerEvent = PointerEvent && !/Chrome/.test(navigator.userAgent),

        // Less Precision with touch input
        margin = supportsTouch || supportsPointerEvent? 20: 10,

        pointerMoveTolerance = 1,

        // for ignoring browser's simulated mouse events
        prevTouchTime = 0,

        // Allow this many interactions to happen simultaneously
        maxInteractions = Infinity,

        // Check if is IE9 or older
        actionCursors = (document.all && !window.atob) ? {
            drag    : 'move',
            resizex : 'e-resize',
            resizey : 's-resize',
            resizexy: 'se-resize',

            resizetop        : 'n-resize',
            resizeleft       : 'w-resize',
            resizebottom     : 's-resize',
            resizeright      : 'e-resize',
            resizetopleft    : 'se-resize',
            resizebottomright: 'se-resize',
            resizetopright   : 'ne-resize',
            resizebottomleft : 'ne-resize',

            gesture : ''
        } : {
            drag    : 'move',
            resizex : 'ew-resize',
            resizey : 'ns-resize',
            resizexy: 'nwse-resize',

            resizetop        : 'ns-resize',
            resizeleft       : 'ew-resize',
            resizebottom     : 'ns-resize',
            resizeright      : 'ew-resize',
            resizetopleft    : 'nwse-resize',
            resizebottomright: 'nwse-resize',
            resizetopright   : 'nesw-resize',
            resizebottomleft : 'nesw-resize',

            gesture : ''
        },

        actionIsEnabled = {
            drag   : true,
            resize : true,
            gesture: true
        },

        // because Webkit and Opera still use 'mousewheel' event type
        wheelEvent = 'onmousewheel' in document? 'mousewheel': 'wheel',

        eventTypes = [
            'dragstart',
            'dragmove',
            'draginertiastart',
            'dragend',
            'dragenter',
            'dragleave',
            'dropactivate',
            'dropdeactivate',
            'dropmove',
            'drop',
            'resizestart',
            'resizemove',
            'resizeinertiastart',
            'resizeend',
            'gesturestart',
            'gesturemove',
            'gestureinertiastart',
            'gestureend',

            'down',
            'move',
            'up',
            'cancel',
            'tap',
            'doubletap',
            'hold'
        ],

        globalEvents = {},

        // Opera Mobile must be handled differently
        isOperaMobile = navigator.appName == 'Opera' &&
            supportsTouch &&
            navigator.userAgent.match('Presto'),

        // scrolling doesn't change the result of getClientRects on iOS 7
        isIOS7 = (/iP(hone|od|ad)/.test(navigator.platform)
                         && /OS 7[^\d]/.test(navigator.appVersion)),

        // prefix matchesSelector
        prefixedMatchesSelector = 'matches' in Element.prototype?
                'matches': 'webkitMatchesSelector' in Element.prototype?
                    'webkitMatchesSelector': 'mozMatchesSelector' in Element.prototype?
                        'mozMatchesSelector': 'oMatchesSelector' in Element.prototype?
                            'oMatchesSelector': 'msMatchesSelector',

        // will be polyfill function if browser is IE8
        ie8MatchesSelector,

        // native requestAnimationFrame or polyfill
        reqFrame = realWindow.requestAnimationFrame,
        cancelFrame = realWindow.cancelAnimationFrame,

        // Events wrapper
        events = (function () {
            var useAttachEvent = ('attachEvent' in window) && !('addEventListener' in window),
                addEvent       = useAttachEvent?  'attachEvent': 'addEventListener',
                removeEvent    = useAttachEvent?  'detachEvent': 'removeEventListener',
                on             = useAttachEvent? 'on': '',

                elements          = [],
                targets           = [],
                attachedListeners = [];

            function add (element, type, listener, useCapture) {
                var elementIndex = indexOf(elements, element),
                    target = targets[elementIndex];

                if (!target) {
                    target = {
                        events: {},
                        typeCount: 0
                    };

                    elementIndex = elements.push(element) - 1;
                    targets.push(target);

                    attachedListeners.push((useAttachEvent ? {
                            supplied: [],
                            wrapped : [],
                            useCount: []
                        } : null));
                }

                if (!target.events[type]) {
                    target.events[type] = [];
                    target.typeCount++;
                }

                if (!contains(target.events[type], listener)) {
                    var ret;

                    if (useAttachEvent) {
                        var listeners = attachedListeners[elementIndex],
                            listenerIndex = indexOf(listeners.supplied, listener);

                        var wrapped = listeners.wrapped[listenerIndex] || function (event) {
                            if (!event.immediatePropagationStopped) {
                                event.target = event.srcElement;
                                event.currentTarget = element;

                                event.preventDefault = event.preventDefault || preventDef;
                                event.stopPropagation = event.stopPropagation || stopProp;
                                event.stopImmediatePropagation = event.stopImmediatePropagation || stopImmProp;

                                if (/mouse|click/.test(event.type)) {
                                    event.pageX = event.clientX + getWindow(element).document.documentElement.scrollLeft;
                                    event.pageY = event.clientY + getWindow(element).document.documentElement.scrollTop;
                                }

                                listener(event);
                            }
                        };

                        ret = element[addEvent](on + type, wrapped, Boolean(useCapture));

                        if (listenerIndex === -1) {
                            listeners.supplied.push(listener);
                            listeners.wrapped.push(wrapped);
                            listeners.useCount.push(1);
                        }
                        else {
                            listeners.useCount[listenerIndex]++;
                        }
                    }
                    else {
                        ret = element[addEvent](type, listener, useCapture || false);
                    }
                    target.events[type].push(listener);

                    return ret;
                }
            }

            function remove (element, type, listener, useCapture) {
                var i,
                    elementIndex = indexOf(elements, element),
                    target = targets[elementIndex],
                    listeners,
                    listenerIndex,
                    wrapped = listener;

                if (!target || !target.events) {
                    return;
                }

                if (useAttachEvent) {
                    listeners = attachedListeners[elementIndex];
                    listenerIndex = indexOf(listeners.supplied, listener);
                    wrapped = listeners.wrapped[listenerIndex];
                }

                if (type === 'all') {
                    for (type in target.events) {
                        if (target.events.hasOwnProperty(type)) {
                            remove(element, type, 'all');
                        }
                    }
                    return;
                }

                if (target.events[type]) {
                    var len = target.events[type].length;

                    if (listener === 'all') {
                        for (i = 0; i < len; i++) {
                            remove(element, type, target.events[type][i], Boolean(useCapture));
                        }
                        return;
                    } else {
                        for (i = 0; i < len; i++) {
                            if (target.events[type][i] === listener) {
                                element[removeEvent](on + type, wrapped, useCapture || false);
                                target.events[type].splice(i, 1);

                                if (useAttachEvent && listeners) {
                                    listeners.useCount[listenerIndex]--;
                                    if (listeners.useCount[listenerIndex] === 0) {
                                        listeners.supplied.splice(listenerIndex, 1);
                                        listeners.wrapped.splice(listenerIndex, 1);
                                        listeners.useCount.splice(listenerIndex, 1);
                                    }
                                }

                                break;
                            }
                        }
                    }

                    if (target.events[type] && target.events[type].length === 0) {
                        target.events[type] = null;
                        target.typeCount--;
                    }
                }

                if (!target.typeCount) {
                    targets.splice(elementIndex, 1);
                    elements.splice(elementIndex, 1);
                    attachedListeners.splice(elementIndex, 1);
                }
            }

            function preventDef () {
                this.returnValue = false;
            }

            function stopProp () {
                this.cancelBubble = true;
            }

            function stopImmProp () {
                this.cancelBubble = true;
                this.immediatePropagationStopped = true;
            }

            return {
                add: add,
                remove: remove,
                useAttachEvent: useAttachEvent,

                _elements: elements,
                _targets: targets,
                _attachedListeners: attachedListeners
            };
        }());

    function blank () {}

    function isElement (o) {
        if (!o || (typeof o !== 'object')) { return false; }

        var _window = getWindow(o) || window;

        return (/object|function/.test(typeof _window.Element)
            ? o instanceof _window.Element //DOM2
            : o.nodeType === 1 && typeof o.nodeName === "string");
    }
    function isWindow (thing) { return thing === window || !!(thing && thing.Window) && (thing instanceof thing.Window); }
    function isDocFrag (thing) { return !!thing && thing instanceof DocumentFragment; }
    function isArray (thing) {
        return isObject(thing)
                && (typeof thing.length !== undefined)
                && isFunction(thing.splice);
    }
    function isObject   (thing) { return !!thing && (typeof thing === 'object'); }
    function isFunction (thing) { return typeof thing === 'function'; }
    function isNumber   (thing) { return typeof thing === 'number'  ; }
    function isBool     (thing) { return typeof thing === 'boolean' ; }
    function isString   (thing) { return typeof thing === 'string'  ; }

    function trySelector (value) {
        if (!isString(value)) { return false; }

        // an exception will be raised if it is invalid
        document.querySelector(value);
        return true;
    }

    function extend (dest, source) {
        for (var prop in source) {
            dest[prop] = source[prop];
        }
        return dest;
    }

    var prefixedPropREs = {
      webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/
    };

    function pointerExtend (dest, source) {
        for (var prop in source) {
          var deprecated = false;

          // skip deprecated prefixed properties
          for (var vendor in prefixedPropREs) {
            if (prop.indexOf(vendor) === 0 && prefixedPropREs[vendor].test(prop)) {
              deprecated = true;
              break;
            }
          }

          if (!deprecated) {
            dest[prop] = source[prop];
          }
        }
        return dest;
    }

    function copyCoords (dest, src) {
        dest.page = dest.page || {};
        dest.page.x = src.page.x;
        dest.page.y = src.page.y;

        dest.client = dest.client || {};
        dest.client.x = src.client.x;
        dest.client.y = src.client.y;

        dest.timeStamp = src.timeStamp;
    }

    function setEventXY (targetObj, pointers, interaction) {
        var pointer = (pointers.length > 1
                       ? pointerAverage(pointers)
                       : pointers[0]);

        getPageXY(pointer, tmpXY, interaction);
        targetObj.page.x = tmpXY.x;
        targetObj.page.y = tmpXY.y;

        getClientXY(pointer, tmpXY, interaction);
        targetObj.client.x = tmpXY.x;
        targetObj.client.y = tmpXY.y;

        targetObj.timeStamp = new Date().getTime();
    }

    function setEventDeltas (targetObj, prev, cur) {
        targetObj.page.x     = cur.page.x      - prev.page.x;
        targetObj.page.y     = cur.page.y      - prev.page.y;
        targetObj.client.x   = cur.client.x    - prev.client.x;
        targetObj.client.y   = cur.client.y    - prev.client.y;
        targetObj.timeStamp = new Date().getTime() - prev.timeStamp;

        // set pointer velocity
        var dt = Math.max(targetObj.timeStamp / 1000, 0.001);
        targetObj.page.speed   = hypot(targetObj.page.x, targetObj.page.y) / dt;
        targetObj.page.vx      = targetObj.page.x / dt;
        targetObj.page.vy      = targetObj.page.y / dt;

        targetObj.client.speed = hypot(targetObj.client.x, targetObj.page.y) / dt;
        targetObj.client.vx    = targetObj.client.x / dt;
        targetObj.client.vy    = targetObj.client.y / dt;
    }

    function isNativePointer (pointer) {
        return (pointer instanceof window.Event
            || (supportsTouch && window.Touch && pointer instanceof window.Touch));
    }

    // Get specified X/Y coords for mouse or event.touches[0]
    function getXY (type, pointer, xy) {
        xy = xy || {};
        type = type || 'page';

        xy.x = pointer[type + 'X'];
        xy.y = pointer[type + 'Y'];

        return xy;
    }

    function getPageXY (pointer, page) {
        page = page || {};

        // Opera Mobile handles the viewport and scrolling oddly
        if (isOperaMobile && isNativePointer(pointer)) {
            getXY('screen', pointer, page);

            page.x += window.scrollX;
            page.y += window.scrollY;
        }
        else {
            getXY('page', pointer, page);
        }

        return page;
    }

    function getClientXY (pointer, client) {
        client = client || {};

        if (isOperaMobile && isNativePointer(pointer)) {
            // Opera Mobile handles the viewport and scrolling oddly
            getXY('screen', pointer, client);
        }
        else {
          getXY('client', pointer, client);
        }

        return client;
    }

    function getScrollXY (win) {
        win = win || window;
        return {
            x: win.scrollX || win.document.documentElement.scrollLeft,
            y: win.scrollY || win.document.documentElement.scrollTop
        };
    }

    function getPointerId (pointer) {
        return isNumber(pointer.pointerId)? pointer.pointerId : pointer.identifier;
    }

    function getActualElement (element) {
        return (element instanceof SVGElementInstance
            ? element.correspondingUseElement
            : element);
    }

    function getWindow (node) {
        if (isWindow(node)) {
            return node;
        }

        var rootNode = (node.ownerDocument || node);

        return rootNode.defaultView || rootNode.parentWindow || window;
    }

    function getElementClientRect (element) {
        var clientRect = (element instanceof SVGElement
                            ? element.getBoundingClientRect()
                            : element.getClientRects()[0]);

        return clientRect && {
            left  : clientRect.left,
            right : clientRect.right,
            top   : clientRect.top,
            bottom: clientRect.bottom,
            width : clientRect.width || clientRect.right - clientRect.left,
            height: clientRect.height || clientRect.bottom - clientRect.top
        };
    }

    function getElementRect (element) {
        var clientRect = getElementClientRect(element);

        if (!isIOS7 && clientRect) {
            var scroll = getScrollXY(getWindow(element));

            clientRect.left   += scroll.x;
            clientRect.right  += scroll.x;
            clientRect.top    += scroll.y;
            clientRect.bottom += scroll.y;
        }

        return clientRect;
    }

    function getTouchPair (event) {
        var touches = [];

        // array of touches is supplied
        if (isArray(event)) {
            touches[0] = event[0];
            touches[1] = event[1];
        }
        // an event
        else {
            if (event.type === 'touchend') {
                if (event.touches.length === 1) {
                    touches[0] = event.touches[0];
                    touches[1] = event.changedTouches[0];
                }
                else if (event.touches.length === 0) {
                    touches[0] = event.changedTouches[0];
                    touches[1] = event.changedTouches[1];
                }
            }
            else {
                touches[0] = event.touches[0];
                touches[1] = event.touches[1];
            }
        }

        return touches;
    }

    function pointerAverage (pointers) {
        var average = {
            pageX  : 0,
            pageY  : 0,
            clientX: 0,
            clientY: 0,
            screenX: 0,
            screenY: 0
        };
        var prop;

        for (var i = 0; i < pointers.length; i++) {
            for (prop in average) {
                average[prop] += pointers[i][prop];
            }
        }
        for (prop in average) {
            average[prop] /= pointers.length;
        }

        return average;
    }

    function touchBBox (event) {
        if (!event.length && !(event.touches && event.touches.length > 1)) {
            return;
        }

        var touches = getTouchPair(event),
            minX = Math.min(touches[0].pageX, touches[1].pageX),
            minY = Math.min(touches[0].pageY, touches[1].pageY),
            maxX = Math.max(touches[0].pageX, touches[1].pageX),
            maxY = Math.max(touches[0].pageY, touches[1].pageY);

        return {
            x: minX,
            y: minY,
            left: minX,
            top: minY,
            width: maxX - minX,
            height: maxY - minY
        };
    }

    function touchDistance (event, deltaSource) {
        deltaSource = deltaSource || defaultOptions.deltaSource;

        var sourceX = deltaSource + 'X',
            sourceY = deltaSource + 'Y',
            touches = getTouchPair(event);


        var dx = touches[0][sourceX] - touches[1][sourceX],
            dy = touches[0][sourceY] - touches[1][sourceY];

        return hypot(dx, dy);
    }

    function touchAngle (event, prevAngle, deltaSource) {
        deltaSource = deltaSource || defaultOptions.deltaSource;

        var sourceX = deltaSource + 'X',
            sourceY = deltaSource + 'Y',
            touches = getTouchPair(event),
            dx = touches[0][sourceX] - touches[1][sourceX],
            dy = touches[0][sourceY] - touches[1][sourceY],
            angle = 180 * Math.atan(dy / dx) / Math.PI;

        if (isNumber(prevAngle)) {
            var dr = angle - prevAngle,
                drClamped = dr % 360;

            if (drClamped > 315) {
                angle -= 360 + (angle / 360)|0 * 360;
            }
            else if (drClamped > 135) {
                angle -= 180 + (angle / 360)|0 * 360;
            }
            else if (drClamped < -315) {
                angle += 360 + (angle / 360)|0 * 360;
            }
            else if (drClamped < -135) {
                angle += 180 + (angle / 360)|0 * 360;
            }
        }

        return  angle;
    }

    function getOriginXY (interactable, element) {
        var origin = interactable
                ? interactable.options.origin
                : defaultOptions.origin;

        if (origin === 'parent') {
            origin = parentElement(element);
        }
        else if (origin === 'self') {
            origin = interactable.getRect(element);
        }
        else if (trySelector(origin)) {
            origin = closest(element, origin) || { x: 0, y: 0 };
        }

        if (isFunction(origin)) {
            origin = origin(interactable && element);
        }

        if (isElement(origin))  {
            origin = getElementRect(origin);
        }

        origin.x = ('x' in origin)? origin.x : origin.left;
        origin.y = ('y' in origin)? origin.y : origin.top;

        return origin;
    }

    // http://stackoverflow.com/a/5634528/2280888
    function _getQBezierValue(t, p1, p2, p3) {
        var iT = 1 - t;
        return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
    }

    function getQuadraticCurvePoint(startX, startY, cpX, cpY, endX, endY, position) {
        return {
            x:  _getQBezierValue(position, startX, cpX, endX),
            y:  _getQBezierValue(position, startY, cpY, endY)
        };
    }

    // http://gizma.com/easing/
    function easeOutQuad (t, b, c, d) {
        t /= d;
        return -c * t*(t-2) + b;
    }

    function nodeContains (parent, child) {
        while (child) {
            if (child === parent) {
                return true;
            }

            child = child.parentNode;
        }

        return false;
    }

    function closest (child, selector) {
        var parent = parentElement(child);

        while (isElement(parent)) {
            if (matchesSelector(parent, selector)) { return parent; }

            parent = parentElement(parent);
        }

        return null;
    }

    function parentElement (node) {
        var parent = node.parentNode;

        if (isDocFrag(parent)) {
            // skip past #shado-root fragments
            while ((parent = parent.host) && isDocFrag(parent)) {}

            return parent;
        }

        return parent;
    }

    function inContext (interactable, element) {
        return interactable._context === element.ownerDocument
                || nodeContains(interactable._context, element);
    }

    function testIgnore (interactable, interactableElement, element) {
        var ignoreFrom = interactable.options.ignoreFrom;

        if (!ignoreFrom || !isElement(element)) { return false; }

        if (isString(ignoreFrom)) {
            return matchesUpTo(element, ignoreFrom, interactableElement);
        }
        else if (isElement(ignoreFrom)) {
            return nodeContains(ignoreFrom, element);
        }

        return false;
    }

    function testAllow (interactable, interactableElement, element) {
        var allowFrom = interactable.options.allowFrom;

        if (!allowFrom) { return true; }

        if (!isElement(element)) { return false; }

        if (isString(allowFrom)) {
            return matchesUpTo(element, allowFrom, interactableElement);
        }
        else if (isElement(allowFrom)) {
            return nodeContains(allowFrom, element);
        }

        return false;
    }

    function checkAxis (axis, interactable) {
        if (!interactable) { return false; }

        var thisAxis = interactable.options.drag.axis;

        return (axis === 'xy' || thisAxis === 'xy' || thisAxis === axis);
    }

    function checkSnap (interactable, action) {
        var options = interactable.options;

        if (/^resize/.test(action)) {
            action = 'resize';
        }

        return options[action].snap && options[action].snap.enabled;
    }

    function checkRestrict (interactable, action) {
        var options = interactable.options;

        if (/^resize/.test(action)) {
            action = 'resize';
        }

        return  options[action].restrict && options[action].restrict.enabled;
    }

    function checkAutoScroll (interactable, action) {
        var options = interactable.options;

        if (/^resize/.test(action)) {
            action = 'resize';
        }

        return  options[action].autoScroll && options[action].autoScroll.enabled;
    }

    function withinInteractionLimit (interactable, element, action) {
        var options = interactable.options,
            maxActions = options[action.name].max,
            maxPerElement = options[action.name].maxPerElement,
            activeInteractions = 0,
            targetCount = 0,
            targetElementCount = 0;

        for (var i = 0, len = interactions.length; i < len; i++) {
            var interaction = interactions[i],
                otherAction = interaction.prepared.name,
                active = interaction.interacting();

            if (!active) { continue; }

            activeInteractions++;

            if (activeInteractions >= maxInteractions) {
                return false;
            }

            if (interaction.target !== interactable) { continue; }

            targetCount += (otherAction === action.name)|0;

            if (targetCount >= maxActions) {
                return false;
            }

            if (interaction.element === element) {
                targetElementCount++;

                if (otherAction !== action.name || targetElementCount >= maxPerElement) {
                    return false;
                }
            }
        }

        return maxInteractions > 0;
    }

    // Test for the element that's "above" all other qualifiers
    function indexOfDeepestElement (elements) {
        var dropzone,
            deepestZone = elements[0],
            index = deepestZone? 0: -1,
            parent,
            deepestZoneParents = [],
            dropzoneParents = [],
            child,
            i,
            n;

        for (i = 1; i < elements.length; i++) {
            dropzone = elements[i];

            // an element might belong to multiple selector dropzones
            if (!dropzone || dropzone === deepestZone) {
                continue;
            }

            if (!deepestZone) {
                deepestZone = dropzone;
                index = i;
                continue;
            }

            // check if the deepest or current are document.documentElement or document.rootElement
            // - if the current dropzone is, do nothing and continue
            if (dropzone.parentNode === dropzone.ownerDocument) {
                continue;
            }
            // - if deepest is, update with the current dropzone and continue to next
            else if (deepestZone.parentNode === dropzone.ownerDocument) {
                deepestZone = dropzone;
                index = i;
                continue;
            }

            if (!deepestZoneParents.length) {
                parent = deepestZone;
                while (parent.parentNode && parent.parentNode !== parent.ownerDocument) {
                    deepestZoneParents.unshift(parent);
                    parent = parent.parentNode;
                }
            }

            // if this element is an svg element and the current deepest is
            // an HTMLElement
            if (deepestZone instanceof HTMLElement
                && dropzone instanceof SVGElement
                && !(dropzone instanceof SVGSVGElement)) {

                if (dropzone === deepestZone.parentNode) {
                    continue;
                }

                parent = dropzone.ownerSVGElement;
            }
            else {
                parent = dropzone;
            }

            dropzoneParents = [];

            while (parent.parentNode !== parent.ownerDocument) {
                dropzoneParents.unshift(parent);
                parent = parent.parentNode;
            }

            n = 0;

            // get (position of last common ancestor) + 1
            while (dropzoneParents[n] && dropzoneParents[n] === deepestZoneParents[n]) {
                n++;
            }

            var parents = [
                dropzoneParents[n - 1],
                dropzoneParents[n],
                deepestZoneParents[n]
            ];

            child = parents[0].lastChild;

            while (child) {
                if (child === parents[1]) {
                    deepestZone = dropzone;
                    index = i;
                    deepestZoneParents = [];

                    break;
                }
                else if (child === parents[2]) {
                    break;
                }

                child = child.previousSibling;
            }
        }

        return index;
    }

    function Interaction () {
        this.target          = null; // current interactable being interacted with
        this.element         = null; // the target element of the interactable
        this.dropTarget      = null; // the dropzone a drag target might be dropped into
        this.dropElement     = null; // the element at the time of checking
        this.prevDropTarget  = null; // the dropzone that was recently dragged away from
        this.prevDropElement = null; // the element at the time of checking

        this.prepared        = {     // action that's ready to be fired on next move event
            name : null,
            axis : null,
            edges: null
        };

        this.matches         = [];   // all selectors that are matched by target element
        this.matchElements   = [];   // corresponding elements

        this.inertiaStatus = {
            active       : false,
            smoothEnd    : false,
            ending       : false,

            startEvent: null,
            upCoords: {},

            xe: 0, ye: 0,
            sx: 0, sy: 0,

            t0: 0,
            vx0: 0, vys: 0,
            duration: 0,

            resumeDx: 0,
            resumeDy: 0,

            lambda_v0: 0,
            one_ve_v0: 0,
            i  : null
        };

        if (isFunction(Function.prototype.bind)) {
            this.boundInertiaFrame = this.inertiaFrame.bind(this);
            this.boundSmoothEndFrame = this.smoothEndFrame.bind(this);
        }
        else {
            var that = this;

            this.boundInertiaFrame = function () { return that.inertiaFrame(); };
            this.boundSmoothEndFrame = function () { return that.smoothEndFrame(); };
        }

        this.activeDrops = {
            dropzones: [],      // the dropzones that are mentioned below
            elements : [],      // elements of dropzones that accept the target draggable
            rects    : []       // the rects of the elements mentioned above
        };

        // keep track of added pointers
        this.pointers    = [];
        this.pointerIds  = [];
        this.downTargets = [];
        this.downTimes   = [];
        this.holdTimers  = [];

        // Previous native pointer move event coordinates
        this.prevCoords = {
            page     : { x: 0, y: 0 },
            client   : { x: 0, y: 0 },
            timeStamp: 0
        };
        // current native pointer move event coordinates
        this.curCoords = {
            page     : { x: 0, y: 0 },
            client   : { x: 0, y: 0 },
            timeStamp: 0
        };

        // Starting InteractEvent pointer coordinates
        this.startCoords = {
            page     : { x: 0, y: 0 },
            client   : { x: 0, y: 0 },
            timeStamp: 0
        };

        // Change in coordinates and time of the pointer
        this.pointerDelta = {
            page     : { x: 0, y: 0, vx: 0, vy: 0, speed: 0 },
            client   : { x: 0, y: 0, vx: 0, vy: 0, speed: 0 },
            timeStamp: 0
        };

        this.downEvent   = null;    // pointerdown/mousedown/touchstart event
        this.downPointer = {};

        this._eventTarget    = null;
        this._curEventTarget = null;

        this.prevEvent = null;      // previous action event
        this.tapTime   = 0;         // time of the most recent tap event
        this.prevTap   = null;

        this.startOffset    = { left: 0, right: 0, top: 0, bottom: 0 };
        this.restrictOffset = { left: 0, right: 0, top: 0, bottom: 0 };
        this.snapOffsets    = [];

        this.gesture = {
            start: { x: 0, y: 0 },

            startDistance: 0,   // distance between two touches of touchStart
            prevDistance : 0,
            distance     : 0,

            scale: 1,           // gesture.distance / gesture.startDistance

            startAngle: 0,      // angle of line joining two touches
            prevAngle : 0       // angle of the previous gesture event
        };

        this.snapStatus = {
            x       : 0, y       : 0,
            dx      : 0, dy      : 0,
            realX   : 0, realY   : 0,
            snappedX: 0, snappedY: 0,
            targets : [],
            locked  : false,
            changed : false
        };

        this.restrictStatus = {
            dx         : 0, dy         : 0,
            restrictedX: 0, restrictedY: 0,
            snap       : null,
            restricted : false,
            changed    : false
        };

        this.restrictStatus.snap = this.snapStatus;

        this.pointerIsDown   = false;
        this.pointerWasMoved = false;
        this.gesturing       = false;
        this.dragging        = false;
        this.resizing        = false;
        this.resizeAxes      = 'xy';

        this.mouse = false;

        interactions.push(this);
    }

    Interaction.prototype = {
        getPageXY  : function (pointer, xy) { return   getPageXY(pointer, xy, this); },
        getClientXY: function (pointer, xy) { return getClientXY(pointer, xy, this); },
        setEventXY : function (target, ptr) { return  setEventXY(target, ptr, this); },

        pointerOver: function (pointer, event, eventTarget) {
            if (this.prepared.name || !this.mouse) { return; }

            var curMatches = [],
                curMatchElements = [],
                prevTargetElement = this.element;

            this.addPointer(pointer);

            if (this.target
                && (testIgnore(this.target, this.element, eventTarget)
                    || !testAllow(this.target, this.element, eventTarget))) {
                // if the eventTarget should be ignored or shouldn't be allowed
                // clear the previous target
                this.target = null;
                this.element = null;
                this.matches = [];
                this.matchElements = [];
            }

            var elementInteractable = interactables.get(eventTarget),
                elementAction = (elementInteractable
                                 && !testIgnore(elementInteractable, eventTarget, eventTarget)
                                 && testAllow(elementInteractable, eventTarget, eventTarget)
                                 && validateAction(
                                     elementInteractable.getAction(pointer, event, this, eventTarget),
                                     elementInteractable));

            if (elementAction && !withinInteractionLimit(elementInteractable, eventTarget, elementAction)) {
                 elementAction = null;
            }

            function pushCurMatches (interactable, selector) {
                if (interactable
                    && inContext(interactable, eventTarget)
                    && !testIgnore(interactable, eventTarget, eventTarget)
                    && testAllow(interactable, eventTarget, eventTarget)
                    && matchesSelector(eventTarget, selector)) {

                    curMatches.push(interactable);
                    curMatchElements.push(eventTarget);
                }
            }

            if (elementAction) {
                this.target = elementInteractable;
                this.element = eventTarget;
                this.matches = [];
                this.matchElements = [];
            }
            else {
                interactables.forEachSelector(pushCurMatches);

                if (this.validateSelector(pointer, event, curMatches, curMatchElements)) {
                    this.matches = curMatches;
                    this.matchElements = curMatchElements;

                    this.pointerHover(pointer, event, this.matches, this.matchElements);
                    events.add(eventTarget,
                                        supportsPointerEvent? pEventTypes.move : 'mousemove',
                                        listeners.pointerHover);
                }
                else if (this.target) {
                    if (nodeContains(prevTargetElement, eventTarget)) {
                        this.pointerHover(pointer, event, this.matches, this.matchElements);
                        events.add(this.element,
                                            supportsPointerEvent? pEventTypes.move : 'mousemove',
                                            listeners.pointerHover);
                    }
                    else {
                        this.target = null;
                        this.element = null;
                        this.matches = [];
                        this.matchElements = [];
                    }
                }
            }
        },

        // Check what action would be performed on pointerMove target if a mouse
        // button were pressed and change the cursor accordingly
        pointerHover: function (pointer, event, eventTarget, curEventTarget, matches, matchElements) {
            var target = this.target;

            if (!this.prepared.name && this.mouse) {

                var action;

                // update pointer coords for defaultActionChecker to use
                this.setEventXY(this.curCoords, [pointer]);

                if (matches) {
                    action = this.validateSelector(pointer, event, matches, matchElements);
                }
                else if (target) {
                    action = validateAction(target.getAction(this.pointers[0], event, this, this.element), this.target);
                }

                if (target && target.options.styleCursor) {
                    if (action) {
                        target._doc.documentElement.style.cursor = getActionCursor(action);
                    }
                    else {
                        target._doc.documentElement.style.cursor = '';
                    }
                }
            }
            else if (this.prepared.name) {
                this.checkAndPreventDefault(event, target, this.element);
            }
        },

        pointerOut: function (pointer, event, eventTarget) {
            if (this.prepared.name) { return; }

            // Remove temporary event listeners for selector Interactables
            if (!interactables.get(eventTarget)) {
                events.remove(eventTarget,
                                       supportsPointerEvent? pEventTypes.move : 'mousemove',
                                       listeners.pointerHover);
            }

            if (this.target && this.target.options.styleCursor && !this.interacting()) {
                this.target._doc.documentElement.style.cursor = '';
            }
        },

        selectorDown: function (pointer, event, eventTarget, curEventTarget) {
            var that = this,
                // copy event to be used in timeout for IE8
                eventCopy = events.useAttachEvent? extend({}, event) : event,
                element = eventTarget,
                pointerIndex = this.addPointer(pointer),
                action;

            this.holdTimers[pointerIndex] = setTimeout(function () {
                that.pointerHold(events.useAttachEvent? eventCopy : pointer, eventCopy, eventTarget, curEventTarget);
            }, defaultOptions._holdDuration);

            this.pointerIsDown = true;

            // Check if the down event hits the current inertia target
            if (this.inertiaStatus.active && this.target.selector) {
                // climb up the DOM tree from the event target
                while (isElement(element)) {

                    // if this element is the current inertia target element
                    if (element === this.element
                        // and the prospective action is the same as the ongoing one
                        && validateAction(this.target.getAction(pointer, event, this, this.element), this.target).name === this.prepared.name) {

                        // stop inertia so that the next move will be a normal one
                        cancelFrame(this.inertiaStatus.i);
                        this.inertiaStatus.active = false;

                        this.collectEventTargets(pointer, event, eventTarget, 'down');
                        return;
                    }
                    element = parentElement(element);
                }
            }

            // do nothing if interacting
            if (this.interacting()) {
                this.collectEventTargets(pointer, event, eventTarget, 'down');
                return;
            }

            function pushMatches (interactable, selector, context) {
                var elements = ie8MatchesSelector
                    ? context.querySelectorAll(selector)
                    : undefined;

                if (inContext(interactable, element)
                    && !testIgnore(interactable, element, eventTarget)
                    && testAllow(interactable, element, eventTarget)
                    && matchesSelector(element, selector, elements)) {

                    that.matches.push(interactable);
                    that.matchElements.push(element);
                }
            }

            // update pointer coords for defaultActionChecker to use
            this.setEventXY(this.curCoords, [pointer]);
            this.downEvent = event;

            while (isElement(element) && !action) {
                this.matches = [];
                this.matchElements = [];

                interactables.forEachSelector(pushMatches);

                action = this.validateSelector(pointer, event, this.matches, this.matchElements);
                element = parentElement(element);
            }

            if (action) {
                this.prepared.name  = action.name;
                this.prepared.axis  = action.axis;
                this.prepared.edges = action.edges;

                this.collectEventTargets(pointer, event, eventTarget, 'down');

                return this.pointerDown(pointer, event, eventTarget, curEventTarget, action);
            }
            else {
                // do these now since pointerDown isn't being called from here
                this.downTimes[pointerIndex] = new Date().getTime();
                this.downTargets[pointerIndex] = eventTarget;
                pointerExtend(this.downPointer, pointer);

                copyCoords(this.prevCoords, this.curCoords);
                this.pointerWasMoved = false;
            }

            this.collectEventTargets(pointer, event, eventTarget, 'down');
        },

        // Determine action to be performed on next pointerMove and add appropriate
        // style and event Listeners
        pointerDown: function (pointer, event, eventTarget, curEventTarget, forceAction) {
            if (!forceAction && !this.inertiaStatus.active && this.pointerWasMoved && this.prepared.name) {
                this.checkAndPreventDefault(event, this.target, this.element);

                return;
            }

            this.pointerIsDown = true;
            this.downEvent = event;

            var pointerIndex = this.addPointer(pointer),
                action;

            // If it is the second touch of a multi-touch gesture, keep the
            // target the same and get a new action if a target was set by the
            // first touch
            if (this.pointerIds.length > 1 && this.target._element === this.element) {
                var newAction = validateAction(forceAction || this.target.getAction(pointer, event, this, this.element), this.target);

                if (withinInteractionLimit(this.target, this.element, newAction)) {
                    action = newAction;
                }

                this.prepared.name = null;
            }
            // Otherwise, set the target if there is no action prepared
            else if (!this.prepared.name) {
                var interactable = interactables.get(curEventTarget);

                if (interactable
                    && !testIgnore(interactable, curEventTarget, eventTarget)
                    && testAllow(interactable, curEventTarget, eventTarget)
                    && (action = validateAction(forceAction || interactable.getAction(pointer, event, this, curEventTarget), interactable, eventTarget))
                    && withinInteractionLimit(interactable, curEventTarget, action)) {
                    this.target = interactable;
                    this.element = curEventTarget;
                }
            }

            var target = this.target,
                options = target && target.options;

            if (target && (forceAction || !this.prepared.name)) {
                action = action || validateAction(forceAction || target.getAction(pointer, event, this, curEventTarget), target, this.element);

                this.setEventXY(this.startCoords, this.pointers);

                if (!action) { return; }

                if (options.styleCursor) {
                    target._doc.documentElement.style.cursor = getActionCursor(action);
                }

                this.resizeAxes = action.name === 'resize'? action.axis : null;

                if (action === 'gesture' && this.pointerIds.length < 2) {
                    action = null;
                }

                this.prepared.name  = action.name;
                this.prepared.axis  = action.axis;
                this.prepared.edges = action.edges;

                this.snapStatus.snappedX = this.snapStatus.snappedY =
                    this.restrictStatus.restrictedX = this.restrictStatus.restrictedY = NaN;

                this.downTimes[pointerIndex] = new Date().getTime();
                this.downTargets[pointerIndex] = eventTarget;
                pointerExtend(this.downPointer, pointer);

                copyCoords(this.prevCoords, this.startCoords);
                this.pointerWasMoved = false;

                this.checkAndPreventDefault(event, target, this.element);
            }
            // if inertia is active try to resume action
            else if (this.inertiaStatus.active
                && curEventTarget === this.element
                && validateAction(target.getAction(pointer, event, this, this.element), target).name === this.prepared.name) {

                cancelFrame(this.inertiaStatus.i);
                this.inertiaStatus.active = false;

                this.checkAndPreventDefault(event, target, this.element);
            }
        },

        setModifications: function (coords, preEnd) {
            var target         = this.target,
                shouldMove     = true,
                shouldSnap     = checkSnap(target, this.prepared.name)     && (!target.options[this.prepared.name].snap.endOnly     || preEnd),
                shouldRestrict = checkRestrict(target, this.prepared.name) && (!target.options[this.prepared.name].restrict.endOnly || preEnd);

            if (shouldSnap    ) { this.setSnapping   (coords); } else { this.snapStatus    .locked     = false; }
            if (shouldRestrict) { this.setRestriction(coords); } else { this.restrictStatus.restricted = false; }

            if (shouldSnap && this.snapStatus.locked && !this.snapStatus.changed) {
                shouldMove = shouldRestrict && this.restrictStatus.restricted && this.restrictStatus.changed;
            }
            else if (shouldRestrict && this.restrictStatus.restricted && !this.restrictStatus.changed) {
                shouldMove = false;
            }

            return shouldMove;
        },

        setStartOffsets: function (action, interactable, element) {
            var rect = interactable.getRect(element),
                origin = getOriginXY(interactable, element),
                snap = interactable.options[this.prepared.name].snap,
                restrict = interactable.options[this.prepared.name].restrict,
                width, height;

            if (rect) {
                this.startOffset.left = this.startCoords.page.x - rect.left;
                this.startOffset.top  = this.startCoords.page.y - rect.top;

                this.startOffset.right  = rect.right  - this.startCoords.page.x;
                this.startOffset.bottom = rect.bottom - this.startCoords.page.y;

                if ('width' in rect) { width = rect.width; }
                else { width = rect.right - rect.left; }
                if ('height' in rect) { height = rect.height; }
                else { height = rect.bottom - rect.top; }
            }
            else {
                this.startOffset.left = this.startOffset.top = this.startOffset.right = this.startOffset.bottom = 0;
            }

            this.snapOffsets.splice(0);

            var snapOffset = snap && snap.offset === 'startCoords'
                                ? {
                                    x: this.startCoords.page.x - origin.x,
                                    y: this.startCoords.page.y - origin.y
                                }
                                : snap && snap.offset || { x: 0, y: 0 };

            if (rect && snap && snap.relativePoints && snap.relativePoints.length) {
                for (var i = 0; i < snap.relativePoints.length; i++) {
                    this.snapOffsets.push({
                        x: this.startOffset.left - (width  * snap.relativePoints[i].x) + snapOffset.x,
                        y: this.startOffset.top  - (height * snap.relativePoints[i].y) + snapOffset.y
                    });
                }
            }
            else {
                this.snapOffsets.push(snapOffset);
            }

            if (rect && restrict.elementRect) {
                this.restrictOffset.left = this.startOffset.left - (width  * restrict.elementRect.left);
                this.restrictOffset.top  = this.startOffset.top  - (height * restrict.elementRect.top);

                this.restrictOffset.right  = this.startOffset.right  - (width  * (1 - restrict.elementRect.right));
                this.restrictOffset.bottom = this.startOffset.bottom - (height * (1 - restrict.elementRect.bottom));
            }
            else {
                this.restrictOffset.left = this.restrictOffset.top = this.restrictOffset.right = this.restrictOffset.bottom = 0;
            }
        },

        /*\
         * Interaction.start
         [ method ]
         *
         * Start an action with the given Interactable and Element as tartgets. The
         * action must be enabled for the target Interactable and an appropriate number
         * of pointers must be held down – 1 for drag/resize, 2 for gesture.
         *
         * Use it with `interactable.<action>able({ manualStart: false })` to always
         * [start actions manually](https://github.com/taye/interact.js/issues/114)
         *
         - action       (object)  The action to be performed - drag, resize, etc.
         - interactable (Interactable) The Interactable to target
         - element      (Element) The DOM Element to target
         = (object) interact
         **
         | interact(target)
         |   .draggable({
         |     // disable the default drag start by down->move
         |     manualStart: true
         |   })
         |   // start dragging after the user holds the pointer down
         |   .on('hold', function (event) {
         |     var interaction = event.interaction;
         |
         |     if (!interaction.interacting()) {
         |       interaction.start({ name: 'drag' },
         |                         event.interactable,
         |                         event.currentTarget);
         |     }
         | });
        \*/
        start: function (action, interactable, element) {
            if (this.interacting()
                || !this.pointerIsDown
                || this.pointerIds.length < (action.name === 'gesture'? 2 : 1)) {
                return;
            }

            // if this interaction had been removed after stopping
            // add it back
            if (indexOf(interactions, this) === -1) {
                interactions.push(this);
            }

            // set the startCoords if there was no prepared action
            if (!this.prepared.name) {
                this.setEventXY(this.startCoords, this.pointers);
            }

            this.prepared.name  = action.name;
            this.prepared.axis  = action.axis;
            this.prepared.edges = action.edges;
            this.target         = interactable;
            this.element        = element;

            this.setStartOffsets(action.name, interactable, element);
            this.setModifications(this.startCoords.page);

            this.prevEvent = this[this.prepared.name + 'Start'](this.downEvent);
        },

        pointerMove: function (pointer, event, eventTarget, curEventTarget, preEnd) {
            if (this.inertiaStatus.active) {
                var pageUp   = this.inertiaStatus.upCoords.page;
                var clientUp = this.inertiaStatus.upCoords.client;

                var inertiaPosition = {
                    pageX  : pageUp.x   + this.inertiaStatus.sx,
                    pageY  : pageUp.y   + this.inertiaStatus.sy,
                    clientX: clientUp.x + this.inertiaStatus.sx,
                    clientY: clientUp.y + this.inertiaStatus.sy
                };

                this.setEventXY(this.curCoords, [inertiaPosition]);
            }
            else {
                this.recordPointer(pointer);
                this.setEventXY(this.curCoords, this.pointers);
            }

            var duplicateMove = (this.curCoords.page.x === this.prevCoords.page.x
                                 && this.curCoords.page.y === this.prevCoords.page.y
                                 && this.curCoords.client.x === this.prevCoords.client.x
                                 && this.curCoords.client.y === this.prevCoords.client.y);

            var dx, dy,
                pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer));

            // register movement greater than pointerMoveTolerance
            if (this.pointerIsDown && !this.pointerWasMoved) {
                dx = this.curCoords.client.x - this.startCoords.client.x;
                dy = this.curCoords.client.y - this.startCoords.client.y;

                this.pointerWasMoved = hypot(dx, dy) > pointerMoveTolerance;
            }

            if (!duplicateMove && (!this.pointerIsDown || this.pointerWasMoved)) {
                if (this.pointerIsDown) {
                    clearTimeout(this.holdTimers[pointerIndex]);
                }

                this.collectEventTargets(pointer, event, eventTarget, 'move');
            }

            if (!this.pointerIsDown) { return; }

            if (duplicateMove && this.pointerWasMoved && !preEnd) {
                this.checkAndPreventDefault(event, this.target, this.element);
                return;
            }

            // set pointer coordinate, time changes and speeds
            setEventDeltas(this.pointerDelta, this.prevCoords, this.curCoords);

            if (!this.prepared.name) { return; }

            if (this.pointerWasMoved
                // ignore movement while inertia is active
                && (!this.inertiaStatus.active || (pointer instanceof InteractEvent && /inertiastart/.test(pointer.type)))) {

                // if just starting an action, calculate the pointer speed now
                if (!this.interacting()) {
                    setEventDeltas(this.pointerDelta, this.prevCoords, this.curCoords);

                    // check if a drag is in the correct axis
                    if (this.prepared.name === 'drag') {
                        var absX = Math.abs(dx),
                            absY = Math.abs(dy),
                            targetAxis = this.target.options.drag.axis,
                            axis = (absX > absY ? 'x' : absX < absY ? 'y' : 'xy');

                        // if the movement isn't in the axis of the interactable
                        if (axis !== 'xy' && targetAxis !== 'xy' && targetAxis !== axis) {
                            // cancel the prepared action
                            this.prepared.name = null;

                            // then try to get a drag from another ineractable

                            var element = eventTarget;

                            // check element interactables
                            while (isElement(element)) {
                                var elementInteractable = interactables.get(element);

                                if (elementInteractable
                                    && elementInteractable !== this.target
                                    && !elementInteractable.options.drag.manualStart
                                    && elementInteractable.getAction(this.downPointer, this.downEvent, this, element).name === 'drag'
                                    && checkAxis(axis, elementInteractable)) {

                                    this.prepared.name = 'drag';
                                    this.target = elementInteractable;
                                    this.element = element;
                                    break;
                                }

                                element = parentElement(element);
                            }

                            // if there's no drag from element interactables,
                            // check the selector interactables
                            if (!this.prepared.name) {
                                var thisInteraction = this;

                                var getDraggable = function (interactable, selector, context) {
                                    var elements = ie8MatchesSelector
                                        ? context.querySelectorAll(selector)
                                        : undefined;

                                    if (interactable === thisInteraction.target) { return; }

                                    if (inContext(interactable, eventTarget)
                                        && !interactable.options.drag.manualStart
                                        && !testIgnore(interactable, element, eventTarget)
                                        && testAllow(interactable, element, eventTarget)
                                        && matchesSelector(element, selector, elements)
                                        && interactable.getAction(thisInteraction.downPointer, thisInteraction.downEvent, thisInteraction, element).name === 'drag'
                                        && checkAxis(axis, interactable)
                                        && withinInteractionLimit(interactable, element, 'drag')) {

                                        return interactable;
                                    }
                                };

                                element = eventTarget;

                                while (isElement(element)) {
                                    var selectorInteractable = interactables.forEachSelector(getDraggable);

                                    if (selectorInteractable) {
                                        this.prepared.name = 'drag';
                                        this.target = selectorInteractable;
                                        this.element = element;
                                        break;
                                    }

                                    element = parentElement(element);
                                }
                            }
                        }
                    }
                }

                var starting = !!this.prepared.name && !this.interacting();

                if (starting
                    && (this.target.options[this.prepared.name].manualStart
                        || !withinInteractionLimit(this.target, this.element, this.prepared))) {
                    this.stop(event);
                    return;
                }

                if (this.prepared.name && this.target) {
                    if (starting) {
                        this.start(this.prepared, this.target, this.element);
                    }

                    var shouldMove = this.setModifications(this.curCoords.page, preEnd);

                    // move if snapping or restriction doesn't prevent it
                    if (shouldMove || starting) {
                        this.prevEvent = this[this.prepared.name + 'Move'](event);
                    }

                    this.checkAndPreventDefault(event, this.target, this.element);
                }
            }

            copyCoords(this.prevCoords, this.curCoords);

            if (this.dragging || this.resizing) {
                this.autoScrollMove(pointer);
            }
        },

        dragStart: function (event) {
            var dragEvent = new InteractEvent(this, event, 'drag', 'start', this.element);

            this.dragging = true;
            this.target.fire(dragEvent);

            // reset active dropzones
            this.activeDrops.dropzones = [];
            this.activeDrops.elements  = [];
            this.activeDrops.rects     = [];

            if (!this.dynamicDrop) {
                this.setActiveDrops(this.element);
            }

            var dropEvents = this.getDropEvents(event, dragEvent);

            if (dropEvents.activate) {
                this.fireActiveDrops(dropEvents.activate);
            }

            return dragEvent;
        },

        dragMove: function (event) {
            var target = this.target,
                dragEvent  = new InteractEvent(this, event, 'drag', 'move', this.element),
                draggableElement = this.element,
                drop = this.getDrop(dragEvent, event, draggableElement);

            this.dropTarget = drop.dropzone;
            this.dropElement = drop.element;

            var dropEvents = this.getDropEvents(event, dragEvent);

            target.fire(dragEvent);

            if (dropEvents.leave) { this.prevDropTarget.fire(dropEvents.leave); }
            if (dropEvents.enter) {     this.dropTarget.fire(dropEvents.enter); }
            if (dropEvents.move ) {     this.dropTarget.fire(dropEvents.move ); }

            this.prevDropTarget  = this.dropTarget;
            this.prevDropElement = this.dropElement;

            return dragEvent;
        },

        resizeStart: function (event) {
            var resizeEvent = new InteractEvent(this, event, 'resize', 'start', this.element);

            if (this.prepared.edges) {
                var startRect = this.target.getRect(this.element);

                /*
                 * When using the `resizable.square` or `resizable.preserveAspectRatio` options, resizing from one edge
                 * will affect another. E.g. with `resizable.square`, resizing to make the right edge larger will make
                 * the bottom edge larger by the same amount. We call these 'linked' edges. Any linked edges will depend
                 * on the active edges and the edge being interacted with.
                 */
                if (this.target.options.resize.square || this.target.options.resize.preserveAspectRatio) {
                    var linkedEdges = extend({}, this.prepared.edges);

                    linkedEdges.top    = linkedEdges.top    || (linkedEdges.left   && !linkedEdges.bottom);
                    linkedEdges.left   = linkedEdges.left   || (linkedEdges.top    && !linkedEdges.right );
                    linkedEdges.bottom = linkedEdges.bottom || (linkedEdges.right  && !linkedEdges.top   );
                    linkedEdges.right  = linkedEdges.right  || (linkedEdges.bottom && !linkedEdges.left  );

                    this.prepared._linkedEdges = linkedEdges;
                }
                else {
                    this.prepared._linkedEdges = null;
                }

                // if using `resizable.preserveAspectRatio` option, record aspect ratio at the start of the resize
                if (this.target.options.resize.preserveAspectRatio) {
                    this.resizeStartAspectRatio = startRect.width / startRect.height;
                }

                this.resizeRects = {
                    start     : startRect,
                    current   : extend({}, startRect),
                    restricted: extend({}, startRect),
                    previous  : extend({}, startRect),
                    delta     : {
                        left: 0, right : 0, width : 0,
                        top : 0, bottom: 0, height: 0
                    }
                };

                resizeEvent.rect = this.resizeRects.restricted;
                resizeEvent.deltaRect = this.resizeRects.delta;
            }

            this.target.fire(resizeEvent);

            this.resizing = true;

            return resizeEvent;
        },

        resizeMove: function (event) {
            var resizeEvent = new InteractEvent(this, event, 'resize', 'move', this.element);

            var edges = this.prepared.edges,
                invert = this.target.options.resize.invert,
                invertible = invert === 'reposition' || invert === 'negate';

            if (edges) {
                var dx = resizeEvent.dx,
                    dy = resizeEvent.dy,

                    start      = this.resizeRects.start,
                    current    = this.resizeRects.current,
                    restricted = this.resizeRects.restricted,
                    delta      = this.resizeRects.delta,
                    previous   = extend(this.resizeRects.previous, restricted),

                    originalEdges = edges;

                // `resize.preserveAspectRatio` takes precedence over `resize.square`
                if (this.target.options.resize.preserveAspectRatio) {
                    var resizeStartAspectRatio = this.resizeStartAspectRatio;

                    edges = this.prepared._linkedEdges;

                    if ((originalEdges.left && originalEdges.bottom)
                        || (originalEdges.right && originalEdges.top)) {
                        dy = -dx / resizeStartAspectRatio;
                    }
                    else if (originalEdges.left || originalEdges.right) { dy = dx / resizeStartAspectRatio; }
                    else if (originalEdges.top || originalEdges.bottom) { dx = dy * resizeStartAspectRatio; }
                }
                else if (this.target.options.resize.square) {
                    edges = this.prepared._linkedEdges;

                    if ((originalEdges.left && originalEdges.bottom)
                        || (originalEdges.right && originalEdges.top)) {
                        dy = -dx;
                    }
                    else if (originalEdges.left || originalEdges.right) { dy = dx; }
                    else if (originalEdges.top || originalEdges.bottom) { dx = dy; }
                }

                // update the 'current' rect without modifications
                if (edges.top   ) { current.top    += dy; }
                if (edges.bottom) { current.bottom += dy; }
                if (edges.left  ) { current.left   += dx; }
                if (edges.right ) { current.right  += dx; }

                if (invertible) {
                    // if invertible, copy the current rect
                    extend(restricted, current);

                    if (invert === 'reposition') {
                        // swap edge values if necessary to keep width/height positive
                        var swap;

                        if (restricted.top > restricted.bottom) {
                            swap = restricted.top;

                            restricted.top = restricted.bottom;
                            restricted.bottom = swap;
                        }
                        if (restricted.left > restricted.right) {
                            swap = restricted.left;

                            restricted.left = restricted.right;
                            restricted.right = swap;
                        }
                    }
                }
                else {
                    // if not invertible, restrict to minimum of 0x0 rect
                    restricted.top    = Math.min(current.top, start.bottom);
                    restricted.bottom = Math.max(current.bottom, start.top);
                    restricted.left   = Math.min(current.left, start.right);
                    restricted.right  = Math.max(current.right, start.left);
                }

                restricted.width  = restricted.right  - restricted.left;
                restricted.height = restricted.bottom - restricted.top ;

                for (var edge in restricted) {
                    delta[edge] = restricted[edge] - previous[edge];
                }

                resizeEvent.edges = this.prepared.edges;
                resizeEvent.rect = restricted;
                resizeEvent.deltaRect = delta;
            }

            this.target.fire(resizeEvent);

            return resizeEvent;
        },

        gestureStart: function (event) {
            var gestureEvent = new InteractEvent(this, event, 'gesture', 'start', this.element);

            gestureEvent.ds = 0;

            this.gesture.startDistance = this.gesture.prevDistance = gestureEvent.distance;
            this.gesture.startAngle = this.gesture.prevAngle = gestureEvent.angle;
            this.gesture.scale = 1;

            this.gesturing = true;

            this.target.fire(gestureEvent);

            return gestureEvent;
        },

        gestureMove: function (event) {
            if (!this.pointerIds.length) {
                return this.prevEvent;
            }

            var gestureEvent;

            gestureEvent = new InteractEvent(this, event, 'gesture', 'move', this.element);
            gestureEvent.ds = gestureEvent.scale - this.gesture.scale;

            this.target.fire(gestureEvent);

            this.gesture.prevAngle = gestureEvent.angle;
            this.gesture.prevDistance = gestureEvent.distance;

            if (gestureEvent.scale !== Infinity &&
                gestureEvent.scale !== null &&
                gestureEvent.scale !== undefined  &&
                !isNaN(gestureEvent.scale)) {

                this.gesture.scale = gestureEvent.scale;
            }

            return gestureEvent;
        },

        pointerHold: function (pointer, event, eventTarget) {
            this.collectEventTargets(pointer, event, eventTarget, 'hold');
        },

        pointerUp: function (pointer, event, eventTarget, curEventTarget) {
            var pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer));

            clearTimeout(this.holdTimers[pointerIndex]);

            this.collectEventTargets(pointer, event, eventTarget, 'up' );
            this.collectEventTargets(pointer, event, eventTarget, 'tap');

            this.pointerEnd(pointer, event, eventTarget, curEventTarget);

            this.removePointer(pointer);
        },

        pointerCancel: function (pointer, event, eventTarget, curEventTarget) {
            var pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer));

            clearTimeout(this.holdTimers[pointerIndex]);

            this.collectEventTargets(pointer, event, eventTarget, 'cancel');
            this.pointerEnd(pointer, event, eventTarget, curEventTarget);

            this.removePointer(pointer);
        },

        // http://www.quirksmode.org/dom/events/click.html
        // >Events leading to dblclick
        //
        // IE8 doesn't fire down event before dblclick.
        // This workaround tries to fire a tap and doubletap after dblclick
        ie8Dblclick: function (pointer, event, eventTarget) {
            if (this.prevTap
                && event.clientX === this.prevTap.clientX
                && event.clientY === this.prevTap.clientY
                && eventTarget   === this.prevTap.target) {

                this.downTargets[0] = eventTarget;
                this.downTimes[0] = new Date().getTime();
                this.collectEventTargets(pointer, event, eventTarget, 'tap');
            }
        },

        // End interact move events and stop auto-scroll unless inertia is enabled
        pointerEnd: function (pointer, event, eventTarget, curEventTarget) {
            var endEvent,
                target = this.target,
                options = target && target.options,
                inertiaOptions = options && this.prepared.name && options[this.prepared.name].inertia,
                inertiaStatus = this.inertiaStatus;

            if (this.interacting()) {

                if (inertiaStatus.active && !inertiaStatus.ending) { return; }

                var pointerSpeed,
                    now = new Date().getTime(),
                    inertiaPossible = false,
                    inertia = false,
                    smoothEnd = false,
                    endSnap = checkSnap(target, this.prepared.name) && options[this.prepared.name].snap.endOnly,
                    endRestrict = checkRestrict(target, this.prepared.name) && options[this.prepared.name].restrict.endOnly,
                    dx = 0,
                    dy = 0,
                    startEvent;

                if (this.dragging) {
                    if      (options.drag.axis === 'x' ) { pointerSpeed = Math.abs(this.pointerDelta.client.vx); }
                    else if (options.drag.axis === 'y' ) { pointerSpeed = Math.abs(this.pointerDelta.client.vy); }
                    else   /*options.drag.axis === 'xy'*/{ pointerSpeed = this.pointerDelta.client.speed; }
                }
                else {
                    pointerSpeed = this.pointerDelta.client.speed;
                }

                // check if inertia should be started
                inertiaPossible = (inertiaOptions && inertiaOptions.enabled
                                   && this.prepared.name !== 'gesture'
                                   && event !== inertiaStatus.startEvent);

                inertia = (inertiaPossible
                           && (now - this.curCoords.timeStamp) < 50
                           && pointerSpeed > inertiaOptions.minSpeed
                           && pointerSpeed > inertiaOptions.endSpeed);

                if (inertiaPossible && !inertia && (endSnap || endRestrict)) {

                    var snapRestrict = {};

                    snapRestrict.snap = snapRestrict.restrict = snapRestrict;

                    if (endSnap) {
                        this.setSnapping(this.curCoords.page, snapRestrict);
                        if (snapRestrict.locked) {
                            dx += snapRestrict.dx;
                            dy += snapRestrict.dy;
                        }
                    }

                    if (endRestrict) {
                        this.setRestriction(this.curCoords.page, snapRestrict);
                        if (snapRestrict.restricted) {
                            dx += snapRestrict.dx;
                            dy += snapRestrict.dy;
                        }
                    }

                    if (dx || dy) {
                        smoothEnd = true;
                    }
                }

                if (inertia || smoothEnd) {
                    copyCoords(inertiaStatus.upCoords, this.curCoords);

                    this.pointers[0] = inertiaStatus.startEvent = startEvent =
                        new InteractEvent(this, event, this.prepared.name, 'inertiastart', this.element);

                    inertiaStatus.t0 = now;

                    target.fire(inertiaStatus.startEvent);

                    if (inertia) {
                        inertiaStatus.vx0 = this.pointerDelta.client.vx;
                        inertiaStatus.vy0 = this.pointerDelta.client.vy;
                        inertiaStatus.v0 = pointerSpeed;

                        this.calcInertia(inertiaStatus);

                        var page = extend({}, this.curCoords.page),
                            origin = getOriginXY(target, this.element),
                            statusObject;

                        page.x = page.x + inertiaStatus.xe - origin.x;
                        page.y = page.y + inertiaStatus.ye - origin.y;

                        statusObject = {
                            useStatusXY: true,
                            x: page.x,
                            y: page.y,
                            dx: 0,
                            dy: 0,
                            snap: null
                        };

                        statusObject.snap = statusObject;

                        dx = dy = 0;

                        if (endSnap) {
                            var snap = this.setSnapping(this.curCoords.page, statusObject);

                            if (snap.locked) {
                                dx += snap.dx;
                                dy += snap.dy;
                            }
                        }

                        if (endRestrict) {
                            var restrict = this.setRestriction(this.curCoords.page, statusObject);

                            if (restrict.restricted) {
                                dx += restrict.dx;
                                dy += restrict.dy;
                            }
                        }

                        inertiaStatus.modifiedXe += dx;
                        inertiaStatus.modifiedYe += dy;

                        inertiaStatus.i = reqFrame(this.boundInertiaFrame);
                    }
                    else {
                        inertiaStatus.smoothEnd = true;
                        inertiaStatus.xe = dx;
                        inertiaStatus.ye = dy;

                        inertiaStatus.sx = inertiaStatus.sy = 0;

                        inertiaStatus.i = reqFrame(this.boundSmoothEndFrame);
                    }

                    inertiaStatus.active = true;
                    return;
                }

                if (endSnap || endRestrict) {
                    // fire a move event at the snapped coordinates
                    this.pointerMove(pointer, event, eventTarget, curEventTarget, true);
                }
            }

            if (this.dragging) {
                endEvent = new InteractEvent(this, event, 'drag', 'end', this.element);

                var draggableElement = this.element,
                    drop = this.getDrop(endEvent, event, draggableElement);

                this.dropTarget = drop.dropzone;
                this.dropElement = drop.element;

                var dropEvents = this.getDropEvents(event, endEvent);

                if (dropEvents.leave) { this.prevDropTarget.fire(dropEvents.leave); }
                if (dropEvents.enter) {     this.dropTarget.fire(dropEvents.enter); }
                if (dropEvents.drop ) {     this.dropTarget.fire(dropEvents.drop ); }
                if (dropEvents.deactivate) {
                    this.fireActiveDrops(dropEvents.deactivate);
                }

                target.fire(endEvent);
            }
            else if (this.resizing) {
                endEvent = new InteractEvent(this, event, 'resize', 'end', this.element);
                target.fire(endEvent);
            }
            else if (this.gesturing) {
                endEvent = new InteractEvent(this, event, 'gesture', 'end', this.element);
                target.fire(endEvent);
            }

            this.stop(event);
        },

        collectDrops: function (element) {
            var drops = [],
                elements = [],
                i;

            element = element || this.element;

            // collect all dropzones and their elements which qualify for a drop
            for (i = 0; i < interactables.length; i++) {
                if (!interactables[i].options.drop.enabled) { continue; }

                var current = interactables[i],
                    accept = current.options.drop.accept;

                // test the draggable element against the dropzone's accept setting
                if ((isElement(accept) && accept !== element)
                    || (isString(accept)
                        && !matchesSelector(element, accept))) {

                    continue;
                }

                // query for new elements if necessary
                var dropElements = current.selector? current._context.querySelectorAll(current.selector) : [current._element];

                for (var j = 0, len = dropElements.length; j < len; j++) {
                    var currentElement = dropElements[j];

                    if (currentElement === element) {
                        continue;
                    }

                    drops.push(current);
                    elements.push(currentElement);
                }
            }

            return {
                dropzones: drops,
                elements: elements
            };
        },

        fireActiveDrops: function (event) {
            var i,
                current,
                currentElement,
                prevElement;

            // loop through all active dropzones and trigger event
            for (i = 0; i < this.activeDrops.dropzones.length; i++) {
                current = this.activeDrops.dropzones[i];
                currentElement = this.activeDrops.elements [i];

                // prevent trigger of duplicate events on same element
                if (currentElement !== prevElement) {
                    // set current element as event target
                    event.target = currentElement;
                    current.fire(event);
                }
                prevElement = currentElement;
            }
        },

        // Collect a new set of possible drops and save them in activeDrops.
        // setActiveDrops should always be called when a drag has just started or a
        // drag event happens while dynamicDrop is true
        setActiveDrops: function (dragElement) {
            // get dropzones and their elements that could receive the draggable
            var possibleDrops = this.collectDrops(dragElement, true);

            this.activeDrops.dropzones = possibleDrops.dropzones;
            this.activeDrops.elements  = possibleDrops.elements;
            this.activeDrops.rects     = [];

            for (var i = 0; i < this.activeDrops.dropzones.length; i++) {
                this.activeDrops.rects[i] = this.activeDrops.dropzones[i].getRect(this.activeDrops.elements[i]);
            }
        },

        getDrop: function (dragEvent, event, dragElement) {
            var validDrops = [];

            if (dynamicDrop) {
                this.setActiveDrops(dragElement);
            }

            // collect all dropzones and their elements which qualify for a drop
            for (var j = 0; j < this.activeDrops.dropzones.length; j++) {
                var current        = this.activeDrops.dropzones[j],
                    currentElement = this.activeDrops.elements [j],
                    rect           = this.activeDrops.rects    [j];

                validDrops.push(current.dropCheck(dragEvent, event, this.target, dragElement, currentElement, rect)
                                ? currentElement
                                : null);
            }

            // get the most appropriate dropzone based on DOM depth and order
            var dropIndex = indexOfDeepestElement(validDrops),
                dropzone  = this.activeDrops.dropzones[dropIndex] || null,
                element   = this.activeDrops.elements [dropIndex] || null;

            return {
                dropzone: dropzone,
                element: element
            };
        },

        getDropEvents: function (pointerEvent, dragEvent) {
            var dropEvents = {
                enter     : null,
                leave     : null,
                activate  : null,
                deactivate: null,
                move      : null,
                drop      : null
            };

            if (this.dropElement !== this.prevDropElement) {
                // if there was a prevDropTarget, create a dragleave event
                if (this.prevDropTarget) {
                    dropEvents.leave = {
                        target       : this.prevDropElement,
                        dropzone     : this.prevDropTarget,
                        relatedTarget: dragEvent.target,
                        draggable    : dragEvent.interactable,
                        dragEvent    : dragEvent,
                        interaction  : this,
                        timeStamp    : dragEvent.timeStamp,
                        type         : 'dragleave'
                    };

                    dragEvent.dragLeave = this.prevDropElement;
                    dragEvent.prevDropzone = this.prevDropTarget;
                }
                // if the dropTarget is not null, create a dragenter event
                if (this.dropTarget) {
                    dropEvents.enter = {
                        target       : this.dropElement,
                        dropzone     : this.dropTarget,
                        relatedTarget: dragEvent.target,
                        draggable    : dragEvent.interactable,
                        dragEvent    : dragEvent,
                        interaction  : this,
                        timeStamp    : dragEvent.timeStamp,
                        type         : 'dragenter'
                    };

                    dragEvent.dragEnter = this.dropElement;
                    dragEvent.dropzone = this.dropTarget;
                }
            }

            if (dragEvent.type === 'dragend' && this.dropTarget) {
                dropEvents.drop = {
                    target       : this.dropElement,
                    dropzone     : this.dropTarget,
                    relatedTarget: dragEvent.target,
                    draggable    : dragEvent.interactable,
                    dragEvent    : dragEvent,
                    interaction  : this,
                    timeStamp    : dragEvent.timeStamp,
                    type         : 'drop'
                };

                dragEvent.dropzone = this.dropTarget;
            }
            if (dragEvent.type === 'dragstart') {
                dropEvents.activate = {
                    target       : null,
                    dropzone     : null,
                    relatedTarget: dragEvent.target,
                    draggable    : dragEvent.interactable,
                    dragEvent    : dragEvent,
                    interaction  : this,
                    timeStamp    : dragEvent.timeStamp,
                    type         : 'dropactivate'
                };
            }
            if (dragEvent.type === 'dragend') {
                dropEvents.deactivate = {
                    target       : null,
                    dropzone     : null,
                    relatedTarget: dragEvent.target,
                    draggable    : dragEvent.interactable,
                    dragEvent    : dragEvent,
                    interaction  : this,
                    timeStamp    : dragEvent.timeStamp,
                    type         : 'dropdeactivate'
                };
            }
            if (dragEvent.type === 'dragmove' && this.dropTarget) {
                dropEvents.move = {
                    target       : this.dropElement,
                    dropzone     : this.dropTarget,
                    relatedTarget: dragEvent.target,
                    draggable    : dragEvent.interactable,
                    dragEvent    : dragEvent,
                    interaction  : this,
                    dragmove     : dragEvent,
                    timeStamp    : dragEvent.timeStamp,
                    type         : 'dropmove'
                };
                dragEvent.dropzone = this.dropTarget;
            }

            return dropEvents;
        },

        currentAction: function () {
            return (this.dragging && 'drag') || (this.resizing && 'resize') || (this.gesturing && 'gesture') || null;
        },

        interacting: function () {
            return this.dragging || this.resizing || this.gesturing;
        },

        clearTargets: function () {
            this.target = this.element = null;

            this.dropTarget = this.dropElement = this.prevDropTarget = this.prevDropElement = null;
        },

        stop: function (event) {
            if (this.interacting()) {
                autoScroll.stop();
                this.matches = [];
                this.matchElements = [];

                var target = this.target;

                if (target.options.styleCursor) {
                    target._doc.documentElement.style.cursor = '';
                }

                // prevent Default only if were previously interacting
                if (event && isFunction(event.preventDefault)) {
                    this.checkAndPreventDefault(event, target, this.element);
                }

                if (this.dragging) {
                    this.activeDrops.dropzones = this.activeDrops.elements = this.activeDrops.rects = null;
                }
            }

            this.clearTargets();

            this.pointerIsDown = this.snapStatus.locked = this.dragging = this.resizing = this.gesturing = false;
            this.prepared.name = this.prevEvent = null;
            this.inertiaStatus.resumeDx = this.inertiaStatus.resumeDy = 0;

            // remove pointers if their ID isn't in this.pointerIds
            for (var i = 0; i < this.pointers.length; i++) {
                if (indexOf(this.pointerIds, getPointerId(this.pointers[i])) === -1) {
                    this.pointers.splice(i, 1);
                }
            }
        },

        inertiaFrame: function () {
            var inertiaStatus = this.inertiaStatus,
                options = this.target.options[this.prepared.name].inertia,
                lambda = options.resistance,
                t = new Date().getTime() / 1000 - inertiaStatus.t0;

            if (t < inertiaStatus.te) {

                var progress =  1 - (Math.exp(-lambda * t) - inertiaStatus.lambda_v0) / inertiaStatus.one_ve_v0;

                if (inertiaStatus.modifiedXe === inertiaStatus.xe && inertiaStatus.modifiedYe === inertiaStatus.ye) {
                    inertiaStatus.sx = inertiaStatus.xe * progress;
                    inertiaStatus.sy = inertiaStatus.ye * progress;
                }
                else {
                    var quadPoint = getQuadraticCurvePoint(
                            0, 0,
                            inertiaStatus.xe, inertiaStatus.ye,
                            inertiaStatus.modifiedXe, inertiaStatus.modifiedYe,
                            progress);

                    inertiaStatus.sx = quadPoint.x;
                    inertiaStatus.sy = quadPoint.y;
                }

                this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);

                inertiaStatus.i = reqFrame(this.boundInertiaFrame);
            }
            else {
                inertiaStatus.ending = true;

                inertiaStatus.sx = inertiaStatus.modifiedXe;
                inertiaStatus.sy = inertiaStatus.modifiedYe;

                this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);
                this.pointerEnd(inertiaStatus.startEvent, inertiaStatus.startEvent);

                inertiaStatus.active = inertiaStatus.ending = false;
            }
        },

        smoothEndFrame: function () {
            var inertiaStatus = this.inertiaStatus,
                t = new Date().getTime() - inertiaStatus.t0,
                duration = this.target.options[this.prepared.name].inertia.smoothEndDuration;

            if (t < duration) {
                inertiaStatus.sx = easeOutQuad(t, 0, inertiaStatus.xe, duration);
                inertiaStatus.sy = easeOutQuad(t, 0, inertiaStatus.ye, duration);

                this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);

                inertiaStatus.i = reqFrame(this.boundSmoothEndFrame);
            }
            else {
                inertiaStatus.ending = true;

                inertiaStatus.sx = inertiaStatus.xe;
                inertiaStatus.sy = inertiaStatus.ye;

                this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);
                this.pointerEnd(inertiaStatus.startEvent, inertiaStatus.startEvent);

                inertiaStatus.smoothEnd =
                  inertiaStatus.active = inertiaStatus.ending = false;
            }
        },

        addPointer: function (pointer) {
            var id = getPointerId(pointer),
                index = this.mouse? 0 : indexOf(this.pointerIds, id);

            if (index === -1) {
                index = this.pointerIds.length;
            }

            this.pointerIds[index] = id;
            this.pointers[index] = pointer;

            return index;
        },

        removePointer: function (pointer) {
            var id = getPointerId(pointer),
                index = this.mouse? 0 : indexOf(this.pointerIds, id);

            if (index === -1) { return; }

            this.pointers   .splice(index, 1);
            this.pointerIds .splice(index, 1);
            this.downTargets.splice(index, 1);
            this.downTimes  .splice(index, 1);
            this.holdTimers .splice(index, 1);
        },

        recordPointer: function (pointer) {
            var index = this.mouse? 0: indexOf(this.pointerIds, getPointerId(pointer));

            if (index === -1) { return; }

            this.pointers[index] = pointer;
        },

        collectEventTargets: function (pointer, event, eventTarget, eventType) {
            var pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer));

            // do not fire a tap event if the pointer was moved before being lifted
            if (eventType === 'tap' && (this.pointerWasMoved
                // or if the pointerup target is different to the pointerdown target
                || !(this.downTargets[pointerIndex] && this.downTargets[pointerIndex] === eventTarget))) {
                return;
            }

            var targets = [],
                elements = [],
                element = eventTarget;

            function collectSelectors (interactable, selector, context) {
                var els = ie8MatchesSelector
                        ? context.querySelectorAll(selector)
                        : undefined;

                if (interactable._iEvents[eventType]
                    && isElement(element)
                    && inContext(interactable, element)
                    && !testIgnore(interactable, element, eventTarget)
                    && testAllow(interactable, element, eventTarget)
                    && matchesSelector(element, selector, els)) {

                    targets.push(interactable);
                    elements.push(element);
                }
            }

            while (element) {
                if (interact.isSet(element) && interact(element)._iEvents[eventType]) {
                    targets.push(interact(element));
                    elements.push(element);
                }

                interactables.forEachSelector(collectSelectors);

                element = parentElement(element);
            }

            // create the tap event even if there are no listeners so that
            // doubletap can still be created and fired
            if (targets.length || eventType === 'tap') {
                this.firePointers(pointer, event, eventTarget, targets, elements, eventType);
            }
        },

        firePointers: function (pointer, event, eventTarget, targets, elements, eventType) {
            var pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer)),
                pointerEvent = {},
                i,
                // for tap events
                interval, createNewDoubleTap;

            // if it's a doubletap then the event properties would have been
            // copied from the tap event and provided as the pointer argument
            if (eventType === 'doubletap') {
                pointerEvent = pointer;
            }
            else {
                pointerExtend(pointerEvent, event);
                if (event !== pointer) {
                    pointerExtend(pointerEvent, pointer);
                }

                pointerEvent.preventDefault           = preventOriginalDefault;
                pointerEvent.stopPropagation          = InteractEvent.prototype.stopPropagation;
                pointerEvent.stopImmediatePropagation = InteractEvent.prototype.stopImmediatePropagation;
                pointerEvent.interaction              = this;

                pointerEvent.timeStamp       = new Date().getTime();
                pointerEvent.originalEvent   = event;
                pointerEvent.originalPointer = pointer;
                pointerEvent.type            = eventType;
                pointerEvent.pointerId       = getPointerId(pointer);
                pointerEvent.pointerType     = this.mouse? 'mouse' : !supportsPointerEvent? 'touch'
                                                    : isString(pointer.pointerType)
                                                        ? pointer.pointerType
                                                        : [,,'touch', 'pen', 'mouse'][pointer.pointerType];
            }

            if (eventType === 'tap') {
                pointerEvent.dt = pointerEvent.timeStamp - this.downTimes[pointerIndex];

                interval = pointerEvent.timeStamp - this.tapTime;
                createNewDoubleTap = !!(this.prevTap && this.prevTap.type !== 'doubletap'
                       && this.prevTap.target === pointerEvent.target
                       && interval < 500);

                pointerEvent.double = createNewDoubleTap;

                this.tapTime = pointerEvent.timeStamp;
            }

            for (i = 0; i < targets.length; i++) {
                pointerEvent.currentTarget = elements[i];
                pointerEvent.interactable = targets[i];
                targets[i].fire(pointerEvent);

                if (pointerEvent.immediatePropagationStopped
                    ||(pointerEvent.propagationStopped && elements[i + 1] !== pointerEvent.currentTarget)) {
                    break;
                }
            }

            if (createNewDoubleTap) {
                var doubleTap = {};

                extend(doubleTap, pointerEvent);

                doubleTap.dt   = interval;
                doubleTap.type = 'doubletap';

                this.collectEventTargets(doubleTap, event, eventTarget, 'doubletap');

                this.prevTap = doubleTap;
            }
            else if (eventType === 'tap') {
                this.prevTap = pointerEvent;
            }
        },

        validateSelector: function (pointer, event, matches, matchElements) {
            for (var i = 0, len = matches.length; i < len; i++) {
                var match = matches[i],
                    matchElement = matchElements[i],
                    action = validateAction(match.getAction(pointer, event, this, matchElement), match);

                if (action && withinInteractionLimit(match, matchElement, action)) {
                    this.target = match;
                    this.element = matchElement;

                    return action;
                }
            }
        },

        setSnapping: function (pageCoords, status) {
            var snap = this.target.options[this.prepared.name].snap,
                targets = [],
                target,
                page,
                i;

            status = status || this.snapStatus;

            if (status.useStatusXY) {
                page = { x: status.x, y: status.y };
            }
            else {
                var origin = getOriginXY(this.target, this.element);

                page = extend({}, pageCoords);

                page.x -= origin.x;
                page.y -= origin.y;
            }

            status.realX = page.x;
            status.realY = page.y;

            page.x = page.x - this.inertiaStatus.resumeDx;
            page.y = page.y - this.inertiaStatus.resumeDy;

            var len = snap.targets? snap.targets.length : 0;

            for (var relIndex = 0; relIndex < this.snapOffsets.length; relIndex++) {
                var relative = {
                    x: page.x - this.snapOffsets[relIndex].x,
                    y: page.y - this.snapOffsets[relIndex].y
                };

                for (i = 0; i < len; i++) {
                    if (isFunction(snap.targets[i])) {
                        target = snap.targets[i](relative.x, relative.y, this);
                    }
                    else {
                        target = snap.targets[i];
                    }

                    if (!target) { continue; }

                    targets.push({
                        x: isNumber(target.x) ? (target.x + this.snapOffsets[relIndex].x) : relative.x,
                        y: isNumber(target.y) ? (target.y + this.snapOffsets[relIndex].y) : relative.y,

                        range: isNumber(target.range)? target.range: snap.range
                    });
                }
            }

            var closest = {
                    target: null,
                    inRange: false,
                    distance: 0,
                    range: 0,
                    dx: 0,
                    dy: 0
                };

            for (i = 0, len = targets.length; i < len; i++) {
                target = targets[i];

                var range = target.range,
                    dx = target.x - page.x,
                    dy = target.y - page.y,
                    distance = hypot(dx, dy),
                    inRange = distance <= range;

                // Infinite targets count as being out of range
                // compared to non infinite ones that are in range
                if (range === Infinity && closest.inRange && closest.range !== Infinity) {
                    inRange = false;
                }

                if (!closest.target || (inRange
                    // is the closest target in range?
                    ? (closest.inRange && range !== Infinity
                        // the pointer is relatively deeper in this target
                        ? distance / range < closest.distance / closest.range
                        // this target has Infinite range and the closest doesn't
                        : (range === Infinity && closest.range !== Infinity)
                            // OR this target is closer that the previous closest
                            || distance < closest.distance)
                    // The other is not in range and the pointer is closer to this target
                    : (!closest.inRange && distance < closest.distance))) {

                    if (range === Infinity) {
                        inRange = true;
                    }

                    closest.target = target;
                    closest.distance = distance;
                    closest.range = range;
                    closest.inRange = inRange;
                    closest.dx = dx;
                    closest.dy = dy;

                    status.range = range;
                }
            }

            var snapChanged;

            if (closest.target) {
                snapChanged = (status.snappedX !== closest.target.x || status.snappedY !== closest.target.y);

                status.snappedX = closest.target.x;
                status.snappedY = closest.target.y;
            }
            else {
                snapChanged = true;

                status.snappedX = NaN;
                status.snappedY = NaN;
            }

            status.dx = closest.dx;
            status.dy = closest.dy;

            status.changed = (snapChanged || (closest.inRange && !status.locked));
            status.locked = closest.inRange;

            return status;
        },

        setRestriction: function (pageCoords, status) {
            var target = this.target,
                restrict = target && target.options[this.prepared.name].restrict,
                restriction = restrict && restrict.restriction,
                page;

            if (!restriction) {
                return status;
            }

            status = status || this.restrictStatus;

            page = status.useStatusXY
                    ? page = { x: status.x, y: status.y }
                    : page = extend({}, pageCoords);

            if (status.snap && status.snap.locked) {
                page.x += status.snap.dx || 0;
                page.y += status.snap.dy || 0;
            }

            page.x -= this.inertiaStatus.resumeDx;
            page.y -= this.inertiaStatus.resumeDy;

            status.dx = 0;
            status.dy = 0;
            status.restricted = false;

            var rect, restrictedX, restrictedY;

            if (isString(restriction)) {
                if (restriction === 'parent') {
                    restriction = parentElement(this.element);
                }
                else if (restriction === 'self') {
                    restriction = target.getRect(this.element);
                }
                else {
                    restriction = closest(this.element, restriction);
                }

                if (!restriction) { return status; }
            }

            if (isFunction(restriction)) {
                restriction = restriction(page.x, page.y, this.element);
            }

            if (isElement(restriction)) {
                restriction = getElementRect(restriction);
            }

            rect = restriction;

            if (!restriction) {
                restrictedX = page.x;
                restrictedY = page.y;
            }
            // object is assumed to have
            // x, y, width, height or
            // left, top, right, bottom
            else if ('x' in restriction && 'y' in restriction) {
                restrictedX = Math.max(Math.min(rect.x + rect.width  - this.restrictOffset.right , page.x), rect.x + this.restrictOffset.left);
                restrictedY = Math.max(Math.min(rect.y + rect.height - this.restrictOffset.bottom, page.y), rect.y + this.restrictOffset.top );
            }
            else {
                restrictedX = Math.max(Math.min(rect.right  - this.restrictOffset.right , page.x), rect.left + this.restrictOffset.left);
                restrictedY = Math.max(Math.min(rect.bottom - this.restrictOffset.bottom, page.y), rect.top  + this.restrictOffset.top );
            }

            status.dx = restrictedX - page.x;
            status.dy = restrictedY - page.y;

            status.changed = status.restrictedX !== restrictedX || status.restrictedY !== restrictedY;
            status.restricted = !!(status.dx || status.dy);

            status.restrictedX = restrictedX;
            status.restrictedY = restrictedY;

            return status;
        },

        checkAndPreventDefault: function (event, interactable, element) {
            if (!(interactable = interactable || this.target)) { return; }

            var options = interactable.options,
                prevent = options.preventDefault;

            if (prevent === 'auto' && element && !/^(input|select|textarea)$/i.test(event.target.nodeName)) {
                // do not preventDefault on pointerdown if the prepared action is a drag
                // and dragging can only start from a certain direction - this allows
                // a touch to pan the viewport if a drag isn't in the right direction
                if (/down|start/i.test(event.type)
                    && this.prepared.name === 'drag' && options.drag.axis !== 'xy') {

                    return;
                }

                // with manualStart, only preventDefault while interacting
                if (options[this.prepared.name] && options[this.prepared.name].manualStart
                    && !this.interacting()) {
                    return;
                }

                event.preventDefault();
                return;
            }

            if (prevent === 'always') {
                event.preventDefault();
                return;
            }
        },

        calcInertia: function (status) {
            var inertiaOptions = this.target.options[this.prepared.name].inertia,
                lambda = inertiaOptions.resistance,
                inertiaDur = -Math.log(inertiaOptions.endSpeed / status.v0) / lambda;

            status.x0 = this.prevEvent.pageX;
            status.y0 = this.prevEvent.pageY;
            status.t0 = status.startEvent.timeStamp / 1000;
            status.sx = status.sy = 0;

            status.modifiedXe = status.xe = (status.vx0 - inertiaDur) / lambda;
            status.modifiedYe = status.ye = (status.vy0 - inertiaDur) / lambda;
            status.te = inertiaDur;

            status.lambda_v0 = lambda / status.v0;
            status.one_ve_v0 = 1 - inertiaOptions.endSpeed / status.v0;
        },

        autoScrollMove: function (pointer) {
            if (!(this.interacting()
                && checkAutoScroll(this.target, this.prepared.name))) {
                return;
            }

            if (this.inertiaStatus.active) {
                autoScroll.x = autoScroll.y = 0;
                return;
            }

            var top,
                right,
                bottom,
                left,
                options = this.target.options[this.prepared.name].autoScroll,
                container = options.container || getWindow(this.element);

            if (isWindow(container)) {
                left   = pointer.clientX < autoScroll.margin;
                top    = pointer.clientY < autoScroll.margin;
                right  = pointer.clientX > container.innerWidth  - autoScroll.margin;
                bottom = pointer.clientY > container.innerHeight - autoScroll.margin;
            }
            else {
                var rect = getElementClientRect(container);

                left   = pointer.clientX < rect.left   + autoScroll.margin;
                top    = pointer.clientY < rect.top    + autoScroll.margin;
                right  = pointer.clientX > rect.right  - autoScroll.margin;
                bottom = pointer.clientY > rect.bottom - autoScroll.margin;
            }

            autoScroll.x = (right ? 1: left? -1: 0);
            autoScroll.y = (bottom? 1:  top? -1: 0);

            if (!autoScroll.isScrolling) {
                // set the autoScroll properties to those of the target
                autoScroll.margin = options.margin;
                autoScroll.speed  = options.speed;

                autoScroll.start(this);
            }
        },

        _updateEventTargets: function (target, currentTarget) {
            this._eventTarget    = target;
            this._curEventTarget = currentTarget;
        }

    };

    function getInteractionFromPointer (pointer, eventType, eventTarget) {
        var i = 0, len = interactions.length,
            mouseEvent = (/mouse/i.test(pointer.pointerType || eventType)
                          // MSPointerEvent.MSPOINTER_TYPE_MOUSE
                          || pointer.pointerType === 4),
            interaction;

        var id = getPointerId(pointer);

        // try to resume inertia with a new pointer
        if (/down|start/i.test(eventType)) {
            for (i = 0; i < len; i++) {
                interaction = interactions[i];

                var element = eventTarget;

                if (interaction.inertiaStatus.active && interaction.target.options[interaction.prepared.name].inertia.allowResume
                    && (interaction.mouse === mouseEvent)) {
                    while (element) {
                        // if the element is the interaction element
                        if (element === interaction.element) {
                            return interaction;
                        }
                        element = parentElement(element);
                    }
                }
            }
        }

        // if it's a mouse interaction
        if (mouseEvent || !(supportsTouch || supportsPointerEvent)) {

            // find a mouse interaction that's not in inertia phase
            for (i = 0; i < len; i++) {
                if (interactions[i].mouse && !interactions[i].inertiaStatus.active) {
                    return interactions[i];
                }
            }

            // find any interaction specifically for mouse.
            // if the eventType is a mousedown, and inertia is active
            // ignore the interaction
            for (i = 0; i < len; i++) {
                if (interactions[i].mouse && !(/down/.test(eventType) && interactions[i].inertiaStatus.active)) {
                    return interaction;
                }
            }

            // create a new interaction for mouse
            interaction = new Interaction();
            interaction.mouse = true;

            return interaction;
        }

        // get interaction that has this pointer
        for (i = 0; i < len; i++) {
            if (contains(interactions[i].pointerIds, id)) {
                return interactions[i];
            }
        }

        // at this stage, a pointerUp should not return an interaction
        if (/up|end|out/i.test(eventType)) {
            return null;
        }

        // get first idle interaction
        for (i = 0; i < len; i++) {
            interaction = interactions[i];

            if ((!interaction.prepared.name || (interaction.target.options.gesture.enabled))
                && !interaction.interacting()
                && !(!mouseEvent && interaction.mouse)) {

                return interaction;
            }
        }

        return new Interaction();
    }

    function doOnInteractions (method) {
        return (function (event) {
            var interaction,
                eventTarget = getActualElement(event.path
                                               ? event.path[0]
                                               : event.target),
                curEventTarget = getActualElement(event.currentTarget),
                i;

            if (supportsTouch && /touch/.test(event.type)) {
                prevTouchTime = new Date().getTime();

                for (i = 0; i < event.changedTouches.length; i++) {
                    var pointer = event.changedTouches[i];

                    interaction = getInteractionFromPointer(pointer, event.type, eventTarget);

                    if (!interaction) { continue; }

                    interaction._updateEventTargets(eventTarget, curEventTarget);

                    interaction[method](pointer, event, eventTarget, curEventTarget);
                }
            }
            else {
                if (!supportsPointerEvent && /mouse/.test(event.type)) {
                    // ignore mouse events while touch interactions are active
                    for (i = 0; i < interactions.length; i++) {
                        if (!interactions[i].mouse && interactions[i].pointerIsDown) {
                            return;
                        }
                    }

                    // try to ignore mouse events that are simulated by the browser
                    // after a touch event
                    if (new Date().getTime() - prevTouchTime < 500) {
                        return;
                    }
                }

                interaction = getInteractionFromPointer(event, event.type, eventTarget);

                if (!interaction) { return; }

                interaction._updateEventTargets(eventTarget, curEventTarget);

                interaction[method](event, event, eventTarget, curEventTarget);
            }
        });
    }

    function InteractEvent (interaction, event, action, phase, element, related) {
        var client,
            page,
            target      = interaction.target,
            snapStatus  = interaction.snapStatus,
            restrictStatus  = interaction.restrictStatus,
            pointers    = interaction.pointers,
            deltaSource = (target && target.options || defaultOptions).deltaSource,
            sourceX     = deltaSource + 'X',
            sourceY     = deltaSource + 'Y',
            options     = target? target.options: defaultOptions,
            origin      = getOriginXY(target, element),
            starting    = phase === 'start',
            ending      = phase === 'end',
            coords      = starting? interaction.startCoords : interaction.curCoords;

        element = element || interaction.element;

        page   = extend({}, coords.page);
        client = extend({}, coords.client);

        page.x -= origin.x;
        page.y -= origin.y;

        client.x -= origin.x;
        client.y -= origin.y;

        var relativePoints = options[action].snap && options[action].snap.relativePoints ;

        if (checkSnap(target, action) && !(starting && relativePoints && relativePoints.length)) {
            this.snap = {
                range  : snapStatus.range,
                locked : snapStatus.locked,
                x      : snapStatus.snappedX,
                y      : snapStatus.snappedY,
                realX  : snapStatus.realX,
                realY  : snapStatus.realY,
                dx     : snapStatus.dx,
                dy     : snapStatus.dy
            };

            if (snapStatus.locked) {
                page.x += snapStatus.dx;
                page.y += snapStatus.dy;
                client.x += snapStatus.dx;
                client.y += snapStatus.dy;
            }
        }

        if (checkRestrict(target, action) && !(starting && options[action].restrict.elementRect) && restrictStatus.restricted) {
            page.x += restrictStatus.dx;
            page.y += restrictStatus.dy;
            client.x += restrictStatus.dx;
            client.y += restrictStatus.dy;

            this.restrict = {
                dx: restrictStatus.dx,
                dy: restrictStatus.dy
            };
        }

        this.pageX     = page.x;
        this.pageY     = page.y;
        this.clientX   = client.x;
        this.clientY   = client.y;

        this.x0        = interaction.startCoords.page.x - origin.x;
        this.y0        = interaction.startCoords.page.y - origin.y;
        this.clientX0  = interaction.startCoords.client.x - origin.x;
        this.clientY0  = interaction.startCoords.client.y - origin.y;
        this.ctrlKey   = event.ctrlKey;
        this.altKey    = event.altKey;
        this.shiftKey  = event.shiftKey;
        this.metaKey   = event.metaKey;
        this.button    = event.button;
        this.buttons   = event.buttons;
        this.target    = element;
        this.t0        = interaction.downTimes[0];
        this.type      = action + (phase || '');

        this.interaction = interaction;
        this.interactable = target;

        var inertiaStatus = interaction.inertiaStatus;

        if (inertiaStatus.active) {
            this.detail = 'inertia';
        }

        if (related) {
            this.relatedTarget = related;
        }

        // end event dx, dy is difference between start and end points
        if (ending) {
            if (deltaSource === 'client') {
                this.dx = client.x - interaction.startCoords.client.x;
                this.dy = client.y - interaction.startCoords.client.y;
            }
            else {
                this.dx = page.x - interaction.startCoords.page.x;
                this.dy = page.y - interaction.startCoords.page.y;
            }
        }
        else if (starting) {
            this.dx = 0;
            this.dy = 0;
        }
        // copy properties from previousmove if starting inertia
        else if (phase === 'inertiastart') {
            this.dx = interaction.prevEvent.dx;
            this.dy = interaction.prevEvent.dy;
        }
        else {
            if (deltaSource === 'client') {
                this.dx = client.x - interaction.prevEvent.clientX;
                this.dy = client.y - interaction.prevEvent.clientY;
            }
            else {
                this.dx = page.x - interaction.prevEvent.pageX;
                this.dy = page.y - interaction.prevEvent.pageY;
            }
        }
        if (interaction.prevEvent && interaction.prevEvent.detail === 'inertia'
            && !inertiaStatus.active
            && options[action].inertia && options[action].inertia.zeroResumeDelta) {

            inertiaStatus.resumeDx += this.dx;
            inertiaStatus.resumeDy += this.dy;

            this.dx = this.dy = 0;
        }

        if (action === 'resize' && interaction.resizeAxes) {
            if (options.resize.square) {
                if (interaction.resizeAxes === 'y') {
                    this.dx = this.dy;
                }
                else {
                    this.dy = this.dx;
                }
                this.axes = 'xy';
            }
            else {
                this.axes = interaction.resizeAxes;

                if (interaction.resizeAxes === 'x') {
                    this.dy = 0;
                }
                else if (interaction.resizeAxes === 'y') {
                    this.dx = 0;
                }
            }
        }
        else if (action === 'gesture') {
            this.touches = [pointers[0], pointers[1]];

            if (starting) {
                this.distance = touchDistance(pointers, deltaSource);
                this.box      = touchBBox(pointers);
                this.scale    = 1;
                this.ds       = 0;
                this.angle    = touchAngle(pointers, undefined, deltaSource);
                this.da       = 0;
            }
            else if (ending || event instanceof InteractEvent) {
                this.distance = interaction.prevEvent.distance;
                this.box      = interaction.prevEvent.box;
                this.scale    = interaction.prevEvent.scale;
                this.ds       = this.scale - 1;
                this.angle    = interaction.prevEvent.angle;
                this.da       = this.angle - interaction.gesture.startAngle;
            }
            else {
                this.distance = touchDistance(pointers, deltaSource);
                this.box      = touchBBox(pointers);
                this.scale    = this.distance / interaction.gesture.startDistance;
                this.angle    = touchAngle(pointers, interaction.gesture.prevAngle, deltaSource);

                this.ds = this.scale - interaction.gesture.prevScale;
                this.da = this.angle - interaction.gesture.prevAngle;
            }
        }

        if (starting) {
            this.timeStamp = interaction.downTimes[0];
            this.dt        = 0;
            this.duration  = 0;
            this.speed     = 0;
            this.velocityX = 0;
            this.velocityY = 0;
        }
        else if (phase === 'inertiastart') {
            this.timeStamp = interaction.prevEvent.timeStamp;
            this.dt        = interaction.prevEvent.dt;
            this.duration  = interaction.prevEvent.duration;
            this.speed     = interaction.prevEvent.speed;
            this.velocityX = interaction.prevEvent.velocityX;
            this.velocityY = interaction.prevEvent.velocityY;
        }
        else {
            this.timeStamp = new Date().getTime();
            this.dt        = this.timeStamp - interaction.prevEvent.timeStamp;
            this.duration  = this.timeStamp - interaction.downTimes[0];

            if (event instanceof InteractEvent) {
                var dx = this[sourceX] - interaction.prevEvent[sourceX],
                    dy = this[sourceY] - interaction.prevEvent[sourceY],
                    dt = this.dt / 1000;

                this.speed = hypot(dx, dy) / dt;
                this.velocityX = dx / dt;
                this.velocityY = dy / dt;
            }
            // if normal move or end event, use previous user event coords
            else {
                // speed and velocity in pixels per second
                this.speed = interaction.pointerDelta[deltaSource].speed;
                this.velocityX = interaction.pointerDelta[deltaSource].vx;
                this.velocityY = interaction.pointerDelta[deltaSource].vy;
            }
        }

        if ((ending || phase === 'inertiastart')
            && interaction.prevEvent.speed > 600 && this.timeStamp - interaction.prevEvent.timeStamp < 150) {

            var angle = 180 * Math.atan2(interaction.prevEvent.velocityY, interaction.prevEvent.velocityX) / Math.PI,
                overlap = 22.5;

            if (angle < 0) {
                angle += 360;
            }

            var left = 135 - overlap <= angle && angle < 225 + overlap,
                up   = 225 - overlap <= angle && angle < 315 + overlap,

                right = !left && (315 - overlap <= angle || angle <  45 + overlap),
                down  = !up   &&   45 - overlap <= angle && angle < 135 + overlap;

            this.swipe = {
                up   : up,
                down : down,
                left : left,
                right: right,
                angle: angle,
                speed: interaction.prevEvent.speed,
                velocity: {
                    x: interaction.prevEvent.velocityX,
                    y: interaction.prevEvent.velocityY
                }
            };
        }
    }

    InteractEvent.prototype = {
        preventDefault: blank,
        stopImmediatePropagation: function () {
            this.immediatePropagationStopped = this.propagationStopped = true;
        },
        stopPropagation: function () {
            this.propagationStopped = true;
        }
    };

    function preventOriginalDefault () {
        this.originalEvent.preventDefault();
    }

    function getActionCursor (action) {
        var cursor = '';

        if (action.name === 'drag') {
            cursor =  actionCursors.drag;
        }
        if (action.name === 'resize') {
            if (action.axis) {
                cursor =  actionCursors[action.name + action.axis];
            }
            else if (action.edges) {
                var cursorKey = 'resize',
                    edgeNames = ['top', 'bottom', 'left', 'right'];

                for (var i = 0; i < 4; i++) {
                    if (action.edges[edgeNames[i]]) {
                        cursorKey += edgeNames[i];
                    }
                }

                cursor = actionCursors[cursorKey];
            }
        }

        return cursor;
    }

    function checkResizeEdge (name, value, page, element, interactableElement, rect, margin) {
        // false, '', undefined, null
        if (!value) { return false; }

        // true value, use pointer coords and element rect
        if (value === true) {
            // if dimensions are negative, "switch" edges
            var width = isNumber(rect.width)? rect.width : rect.right - rect.left,
                height = isNumber(rect.height)? rect.height : rect.bottom - rect.top;

            if (width < 0) {
                if      (name === 'left' ) { name = 'right'; }
                else if (name === 'right') { name = 'left' ; }
            }
            if (height < 0) {
                if      (name === 'top'   ) { name = 'bottom'; }
                else if (name === 'bottom') { name = 'top'   ; }
            }

            if (name === 'left'  ) { return page.x < ((width  >= 0? rect.left: rect.right ) + margin); }
            if (name === 'top'   ) { return page.y < ((height >= 0? rect.top : rect.bottom) + margin); }

            if (name === 'right' ) { return page.x > ((width  >= 0? rect.right : rect.left) - margin); }
            if (name === 'bottom') { return page.y > ((height >= 0? rect.bottom: rect.top ) - margin); }
        }

        // the remaining checks require an element
        if (!isElement(element)) { return false; }

        return isElement(value)
                    // the value is an element to use as a resize handle
                    ? value === element
                    // otherwise check if element matches value as selector
                    : matchesUpTo(element, value, interactableElement);
    }

    function defaultActionChecker (pointer, interaction, element) {
        var rect = this.getRect(element),
            shouldResize = false,
            action = null,
            resizeAxes = null,
            resizeEdges,
            page = extend({}, interaction.curCoords.page),
            options = this.options;

        if (!rect) { return null; }

        if (actionIsEnabled.resize && options.resize.enabled) {
            var resizeOptions = options.resize;

            resizeEdges = {
                left: false, right: false, top: false, bottom: false
            };

            // if using resize.edges
            if (isObject(resizeOptions.edges)) {
                for (var edge in resizeEdges) {
                    resizeEdges[edge] = checkResizeEdge(edge,
                                                        resizeOptions.edges[edge],
                                                        page,
                                                        interaction._eventTarget,
                                                        element,
                                                        rect,
                                                        resizeOptions.margin || margin);
                }

                resizeEdges.left = resizeEdges.left && !resizeEdges.right;
                resizeEdges.top  = resizeEdges.top  && !resizeEdges.bottom;

                shouldResize = resizeEdges.left || resizeEdges.right || resizeEdges.top || resizeEdges.bottom;
            }
            else {
                var right  = options.resize.axis !== 'y' && page.x > (rect.right  - margin),
                    bottom = options.resize.axis !== 'x' && page.y > (rect.bottom - margin);

                shouldResize = right || bottom;
                resizeAxes = (right? 'x' : '') + (bottom? 'y' : '');
            }
        }

        action = shouldResize
            ? 'resize'
            : actionIsEnabled.drag && options.drag.enabled
                ? 'drag'
                : null;

        if (actionIsEnabled.gesture
            && interaction.pointerIds.length >=2
            && !(interaction.dragging || interaction.resizing)) {
            action = 'gesture';
        }

        if (action) {
            return {
                name: action,
                axis: resizeAxes,
                edges: resizeEdges
            };
        }

        return null;
    }

    // Check if action is enabled globally and the current target supports it
    // If so, return the validated action. Otherwise, return null
    function validateAction (action, interactable) {
        if (!isObject(action)) { return null; }

        var actionName = action.name,
            options = interactable.options;

        if ((  (actionName  === 'resize'   && options.resize.enabled )
            || (actionName      === 'drag'     && options.drag.enabled  )
            || (actionName      === 'gesture'  && options.gesture.enabled))
            && actionIsEnabled[actionName]) {

            if (actionName === 'resize' || actionName === 'resizeyx') {
                actionName = 'resizexy';
            }

            return action;
        }
        return null;
    }

    var listeners = {},
        interactionListeners = [
            'dragStart', 'dragMove', 'resizeStart', 'resizeMove', 'gestureStart', 'gestureMove',
            'pointerOver', 'pointerOut', 'pointerHover', 'selectorDown',
            'pointerDown', 'pointerMove', 'pointerUp', 'pointerCancel', 'pointerEnd',
            'addPointer', 'removePointer', 'recordPointer', 'autoScrollMove'
        ];

    for (var i = 0, len = interactionListeners.length; i < len; i++) {
        var name = interactionListeners[i];

        listeners[name] = doOnInteractions(name);
    }

    // bound to the interactable context when a DOM event
    // listener is added to a selector interactable
    function delegateListener (event, useCapture) {
        var fakeEvent = {},
            delegated = delegatedEvents[event.type],
            eventTarget = getActualElement(event.path
                                           ? event.path[0]
                                           : event.target),
            element = eventTarget;

        useCapture = useCapture? true: false;

        // duplicate the event so that currentTarget can be changed
        for (var prop in event) {
            fakeEvent[prop] = event[prop];
        }

        fakeEvent.originalEvent = event;
        fakeEvent.preventDefault = preventOriginalDefault;

        // climb up document tree looking for selector matches
        while (isElement(element)) {
            for (var i = 0; i < delegated.selectors.length; i++) {
                var selector = delegated.selectors[i],
                    context = delegated.contexts[i];

                if (matchesSelector(element, selector)
                    && nodeContains(context, eventTarget)
                    && nodeContains(context, element)) {

                    var listeners = delegated.listeners[i];

                    fakeEvent.currentTarget = element;

                    for (var j = 0; j < listeners.length; j++) {
                        if (listeners[j][1] === useCapture) {
                            listeners[j][0](fakeEvent);
                        }
                    }
                }
            }

            element = parentElement(element);
        }
    }

    function delegateUseCapture (event) {
        return delegateListener.call(this, event, true);
    }

    interactables.indexOfElement = function indexOfElement (element, context) {
        context = context || document;

        for (var i = 0; i < this.length; i++) {
            var interactable = this[i];

            if ((interactable.selector === element
                && (interactable._context === context))
                || (!interactable.selector && interactable._element === element)) {

                return i;
            }
        }
        return -1;
    };

    interactables.get = function interactableGet (element, options) {
        return this[this.indexOfElement(element, options && options.context)];
    };

    interactables.forEachSelector = function (callback) {
        for (var i = 0; i < this.length; i++) {
            var interactable = this[i];

            if (!interactable.selector) {
                continue;
            }

            var ret = callback(interactable, interactable.selector, interactable._context, i, this);

            if (ret !== undefined) {
                return ret;
            }
        }
    };

    /*\
     * interact
     [ method ]
     *
     * The methods of this variable can be used to set elements as
     * interactables and also to change various default settings.
     *
     * Calling it as a function and passing an element or a valid CSS selector
     * string returns an Interactable object which has various methods to
     * configure it.
     *
     - element (Element | string) The HTML or SVG Element to interact with or CSS selector
     = (object) An @Interactable
     *
     > Usage
     | interact(document.getElementById('draggable')).draggable(true);
     |
     | var rectables = interact('rect');
     | rectables
     |     .gesturable(true)
     |     .on('gesturemove', function (event) {
     |         // something cool...
     |     })
     |     .autoScroll(true);
    \*/
    function interact (element, options) {
        return interactables.get(element, options) || new Interactable(element, options);
    }

    /*\
     * Interactable
     [ property ]
     **
     * Object type returned by @interact
    \*/
    function Interactable (element, options) {
        this._element = element;
        this._iEvents = this._iEvents || {};

        var _window;

        if (trySelector(element)) {
            this.selector = element;

            var context = options && options.context;

            _window = context? getWindow(context) : window;

            if (context && (_window.Node
                    ? context instanceof _window.Node
                    : (isElement(context) || context === _window.document))) {

                this._context = context;
            }
        }
        else {
            _window = getWindow(element);

            if (isElement(element, _window)) {

                if (supportsPointerEvent) {
                    events.add(this._element, pEventTypes.down, listeners.pointerDown );
                    events.add(this._element, pEventTypes.move, listeners.pointerHover);
                }
                else {
                    events.add(this._element, 'mousedown' , listeners.pointerDown );
                    events.add(this._element, 'mousemove' , listeners.pointerHover);
                    events.add(this._element, 'touchstart', listeners.pointerDown );
                    events.add(this._element, 'touchmove' , listeners.pointerHover);
                }
            }
        }

        this._doc = _window.document;

        if (!contains(documents, this._doc)) {
            listenToDocument(this._doc);
        }

        interactables.push(this);

        this.set(options);
    }

    Interactable.prototype = {
        setOnEvents: function (action, phases) {
            if (action === 'drop') {
                if (isFunction(phases.ondrop)          ) { this.ondrop           = phases.ondrop          ; }
                if (isFunction(phases.ondropactivate)  ) { this.ondropactivate   = phases.ondropactivate  ; }
                if (isFunction(phases.ondropdeactivate)) { this.ondropdeactivate = phases.ondropdeactivate; }
                if (isFunction(phases.ondragenter)     ) { this.ondragenter      = phases.ondragenter     ; }
                if (isFunction(phases.ondragleave)     ) { this.ondragleave      = phases.ondragleave     ; }
                if (isFunction(phases.ondropmove)      ) { this.ondropmove       = phases.ondropmove      ; }
            }
            else {
                action = 'on' + action;

                if (isFunction(phases.onstart)       ) { this[action + 'start'         ] = phases.onstart         ; }
                if (isFunction(phases.onmove)        ) { this[action + 'move'          ] = phases.onmove          ; }
                if (isFunction(phases.onend)         ) { this[action + 'end'           ] = phases.onend           ; }
                if (isFunction(phases.oninertiastart)) { this[action + 'inertiastart'  ] = phases.oninertiastart  ; }
            }

            return this;
        },

        /*\
         * Interactable.draggable
         [ method ]
         *
         * Gets or sets whether drag actions can be performed on the
         * Interactable
         *
         = (boolean) Indicates if this can be the target of drag events
         | var isDraggable = interact('ul li').draggable();
         * or
         - options (boolean | object) #optional true/false or An object with event listeners to be fired on drag events (object makes the Interactable draggable)
         = (object) This Interactable
         | interact(element).draggable({
         |     onstart: function (event) {},
         |     onmove : function (event) {},
         |     onend  : function (event) {},
         |
         |     // the axis in which the first movement must be
         |     // for the drag sequence to start
         |     // 'xy' by default - any direction
         |     axis: 'x' || 'y' || 'xy',
         |
         |     // max number of drags that can happen concurrently
         |     // with elements of this Interactable. Infinity by default
         |     max: Infinity,
         |
         |     // max number of drags that can target the same element+Interactable
         |     // 1 by default
         |     maxPerElement: 2
         | });
        \*/
        draggable: function (options) {
            if (isObject(options)) {
                this.options.drag.enabled = options.enabled === false? false: true;
                this.setPerAction('drag', options);
                this.setOnEvents('drag', options);

                if (/^x$|^y$|^xy$/.test(options.axis)) {
                    this.options.drag.axis = options.axis;
                }
                else if (options.axis === null) {
                    delete this.options.drag.axis;
                }

                return this;
            }

            if (isBool(options)) {
                this.options.drag.enabled = options;

                return this;
            }

            return this.options.drag;
        },

        setPerAction: function (action, options) {
            // for all the default per-action options
            for (var option in options) {
                // if this option exists for this action
                if (option in defaultOptions[action]) {
                    // if the option in the options arg is an object value
                    if (isObject(options[option])) {
                        // duplicate the object
                        this.options[action][option] = extend(this.options[action][option] || {}, options[option]);

                        if (isObject(defaultOptions.perAction[option]) && 'enabled' in defaultOptions.perAction[option]) {
                            this.options[action][option].enabled = options[option].enabled === false? false : true;
                        }
                    }
                    else if (isBool(options[option]) && isObject(defaultOptions.perAction[option])) {
                        this.options[action][option].enabled = options[option];
                    }
                    else if (options[option] !== undefined) {
                        // or if it's not undefined, do a plain assignment
                        this.options[action][option] = options[option];
                    }
                }
            }
        },

        /*\
         * Interactable.dropzone
         [ method ]
         *
         * Returns or sets whether elements can be dropped onto this
         * Interactable to trigger drop events
         *
         * Dropzones can receive the following events:
         *  - `dropactivate` and `dropdeactivate` when an acceptable drag starts and ends
         *  - `dragenter` and `dragleave` when a draggable enters and leaves the dropzone
         *  - `dragmove` when a draggable that has entered the dropzone is moved
         *  - `drop` when a draggable is dropped into this dropzone
         *
         *  Use the `accept` option to allow only elements that match the given CSS selector or element.
         *
         *  Use the `overlap` option to set how drops are checked for. The allowed values are:
         *   - `'pointer'`, the pointer must be over the dropzone (default)
         *   - `'center'`, the draggable element's center must be over the dropzone
         *   - a number from 0-1 which is the `(intersection area) / (draggable area)`.
         *       e.g. `0.5` for drop to happen when half of the area of the
         *       draggable is over the dropzone
         *
         - options (boolean | object | null) #optional The new value to be set.
         | interact('.drop').dropzone({
         |   accept: '.can-drop' || document.getElementById('single-drop'),
         |   overlap: 'pointer' || 'center' || zeroToOne
         | }
         = (boolean | object) The current setting or this Interactable
        \*/
        dropzone: function (options) {
            if (isObject(options)) {
                this.options.drop.enabled = options.enabled === false? false: true;
                this.setOnEvents('drop', options);

                if (/^(pointer|center)$/.test(options.overlap)) {
                    this.options.drop.overlap = options.overlap;
                }
                else if (isNumber(options.overlap)) {
                    this.options.drop.overlap = Math.max(Math.min(1, options.overlap), 0);
                }
                if ('accept' in options) {
                  this.options.drop.accept = options.accept;
                }
                if ('checker' in options) {
                  this.options.drop.checker = options.checker;
                }

                return this;
            }

            if (isBool(options)) {
                this.options.drop.enabled = options;

                return this;
            }

            return this.options.drop;
        },

        dropCheck: function (dragEvent, event, draggable, draggableElement, dropElement, rect) {
            var dropped = false;

            // if the dropzone has no rect (eg. display: none)
            // call the custom dropChecker or just return false
            if (!(rect = rect || this.getRect(dropElement))) {
                return (this.options.drop.checker
                    ? this.options.drop.checker(dragEvent, event, dropped, this, dropElement, draggable, draggableElement)
                    : false);
            }

            var dropOverlap = this.options.drop.overlap;

            if (dropOverlap === 'pointer') {
                var page = getPageXY(dragEvent),
                    origin = getOriginXY(draggable, draggableElement),
                    horizontal,
                    vertical;

                page.x += origin.x;
                page.y += origin.y;

                horizontal = (page.x > rect.left) && (page.x < rect.right);
                vertical   = (page.y > rect.top ) && (page.y < rect.bottom);

                dropped = horizontal && vertical;
            }

            var dragRect = draggable.getRect(draggableElement);

            if (dropOverlap === 'center') {
                var cx = dragRect.left + dragRect.width  / 2,
                    cy = dragRect.top  + dragRect.height / 2;

                dropped = cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;
            }

            if (isNumber(dropOverlap)) {
                var overlapArea  = (Math.max(0, Math.min(rect.right , dragRect.right ) - Math.max(rect.left, dragRect.left))
                                  * Math.max(0, Math.min(rect.bottom, dragRect.bottom) - Math.max(rect.top , dragRect.top ))),
                    overlapRatio = overlapArea / (dragRect.width * dragRect.height);

                dropped = overlapRatio >= dropOverlap;
            }

            if (this.options.drop.checker) {
                dropped = this.options.drop.checker(dragEvent, event, dropped, this, dropElement, draggable, draggableElement);
            }

            return dropped;
        },

        /*\
         * Interactable.dropChecker
         [ method ]
         *
         * DEPRECATED. Use interactable.dropzone({ checker: function... }) instead.
         *
         * Gets or sets the function used to check if a dragged element is
         * over this Interactable.
         *
         - checker (function) #optional The function that will be called when checking for a drop
         = (Function | Interactable) The checker function or this Interactable
         *
         * The checker function takes the following arguments:
         *
         - dragEvent (InteractEvent) The related dragmove or dragend event
         - event (TouchEvent | PointerEvent | MouseEvent) The user move/up/end Event related to the dragEvent
         - dropped (boolean) The value from the default drop checker
         - dropzone (Interactable) The dropzone interactable
         - dropElement (Element) The dropzone element
         - draggable (Interactable) The Interactable being dragged
         - draggableElement (Element) The actual element that's being dragged
         *
         > Usage:
         | interact(target)
         | .dropChecker(function(dragEvent,         // related dragmove or dragend event
         |                       event,             // TouchEvent/PointerEvent/MouseEvent
         |                       dropped,           // bool result of the default checker
         |                       dropzone,          // dropzone Interactable
         |                       dropElement,       // dropzone elemnt
         |                       draggable,         // draggable Interactable
         |                       draggableElement) {// draggable element
         |
         |   return dropped && event.target.hasAttribute('allow-drop');
         | }
        \*/
        dropChecker: function (checker) {
            if (isFunction(checker)) {
                this.options.drop.checker = checker;

                return this;
            }
            if (checker === null) {
                delete this.options.getRect;

                return this;
            }

            return this.options.drop.checker;
        },

        /*\
         * Interactable.accept
         [ method ]
         *
         * Deprecated. add an `accept` property to the options object passed to
         * @Interactable.dropzone instead.
         *
         * Gets or sets the Element or CSS selector match that this
         * Interactable accepts if it is a dropzone.
         *
         - newValue (Element | string | null) #optional
         * If it is an Element, then only that element can be dropped into this dropzone.
         * If it is a string, the element being dragged must match it as a selector.
         * If it is null, the accept options is cleared - it accepts any element.
         *
         = (string | Element | null | Interactable) The current accept option if given `undefined` or this Interactable
        \*/
        accept: function (newValue) {
            if (isElement(newValue)) {
                this.options.drop.accept = newValue;

                return this;
            }

            // test if it is a valid CSS selector
            if (trySelector(newValue)) {
                this.options.drop.accept = newValue;

                return this;
            }

            if (newValue === null) {
                delete this.options.drop.accept;

                return this;
            }

            return this.options.drop.accept;
        },

        /*\
         * Interactable.resizable
         [ method ]
         *
         * Gets or sets whether resize actions can be performed on the
         * Interactable
         *
         = (boolean) Indicates if this can be the target of resize elements
         | var isResizeable = interact('input[type=text]').resizable();
         * or
         - options (boolean | object) #optional true/false or An object with event listeners to be fired on resize events (object makes the Interactable resizable)
         = (object) This Interactable
         | interact(element).resizable({
         |     onstart: function (event) {},
         |     onmove : function (event) {},
         |     onend  : function (event) {},
         |
         |     edges: {
         |       top   : true,       // Use pointer coords to check for resize.
         |       left  : false,      // Disable resizing from left edge.
         |       bottom: '.resize-s',// Resize if pointer target matches selector
         |       right : handleEl    // Resize if pointer target is the given Element
         |     },
         |
         |     // Width and height can be adjusted independently. When `true`, width and
         |     // height are adjusted at a 1:1 ratio.
         |     square: false,
         |
         |     // Width and height can be adjusted independently. When `true`, width and
         |     // height maintain the aspect ratio they had when resizing started.
         |     preserveAspectRatio: false,
         |
         |     // a value of 'none' will limit the resize rect to a minimum of 0x0
         |     // 'negate' will allow the rect to have negative width/height
         |     // 'reposition' will keep the width/height positive by swapping
         |     // the top and bottom edges and/or swapping the left and right edges
         |     invert: 'none' || 'negate' || 'reposition'
         |
         |     // limit multiple resizes.
         |     // See the explanation in the @Interactable.draggable example
         |     max: Infinity,
         |     maxPerElement: 1,
         | });
        \*/
        resizable: function (options) {
            if (isObject(options)) {
                this.options.resize.enabled = options.enabled === false? false: true;
                this.setPerAction('resize', options);
                this.setOnEvents('resize', options);

                if (/^x$|^y$|^xy$/.test(options.axis)) {
                    this.options.resize.axis = options.axis;
                }
                else if (options.axis === null) {
                    this.options.resize.axis = defaultOptions.resize.axis;
                }

                if (isBool(options.preserveAspectRatio)) {
                    this.options.resize.preserveAspectRatio = options.preserveAspectRatio;
                }
                else if (isBool(options.square)) {
                    this.options.resize.square = options.square;
                }

                return this;
            }
            if (isBool(options)) {
                this.options.resize.enabled = options;

                return this;
            }
            return this.options.resize;
        },

        /*\
         * Interactable.squareResize
         [ method ]
         *
         * Deprecated. Add a `square: true || false` property to @Interactable.resizable instead
         *
         * Gets or sets whether resizing is forced 1:1 aspect
         *
         = (boolean) Current setting
         *
         * or
         *
         - newValue (boolean) #optional
         = (object) this Interactable
        \*/
        squareResize: function (newValue) {
            if (isBool(newValue)) {
                this.options.resize.square = newValue;

                return this;
            }

            if (newValue === null) {
                delete this.options.resize.square;

                return this;
            }

            return this.options.resize.square;
        },

        /*\
         * Interactable.gesturable
         [ method ]
         *
         * Gets or sets whether multitouch gestures can be performed on the
         * Interactable's element
         *
         = (boolean) Indicates if this can be the target of gesture events
         | var isGestureable = interact(element).gesturable();
         * or
         - options (boolean | object) #optional true/false or An object with event listeners to be fired on gesture events (makes the Interactable gesturable)
         = (object) this Interactable
         | interact(element).gesturable({
         |     onstart: function (event) {},
         |     onmove : function (event) {},
         |     onend  : function (event) {},
         |
         |     // limit multiple gestures.
         |     // See the explanation in @Interactable.draggable example
         |     max: Infinity,
         |     maxPerElement: 1,
         | });
        \*/
        gesturable: function (options) {
            if (isObject(options)) {
                this.options.gesture.enabled = options.enabled === false? false: true;
                this.setPerAction('gesture', options);
                this.setOnEvents('gesture', options);

                return this;
            }

            if (isBool(options)) {
                this.options.gesture.enabled = options;

                return this;
            }

            return this.options.gesture;
        },

        /*\
         * Interactable.autoScroll
         [ method ]
         **
         * Deprecated. Add an `autoscroll` property to the options object
         * passed to @Interactable.draggable or @Interactable.resizable instead.
         *
         * Returns or sets whether dragging and resizing near the edges of the
         * window/container trigger autoScroll for this Interactable
         *
         = (object) Object with autoScroll properties
         *
         * or
         *
         - options (object | boolean) #optional
         * options can be:
         * - an object with margin, distance and interval properties,
         * - true or false to enable or disable autoScroll or
         = (Interactable) this Interactable
        \*/
        autoScroll: function (options) {
            if (isObject(options)) {
                options = extend({ actions: ['drag', 'resize']}, options);
            }
            else if (isBool(options)) {
                options = { actions: ['drag', 'resize'], enabled: options };
            }

            return this.setOptions('autoScroll', options);
        },

        /*\
         * Interactable.snap
         [ method ]
         **
         * Deprecated. Add a `snap` property to the options object passed
         * to @Interactable.draggable or @Interactable.resizable instead.
         *
         * Returns or sets if and how action coordinates are snapped. By
         * default, snapping is relative to the pointer coordinates. You can
         * change this by setting the
         * [`elementOrigin`](https://github.com/taye/interact.js/pull/72).
         **
         = (boolean | object) `false` if snap is disabled; object with snap properties if snap is enabled
         **
         * or
         **
         - options (object | boolean | null) #optional
         = (Interactable) this Interactable
         > Usage
         | interact(document.querySelector('#thing')).snap({
         |     targets: [
         |         // snap to this specific point
         |         {
         |             x: 100,
         |             y: 100,
         |             range: 25
         |         },
         |         // give this function the x and y page coords and snap to the object returned
         |         function (x, y) {
         |             return {
         |                 x: x,
         |                 y: (75 + 50 * Math.sin(x * 0.04)),
         |                 range: 40
         |             };
         |         },
         |         // create a function that snaps to a grid
         |         interact.createSnapGrid({
         |             x: 50,
         |             y: 50,
         |             range: 10,              // optional
         |             offset: { x: 5, y: 10 } // optional
         |         })
         |     ],
         |     // do not snap during normal movement.
         |     // Instead, trigger only one snapped move event
         |     // immediately before the end event.
         |     endOnly: true,
         |
         |     relativePoints: [
         |         { x: 0, y: 0 },  // snap relative to the top left of the element
         |         { x: 1, y: 1 },  // and also to the bottom right
         |     ],  
         |
         |     // offset the snap target coordinates
         |     // can be an object with x/y or 'startCoords'
         |     offset: { x: 50, y: 50 }
         |   }
         | });
        \*/
        snap: function (options) {
            var ret = this.setOptions('snap', options);

            if (ret === this) { return this; }

            return ret.drag;
        },

        setOptions: function (option, options) {
            var actions = options && isArray(options.actions)
                    ? options.actions
                    : ['drag'];

            var i;

            if (isObject(options) || isBool(options)) {
                for (i = 0; i < actions.length; i++) {
                    var action = /resize/.test(actions[i])? 'resize' : actions[i];

                    if (!isObject(this.options[action])) { continue; }

                    var thisOption = this.options[action][option];

                    if (isObject(options)) {
                        extend(thisOption, options);
                        thisOption.enabled = options.enabled === false? false: true;

                        if (option === 'snap') {
                            if (thisOption.mode === 'grid') {
                                thisOption.targets = [
                                    interact.createSnapGrid(extend({
                                        offset: thisOption.gridOffset || { x: 0, y: 0 }
                                    }, thisOption.grid || {}))
                                ];
                            }
                            else if (thisOption.mode === 'anchor') {
                                thisOption.targets = thisOption.anchors;
                            }
                            else if (thisOption.mode === 'path') {
                                thisOption.targets = thisOption.paths;
                            }

                            if ('elementOrigin' in options) {
                                thisOption.relativePoints = [options.elementOrigin];
                            }
                        }
                    }
                    else if (isBool(options)) {
                        thisOption.enabled = options;
                    }
                }

                return this;
            }

            var ret = {},
                allActions = ['drag', 'resize', 'gesture'];

            for (i = 0; i < allActions.length; i++) {
                if (option in defaultOptions[allActions[i]]) {
                    ret[allActions[i]] = this.options[allActions[i]][option];
                }
            }

            return ret;
        },


        /*\
         * Interactable.inertia
         [ method ]
         **
         * Deprecated. Add an `inertia` property to the options object passed
         * to @Interactable.draggable or @Interactable.resizable instead.
         *
         * Returns or sets if and how events continue to run after the pointer is released
         **
         = (boolean | object) `false` if inertia is disabled; `object` with inertia properties if inertia is enabled
         **
         * or
         **
         - options (object | boolean | null) #optional
         = (Interactable) this Interactable
         > Usage
         | // enable and use default settings
         | interact(element).inertia(true);
         |
         | // enable and use custom settings
         | interact(element).inertia({
         |     // value greater than 0
         |     // high values slow the object down more quickly
         |     resistance     : 16,
         |
         |     // the minimum launch speed (pixels per second) that results in inertia start
         |     minSpeed       : 200,
         |
         |     // inertia will stop when the object slows down to this speed
         |     endSpeed       : 20,
         |
         |     // boolean; should actions be resumed when the pointer goes down during inertia
         |     allowResume    : true,
         |
         |     // boolean; should the jump when resuming from inertia be ignored in event.dx/dy
         |     zeroResumeDelta: false,
         |
         |     // if snap/restrict are set to be endOnly and inertia is enabled, releasing
         |     // the pointer without triggering inertia will animate from the release
         |     // point to the snaped/restricted point in the given amount of time (ms)
         |     smoothEndDuration: 300,
         |
         |     // an array of action types that can have inertia (no gesture)
         |     actions        : ['drag', 'resize']
         | });
         |
         | // reset custom settings and use all defaults
         | interact(element).inertia(null);
        \*/
        inertia: function (options) {
            var ret = this.setOptions('inertia', options);

            if (ret === this) { return this; }

            return ret.drag;
        },

        getAction: function (pointer, event, interaction, element) {
            var action = this.defaultActionChecker(pointer, interaction, element);

            if (this.options.actionChecker) {
                return this.options.actionChecker(pointer, event, action, this, element, interaction);
            }

            return action;
        },

        defaultActionChecker: defaultActionChecker,

        /*\
         * Interactable.actionChecker
         [ method ]
         *
         * Gets or sets the function used to check action to be performed on
         * pointerDown
         *
         - checker (function | null) #optional A function which takes a pointer event, defaultAction string, interactable, element and interaction as parameters and returns an object with name property 'drag' 'resize' or 'gesture' and optionally an `edges` object with boolean 'top', 'left', 'bottom' and right props.
         = (Function | Interactable) The checker function or this Interactable
         *
         | interact('.resize-drag')
         |   .resizable(true)
         |   .draggable(true)
         |   .actionChecker(function (pointer, event, action, interactable, element, interaction) {
         |
         |   if (interact.matchesSelector(event.target, '.drag-handle') {
         |     // force drag with handle target
         |     action.name = drag;
         |   }
         |   else {
         |     // resize from the top and right edges
         |     action.name  = 'resize';
         |     action.edges = { top: true, right: true };
         |   }
         |
         |   return action;
         | });
        \*/
        actionChecker: function (checker) {
            if (isFunction(checker)) {
                this.options.actionChecker = checker;

                return this;
            }

            if (checker === null) {
                delete this.options.actionChecker;

                return this;
            }

            return this.options.actionChecker;
        },

        /*\
         * Interactable.getRect
         [ method ]
         *
         * The default function to get an Interactables bounding rect. Can be
         * overridden using @Interactable.rectChecker.
         *
         - element (Element) #optional The element to measure.
         = (object) The object's bounding rectangle.
         o {
         o     top   : 0,
         o     left  : 0,
         o     bottom: 0,
         o     right : 0,
         o     width : 0,
         o     height: 0
         o }
        \*/
        getRect: function rectCheck (element) {
            element = element || this._element;

            if (this.selector && !(isElement(element))) {
                element = this._context.querySelector(this.selector);
            }

            return getElementRect(element);
        },

        /*\
         * Interactable.rectChecker
         [ method ]
         *
         * Returns or sets the function used to calculate the interactable's
         * element's rectangle
         *
         - checker (function) #optional A function which returns this Interactable's bounding rectangle. See @Interactable.getRect
         = (function | object) The checker function or this Interactable
        \*/
        rectChecker: function (checker) {
            if (isFunction(checker)) {
                this.getRect = checker;

                return this;
            }

            if (checker === null) {
                delete this.options.getRect;

                return this;
            }

            return this.getRect;
        },

        /*\
         * Interactable.styleCursor
         [ method ]
         *
         * Returns or sets whether the action that would be performed when the
         * mouse on the element are checked on `mousemove` so that the cursor
         * may be styled appropriately
         *
         - newValue (boolean) #optional
         = (boolean | Interactable) The current setting or this Interactable
        \*/
        styleCursor: function (newValue) {
            if (isBool(newValue)) {
                this.options.styleCursor = newValue;

                return this;
            }

            if (newValue === null) {
                delete this.options.styleCursor;

                return this;
            }

            return this.options.styleCursor;
        },

        /*\
         * Interactable.preventDefault
         [ method ]
         *
         * Returns or sets whether to prevent the browser's default behaviour
         * in response to pointer events. Can be set to:
         *  - `'always'` to always prevent
         *  - `'never'` to never prevent
         *  - `'auto'` to let interact.js try to determine what would be best
         *
         - newValue (string) #optional `true`, `false` or `'auto'`
         = (string | Interactable) The current setting or this Interactable
        \*/
        preventDefault: function (newValue) {
            if (/^(always|never|auto)$/.test(newValue)) {
                this.options.preventDefault = newValue;
                return this;
            }

            if (isBool(newValue)) {
                this.options.preventDefault = newValue? 'always' : 'never';
                return this;
            }

            return this.options.preventDefault;
        },

        /*\
         * Interactable.origin
         [ method ]
         *
         * Gets or sets the origin of the Interactable's element.  The x and y
         * of the origin will be subtracted from action event coordinates.
         *
         - origin (object | string) #optional An object eg. { x: 0, y: 0 } or string 'parent', 'self' or any CSS selector
         * OR
         - origin (Element) #optional An HTML or SVG Element whose rect will be used
         **
         = (object) The current origin or this Interactable
        \*/
        origin: function (newValue) {
            if (trySelector(newValue)) {
                this.options.origin = newValue;
                return this;
            }
            else if (isObject(newValue)) {
                this.options.origin = newValue;
                return this;
            }

            return this.options.origin;
        },

        /*\
         * Interactable.deltaSource
         [ method ]
         *
         * Returns or sets the mouse coordinate types used to calculate the
         * movement of the pointer.
         *
         - newValue (string) #optional Use 'client' if you will be scrolling while interacting; Use 'page' if you want autoScroll to work
         = (string | object) The current deltaSource or this Interactable
        \*/
        deltaSource: function (newValue) {
            if (newValue === 'page' || newValue === 'client') {
                this.options.deltaSource = newValue;

                return this;
            }

            return this.options.deltaSource;
        },

        /*\
         * Interactable.restrict
         [ method ]
         **
         * Deprecated. Add a `restrict` property to the options object passed to
         * @Interactable.draggable, @Interactable.resizable or @Interactable.gesturable instead.
         *
         * Returns or sets the rectangles within which actions on this
         * interactable (after snap calculations) are restricted. By default,
         * restricting is relative to the pointer coordinates. You can change
         * this by setting the
         * [`elementRect`](https://github.com/taye/interact.js/pull/72).
         **
         - options (object) #optional an object with keys drag, resize, and/or gesture whose values are rects, Elements, CSS selectors, or 'parent' or 'self'
         = (object) The current restrictions object or this Interactable
         **
         | interact(element).restrict({
         |     // the rect will be `interact.getElementRect(element.parentNode)`
         |     drag: element.parentNode,
         |
         |     // x and y are relative to the the interactable's origin
         |     resize: { x: 100, y: 100, width: 200, height: 200 }
         | })
         |
         | interact('.draggable').restrict({
         |     // the rect will be the selected element's parent
         |     drag: 'parent',
         |
         |     // do not restrict during normal movement.
         |     // Instead, trigger only one restricted move event
         |     // immediately before the end event.
         |     endOnly: true,
         |
         |     // https://github.com/taye/interact.js/pull/72#issue-41813493
         |     elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
         | });
        \*/
        restrict: function (options) {
            if (!isObject(options)) {
                return this.setOptions('restrict', options);
            }

            var actions = ['drag', 'resize', 'gesture'],
                ret;

            for (var i = 0; i < actions.length; i++) {
                var action = actions[i];

                if (action in options) {
                    var perAction = extend({
                            actions: [action],
                            restriction: options[action]
                        }, options);

                    ret = this.setOptions('restrict', perAction);
                }
            }

            return ret;
        },

        /*\
         * Interactable.context
         [ method ]
         *
         * Gets the selector context Node of the Interactable. The default is `window.document`.
         *
         = (Node) The context Node of this Interactable
         **
        \*/
        context: function () {
            return this._context;
        },

        _context: document,

        /*\
         * Interactable.ignoreFrom
         [ method ]
         *
         * If the target of the `mousedown`, `pointerdown` or `touchstart`
         * event or any of it's parents match the given CSS selector or
         * Element, no drag/resize/gesture is started.
         *
         - newValue (string | Element | null) #optional a CSS selector string, an Element or `null` to not ignore any elements
         = (string | Element | object) The current ignoreFrom value or this Interactable
         **
         | interact(element, { ignoreFrom: document.getElementById('no-action') });
         | // or
         | interact(element).ignoreFrom('input, textarea, a');
        \*/
        ignoreFrom: function (newValue) {
            if (trySelector(newValue)) {            // CSS selector to match event.target
                this.options.ignoreFrom = newValue;
                return this;
            }

            if (isElement(newValue)) {              // specific element
                this.options.ignoreFrom = newValue;
                return this;
            }

            return this.options.ignoreFrom;
        },

        /*\
         * Interactable.allowFrom
         [ method ]
         *
         * A drag/resize/gesture is started only If the target of the
         * `mousedown`, `pointerdown` or `touchstart` event or any of it's
         * parents match the given CSS selector or Element.
         *
         - newValue (string | Element | null) #optional a CSS selector string, an Element or `null` to allow from any element
         = (string | Element | object) The current allowFrom value or this Interactable
         **
         | interact(element, { allowFrom: document.getElementById('drag-handle') });
         | // or
         | interact(element).allowFrom('.handle');
        \*/
        allowFrom: function (newValue) {
            if (trySelector(newValue)) {            // CSS selector to match event.target
                this.options.allowFrom = newValue;
                return this;
            }

            if (isElement(newValue)) {              // specific element
                this.options.allowFrom = newValue;
                return this;
            }

            return this.options.allowFrom;
        },

        /*\
         * Interactable.element
         [ method ]
         *
         * If this is not a selector Interactable, it returns the element this
         * interactable represents
         *
         = (Element) HTML / SVG Element
        \*/
        element: function () {
            return this._element;
        },

        /*\
         * Interactable.fire
         [ method ]
         *
         * Calls listeners for the given InteractEvent type bound globally
         * and directly to this Interactable
         *
         - iEvent (InteractEvent) The InteractEvent object to be fired on this Interactable
         = (Interactable) this Interactable
        \*/
        fire: function (iEvent) {
            if (!(iEvent && iEvent.type) || !contains(eventTypes, iEvent.type)) {
                return this;
            }

            var listeners,
                i,
                len,
                onEvent = 'on' + iEvent.type,
                funcName = '';

            // Interactable#on() listeners
            if (iEvent.type in this._iEvents) {
                listeners = this._iEvents[iEvent.type];

                for (i = 0, len = listeners.length; i < len && !iEvent.immediatePropagationStopped; i++) {
                    funcName = listeners[i].name;
                    listeners[i](iEvent);
                }
            }

            // interactable.onevent listener
            if (isFunction(this[onEvent])) {
                funcName = this[onEvent].name;
                this[onEvent](iEvent);
            }

            // interact.on() listeners
            if (iEvent.type in globalEvents && (listeners = globalEvents[iEvent.type]))  {

                for (i = 0, len = listeners.length; i < len && !iEvent.immediatePropagationStopped; i++) {
                    funcName = listeners[i].name;
                    listeners[i](iEvent);
                }
            }

            return this;
        },

        /*\
         * Interactable.on
         [ method ]
         *
         * Binds a listener for an InteractEvent or DOM event.
         *
         - eventType  (string | array | object) The types of events to listen for
         - listener   (function) The function to be called on the given event(s)
         - useCapture (boolean) #optional useCapture flag for addEventListener
         = (object) This Interactable
        \*/
        on: function (eventType, listener, useCapture) {
            var i;

            if (isString(eventType) && eventType.search(' ') !== -1) {
                eventType = eventType.trim().split(/ +/);
            }

            if (isArray(eventType)) {
                for (i = 0; i < eventType.length; i++) {
                    this.on(eventType[i], listener, useCapture);
                }

                return this;
            }

            if (isObject(eventType)) {
                for (var prop in eventType) {
                    this.on(prop, eventType[prop], listener);
                }

                return this;
            }

            if (eventType === 'wheel') {
                eventType = wheelEvent;
            }

            // convert to boolean
            useCapture = useCapture? true: false;

            if (contains(eventTypes, eventType)) {
                // if this type of event was never bound to this Interactable
                if (!(eventType in this._iEvents)) {
                    this._iEvents[eventType] = [listener];
                }
                else {
                    this._iEvents[eventType].push(listener);
                }
            }
            // delegated event for selector
            else if (this.selector) {
                if (!delegatedEvents[eventType]) {
                    delegatedEvents[eventType] = {
                        selectors: [],
                        contexts : [],
                        listeners: []
                    };

                    // add delegate listener functions
                    for (i = 0; i < documents.length; i++) {
                        events.add(documents[i], eventType, delegateListener);
                        events.add(documents[i], eventType, delegateUseCapture, true);
                    }
                }

                var delegated = delegatedEvents[eventType],
                    index;

                for (index = delegated.selectors.length - 1; index >= 0; index--) {
                    if (delegated.selectors[index] === this.selector
                        && delegated.contexts[index] === this._context) {
                        break;
                    }
                }

                if (index === -1) {
                    index = delegated.selectors.length;

                    delegated.selectors.push(this.selector);
                    delegated.contexts .push(this._context);
                    delegated.listeners.push([]);
                }

                // keep listener and useCapture flag
                delegated.listeners[index].push([listener, useCapture]);
            }
            else {
                events.add(this._element, eventType, listener, useCapture);
            }

            return this;
        },

        /*\
         * Interactable.off
         [ method ]
         *
         * Removes an InteractEvent or DOM event listener
         *
         - eventType  (string | array | object) The types of events that were listened for
         - listener   (function) The listener function to be removed
         - useCapture (boolean) #optional useCapture flag for removeEventListener
         = (object) This Interactable
        \*/
        off: function (eventType, listener, useCapture) {
            var i;

            if (isString(eventType) && eventType.search(' ') !== -1) {
                eventType = eventType.trim().split(/ +/);
            }

            if (isArray(eventType)) {
                for (i = 0; i < eventType.length; i++) {
                    this.off(eventType[i], listener, useCapture);
                }

                return this;
            }

            if (isObject(eventType)) {
                for (var prop in eventType) {
                    this.off(prop, eventType[prop], listener);
                }

                return this;
            }

            var eventList,
                index = -1;

            // convert to boolean
            useCapture = useCapture? true: false;

            if (eventType === 'wheel') {
                eventType = wheelEvent;
            }

            // if it is an action event type
            if (contains(eventTypes, eventType)) {
                eventList = this._iEvents[eventType];

                if (eventList && (index = indexOf(eventList, listener)) !== -1) {
                    this._iEvents[eventType].splice(index, 1);
                }
            }
            // delegated event
            else if (this.selector) {
                var delegated = delegatedEvents[eventType],
                    matchFound = false;

                if (!delegated) { return this; }

                // count from last index of delegated to 0
                for (index = delegated.selectors.length - 1; index >= 0; index--) {
                    // look for matching selector and context Node
                    if (delegated.selectors[index] === this.selector
                        && delegated.contexts[index] === this._context) {

                        var listeners = delegated.listeners[index];

                        // each item of the listeners array is an array: [function, useCaptureFlag]
                        for (i = listeners.length - 1; i >= 0; i--) {
                            var fn = listeners[i][0],
                                useCap = listeners[i][1];

                            // check if the listener functions and useCapture flags match
                            if (fn === listener && useCap === useCapture) {
                                // remove the listener from the array of listeners
                                listeners.splice(i, 1);

                                // if all listeners for this interactable have been removed
                                // remove the interactable from the delegated arrays
                                if (!listeners.length) {
                                    delegated.selectors.splice(index, 1);
                                    delegated.contexts .splice(index, 1);
                                    delegated.listeners.splice(index, 1);

                                    // remove delegate function from context
                                    events.remove(this._context, eventType, delegateListener);
                                    events.remove(this._context, eventType, delegateUseCapture, true);

                                    // remove the arrays if they are empty
                                    if (!delegated.selectors.length) {
                                        delegatedEvents[eventType] = null;
                                    }
                                }

                                // only remove one listener
                                matchFound = true;
                                break;
                            }
                        }

                        if (matchFound) { break; }
                    }
                }
            }
            // remove listener from this Interatable's element
            else {
                events.remove(this._element, eventType, listener, useCapture);
            }

            return this;
        },

        /*\
         * Interactable.set
         [ method ]
         *
         * Reset the options of this Interactable
         - options (object) The new settings to apply
         = (object) This Interactable
        \*/
        set: function (options) {
            if (!isObject(options)) {
                options = {};
            }

            this.options = extend({}, defaultOptions.base);

            var i,
                actions = ['drag', 'drop', 'resize', 'gesture'],
                methods = ['draggable', 'dropzone', 'resizable', 'gesturable'],
                perActions = extend(extend({}, defaultOptions.perAction), options[action] || {});

            for (i = 0; i < actions.length; i++) {
                var action = actions[i];

                this.options[action] = extend({}, defaultOptions[action]);

                this.setPerAction(action, perActions);

                this[methods[i]](options[action]);
            }

            var settings = [
                    'accept', 'actionChecker', 'allowFrom', 'deltaSource',
                    'dropChecker', 'ignoreFrom', 'origin', 'preventDefault',
                    'rectChecker', 'styleCursor'
                ];

            for (i = 0, len = settings.length; i < len; i++) {
                var setting = settings[i];

                this.options[setting] = defaultOptions.base[setting];

                if (setting in options) {
                    this[setting](options[setting]);
                }
            }

            return this;
        },

        /*\
         * Interactable.unset
         [ method ]
         *
         * Remove this interactable from the list of interactables and remove
         * it's drag, drop, resize and gesture capabilities
         *
         = (object) @interact
        \*/
        unset: function () {
            events.remove(this._element, 'all');

            if (!isString(this.selector)) {
                events.remove(this, 'all');
                if (this.options.styleCursor) {
                    this._element.style.cursor = '';
                }
            }
            else {
                // remove delegated events
                for (var type in delegatedEvents) {
                    var delegated = delegatedEvents[type];

                    for (var i = 0; i < delegated.selectors.length; i++) {
                        if (delegated.selectors[i] === this.selector
                            && delegated.contexts[i] === this._context) {

                            delegated.selectors.splice(i, 1);
                            delegated.contexts .splice(i, 1);
                            delegated.listeners.splice(i, 1);

                            // remove the arrays if they are empty
                            if (!delegated.selectors.length) {
                                delegatedEvents[type] = null;
                            }
                        }

                        events.remove(this._context, type, delegateListener);
                        events.remove(this._context, type, delegateUseCapture, true);

                        break;
                    }
                }
            }

            this.dropzone(false);

            interactables.splice(indexOf(interactables, this), 1);

            return interact;
        }
    };

    function warnOnce (method, message) {
        var warned = false;

        return function () {
            if (!warned) {
                window.console.warn(message);
                warned = true;
            }

            return method.apply(this, arguments);
        };
    }

    Interactable.prototype.snap = warnOnce(Interactable.prototype.snap,
         'Interactable#snap is deprecated. See the new documentation for snapping at http://interactjs.io/docs/snapping');
    Interactable.prototype.restrict = warnOnce(Interactable.prototype.restrict,
         'Interactable#restrict is deprecated. See the new documentation for resticting at http://interactjs.io/docs/restriction');
    Interactable.prototype.inertia = warnOnce(Interactable.prototype.inertia,
         'Interactable#inertia is deprecated. See the new documentation for inertia at http://interactjs.io/docs/inertia');
    Interactable.prototype.autoScroll = warnOnce(Interactable.prototype.autoScroll,
         'Interactable#autoScroll is deprecated. See the new documentation for autoScroll at http://interactjs.io/docs/#autoscroll');
    Interactable.prototype.squareResize = warnOnce(Interactable.prototype.squareResize,
         'Interactable#squareResize is deprecated. See http://interactjs.io/docs/#resize-square');

    Interactable.prototype.accept = warnOnce(Interactable.prototype.accept,
         'Interactable#accept is deprecated. use Interactable#dropzone({ accept: target }) instead');
    Interactable.prototype.dropChecker = warnOnce(Interactable.prototype.dropChecker,
         'Interactable#dropChecker is deprecated. use Interactable#dropzone({ dropChecker: checkerFunction }) instead');
    Interactable.prototype.context = warnOnce(Interactable.prototype.context,
         'Interactable#context as a method is deprecated. It will soon be a DOM Node instead');

    /*\
     * interact.isSet
     [ method ]
     *
     * Check if an element has been set
     - element (Element) The Element being searched for
     = (boolean) Indicates if the element or CSS selector was previously passed to interact
    \*/
    interact.isSet = function(element, options) {
        return interactables.indexOfElement(element, options && options.context) !== -1;
    };

    /*\
     * interact.on
     [ method ]
     *
     * Adds a global listener for an InteractEvent or adds a DOM event to
     * `document`
     *
     - type       (string | array | object) The types of events to listen for
     - listener   (function) The function to be called on the given event(s)
     - useCapture (boolean) #optional useCapture flag for addEventListener
     = (object) interact
    \*/
    interact.on = function (type, listener, useCapture) {
        if (isString(type) && type.search(' ') !== -1) {
            type = type.trim().split(/ +/);
        }

        if (isArray(type)) {
            for (var i = 0; i < type.length; i++) {
                interact.on(type[i], listener, useCapture);
            }

            return interact;
        }

        if (isObject(type)) {
            for (var prop in type) {
                interact.on(prop, type[prop], listener);
            }

            return interact;
        }

        // if it is an InteractEvent type, add listener to globalEvents
        if (contains(eventTypes, type)) {
            // if this type of event was never bound
            if (!globalEvents[type]) {
                globalEvents[type] = [listener];
            }
            else {
                globalEvents[type].push(listener);
            }
        }
        // If non InteractEvent type, addEventListener to document
        else {
            events.add(document, type, listener, useCapture);
        }

        return interact;
    };

    /*\
     * interact.off
     [ method ]
     *
     * Removes a global InteractEvent listener or DOM event from `document`
     *
     - type       (string | array | object) The types of events that were listened for
     - listener   (function) The listener function to be removed
     - useCapture (boolean) #optional useCapture flag for removeEventListener
     = (object) interact
     \*/
    interact.off = function (type, listener, useCapture) {
        if (isString(type) && type.search(' ') !== -1) {
            type = type.trim().split(/ +/);
        }

        if (isArray(type)) {
            for (var i = 0; i < type.length; i++) {
                interact.off(type[i], listener, useCapture);
            }

            return interact;
        }

        if (isObject(type)) {
            for (var prop in type) {
                interact.off(prop, type[prop], listener);
            }

            return interact;
        }

        if (!contains(eventTypes, type)) {
            events.remove(document, type, listener, useCapture);
        }
        else {
            var index;

            if (type in globalEvents
                && (index = indexOf(globalEvents[type], listener)) !== -1) {
                globalEvents[type].splice(index, 1);
            }
        }

        return interact;
    };

    /*\
     * interact.enableDragging
     [ method ]
     *
     * Deprecated.
     *
     * Returns or sets whether dragging is enabled for any Interactables
     *
     - newValue (boolean) #optional `true` to allow the action; `false` to disable action for all Interactables
     = (boolean | object) The current setting or interact
    \*/
    interact.enableDragging = warnOnce(function (newValue) {
        if (newValue !== null && newValue !== undefined) {
            actionIsEnabled.drag = newValue;

            return interact;
        }
        return actionIsEnabled.drag;
    }, 'interact.enableDragging is deprecated and will soon be removed.');

    /*\
     * interact.enableResizing
     [ method ]
     *
     * Deprecated.
     *
     * Returns or sets whether resizing is enabled for any Interactables
     *
     - newValue (boolean) #optional `true` to allow the action; `false` to disable action for all Interactables
     = (boolean | object) The current setting or interact
    \*/
    interact.enableResizing = warnOnce(function (newValue) {
        if (newValue !== null && newValue !== undefined) {
            actionIsEnabled.resize = newValue;

            return interact;
        }
        return actionIsEnabled.resize;
    }, 'interact.enableResizing is deprecated and will soon be removed.');

    /*\
     * interact.enableGesturing
     [ method ]
     *
     * Deprecated.
     *
     * Returns or sets whether gesturing is enabled for any Interactables
     *
     - newValue (boolean) #optional `true` to allow the action; `false` to disable action for all Interactables
     = (boolean | object) The current setting or interact
    \*/
    interact.enableGesturing = warnOnce(function (newValue) {
        if (newValue !== null && newValue !== undefined) {
            actionIsEnabled.gesture = newValue;

            return interact;
        }
        return actionIsEnabled.gesture;
    }, 'interact.enableGesturing is deprecated and will soon be removed.');

    interact.eventTypes = eventTypes;

    /*\
     * interact.debug
     [ method ]
     *
     * Returns debugging data
     = (object) An object with properties that outline the current state and expose internal functions and variables
    \*/
    interact.debug = function () {
        var interaction = interactions[0] || new Interaction();

        return {
            interactions          : interactions,
            target                : interaction.target,
            dragging              : interaction.dragging,
            resizing              : interaction.resizing,
            gesturing             : interaction.gesturing,
            prepared              : interaction.prepared,
            matches               : interaction.matches,
            matchElements         : interaction.matchElements,

            prevCoords            : interaction.prevCoords,
            startCoords           : interaction.startCoords,

            pointerIds            : interaction.pointerIds,
            pointers              : interaction.pointers,
            addPointer            : listeners.addPointer,
            removePointer         : listeners.removePointer,
            recordPointer        : listeners.recordPointer,

            snap                  : interaction.snapStatus,
            restrict              : interaction.restrictStatus,
            inertia               : interaction.inertiaStatus,

            downTime              : interaction.downTimes[0],
            downEvent             : interaction.downEvent,
            downPointer           : interaction.downPointer,
            prevEvent             : interaction.prevEvent,

            Interactable          : Interactable,
            interactables         : interactables,
            pointerIsDown         : interaction.pointerIsDown,
            defaultOptions        : defaultOptions,
            defaultActionChecker  : defaultActionChecker,

            actionCursors         : actionCursors,
            dragMove              : listeners.dragMove,
            resizeMove            : listeners.resizeMove,
            gestureMove           : listeners.gestureMove,
            pointerUp             : listeners.pointerUp,
            pointerDown           : listeners.pointerDown,
            pointerMove           : listeners.pointerMove,
            pointerHover          : listeners.pointerHover,

            eventTypes            : eventTypes,

            events                : events,
            globalEvents          : globalEvents,
            delegatedEvents       : delegatedEvents,

            prefixedPropREs       : prefixedPropREs
        };
    };

    // expose the functions used to calculate multi-touch properties
    interact.getPointerAverage = pointerAverage;
    interact.getTouchBBox     = touchBBox;
    interact.getTouchDistance = touchDistance;
    interact.getTouchAngle    = touchAngle;

    interact.getElementRect         = getElementRect;
    interact.getElementClientRect   = getElementClientRect;
    interact.matchesSelector        = matchesSelector;
    interact.closest                = closest;

    /*\
     * interact.margin
     [ method ]
     *
     * Deprecated. Use `interact(target).resizable({ margin: number });` instead.
     * Returns or sets the margin for autocheck resizing used in
     * @Interactable.getAction. That is the distance from the bottom and right
     * edges of an element clicking in which will start resizing
     *
     - newValue (number) #optional
     = (number | interact) The current margin value or interact
    \*/
    interact.margin = warnOnce(function (newvalue) {
        if (isNumber(newvalue)) {
            margin = newvalue;

            return interact;
        }
        return margin;
    },
    'interact.margin is deprecated. Use interact(target).resizable({ margin: number }); instead.') ;

    /*\
     * interact.supportsTouch
     [ method ]
     *
     = (boolean) Whether or not the browser supports touch input
    \*/
    interact.supportsTouch = function () {
        return supportsTouch;
    };

    /*\
     * interact.supportsPointerEvent
     [ method ]
     *
     = (boolean) Whether or not the browser supports PointerEvents
    \*/
    interact.supportsPointerEvent = function () {
        return supportsPointerEvent;
    };

    /*\
     * interact.stop
     [ method ]
     *
     * Cancels all interactions (end events are not fired)
     *
     - event (Event) An event on which to call preventDefault()
     = (object) interact
    \*/
    interact.stop = function (event) {
        for (var i = interactions.length - 1; i >= 0; i--) {
            interactions[i].stop(event);
        }

        return interact;
    };

    /*\
     * interact.dynamicDrop
     [ method ]
     *
     * Returns or sets whether the dimensions of dropzone elements are
     * calculated on every dragmove or only on dragstart for the default
     * dropChecker
     *
     - newValue (boolean) #optional True to check on each move. False to check only before start
     = (boolean | interact) The current setting or interact
    \*/
    interact.dynamicDrop = function (newValue) {
        if (isBool(newValue)) {
            //if (dragging && dynamicDrop !== newValue && !newValue) {
                //calcRects(dropzones);
            //}

            dynamicDrop = newValue;

            return interact;
        }
        return dynamicDrop;
    };

    /*\
     * interact.pointerMoveTolerance
     [ method ]
     * Returns or sets the distance the pointer must be moved before an action
     * sequence occurs. This also affects tolerance for tap events.
     *
     - newValue (number) #optional The movement from the start position must be greater than this value
     = (number | Interactable) The current setting or interact
    \*/
    interact.pointerMoveTolerance = function (newValue) {
        if (isNumber(newValue)) {
            pointerMoveTolerance = newValue;

            return this;
        }

        return pointerMoveTolerance;
    };

    /*\
     * interact.maxInteractions
     [ method ]
     **
     * Returns or sets the maximum number of concurrent interactions allowed.
     * By default only 1 interaction is allowed at a time (for backwards
     * compatibility). To allow multiple interactions on the same Interactables
     * and elements, you need to enable it in the draggable, resizable and
     * gesturable `'max'` and `'maxPerElement'` options.
     **
     - newValue (number) #optional Any number. newValue <= 0 means no interactions.
    \*/
    interact.maxInteractions = function (newValue) {
        if (isNumber(newValue)) {
            maxInteractions = newValue;

            return this;
        }

        return maxInteractions;
    };

    interact.createSnapGrid = function (grid) {
        return function (x, y) {
            var offsetX = 0,
                offsetY = 0;

            if (isObject(grid.offset)) {
                offsetX = grid.offset.x;
                offsetY = grid.offset.y;
            }

            var gridx = Math.round((x - offsetX) / grid.x),
                gridy = Math.round((y - offsetY) / grid.y),

                newX = gridx * grid.x + offsetX,
                newY = gridy * grid.y + offsetY;

            return {
                x: newX,
                y: newY,
                range: grid.range
            };
        };
    };

    function endAllInteractions (event) {
        for (var i = 0; i < interactions.length; i++) {
            interactions[i].pointerEnd(event, event);
        }
    }

    function listenToDocument (doc) {
        if (contains(documents, doc)) { return; }

        var win = doc.defaultView || doc.parentWindow;

        // add delegate event listener
        for (var eventType in delegatedEvents) {
            events.add(doc, eventType, delegateListener);
            events.add(doc, eventType, delegateUseCapture, true);
        }

        if (supportsPointerEvent) {
            if (PointerEvent === win.MSPointerEvent) {
                pEventTypes = {
                    up: 'MSPointerUp', down: 'MSPointerDown', over: 'mouseover',
                    out: 'mouseout', move: 'MSPointerMove', cancel: 'MSPointerCancel' };
            }
            else {
                pEventTypes = {
                    up: 'pointerup', down: 'pointerdown', over: 'pointerover',
                    out: 'pointerout', move: 'pointermove', cancel: 'pointercancel' };
            }

            events.add(doc, pEventTypes.down  , listeners.selectorDown );
            events.add(doc, pEventTypes.move  , listeners.pointerMove  );
            events.add(doc, pEventTypes.over  , listeners.pointerOver  );
            events.add(doc, pEventTypes.out   , listeners.pointerOut   );
            events.add(doc, pEventTypes.up    , listeners.pointerUp    );
            events.add(doc, pEventTypes.cancel, listeners.pointerCancel);

            // autoscroll
            events.add(doc, pEventTypes.move, listeners.autoScrollMove);
        }
        else {
            events.add(doc, 'mousedown', listeners.selectorDown);
            events.add(doc, 'mousemove', listeners.pointerMove );
            events.add(doc, 'mouseup'  , listeners.pointerUp   );
            events.add(doc, 'mouseover', listeners.pointerOver );
            events.add(doc, 'mouseout' , listeners.pointerOut  );

            events.add(doc, 'touchstart' , listeners.selectorDown );
            events.add(doc, 'touchmove'  , listeners.pointerMove  );
            events.add(doc, 'touchend'   , listeners.pointerUp    );
            events.add(doc, 'touchcancel', listeners.pointerCancel);

            // autoscroll
            events.add(doc, 'mousemove', listeners.autoScrollMove);
            events.add(doc, 'touchmove', listeners.autoScrollMove);
        }

        events.add(win, 'blur', endAllInteractions);

        try {
            if (win.frameElement) {
                var parentDoc = win.frameElement.ownerDocument,
                    parentWindow = parentDoc.defaultView;

                events.add(parentDoc   , 'mouseup'      , listeners.pointerEnd);
                events.add(parentDoc   , 'touchend'     , listeners.pointerEnd);
                events.add(parentDoc   , 'touchcancel'  , listeners.pointerEnd);
                events.add(parentDoc   , 'pointerup'    , listeners.pointerEnd);
                events.add(parentDoc   , 'MSPointerUp'  , listeners.pointerEnd);
                events.add(parentWindow, 'blur'         , endAllInteractions );
            }
        }
        catch (error) {
            interact.windowParentError = error;
        }

        // prevent native HTML5 drag on interact.js target elements
        events.add(doc, 'dragstart', function (event) {
            for (var i = 0; i < interactions.length; i++) {
                var interaction = interactions[i];

                if (interaction.element
                    && (interaction.element === event.target
                        || nodeContains(interaction.element, event.target))) {

                    interaction.checkAndPreventDefault(event, interaction.target, interaction.element);
                    return;
                }
            }
        });

        if (events.useAttachEvent) {
            // For IE's lack of Event#preventDefault
            events.add(doc, 'selectstart', function (event) {
                var interaction = interactions[0];

                if (interaction.currentAction()) {
                    interaction.checkAndPreventDefault(event);
                }
            });

            // For IE's bad dblclick event sequence
            events.add(doc, 'dblclick', doOnInteractions('ie8Dblclick'));
        }

        documents.push(doc);
    }

    listenToDocument(document);

    function indexOf (array, target) {
        for (var i = 0, len = array.length; i < len; i++) {
            if (array[i] === target) {
                return i;
            }
        }

        return -1;
    }

    function contains (array, target) {
        return indexOf(array, target) !== -1;
    }

    function matchesSelector (element, selector, nodeList) {
        if (ie8MatchesSelector) {
            return ie8MatchesSelector(element, selector, nodeList);
        }

        // remove /deep/ from selectors if shadowDOM polyfill is used
        if (window !== realWindow) {
            selector = selector.replace(/\/deep\//g, ' ');
        }

        return element[prefixedMatchesSelector](selector);
    }

    function matchesUpTo (element, selector, limit) {
        while (isElement(element)) {
            if (matchesSelector(element, selector)) {
                return true;
            }

            element = parentElement(element);

            if (element === limit) {
                return matchesSelector(element, selector);
            }
        }

        return false;
    }

    // For IE8's lack of an Element#matchesSelector
    // taken from http://tanalin.com/en/blog/2012/12/matches-selector-ie8/ and modified
    if (!(prefixedMatchesSelector in Element.prototype) || !isFunction(Element.prototype[prefixedMatchesSelector])) {
        ie8MatchesSelector = function (element, selector, elems) {
            elems = elems || element.parentNode.querySelectorAll(selector);

            for (var i = 0, len = elems.length; i < len; i++) {
                if (elems[i] === element) {
                    return true;
                }
            }

            return false;
        };
    }

    // requestAnimationFrame polyfill
    (function() {
        var lastTime = 0,
            vendors = ['ms', 'moz', 'webkit', 'o'];

        for(var x = 0; x < vendors.length && !realWindow.requestAnimationFrame; ++x) {
            reqFrame = realWindow[vendors[x]+'RequestAnimationFrame'];
            cancelFrame = realWindow[vendors[x]+'CancelAnimationFrame'] || realWindow[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!reqFrame) {
            reqFrame = function(callback) {
                var currTime = new Date().getTime(),
                    timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                    id = setTimeout(function() { callback(currTime + timeToCall); },
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }

        if (!cancelFrame) {
            cancelFrame = function(id) {
                clearTimeout(id);
            };
        }
    }());

    /* global exports: true, module, define */

    // http://documentcloud.github.io/underscore/docs/underscore.html#section-11
    if (true) {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = interact;
        }
        exports.interact = interact;
    }
    // AMD
    else if (typeof define === 'function' && define.amd) {
        define('interact', function() {
            return interact;
        });
    }
    else {
        realWindow.interact = interact;
    }

} (typeof window === 'undefined'? undefined : window));


/***/ })
/******/ ]);