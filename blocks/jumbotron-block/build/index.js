this["bsgut"] = this["bsgut"] || {}; this["bsgut"]["jumbotron-block"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_blocks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_components__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_scss__);
var __ = wp.i18n.__; // Import __() from wp.i18n







var getBlockClass = function getBlockClass(fluidify) {
  if (fluidify) {
    return " jumbotron jumbotron-fluid";
  }
  return " jumbotron";
};

Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__["registerBlockType"])("bsgut/jumbotron-block", {
  title: __("Jumbotron"),
  icon: "welcome-learn-more",
  category: "common",
  description: __("Lightweight, flexible component for showcasing hero unit style content."),
  keywords: ["bootstrap", "bsgut", "hero"],
  attributes: {
    fluidify: {
      type: "string"
    }
  },

  edit: function edit(_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;
    var fluidify = attributes.fluidify;


    var toggleFluidify = function toggleFluidify(fluidify) {
      return setAttributes({ fluidify: fluidify });
    };

    var blockClass = getBlockClass(fluidify);

    return React.createElement(
      __WEBPACK_IMPORTED_MODULE_1__wordpress_element__["Fragment"],
      null,
      React.createElement(
        "div",
        { className: className + blockClass },
        React.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__["InnerBlocks"], null)
      ),
      isSelected && React.createElement(
        __WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__["InspectorControls"],
        { key: "inspector" },
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_2__wordpress_components__["PanelBody"],
          { title: __('Jumbotron Settings') },
          React.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__["ToggleControl"], {
            label: __("Fluid jumbotron"),
            checked: !!fluidify,
            help: __("To make the jumbotron full width, and without rounded corners."),
            onChange: toggleFluidify
          })
        )
      )
    );
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var fluidify = attributes.fluidify;


    var blockClass = getBlockClass(fluidify);

    return React.createElement(
      "div",
      { className: blockClass },
      React.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__["InnerBlocks"].Content, null)
    );
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map