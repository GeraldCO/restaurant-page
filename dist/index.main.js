/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".active{\n    color: red;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;AACd","sourcesContent":[".active{\n    color: red;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _media_online_ordering_fca6de0a_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/online_ordering.fca6de0a.svg */ "./src/media/online_ordering.fca6de0a.svg");
/* harmony import */ var _media_delivery_beb01933_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/delivery.beb01933.svg */ "./src/media/delivery.beb01933.svg");
/* harmony import */ var _media_rewards_b84a197e_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media/rewards.b84a197e.svg */ "./src/media/rewards.b84a197e.svg");
/* harmony import */ var _media_gift_cards_ca7bd098_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/gift_cards.ca7bd098.svg */ "./src/media/gift_cards.ca7bd098.svg");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");







function loadContact(){
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');

    //hero row container 
    const heroRowContainer = document.createElement('div');
    const heroImage = document.createElement('div');
    const heroRow = document.createElement('div');
    const heroContent = document.createElement('div');

    heroRowContainer.append(heroRow);
    heroRow.append(heroImage, heroContent);

    const locationName = document.createElement('h1');
    
    
    locationName.classList.add('location-name');
    const heroBrand = document.createElement('p');

    heroBrand.innerText = 'jamba';
    heroBrand.classList.add('hero-brand');
    locationName.append(heroBrand, 'ausburn');
    const heroOpen = document.createElement('div');
    heroOpen.innerText = 'open now ';
    heroOpen.classList.add('hero-open');
    const heroOpenSpan = document.createElement('span');
    heroOpenSpan.innerText = '- closes at 8:00 pm';
    heroOpenSpan.classList.add('hero-open-span');
    const herobuttonsDiv = document.createElement('div');
    const orderOnlineButton = document.createElement('a');
    orderOnlineButton.classList.add('button', 'button--primary');
    orderOnlineButton.innerText = 'order online';
    const orderCatering = document.createElement('a');
    orderCatering.classList.add('button', 'button--primary');
    orderCatering.innerText = 'order catering';

    
    heroOpen.append(heroOpenSpan);
    herobuttonsDiv.append(orderOnlineButton, orderCatering);
    heroContent.append(locationName, heroOpen, herobuttonsDiv);



    //contact div html elements creation
    const coreRow = document.createElement('div');
    coreRow.classList.add('core-row');
    const coreInfo = document.createElement('div');
    coreInfo.classList.add('core-info');
    const coreInfoContent = document.createElement('div');
    coreInfoContent.classList.add('core-info-content');
    const getDirectionsLink = document.createElement('a');
    getDirectionsLink.classList.add('link', 'link--primary');
    
    
    coreInfo.append(coreInfoContent);

    //core contact elements
    const coreContactDiv = document.createElement('div'); 
    coreContactDiv.classList.add('core-contact-div');
    const coreContactTitle = document.createElement('h2');
    coreContactTitle.classList.add('core-contact-title');
    const corePhoneDiv = document.createElement('div');
    const coreAddressDiv = document.createElement('div');

    coreContactTitle.textContent = 'Contact';
    corePhoneDiv.textContent = '(334) 246-2388';
    coreAddressDiv.textContent = '316 West Magnolia Ave Auburn, AL 36832';
    getDirectionsLink.append('get directions');

    coreContactDiv.append(coreContactTitle, corePhoneDiv, coreAddressDiv, getDirectionsLink);

    //core hours elements
    const coreHoursDiv = document.createElement('div');
    const coreHoursTitle = document.createElement('h2');
    coreHoursTitle.innerText = 'hours';
    const cHours = document.createElement('div');

    //table hours construction
    const table = document.createElement('table');
    const tbody =document.createElement('tbody');
    
    //adding table to the chours div
    cHours.append(table);

    const row_1 = document.createElement('tr');
    const row_1_data_1 = document.createElement('td');
    const row_1_data_2 = document.createElement('td');
    row_1_data_1.innerText = 'sunday';
    row_1_data_2.innerText = '10:00 AM - 6:00 PM';
    row_1.append(row_1_data_1, row_1_data_2);

    const row_2 = document.createElement('tr');
    const row_2_data_1 = document.createElement('td');
    const row_2_data_2 = document.createElement('td');
    row_2_data_1.innerText = 'monday';
    row_2_data_2.innerText = '8:00 AM - 8:00 PM';
    row_2.append(row_2_data_1, row_2_data_2);

    const row_3 = document.createElement('tr');
    const row_3_data_1 = document.createElement('td');
    const row_3_data_2 = document.createElement('td');
    row_3_data_1.innerText = 'tuesday';
    row_3_data_2.innerText = '8:00 AM - 8:00 PM';
    row_3.append(row_3_data_1, row_3_data_2);


    const row_4 = document.createElement('tr');
    const row_4_data_1 = document.createElement('td');
    const row_4_data_2 = document.createElement('td');
    row_4_data_1.innerText = 'wednesday';
    row_4_data_2.innerText = '8:00 AM - 8:00 PM';
    row_4.append(row_4_data_1, row_4_data_2);

    const row_5 = document.createElement('tr');
    const row_5_data_1 = document.createElement('td');
    const row_5_data_2 = document.createElement('td');
    row_5_data_1.innerText = 'thursday';
    row_5_data_2.innerText = '8:00 AM - 8:00 PM';
    row_5.append(row_5_data_1, row_5_data_2);

    const row_6 = document.createElement('tr');
    const row_6_data_1 = document.createElement('td');
    const row_6_data_2 = document.createElement('td');
    row_6_data_1.innerText = 'friday';
    row_6_data_2.innerText = '8:00 AM - 8:00 PM';
    row_6.append(row_6_data_1, row_6_data_2);

    const row_7 = document.createElement('tr');
    const row_7_data_1 = document.createElement('td');
    const row_7_data_2 = document.createElement('td');
    row_7_data_1.innerText = 'saturday';
    row_7_data_2.innerText = '9:00 AM - 9:00 PM';
    row_7.append(row_7_data_1, row_7_data_2);

    tbody.append(row_1, row_2, row_3, row_4, row_5, row_6, row_7);
    
    //adding table body to the hoursTable
    table.append(tbody);

    //adding core contact div and core hours div to core info content div 
    coreInfoContent.append(coreContactDiv, coreHoursDiv);

    coreHoursDiv.append(coreHoursTitle, cHours);

    //core about elements
    const coreDetails = document.createElement('div');
    const coreAbout = document.createElement('div');
    const coreTitle = document.createElement('h2');
    const coreDescription = document.createElement('div');

    coreAbout.classList.add('core-about');
    coreTitle.classList.add('core-title');
    coreDescription.classList.add('core-description');

    
    coreTitle.innerText = 'welcome to jamba ausburn';
    coreDescription.innerText = "We're committed to making eating better easier and more fun. Try our plant-based smoothies, delicious bowls with fresh fruit toppings, to protein-packed food and on-the-go snacks. Come visit us at 316 West Magnolia Ave in Auburn.";

    coreAbout.append(coreTitle, coreDescription);
    coreDetails.append(coreAbout);
    
    //appending coreInfo and coreDetail divs to coreRow
    coreRow.append(coreInfo, coreDetails);
    
    //core services elements
    const coreServices = document.createElement('div');
    const coreServicesTitle = document.createElement('h2');
    const coreServicesList = document.createElement('div');

    coreServices.classList.add('Core-services');
    coreServicesTitle.classList.add('Core-services-title');
    coreServicesList.classList.add('core-services-list');    
    
    coreServicesTitle.innerText = 'services';    

    const coreService1 = document.createElement('div');
    coreService1.classList.add('Core-service');
    const coreService1Image = document.createElement('img');
    coreService1Image.classList.add('Core-service-image');
    coreService1Image.src = _media_online_ordering_fca6de0a_svg__WEBPACK_IMPORTED_MODULE_0__;
    const coreService1Span = document.createElement('span');
    coreService1Span.classList.add('Core-service-text');
    coreService1Span.innerText = 'ONLINE ORDERING';
    coreService1.append(coreService1Image, coreService1Span);

    const coreService2 = document.createElement('div');
    coreService2.classList.add('Core-service');
    const coreService2Image = document.createElement('img');
    coreService2Image.classList.add('Core-service-image');
    coreService2Image.src = _media_delivery_beb01933_svg__WEBPACK_IMPORTED_MODULE_1__;
    const coreService2Span = document.createElement('span');
    coreService2Span.classList.add('Core-service-text');
    coreService2Span.innerText = 'DELIVERY';
    coreService2.append(coreService2Image, coreService2Span);

    const coreService3 = document.createElement('div');
    coreService3.classList.add('Core-service');
    const coreService3Image = document.createElement('img');
    coreService3Image.src = _media_rewards_b84a197e_svg__WEBPACK_IMPORTED_MODULE_2__;
    coreService3Image.classList.add('Core-service-image');
    const coreService3Span = document.createElement('span');
    coreService3Span.classList.add('Core-service-text');
    coreService3Span.innerText = 'REWARDS';
    coreService3.append(coreService3Image, coreService3Span);

    const coreService4 = document.createElement('div');
    coreService4.classList.add('Core-service');
    const coreService4Image = document.createElement('img');
    coreService4Image.src = _media_gift_cards_ca7bd098_svg__WEBPACK_IMPORTED_MODULE_3__;
    coreService4Image.classList.add('Core-service-image');
    const coreService4Span = document.createElement('span');
    coreService4Span.classList.add('Core-service-text');
    coreService4Span.innerText = 'GIFT CARDS';
    coreService4.append(coreService4Image, coreService4Span);

    coreServicesList.append(coreService1, coreService2, coreService3, coreService4);
    coreServices.append(coreServicesTitle, coreServicesList);


        
    //core search
    const coreSearch = document.createElement('div');
    const coreSearchTitle= document.createElement('h3');
    const searchBarContainer = document.createElement('div');
    const searchBarForm = document.createElement('form');
    const searchLabel = document.createElement('input');
    const searchInput = document.createElement('button');

    searchLabel.classList.add('seach-bar-label');
    searchInput.classList.add('search-bar-input');
    searchBarForm.classList.add('search-bar-form');
    searchBarContainer.classList.add('search-bar-container');
    coreSearchTitle.classList.add('core-search-title');
    coreSearch.classList.add('core-search');

    searchInput.innerText = 'submit';

    searchBarForm.append(searchLabel, searchInput);
    coreSearchTitle.append('have a question? ask us today!');
    searchBarForm.append(searchLabel, searchInput);
    searchBarContainer.append(searchBarForm);
    coreSearch.append(coreSearchTitle, searchBarContainer);




    coreDetails.append(coreAbout, coreServices, coreSearch);
    mainContainer.append(heroRow,coreRow);
    return mainContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCard": () => (/* binding */ createCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");
