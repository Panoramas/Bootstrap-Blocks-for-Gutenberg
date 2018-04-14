this["bsgut"] = this["bsgut"] || {}; this["bsgut"]["alert-block"] =
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

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_blocks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_components__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_scss__);
var __ = wp.i18n.__; // Import __() from wp.i18n







Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__["registerBlockType"])("bsgut/alert-block", {
  title: __("Alert"),
  icon: "welcome-learn-more",
  category: "common",
  description: __("Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."),
  keywords: ["bootstrap", "bsgut", "message"],
  attributes: {
    type: {
      type: "string",
      default: "info"
    },
    dismissable: {
      type: "boolean",
      default: false
    },
    title: {
      type: "string",
      selector: 'h4.alert-heading'
    }
  },

  edit: function edit(_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;
    var type = attributes.type,
        dismissable = attributes.dismissable,
        title = attributes.title;


    var updateType = function updateType(type) {
      return setAttributes({ type: type });
    };
    var updateDismissable = function updateDismissable(dismissable) {
      return setAttributes({ dismissable: dismissable });
    };
    var updateTitle = function updateTitle(title) {
      return setAttributes({ title: title });
    };

    return React.createElement(
      __WEBPACK_IMPORTED_MODULE_1__wordpress_element__["Fragment"],
      null,
      React.createElement(
        "div",
        { className: className + " alert alert-" + type },
        dismissable == true && React.createElement(
          "button",
          { type: "button", "class": "close", "data-dismiss": "alert", "aria-label": "Close" },
          React.createElement(
            "span",
            { "aria-hidden": "true" },
            "\xD7"
          )
        ),
        React.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__["InnerBlocks"], null)
      ),
      isSelected && React.createElement(
        __WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__["InspectorControls"],
        { key: "inspector" },
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_2__wordpress_components__["PanelBody"],
          { title: __('Alert Settings') },
          React.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__["SelectControl"], {
            label: __("Message Type"),
            value: type,
            options: [{ label: __("Primary"), value: "primary" }, { label: __("Secondary"), value: "secondary" }, { label: __("Success"), value: "success" }, { label: __("Danger"), value: "danger" }, { label: __("Warning"), value: "warning" }, { label: __("Info"), value: "info" }, { label: __("Light"), value: "light" }, { label: __("Dark"), value: "dark" }],
            help: __("Select the type of your alert."),
            onChange: updateType
          }),
          React.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__["ToggleControl"], {
            label: __("Dismissable"),
            checked: !!dismissable,
            help: __("Enable to display a close button on the upper right corner."),
            onChange: updateDismissable
          })
        )
      )
    );
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var type = attributes.type,
        dismissable = attributes.dismissable,
        title = attributes.title;

    return React.createElement(
      "div",
      { className: "alert alert-" + type },
      React.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__["InnerBlocks"].Content, null)
    );
  }
});

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map