/* harmony import */ var _media_c3_FOOD_fluid_600x420_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/c3_FOOD_fluid_600x420.png */ "./src/media/c3_FOOD_fluid_600x420.png");
/* harmony import */ var _media_JJ_C4_CBGM_fluid_600x420_v2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media/JJ_C4_CBGM_fluid_600x420_v2.png */ "./src/media/JJ_C4_CBGM_fluid_600x420_v2.png");
/* harmony import */ var _media_JJ_679077_C1_TGG_Launch_FLUID_CARD_V2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/JJ_679077_C1_TGG_Launch FLUID CARD_V2.png */ "./src/media/JJ_679077_C1_TGG_Launch FLUID CARD_V2.png");
/* harmony import */ var _media_JJ_C4_ACQ_fluid_600x420_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/JJ_C4_ACQ_fluid_600x420.png */ "./src/media/JJ_C4_ACQ_fluid_600x420.png");
/* harmony import */ var _media_c2_2_personalize_fluid_600x420_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media/c2_2_personalize_fluid_600x420.png */ "./src/media/c2_2_personalize_fluid_600x420.png");
/* harmony import */ var _media_c2_snacks_fluid_600x420_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media/c2_snacks_fluid_600x420.png */ "./src/media/c2_snacks_fluid_600x420.png");
 








function createCard( pictureSrc, spamH3Text, cardTitleText, pDescriptionText, buttonText){
    (0,_website__WEBPACK_IMPORTED_MODULE_0__.createHeader)('Jamb Juice');
    const fluidCardRow = document.createElement('div');
    const fcsContainer = document.createElement('div');
    const cardIMage = document.createElement('div');
    const cardIMageFile = document.createElement('img');
    const cardContent = document.createElement('div');
    const cardTitle = document.createElement('div');
    const cardTitleH3 = document.createElement('h3');
    const pCardDescription = document.createElement('p');
    const btnWrapper = document.createElement('div');
    const aButtonLink = document.createElement('a');
    const spamH3 = document.createElement('spam');
    

    fluidCardRow.classList.add('fluid-card-row');
    fcsContainer.classList.add('fcs-container');
    cardContent.classList.add('card-content');
    cardTitle.classList.add('title');
    cardIMage.classList.add('card-image');
    spamH3.classList.add('scrip-text');
    

    fluidCardRow.append(fcsContainer);
    fcsContainer.append(cardIMage, cardContent);
    cardTitle.append(cardTitleH3, spamH3);
    cardContent.append(cardTitle, pCardDescription, btnWrapper);

    cardIMage.append(cardIMageFile);
    btnWrapper.append(aButtonLink);

    pCardDescription.textContent= pDescriptionText;
    cardIMageFile.src = pictureSrc;
    spamH3.innerText = spamH3Text;
    cardTitleH3.innerText = cardTitleText;
    aButtonLink.innerText = buttonText;
    aButtonLink.href = '#';
    return fluidCardRow;
}



function createMenu(){
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');
    
    const foodCard = createCard(        
        _media_c3_FOOD_fluid_600x420_png__WEBPACK_IMPORTED_MODULE_1__,
        'Perfect to Pair',
        'Cozy, Warm Food',
        'Try our toasty, protein-packed food that will warm you up during the chillier seasons. Perfect to pair with your favorite smoothie, bowl or iced beverage!',
        'ahh, try now!'
    );
    const beveragesCard = createCard(
        _media_JJ_C4_CBGM_fluid_600x420_v2_png__WEBPACK_IMPORTED_MODULE_2__, 
        'FUEL YOUR MORNING',
        'New Iced Beverages',
        'Start your day with a bright and balanced iced gotcha matcha or icy bold ‘n cold brew topped with a dreamy house-made, plant-based sweet cloud whip.',
        'sip sip go!'
    );

    const tggLunchCard = createCard(
        _media_JJ_679077_C1_TGG_Launch_FLUID_CARD_V2_png__WEBPACK_IMPORTED_MODULE_3__,
        'PLANT-BASED',
        'The Go Getter Smoothie',
        'Try The Go Getter smoothie for a tropical get away with delicious perks. Fruity flavors like mango with super foods like kale get together to create a lush, immunity boosting, plant-based smoothie.',
        'Order Now'
    );

    const rewardsCard = createCard(
        _media_JJ_C4_ACQ_fluid_600x420_png__WEBPACK_IMPORTED_MODULE_4__,
        'EARN REWARDS',
        'Perks are waiting!',
        "Sign up and enjoy $3 OFF your first order and $2 OFF your second order (good with orders $10+). It's easy & fast!",
        'sign up'
    );

    const personalizeCard = createCard(
        _media_c2_2_personalize_fluid_600x420_png__WEBPACK_IMPORTED_MODULE_5__,
        'CUSTOMIZE',
        'Make your own creation',
        'The sky (or Jamba menu) is the limit here at Jamba. Substitute milk, juice or fruits & veggies and add boosts.',
        'Smoo-nique Smoothie'
    );

    const snacksCard = createCard(
        _media_c2_snacks_fluid_600x420_png__WEBPACK_IMPORTED_MODULE_6__,
        'ADD A SNACK',
        "Grab n' go",
        'Explore healthy gluten & nut-free snacks and Organic Honest Tea(TM) or Smartwater(TM). They pair perfectly with your favorite smoothie or bowl anytime, anywhere.',
        'yessssssss!'
    );


    mainContainer.append(
        foodCard,
        beveragesCard,
        tggLunchCard, 
        rewardsCard,
        personalizeCard,
        snacksCard
        );
    return mainContainer;
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

/***/ }),

/***/ "./src/rewards.js":
/*!************************!*\
  !*** ./src/rewards.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _media_c4_1_3x2Offer_Icon_728x477_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/c4_1_3x2Offer_Icon_728x477.png */ "./src/media/c4_1_3x2Offer_Icon_728x477.png");
/* harmony import */ var _media_c4_1_1pt_Icon_728x477_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/c4_1_1pt_Icon_728x477.png */ "./src/media/c4_1_1pt_Icon_728x477.png");
/* harmony import */ var _media_c4_1_B_Day_Icon_728x477_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media/c4_1_B Day_Icon_728x477.png */ "./src/media/c4_1_B Day_Icon_728x477.png");
/* harmony import */ var _media_c4_1_Customize_Icon_728x477_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/c4_1_Customize_Icon_728x477.png */ "./src/media/c4_1_Customize_Icon_728x477.png");
/* harmony import */ var _media_c4_1_Download_App_Icon_728x477_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/c4_1_Download App_Icon_728x477.png */ "./src/media/c4_1_Download App_Icon_728x477.png");
/* harmony import */ var _media_c4_1_Faves_Icon_728x477_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media/c4_1_Faves_Icon_728x477.png */ "./src/media/c4_1_Faves_Icon_728x477.png");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _media_JJ_C4_ACQ_fluid_600x420_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media/JJ_C4_ACQ_fluid_600x420.png */ "./src/media/JJ_C4_ACQ_fluid_600x420.png");










function loadMenu(){
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');

    const heroCardFrameDiv = document.createElement('div');
    const cardTitleDiv = document.createElement('div');
    const cardTitleText = document.createElement('span');
    const cardTitleTextSpan = document.createElement('span');
    const cardContentDiv = document.createElement('div');
    const cardContentP = document.createElement('p');
    const downloadButton = document.createElement('a');
    const signUpButton = document.createElement('a');

    heroCardFrameDiv.classList.add('hero-card-frame');
    downloadButton.classList.add('button', 'button--primary');
    signUpButton.classList.add('button', 'button--primary');
    cardTitleTextSpan.classList.add('script-text');
    cardContentDiv.classList.add('card-content');
    
    heroCardFrameDiv.append(cardTitleDiv, cardContentDiv);
    cardTitleDiv.append(cardTitleText, cardTitleTextSpan);
    cardContentDiv.append(cardContentP, downloadButton, signUpButton);
    

    cardTitleText.innerText = 'MY JAMBA';
    cardTitleTextSpan.innerText = 'rewards';
    cardContentP.innerText = 'Signing up is easy and fast. You can download our easy to use app or join online.';
    downloadButton.textContent = 'download app';
    signUpButton.textContent='sign up online';

    const column =document.createElement('div');
    const row1 = document.createElement('div');
    const row2 = document.createElement('div');
    const row3 = document.createElement('div');
    const row4 = document.createElement('div');

    row1.append(
        createCell(_media_c4_1_3x2Offer_Icon_728x477_png__WEBPACK_IMPORTED_MODULE_0__, "1st order = $3 OFF <br> 2nd order = $2 OFF <br> $10+ orders) <br> limited time"), 
        createCell(_media_c4_1_1pt_Icon_728x477_png__WEBPACK_IMPORTED_MODULE_1__, '$1 = 1pt ;) earn in-store or online with pick-up and delivery')
    );

    row2.append(
        createCell(_media_c4_1_B_Day_Icon_728x477_png__WEBPACK_IMPORTED_MODULE_2__, 'celebratory birthday smoothie on us (15pt min to qualify)'),
        createCell(_media_c4_1_Customize_Icon_728x477_png__WEBPACK_IMPORTED_MODULE_3__, 'customize & save faves + get insider exclusives')
    );

    row3.append(
        createCell(_media_c4_1_Download_App_Icon_728x477_png__WEBPACK_IMPORTED_MODULE_4__, 'download app. sign-up. order faster.'),
        createCell(_media_c4_1_Faves_Icon_728x477_png__WEBPACK_IMPORTED_MODULE_5__, 'earn points & save on faves')
        );
    
    //row4elements
    row4.append((0,_menu__WEBPACK_IMPORTED_MODULE_6__.createCard)(
        _media_JJ_C4_ACQ_fluid_600x420_png__WEBPACK_IMPORTED_MODULE_7__,
        'EARN REWARDS',
        'Perks are waiting!',
        "Sign up and enjoy $3 OFF your first order and $2 OFF your second order (good with orders $10+). It's easy & fast!",
        'sign up'
    ), downloadButton, signUpButton);

    

    column.append(row1, row2, row3, row4);

    mainContainer.append(heroCardFrameDiv, column);
    return mainContainer;
}

function createCell(pictureSrc, description){
    const cell = document.createElement('div');
    const divImage = document.createElement('img');
    const descriptionP = document.createElement('div');

    divImage.classList.add('icon-card-picture');
    descriptionP.classList.add('description');

    divImage.src = pictureSrc;
    descriptionP.innerHTML = description;

    cell.append(divImage, descriptionP);
    return cell;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _rewards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rewards */ "./src/rewards.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




function createHeader(title){
    const mainContainerHeader = document.createElement('header');
    mainContainerHeader.classList.add('main-continer-header');
    
    const headerH1 = document.createElement('h1');
    headerH1.textContent = title;

    mainContainerHeader.appendChild(headerH1);
    
    return mainContainerHeader;
}

function getContentDiv(){
    const content = document.querySelector('#content');
    return content;
}

function createNav(){
    const topNav = document.createElement('nav');
    const menuButton = document.createElement('button');
    const rewardsButton = document.createElement('button');
    const contactUsButton = document.createElement('button');
    const content = getContentDiv();

    menuButton.innerHTML = 'Menu';

    rewardsButton.innerHTML = 'Rewards';
    contactUsButton.innerHTML = 'Contact Us';

    menuButton.classList.add('button-nav', 'active');

    rewardsButton.classList.add('button-nav');
    contactUsButton.classList.add('button-nav');

    menuButton.addEventListener('click', (e)=>{
        content.removeChild(content.children[1]);
        menuButton.classList.add('active');
        rewardsButton.classList.remove('active');
        contactUsButton.classList.remove('active');
        content.append((0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])());
    });

    rewardsButton.addEventListener('click', (e)=>{
        content.removeChild(content.children[1]);
        rewardsButton.classList.add('active');
        menuButton.classList.remove('active');
        contactUsButton.classList.remove('active');
        content.append((0,_rewards__WEBPACK_IMPORTED_MODULE_1__["default"])());
    });

    contactUsButton.addEventListener('click', (e)=>{
        content.removeChild(content.children[1]);
        contactUsButton.classList.add('active');
        menuButton.classList.remove('active');
        rewardsButton.classList.remove('active');
        content.append((0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
    });

    topNav.appendChild(menuButton);
    topNav.appendChild(rewardsButton);
    topNav.appendChild(contactUsButton);
    
    return topNav;   
}

function initializeWebsite(){
    const content = getContentDiv();
    content.appendChild(createNav());
    content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])());

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

/***/ }),

/***/ "./src/media/JJ_679077_C1_TGG_Launch FLUID CARD_V2.png":
/*!*************************************************************!*\
  !*** ./src/media/JJ_679077_C1_TGG_Launch FLUID CARD_V2.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "257bc23695200d2cfef2.png";

/***/ }),

/***/ "./src/media/JJ_C4_ACQ_fluid_600x420.png":
/*!***********************************************!*\
  !*** ./src/media/JJ_C4_ACQ_fluid_600x420.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abf0dc1972ea6b13b55b.png";

/***/ }),

/***/ "./src/media/JJ_C4_CBGM_fluid_600x420_v2.png":
/*!***************************************************!*\
  !*** ./src/media/JJ_C4_CBGM_fluid_600x420_v2.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e3777f48f83c8427302.png";

/***/ }),

/***/ "./src/media/c2_2_personalize_fluid_600x420.png":
/*!******************************************************!*\
  !*** ./src/media/c2_2_personalize_fluid_600x420.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a1b4d578a694f87c718.png";

/***/ }),

/***/ "./src/media/c2_snacks_fluid_600x420.png":
/*!***********************************************!*\
  !*** ./src/media/c2_snacks_fluid_600x420.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c235c251448ee9d3b81.png";

/***/ }),

/***/ "./src/media/c3_FOOD_fluid_600x420.png":
/*!*********************************************!*\
  !*** ./src/media/c3_FOOD_fluid_600x420.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ee8c5e217e90fe4f786.png";

/***/ }),

/***/ "./src/media/c4_1_1pt_Icon_728x477.png":
/*!*********************************************!*\
  !*** ./src/media/c4_1_1pt_Icon_728x477.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "caca684d2fed9e7d44f4.png";

/***/ }),

/***/ "./src/media/c4_1_3x2Offer_Icon_728x477.png":
/*!**************************************************!*\
  !*** ./src/media/c4_1_3x2Offer_Icon_728x477.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "616dabe4419551888622.png";

/***/ }),

/***/ "./src/media/c4_1_B Day_Icon_728x477.png":
/*!***********************************************!*\
  !*** ./src/media/c4_1_B Day_Icon_728x477.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9a29e8bc875a9e486b7.png";

/***/ }),

/***/ "./src/media/c4_1_Customize_Icon_728x477.png":
/*!***************************************************!*\
  !*** ./src/media/c4_1_Customize_Icon_728x477.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "adb6029c36c433bf04d0.png";

/***/ }),

/***/ "./src/media/c4_1_Download App_Icon_728x477.png":
/*!******************************************************!*\
  !*** ./src/media/c4_1_Download App_Icon_728x477.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "077f34ab9f2b08f9262f.png";

/***/ }),

/***/ "./src/media/c4_1_Faves_Icon_728x477.png":
/*!***********************************************!*\
  !*** ./src/media/c4_1_Faves_Icon_728x477.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8683bb43455968f398b.png";

/***/ }),

/***/ "./src/media/delivery.beb01933.svg":
/*!*****************************************!*\
  !*** ./src/media/delivery.beb01933.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "beb019336a9e27710d9c.svg";

/***/ }),

/***/ "./src/media/gift_cards.ca7bd098.svg":
/*!*******************************************!*\
  !*** ./src/media/gift_cards.ca7bd098.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca7bd098e31da29dafd3.svg";

/***/ }),

/***/ "./src/media/online_ordering.fca6de0a.svg":
/*!************************************************!*\
  !*** ./src/media/online_ordering.fca6de0a.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fca6de0ac6e265f90a38.svg";

/***/ }),

/***/ "./src/media/rewards.b84a197e.svg":
/*!****************************************!*\
  !*** ./src/media/rewards.b84a197e.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b84a197e5e70dd439461.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website */ "./src/website.js");



(0,_website__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnRUFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5REFBZTtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0RBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkRBQWlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUVoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNxQjs7QUFFMUMsb0RBQWlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Jld2FyZHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYWN0aXZle1xcbiAgICBjb2xvcjogcmVkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5hY3RpdmV7XFxuICAgIGNvbG9yOiByZWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IG9ubGluZVNlcnZpY2UgZnJvbSAnLi9tZWRpYS9vbmxpbmVfb3JkZXJpbmcuZmNhNmRlMGEuc3ZnJztcbmltcG9ydCBkZWxpdmVyeVNlcnZpY2UgZnJvbSAgJy4vbWVkaWEvZGVsaXZlcnkuYmViMDE5MzMuc3ZnJztcbmltcG9ydCByZXdhcmRzU2VydmljZSBmcm9tICcuL21lZGlhL3Jld2FyZHMuYjg0YTE5N2Uuc3ZnJztcbmltcG9ydCBnaWZ0Q2FyZHNTZXJ2aWNlcyBmcm9tICcuL21lZGlhL2dpZnRfY2FyZHMuY2E3YmQwOTguc3ZnJztcblxuaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gJy4vbWVudSc7XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KCl7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbkNvbnRhaW5lcicpO1xuXG4gICAgLy9oZXJvIHJvdyBjb250YWluZXIgXG4gICAgY29uc3QgaGVyb1Jvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlcm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlcm9Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZXJvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaGVyb1Jvd0NvbnRhaW5lci5hcHBlbmQoaGVyb1Jvdyk7XG4gICAgaGVyb1Jvdy5hcHBlbmQoaGVyb0ltYWdlLCBoZXJvQ29udGVudCk7XG5cbiAgICBjb25zdCBsb2NhdGlvbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIFxuICAgIFxuICAgIGxvY2F0aW9uTmFtZS5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbi1uYW1lJyk7XG4gICAgY29uc3QgaGVyb0JyYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgaGVyb0JyYW5kLmlubmVyVGV4dCA9ICdqYW1iYSc7XG4gICAgaGVyb0JyYW5kLmNsYXNzTGlzdC5hZGQoJ2hlcm8tYnJhbmQnKTtcbiAgICBsb2NhdGlvbk5hbWUuYXBwZW5kKGhlcm9CcmFuZCwgJ2F1c2J1cm4nKTtcbiAgICBjb25zdCBoZXJvT3BlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm9PcGVuLmlubmVyVGV4dCA9ICdvcGVuIG5vdyAnO1xuICAgIGhlcm9PcGVuLmNsYXNzTGlzdC5hZGQoJ2hlcm8tb3BlbicpO1xuICAgIGNvbnN0IGhlcm9PcGVuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBoZXJvT3BlblNwYW4uaW5uZXJUZXh0ID0gJy0gY2xvc2VzIGF0IDg6MDAgcG0nO1xuICAgIGhlcm9PcGVuU3Bhbi5jbGFzc0xpc3QuYWRkKCdoZXJvLW9wZW4tc3BhbicpO1xuICAgIGNvbnN0IGhlcm9idXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgb3JkZXJPbmxpbmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgb3JkZXJPbmxpbmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2J1dHRvbi0tcHJpbWFyeScpO1xuICAgIG9yZGVyT25saW5lQnV0dG9uLmlubmVyVGV4dCA9ICdvcmRlciBvbmxpbmUnO1xuICAgIGNvbnN0IG9yZGVyQ2F0ZXJpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgb3JkZXJDYXRlcmluZy5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnYnV0dG9uLS1wcmltYXJ5Jyk7XG4gICAgb3JkZXJDYXRlcmluZy5pbm5lclRleHQgPSAnb3JkZXIgY2F0ZXJpbmcnO1xuXG4gICAgXG4gICAgaGVyb09wZW4uYXBwZW5kKGhlcm9PcGVuU3Bhbik7XG4gICAgaGVyb2J1dHRvbnNEaXYuYXBwZW5kKG9yZGVyT25saW5lQnV0dG9uLCBvcmRlckNhdGVyaW5nKTtcbiAgICBoZXJvQ29udGVudC5hcHBlbmQobG9jYXRpb25OYW1lLCBoZXJvT3BlbiwgaGVyb2J1dHRvbnNEaXYpO1xuXG5cblxuICAgIC8vY29udGFjdCBkaXYgaHRtbCBlbGVtZW50cyBjcmVhdGlvblxuICAgIGNvbnN0IGNvcmVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3JlUm93LmNsYXNzTGlzdC5hZGQoJ2NvcmUtcm93Jyk7XG4gICAgY29uc3QgY29yZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3JlSW5mby5jbGFzc0xpc3QuYWRkKCdjb3JlLWluZm8nKTtcbiAgICBjb25zdCBjb3JlSW5mb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3JlSW5mb0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29yZS1pbmZvLWNvbnRlbnQnKTtcbiAgICBjb25zdCBnZXREaXJlY3Rpb25zTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBnZXREaXJlY3Rpb25zTGluay5jbGFzc0xpc3QuYWRkKCdsaW5rJywgJ2xpbmstLXByaW1hcnknKTtcbiAgICBcbiAgICBcbiAgICBjb3JlSW5mby5hcHBlbmQoY29yZUluZm9Db250ZW50KTtcblxuICAgIC8vY29yZSBjb250YWN0IGVsZW1lbnRzXG4gICAgY29uc3QgY29yZUNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgY29yZUNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZCgnY29yZS1jb250YWN0LWRpdicpO1xuICAgIGNvbnN0IGNvcmVDb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvcmVDb250YWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnY29yZS1jb250YWN0LXRpdGxlJyk7XG4gICAgY29uc3QgY29yZVBob25lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29yZUFkZHJlc3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvcmVDb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgY29yZVBob25lRGl2LnRleHRDb250ZW50ID0gJygzMzQpIDI0Ni0yMzg4JztcbiAgICBjb3JlQWRkcmVzc0Rpdi50ZXh0Q29udGVudCA9ICczMTYgV2VzdCBNYWdub2xpYSBBdmUgQXVidXJuLCBBTCAzNjgzMic7XG4gICAgZ2V0RGlyZWN0aW9uc0xpbmsuYXBwZW5kKCdnZXQgZGlyZWN0aW9ucycpO1xuXG4gICAgY29yZUNvbnRhY3REaXYuYXBwZW5kKGNvcmVDb250YWN0VGl0bGUsIGNvcmVQaG9uZURpdiwgY29yZUFkZHJlc3NEaXYsIGdldERpcmVjdGlvbnNMaW5rKTtcblxuICAgIC8vY29yZSBob3VycyBlbGVtZW50c1xuICAgIGNvbnN0IGNvcmVIb3Vyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvcmVIb3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb3JlSG91cnNUaXRsZS5pbm5lclRleHQgPSAnaG91cnMnO1xuICAgIGNvbnN0IGNIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy90YWJsZSBob3VycyBjb25zdHJ1Y3Rpb25cbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgY29uc3QgdGJvZHkgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gICAgXG4gICAgLy9hZGRpbmcgdGFibGUgdG8gdGhlIGNob3VycyBkaXZcbiAgICBjSG91cnMuYXBwZW5kKHRhYmxlKTtcblxuICAgIGNvbnN0IHJvd18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCByb3dfMV9kYXRhXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IHJvd18xX2RhdGFfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgcm93XzFfZGF0YV8xLmlubmVyVGV4dCA9ICdzdW5kYXknO1xuICAgIHJvd18xX2RhdGFfMi5pbm5lclRleHQgPSAnMTA6MDAgQU0gLSA2OjAwIFBNJztcbiAgICByb3dfMS5hcHBlbmQocm93XzFfZGF0YV8xLCByb3dfMV9kYXRhXzIpO1xuXG4gICAgY29uc3Qgcm93XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IHJvd18yX2RhdGFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3Qgcm93XzJfZGF0YV8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICByb3dfMl9kYXRhXzEuaW5uZXJUZXh0ID0gJ21vbmRheSc7XG4gICAgcm93XzJfZGF0YV8yLmlubmVyVGV4dCA9ICc4OjAwIEFNIC0gODowMCBQTSc7XG4gICAgcm93XzIuYXBwZW5kKHJvd18yX2RhdGFfMSwgcm93XzJfZGF0YV8yKTtcblxuICAgIGNvbnN0IHJvd18zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCByb3dfM19kYXRhXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IHJvd18zX2RhdGFfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgcm93XzNfZGF0YV8xLmlubmVyVGV4dCA9ICd0dWVzZGF5JztcbiAgICByb3dfM19kYXRhXzIuaW5uZXJUZXh0ID0gJzg6MDAgQU0gLSA4OjAwIFBNJztcbiAgICByb3dfMy5hcHBlbmQocm93XzNfZGF0YV8xLCByb3dfM19kYXRhXzIpO1xuXG5cbiAgICBjb25zdCByb3dfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3Qgcm93XzRfZGF0YV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCByb3dfNF9kYXRhXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHJvd180X2RhdGFfMS5pbm5lclRleHQgPSAnd2VkbmVzZGF5JztcbiAgICByb3dfNF9kYXRhXzIuaW5uZXJUZXh0ID0gJzg6MDAgQU0gLSA4OjAwIFBNJztcbiAgICByb3dfNC5hcHBlbmQocm93XzRfZGF0YV8xLCByb3dfNF9kYXRhXzIpO1xuXG4gICAgY29uc3Qgcm93XzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IHJvd181X2RhdGFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3Qgcm93XzVfZGF0YV8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICByb3dfNV9kYXRhXzEuaW5uZXJUZXh0ID0gJ3RodXJzZGF5JztcbiAgICByb3dfNV9kYXRhXzIuaW5uZXJUZXh0ID0gJzg6MDAgQU0gLSA4OjAwIFBNJztcbiAgICByb3dfNS5hcHBlbmQocm93XzVfZGF0YV8xLCByb3dfNV9kYXRhXzIpO1xuXG4gICAgY29uc3Qgcm93XzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IHJvd182X2RhdGFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3Qgcm93XzZfZGF0YV8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICByb3dfNl9kYXRhXzEuaW5uZXJUZXh0ID0gJ2ZyaWRheSc7XG4gICAgcm93XzZfZGF0YV8yLmlubmVyVGV4dCA9ICc4OjAwIEFNIC0gODowMCBQTSc7XG4gICAgcm93XzYuYXBwZW5kKHJvd182X2RhdGFfMSwgcm93XzZfZGF0YV8yKTtcblxuICAgIGNvbnN0IHJvd183ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCByb3dfN19kYXRhXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IHJvd183X2RhdGFfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgcm93XzdfZGF0YV8xLmlubmVyVGV4dCA9ICdzYXR1cmRheSc7XG4gICAgcm93XzdfZGF0YV8yLmlubmVyVGV4dCA9ICc5OjAwIEFNIC0gOTowMCBQTSc7XG4gICAgcm93XzcuYXBwZW5kKHJvd183X2RhdGFfMSwgcm93XzdfZGF0YV8yKTtcblxuICAgIHRib2R5LmFwcGVuZChyb3dfMSwgcm93XzIsIHJvd18zLCByb3dfNCwgcm93XzUsIHJvd182LCByb3dfNyk7XG4gICAgXG4gICAgLy9hZGRpbmcgdGFibGUgYm9keSB0byB0aGUgaG91cnNUYWJsZVxuICAgIHRhYmxlLmFwcGVuZCh0Ym9keSk7XG5cbiAgICAvL2FkZGluZyBjb3JlIGNvbnRhY3QgZGl2IGFuZCBjb3JlIGhvdXJzIGRpdiB0byBjb3JlIGluZm8gY29udGVudCBkaXYgXG4gICAgY29yZUluZm9Db250ZW50LmFwcGVuZChjb3JlQ29udGFjdERpdiwgY29yZUhvdXJzRGl2KTtcblxuICAgIGNvcmVIb3Vyc0Rpdi5hcHBlbmQoY29yZUhvdXJzVGl0bGUsIGNIb3Vycyk7XG5cbiAgICAvL2NvcmUgYWJvdXQgZWxlbWVudHNcbiAgICBjb25zdCBjb3JlRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvcmVBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvcmVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgY29yZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb3JlQWJvdXQuY2xhc3NMaXN0LmFkZCgnY29yZS1hYm91dCcpO1xuICAgIGNvcmVUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb3JlLXRpdGxlJyk7XG4gICAgY29yZURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvcmUtZGVzY3JpcHRpb24nKTtcblxuICAgIFxuICAgIGNvcmVUaXRsZS5pbm5lclRleHQgPSAnd2VsY29tZSB0byBqYW1iYSBhdXNidXJuJztcbiAgICBjb3JlRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJXZSdyZSBjb21taXR0ZWQgdG8gbWFraW5nIGVhdGluZyBiZXR0ZXIgZWFzaWVyIGFuZCBtb3JlIGZ1bi4gVHJ5IG91ciBwbGFudC1iYXNlZCBzbW9vdGhpZXMsIGRlbGljaW91cyBib3dscyB3aXRoIGZyZXNoIGZydWl0IHRvcHBpbmdzLCB0byBwcm90ZWluLXBhY2tlZCBmb29kIGFuZCBvbi10aGUtZ28gc25hY2tzLiBDb21lIHZpc2l0IHVzIGF0IDMxNiBXZXN0IE1hZ25vbGlhIEF2ZSBpbiBBdWJ1cm4uXCI7XG5cbiAgICBjb3JlQWJvdXQuYXBwZW5kKGNvcmVUaXRsZSwgY29yZURlc2NyaXB0aW9uKTtcbiAgICBjb3JlRGV0YWlscy5hcHBlbmQoY29yZUFib3V0KTtcbiAgICBcbiAgICAvL2FwcGVuZGluZyBjb3JlSW5mbyBhbmQgY29yZURldGFpbCBkaXZzIHRvIGNvcmVSb3dcbiAgICBjb3JlUm93LmFwcGVuZChjb3JlSW5mbywgY29yZURldGFpbHMpO1xuICAgIFxuICAgIC8vY29yZSBzZXJ2aWNlcyBlbGVtZW50c1xuICAgIGNvbnN0IGNvcmVTZXJ2aWNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvcmVTZXJ2aWNlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBjb3JlU2VydmljZXNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb3JlU2VydmljZXMuY2xhc3NMaXN0LmFkZCgnQ29yZS1zZXJ2aWNlcycpO1xuICAgIGNvcmVTZXJ2aWNlc1RpdGxlLmNsYXNzTGlzdC5hZGQoJ0NvcmUtc2VydmljZXMtdGl0bGUnKTtcbiAgICBjb3JlU2VydmljZXNMaXN0LmNsYXNzTGlzdC5hZGQoJ2NvcmUtc2VydmljZXMtbGlzdCcpOyAgICBcbiAgICBcbiAgICBjb3JlU2VydmljZXNUaXRsZS5pbm5lclRleHQgPSAnc2VydmljZXMnOyAgICBcblxuICAgIGNvbnN0IGNvcmVTZXJ2aWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvcmVTZXJ2aWNlMS5jbGFzc0xpc3QuYWRkKCdDb3JlLXNlcnZpY2UnKTtcbiAgICBjb25zdCBjb3JlU2VydmljZTFJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvcmVTZXJ2aWNlMUltYWdlLmNsYXNzTGlzdC5hZGQoJ0NvcmUtc2VydmljZS1pbWFnZScpO1xuICAgIGNvcmVTZXJ2aWNlMUltYWdlLnNyYyA9IG9ubGluZVNlcnZpY2U7XG4gICAgY29uc3QgY29yZVNlcnZpY2UxU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb3JlU2VydmljZTFTcGFuLmNsYXNzTGlzdC5hZGQoJ0NvcmUtc2VydmljZS10ZXh0Jyk7XG4gICAgY29yZVNlcnZpY2UxU3Bhbi5pbm5lclRleHQgPSAnT05MSU5FIE9SREVSSU5HJztcbiAgICBjb3JlU2VydmljZTEuYXBwZW5kKGNvcmVTZXJ2aWNlMUltYWdlLCBjb3JlU2VydmljZTFTcGFuKTtcblxuICAgIGNvbnN0IGNvcmVTZXJ2aWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvcmVTZXJ2aWNlMi5jbGFzc0xpc3QuYWRkKCdDb3JlLXNlcnZpY2UnKTtcbiAgICBjb25zdCBjb3JlU2VydmljZTJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvcmVTZXJ2aWNlMkltYWdlLmNsYXNzTGlzdC5hZGQoJ0NvcmUtc2VydmljZS1pbWFnZScpO1xuICAgIGNvcmVTZXJ2aWNlMkltYWdlLnNyYyA9IGRlbGl2ZXJ5U2VydmljZTtcbiAgICBjb25zdCBjb3JlU2VydmljZTJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvcmVTZXJ2aWNlMlNwYW4uY2xhc3NMaXN0LmFkZCgnQ29yZS1zZXJ2aWNlLXRleHQnKTtcbiAgICBjb3JlU2VydmljZTJTcGFuLmlubmVyVGV4dCA9ICdERUxJVkVSWSc7XG4gICAgY29yZVNlcnZpY2UyLmFwcGVuZChjb3JlU2VydmljZTJJbWFnZSwgY29yZVNlcnZpY2UyU3Bhbik7XG5cbiAgICBjb25zdCBjb3JlU2VydmljZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3JlU2VydmljZTMuY2xhc3NMaXN0LmFkZCgnQ29yZS1zZXJ2aWNlJyk7XG4gICAgY29uc3QgY29yZVNlcnZpY2UzSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb3JlU2VydmljZTNJbWFnZS5zcmMgPSByZXdhcmRzU2VydmljZTtcbiAgICBjb3JlU2VydmljZTNJbWFnZS5jbGFzc0xpc3QuYWRkKCdDb3JlLXNlcnZpY2UtaW1hZ2UnKTtcbiAgICBjb25zdCBjb3JlU2VydmljZTNTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvcmVTZXJ2aWNlM1NwYW4uY2xhc3NMaXN0LmFkZCgnQ29yZS1zZXJ2aWNlLXRleHQnKTtcbiAgICBjb3JlU2VydmljZTNTcGFuLmlubmVyVGV4dCA9ICdSRVdBUkRTJztcbiAgICBjb3JlU2VydmljZTMuYXBwZW5kKGNvcmVTZXJ2aWNlM0ltYWdlLCBjb3JlU2VydmljZTNTcGFuKTtcblxuICAgIGNvbnN0IGNvcmVTZXJ2aWNlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvcmVTZXJ2aWNlNC5jbGFzc0xpc3QuYWRkKCdDb3JlLXNlcnZpY2UnKTtcbiAgICBjb25zdCBjb3JlU2VydmljZTRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvcmVTZXJ2aWNlNEltYWdlLnNyYyA9IGdpZnRDYXJkc1NlcnZpY2VzO1xuICAgIGNvcmVTZXJ2aWNlNEltYWdlLmNsYXNzTGlzdC5hZGQoJ0NvcmUtc2VydmljZS1pbWFnZScpO1xuICAgIGNvbnN0IGNvcmVTZXJ2aWNlNFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29yZVNlcnZpY2U0U3Bhbi5jbGFzc0xpc3QuYWRkKCdDb3JlLXNlcnZpY2UtdGV4dCcpO1xuICAgIGNvcmVTZXJ2aWNlNFNwYW4uaW5uZXJUZXh0ID0gJ0dJRlQgQ0FSRFMnO1xuICAgIGNvcmVTZXJ2aWNlNC5hcHBlbmQoY29yZVNlcnZpY2U0SW1hZ2UsIGNvcmVTZXJ2aWNlNFNwYW4pO1xuXG4gICAgY29yZVNlcnZpY2VzTGlzdC5hcHBlbmQoY29yZVNlcnZpY2UxLCBjb3JlU2VydmljZTIsIGNvcmVTZXJ2aWNlMywgY29yZVNlcnZpY2U0KTtcbiAgICBjb3JlU2VydmljZXMuYXBwZW5kKGNvcmVTZXJ2aWNlc1RpdGxlLCBjb3JlU2VydmljZXNMaXN0KTtcblxuXG4gICAgICAgIFxuICAgIC8vY29yZSBzZWFyY2hcbiAgICBjb25zdCBjb3JlU2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29yZVNlYXJjaFRpdGxlPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHNlYXJjaEJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNlYXJjaEJhckZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3Qgc2VhcmNoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBzZWFyY2hMYWJlbC5jbGFzc0xpc3QuYWRkKCdzZWFjaC1iYXItbGFiZWwnKTtcbiAgICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYmFyLWlucHV0Jyk7XG4gICAgc2VhcmNoQmFyRm9ybS5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYmFyLWZvcm0nKTtcbiAgICBzZWFyY2hCYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJhci1jb250YWluZXInKTtcbiAgICBjb3JlU2VhcmNoVGl0bGUuY2xhc3NMaXN0LmFkZCgnY29yZS1zZWFyY2gtdGl0bGUnKTtcbiAgICBjb3JlU2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2NvcmUtc2VhcmNoJyk7XG5cbiAgICBzZWFyY2hJbnB1dC5pbm5lclRleHQgPSAnc3VibWl0JztcblxuICAgIHNlYXJjaEJhckZvcm0uYXBwZW5kKHNlYXJjaExhYmVsLCBzZWFyY2hJbnB1dCk7XG4gICAgY29yZVNlYXJjaFRpdGxlLmFwcGVuZCgnaGF2ZSBhIHF1ZXN0aW9uPyBhc2sgdXMgdG9kYXkhJyk7XG4gICAgc2VhcmNoQmFyRm9ybS5hcHBlbmQoc2VhcmNoTGFiZWwsIHNlYXJjaElucHV0KTtcbiAgICBzZWFyY2hCYXJDb250YWluZXIuYXBwZW5kKHNlYXJjaEJhckZvcm0pO1xuICAgIGNvcmVTZWFyY2guYXBwZW5kKGNvcmVTZWFyY2hUaXRsZSwgc2VhcmNoQmFyQ29udGFpbmVyKTtcblxuXG5cblxuICAgIGNvcmVEZXRhaWxzLmFwcGVuZChjb3JlQWJvdXQsIGNvcmVTZXJ2aWNlcywgY29yZVNlYXJjaCk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoaGVyb1Jvdyxjb3JlUm93KTtcbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7IiwiaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vd2Vic2l0ZVwiOyBcbmltcG9ydCBmb29kIGZyb20gJy4vbWVkaWEvYzNfRk9PRF9mbHVpZF82MDB4NDIwLnBuZyc7XG5pbXBvcnQgamogZnJvbSAgJy4vbWVkaWEvSkpfQzRfQ0JHTV9mbHVpZF82MDB4NDIwX3YyLnBuZyc7XG5pbXBvcnQgdGdnTHVuY2ggZnJvbSAnLi9tZWRpYS9KSl82NzkwNzdfQzFfVEdHX0xhdW5jaCBGTFVJRCBDQVJEX1YyLnBuZyc7XG5pbXBvcnQgcmV3YXJkc1BpYyBmcm9tICcuL21lZGlhL0pKX0M0X0FDUV9mbHVpZF82MDB4NDIwLnBuZyc7XG5pbXBvcnQgcGVyc29uYWxpemUgZnJvbSAnLi9tZWRpYS9jMl8yX3BlcnNvbmFsaXplX2ZsdWlkXzYwMHg0MjAucG5nJztcbmltcG9ydCBzbmFja3MgZnJvbSAnLi9tZWRpYS9jMl9zbmFja3NfZmx1aWRfNjAweDQyMC5wbmcnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJkKCBwaWN0dXJlU3JjLCBzcGFtSDNUZXh0LCBjYXJkVGl0bGVUZXh0LCBwRGVzY3JpcHRpb25UZXh0LCBidXR0b25UZXh0KXtcbiAgICBjcmVhdGVIZWFkZXIoJ0phbWIgSnVpY2UnKTtcbiAgICBjb25zdCBmbHVpZENhcmRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmY3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkSU1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkSU1hZ2VGaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJkVGl0bGVIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgcENhcmREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBidG5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYUJ1dHRvbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3Qgc3BhbUgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbScpO1xuICAgIFxuXG4gICAgZmx1aWRDYXJkUm93LmNsYXNzTGlzdC5hZGQoJ2ZsdWlkLWNhcmQtcm93Jyk7XG4gICAgZmNzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zjcy1jb250YWluZXInKTtcbiAgICBjYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRlbnQnKTtcbiAgICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBjYXJkSU1hZ2UuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWFnZScpO1xuICAgIHNwYW1IMy5jbGFzc0xpc3QuYWRkKCdzY3JpcC10ZXh0Jyk7XG4gICAgXG5cbiAgICBmbHVpZENhcmRSb3cuYXBwZW5kKGZjc0NvbnRhaW5lcik7XG4gICAgZmNzQ29udGFpbmVyLmFwcGVuZChjYXJkSU1hZ2UsIGNhcmRDb250ZW50KTtcbiAgICBjYXJkVGl0bGUuYXBwZW5kKGNhcmRUaXRsZUgzLCBzcGFtSDMpO1xuICAgIGNhcmRDb250ZW50LmFwcGVuZChjYXJkVGl0bGUsIHBDYXJkRGVzY3JpcHRpb24sIGJ0bldyYXBwZXIpO1xuXG4gICAgY2FyZElNYWdlLmFwcGVuZChjYXJkSU1hZ2VGaWxlKTtcbiAgICBidG5XcmFwcGVyLmFwcGVuZChhQnV0dG9uTGluayk7XG5cbiAgICBwQ2FyZERlc2NyaXB0aW9uLnRleHRDb250ZW50PSBwRGVzY3JpcHRpb25UZXh0O1xuICAgIGNhcmRJTWFnZUZpbGUuc3JjID0gcGljdHVyZVNyYztcbiAgICBzcGFtSDMuaW5uZXJUZXh0ID0gc3BhbUgzVGV4dDtcbiAgICBjYXJkVGl0bGVIMy5pbm5lclRleHQgPSBjYXJkVGl0bGVUZXh0O1xuICAgIGFCdXR0b25MaW5rLmlubmVyVGV4dCA9IGJ1dHRvblRleHQ7XG4gICAgYUJ1dHRvbkxpbmsuaHJlZiA9ICcjJztcbiAgICByZXR1cm4gZmx1aWRDYXJkUm93O1xufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpe1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW5Db250YWluZXInKTtcbiAgICBcbiAgICBjb25zdCBmb29kQ2FyZCA9IGNyZWF0ZUNhcmQoICAgICAgICBcbiAgICAgICAgZm9vZCxcbiAgICAgICAgJ1BlcmZlY3QgdG8gUGFpcicsXG4gICAgICAgICdDb3p5LCBXYXJtIEZvb2QnLFxuICAgICAgICAnVHJ5IG91ciB0b2FzdHksIHByb3RlaW4tcGFja2VkIGZvb2QgdGhhdCB3aWxsIHdhcm0geW91IHVwIGR1cmluZyB0aGUgY2hpbGxpZXIgc2Vhc29ucy4gUGVyZmVjdCB0byBwYWlyIHdpdGggeW91ciBmYXZvcml0ZSBzbW9vdGhpZSwgYm93bCBvciBpY2VkIGJldmVyYWdlIScsXG4gICAgICAgICdhaGgsIHRyeSBub3chJ1xuICAgICk7XG4gICAgY29uc3QgYmV2ZXJhZ2VzQ2FyZCA9IGNyZWF0ZUNhcmQoXG4gICAgICAgIGpqLCBcbiAgICAgICAgJ0ZVRUwgWU9VUiBNT1JOSU5HJyxcbiAgICAgICAgJ05ldyBJY2VkIEJldmVyYWdlcycsXG4gICAgICAgICdTdGFydCB5b3VyIGRheSB3aXRoIGEgYnJpZ2h0IGFuZCBiYWxhbmNlZCBpY2VkIGdvdGNoYSBtYXRjaGEgb3IgaWN5IGJvbGQg4oCYbiBjb2xkIGJyZXcgdG9wcGVkIHdpdGggYSBkcmVhbXkgaG91c2UtbWFkZSwgcGxhbnQtYmFzZWQgc3dlZXQgY2xvdWQgd2hpcC4nLFxuICAgICAgICAnc2lwIHNpcCBnbyEnXG4gICAgKTtcblxuICAgIGNvbnN0IHRnZ0x1bmNoQ2FyZCA9IGNyZWF0ZUNhcmQoXG4gICAgICAgIHRnZ0x1bmNoLFxuICAgICAgICAnUExBTlQtQkFTRUQnLFxuICAgICAgICAnVGhlIEdvIEdldHRlciBTbW9vdGhpZScsXG4gICAgICAgICdUcnkgVGhlIEdvIEdldHRlciBzbW9vdGhpZSBmb3IgYSB0cm9waWNhbCBnZXQgYXdheSB3aXRoIGRlbGljaW91cyBwZXJrcy4gRnJ1aXR5IGZsYXZvcnMgbGlrZSBtYW5nbyB3aXRoIHN1cGVyIGZvb2RzIGxpa2Uga2FsZSBnZXQgdG9nZXRoZXIgdG8gY3JlYXRlIGEgbHVzaCwgaW1tdW5pdHkgYm9vc3RpbmcsIHBsYW50LWJhc2VkIHNtb290aGllLicsXG4gICAgICAgICdPcmRlciBOb3cnXG4gICAgKTtcblxuICAgIGNvbnN0IHJld2FyZHNDYXJkID0gY3JlYXRlQ2FyZChcbiAgICAgICAgcmV3YXJkc1BpYyxcbiAgICAgICAgJ0VBUk4gUkVXQVJEUycsXG4gICAgICAgICdQZXJrcyBhcmUgd2FpdGluZyEnLFxuICAgICAgICBcIlNpZ24gdXAgYW5kIGVuam95ICQzIE9GRiB5b3VyIGZpcnN0IG9yZGVyIGFuZCAkMiBPRkYgeW91ciBzZWNvbmQgb3JkZXIgKGdvb2Qgd2l0aCBvcmRlcnMgJDEwKykuIEl0J3MgZWFzeSAmIGZhc3QhXCIsXG4gICAgICAgICdzaWduIHVwJ1xuICAgICk7XG5cbiAgICBjb25zdCBwZXJzb25hbGl6ZUNhcmQgPSBjcmVhdGVDYXJkKFxuICAgICAgICBwZXJzb25hbGl6ZSxcbiAgICAgICAgJ0NVU1RPTUlaRScsXG4gICAgICAgICdNYWtlIHlvdXIgb3duIGNyZWF0aW9uJyxcbiAgICAgICAgJ1RoZSBza3kgKG9yIEphbWJhIG1lbnUpIGlzIHRoZSBsaW1pdCBoZXJlIGF0IEphbWJhLiBTdWJzdGl0dXRlIG1pbGssIGp1aWNlIG9yIGZydWl0cyAmIHZlZ2dpZXMgYW5kIGFkZCBib29zdHMuJyxcbiAgICAgICAgJ1Ntb28tbmlxdWUgU21vb3RoaWUnXG4gICAgKTtcblxuICAgIGNvbnN0IHNuYWNrc0NhcmQgPSBjcmVhdGVDYXJkKFxuICAgICAgICBzbmFja3MsXG4gICAgICAgICdBREQgQSBTTkFDSycsXG4gICAgICAgIFwiR3JhYiBuJyBnb1wiLFxuICAgICAgICAnRXhwbG9yZSBoZWFsdGh5IGdsdXRlbiAmIG51dC1mcmVlIHNuYWNrcyBhbmQgT3JnYW5pYyBIb25lc3QgVGVhKFRNKSBvciBTbWFydHdhdGVyKFRNKS4gVGhleSBwYWlyIHBlcmZlY3RseSB3aXRoIHlvdXIgZmF2b3JpdGUgc21vb3RoaWUgb3IgYm93bCBhbnl0aW1lLCBhbnl3aGVyZS4nLFxuICAgICAgICAneWVzc3Nzc3NzcyEnXG4gICAgKTtcblxuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgIGZvb2RDYXJkLFxuICAgICAgICBiZXZlcmFnZXNDYXJkLFxuICAgICAgICB0Z2dMdW5jaENhcmQsIFxuICAgICAgICByZXdhcmRzQ2FyZCxcbiAgICAgICAgcGVyc29uYWxpemVDYXJkLFxuICAgICAgICBzbmFja3NDYXJkXG4gICAgICAgICk7XG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51OyIsImltcG9ydCBvZmZlciBmcm9tICcuL21lZGlhL2M0XzFfM3gyT2ZmZXJfSWNvbl83Mjh4NDc3LnBuZyc7XG5pbXBvcnQgcG9pbnRzIGZyb20gJy4vbWVkaWEvYzRfMV8xcHRfSWNvbl83Mjh4NDc3LnBuZyc7XG5pbXBvcnQgYkRheUljb24gZnJvbSAnLi9tZWRpYS9jNF8xX0IgRGF5X0ljb25fNzI4eDQ3Ny5wbmcnO1xuaW1wb3J0IGN1c3RvbWl6ZSBmcm9tICcuL21lZGlhL2M0XzFfQ3VzdG9taXplX0ljb25fNzI4eDQ3Ny5wbmcnO1xuaW1wb3J0IGRvd25sb2FkQVBwIGZyb20gJy4vbWVkaWEvYzRfMV9Eb3dubG9hZCBBcHBfSWNvbl83Mjh4NDc3LnBuZyc7XG5pbXBvcnQgZmF2ZXMgZnJvbSAnLi9tZWRpYS9jNF8xX0ZhdmVzX0ljb25fNzI4eDQ3Ny5wbmcnO1xuaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgcmV3YXJkc1BpYyBmcm9tICcuL21lZGlhL0pKX0M0X0FDUV9mbHVpZF82MDB4NDIwLnBuZyc7XG5cblxuZnVuY3Rpb24gbG9hZE1lbnUoKXtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBoZXJvQ2FyZEZyYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2FyZFRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjYXJkVGl0bGVUZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBjYXJkQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRDb250ZW50UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkb3dubG9hZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBzaWduVXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICBoZXJvQ2FyZEZyYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ2hlcm8tY2FyZC1mcmFtZScpO1xuICAgIGRvd25sb2FkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdidXR0b24tLXByaW1hcnknKTtcbiAgICBzaWduVXBCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2J1dHRvbi0tcHJpbWFyeScpO1xuICAgIGNhcmRUaXRsZVRleHRTcGFuLmNsYXNzTGlzdC5hZGQoJ3NjcmlwdC10ZXh0Jyk7XG4gICAgY2FyZENvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250ZW50Jyk7XG4gICAgXG4gICAgaGVyb0NhcmRGcmFtZURpdi5hcHBlbmQoY2FyZFRpdGxlRGl2LCBjYXJkQ29udGVudERpdik7XG4gICAgY2FyZFRpdGxlRGl2LmFwcGVuZChjYXJkVGl0bGVUZXh0LCBjYXJkVGl0bGVUZXh0U3Bhbik7XG4gICAgY2FyZENvbnRlbnREaXYuYXBwZW5kKGNhcmRDb250ZW50UCwgZG93bmxvYWRCdXR0b24sIHNpZ25VcEJ1dHRvbik7XG4gICAgXG5cbiAgICBjYXJkVGl0bGVUZXh0LmlubmVyVGV4dCA9ICdNWSBKQU1CQSc7XG4gICAgY2FyZFRpdGxlVGV4dFNwYW4uaW5uZXJUZXh0ID0gJ3Jld2FyZHMnO1xuICAgIGNhcmRDb250ZW50UC5pbm5lclRleHQgPSAnU2lnbmluZyB1cCBpcyBlYXN5IGFuZCBmYXN0LiBZb3UgY2FuIGRvd25sb2FkIG91ciBlYXN5IHRvIHVzZSBhcHAgb3Igam9pbiBvbmxpbmUuJztcbiAgICBkb3dubG9hZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdkb3dubG9hZCBhcHAnO1xuICAgIHNpZ25VcEJ1dHRvbi50ZXh0Q29udGVudD0nc2lnbiB1cCBvbmxpbmUnO1xuXG4gICAgY29uc3QgY29sdW1uID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgcm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByb3c0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICByb3cxLmFwcGVuZChcbiAgICAgICAgY3JlYXRlQ2VsbChvZmZlciwgXCIxc3Qgb3JkZXIgPSAkMyBPRkYgPGJyPiAybmQgb3JkZXIgPSAkMiBPRkYgPGJyPiAkMTArIG9yZGVycykgPGJyPiBsaW1pdGVkIHRpbWVcIiksIFxuICAgICAgICBjcmVhdGVDZWxsKHBvaW50cywgJyQxID0gMXB0IDspIGVhcm4gaW4tc3RvcmUgb3Igb25saW5lIHdpdGggcGljay11cCBhbmQgZGVsaXZlcnknKVxuICAgICk7XG5cbiAgICByb3cyLmFwcGVuZChcbiAgICAgICAgY3JlYXRlQ2VsbChiRGF5SWNvbiwgJ2NlbGVicmF0b3J5IGJpcnRoZGF5IHNtb290aGllIG9uIHVzICgxNXB0IG1pbiB0byBxdWFsaWZ5KScpLFxuICAgICAgICBjcmVhdGVDZWxsKGN1c3RvbWl6ZSwgJ2N1c3RvbWl6ZSAmIHNhdmUgZmF2ZXMgKyBnZXQgaW5zaWRlciBleGNsdXNpdmVzJylcbiAgICApO1xuXG4gICAgcm93My5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZUNlbGwoZG93bmxvYWRBUHAsICdkb3dubG9hZCBhcHAuIHNpZ24tdXAuIG9yZGVyIGZhc3Rlci4nKSxcbiAgICAgICAgY3JlYXRlQ2VsbChmYXZlcywgJ2Vhcm4gcG9pbnRzICYgc2F2ZSBvbiBmYXZlcycpXG4gICAgICAgICk7XG4gICAgXG4gICAgLy9yb3c0ZWxlbWVudHNcbiAgICByb3c0LmFwcGVuZChjcmVhdGVDYXJkKFxuICAgICAgICByZXdhcmRzUGljLFxuICAgICAgICAnRUFSTiBSRVdBUkRTJyxcbiAgICAgICAgJ1BlcmtzIGFyZSB3YWl0aW5nIScsXG4gICAgICAgIFwiU2lnbiB1cCBhbmQgZW5qb3kgJDMgT0ZGIHlvdXIgZmlyc3Qgb3JkZXIgYW5kICQyIE9GRiB5b3VyIHNlY29uZCBvcmRlciAoZ29vZCB3aXRoIG9yZGVycyAkMTArKS4gSXQncyBlYXN5ICYgZmFzdCFcIixcbiAgICAgICAgJ3NpZ24gdXAnXG4gICAgKSwgZG93bmxvYWRCdXR0b24sIHNpZ25VcEJ1dHRvbik7XG5cbiAgICBcblxuICAgIGNvbHVtbi5hcHBlbmQocm93MSwgcm93Miwgcm93Mywgcm93NCk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChoZXJvQ2FyZEZyYW1lRGl2LCBjb2x1bW4pO1xuICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDZWxsKHBpY3R1cmVTcmMsIGRlc2NyaXB0aW9uKXtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRpdkltYWdlLmNsYXNzTGlzdC5hZGQoJ2ljb24tY2FyZC1waWN0dXJlJyk7XG4gICAgZGVzY3JpcHRpb25QLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgICBkaXZJbWFnZS5zcmMgPSBwaWN0dXJlU3JjO1xuICAgIGRlc2NyaXB0aW9uUC5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbjtcblxuICAgIGNlbGwuYXBwZW5kKGRpdkltYWdlLCBkZXNjcmlwdGlvblApO1xuICAgIHJldHVybiBjZWxsO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsImltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgbG9hZFJld2FyZHMgZnJvbSAnLi9yZXdhcmRzJztcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIodGl0bGUpe1xuICAgIGNvbnN0IG1haW5Db250YWluZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBtYWluQ29udGFpbmVySGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGluZXItaGVhZGVyJyk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVySDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlckgxLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICBtYWluQ29udGFpbmVySGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckgxKTtcbiAgICBcbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lckhlYWRlcjtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGVudERpdigpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKXtcbiAgICBjb25zdCB0b3BOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgcmV3YXJkc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNvbnRhY3RVc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50RGl2KCk7XG5cbiAgICBtZW51QnV0dG9uLmlubmVySFRNTCA9ICdNZW51JztcblxuICAgIHJld2FyZHNCdXR0b24uaW5uZXJIVE1MID0gJ1Jld2FyZHMnO1xuICAgIGNvbnRhY3RVc0J1dHRvbi5pbm5lckhUTUwgPSAnQ29udGFjdCBVcyc7XG5cbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnLCAnYWN0aXZlJyk7XG5cbiAgICByZXdhcmRzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnKTtcbiAgICBjb250YWN0VXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW5hdicpO1xuXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuY2hpbGRyZW5bMV0pO1xuICAgICAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICByZXdhcmRzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBjb250YWN0VXNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGxvYWRNZW51KCkpO1xuICAgIH0pO1xuXG4gICAgcmV3YXJkc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuY2hpbGRyZW5bMV0pO1xuICAgICAgICByZXdhcmRzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBjb250YWN0VXNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGxvYWRSZXdhcmRzKCkpO1xuICAgIH0pO1xuXG4gICAgY29udGFjdFVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5jaGlsZHJlblsxXSk7XG4gICAgICAgIGNvbnRhY3RVc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgcmV3YXJkc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgY29udGVudC5hcHBlbmQobG9hZENvbnRhY3QoKSk7XG4gICAgfSk7XG5cbiAgICB0b3BOYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gICAgdG9wTmF2LmFwcGVuZENoaWxkKHJld2FyZHNCdXR0b24pO1xuICAgIHRvcE5hdi5hcHBlbmRDaGlsZChjb250YWN0VXNCdXR0b24pO1xuICAgIFxuICAgIHJldHVybiB0b3BOYXY7ICAgXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCl7XG4gICAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnREaXYoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxvYWRNZW51KCkpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVXZWJzaXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSAnLi93ZWJzaXRlJztcblxuaW5pdGlhbGl6ZVdlYnNpdGUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=