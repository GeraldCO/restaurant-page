/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadContact (){
    console.log('loading contact page');
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");
/* harmony import */ var _media_c3_FOOD_fluid_600x420_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/c3_FOOD_fluid_600x420.png */ "./src/media/c3_FOOD_fluid_600x420.png");
 



function createCard( pDescriptionText, pictureSrc, cardTitleText, buttonText){
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
    

    fluidCardRow.classList.add('fluid-card-row');
    fcsContainer.classList.add('fcs-container');
    cardContent.classList.add('card-content');
    cardTitle.classList.add('title');
    cardIMage.classList.add('card-image');
    

    fluidCardRow.appendChild(fcsContainer);
    fcsContainer.appendChild(cardIMage);
    cardTitle.appendChild(cardTitleH3);
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(pCardDescription);
    cardContent.appendChild(btnWrapper);
    fcsContainer.appendChild(cardContent);
    cardIMage.appendChild(cardIMageFile);
    btnWrapper.appendChild(aButtonLink);

    pCardDescription.textContent= pDescriptionText;
    cardIMageFile.src = pictureSrc;
    cardTitleH3.innerHTML = cardTitleText;
    aButtonLink.innerHTML = buttonText;
    aButtonLink.href = 'www.google.com';
    return fluidCardRow;
}

function createMenu(){
    const mainContainer = (0,_website__WEBPACK_IMPORTED_MODULE_0__.createMainContainer)();
    const firstCard = createCard(
        'Try our toasty, protein-packed food that will warm you up during the chillier seasons. Perfect to pair with your favorite smoothie, bowl or iced beverage!',
        _media_c3_FOOD_fluid_600x420_png__WEBPACK_IMPORTED_MODULE_1__, 
        'Perfect to Pair Cozy, Warm Food',
        'ahh, try now!'
    );
    const secondCard = createCard(
        'Try our toasty, protein-packed food that will warm you up during the chillier seasons. Perfect to pair with your favorite smoothie, bowl or iced beverage!',
        _media_c3_FOOD_fluid_600x420_png__WEBPACK_IMPORTED_MODULE_1__, 
        'Perfect to Pair Cozy, Warm Food',
        'ahh, try now!'
    );
    mainContainer.appendChild(firstCard);
    mainContainer.appendChild(secondCard);
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
function loadMenu(){
    console.log('loading menu webpage');
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
/* harmony export */   "createMainContainer": () => (/* binding */ createMainContainer),
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

function createNav(){
    const topNav = document.createElement('nav');
    const menuButton = document.createElement('button');
    const rewardsButton = document.createElement('button');
    const contactUsButton = document.createElement('button');

    menuButton.innerHTML = 'Menu';

    rewardsButton.innerHTML = 'Rewards';
    contactUsButton.innerHTML = 'Contact Us';

    menuButton.classList.add('button-nav');
    menuButton.classList.add('active');

    rewardsButton.classList.add('button-nav');
    contactUsButton.classList.add('button-nav');

    menuButton.addEventListener('click', (e)=>{
        (0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    rewardsButton.addEventListener('click', (e)=>{
        (0,_rewards__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });

    contactUsButton.addEventListener('click', (e)=>{
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });

    topNav.appendChild(menuButton);
    topNav.appendChild(rewardsButton);
    topNav.appendChild(contactUsButton);
    
    return topNav;   
}

function initializeWebsite(){
    const content = document.querySelector('#content');
    content.appendChild(createNav());
    content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])());

}

function createMainContainer(){
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');
    
    return mainContainer;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

/***/ }),

/***/ "./src/media/c3_FOOD_fluid_600x420.png":
/*!*********************************************!*\
  !*** ./src/media/c3_FOOD_fluid_600x420.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ee8c5e217e90fe4f786.png";

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
/******/ 			// no module.id needed
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
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");


(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDWTtBQUNMOztBQUVoRDtBQUNBLElBQUksc0RBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDZEQUFtQjtBQUM3QztBQUNBO0FBQ0EsUUFBUSw2REFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ2hFekI7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKUztBQUNJO0FBQ0E7O0FBRTdCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxpREFBVTtBQUNsQixLQUFLOztBQUVMO0FBQ0EsUUFBUSxvREFBVztBQUNuQixLQUFLOztBQUVMO0FBQ0EsUUFBUSxvREFBVztBQUNuQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaURBQVU7O0FBRWxDOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7OztVQ2pFaEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7OztBQ2YwQzs7QUFFMUMsb0RBQWlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmV3YXJkcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRDb250YWN0ICgpe1xuICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nIGNvbnRhY3QgcGFnZScpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJpbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tIFwiLi93ZWJzaXRlXCI7IFxuaW1wb3J0IGZvb2QgZnJvbSAnLi9tZWRpYS9jM19GT09EX2ZsdWlkXzYwMHg0MjAucG5nJztcbmltcG9ydCB7IGNyZWF0ZU1haW5Db250YWluZXIgfSBmcm9tIFwiLi93ZWJzaXRlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoIHBEZXNjcmlwdGlvblRleHQsIHBpY3R1cmVTcmMsIGNhcmRUaXRsZVRleHQsIGJ1dHRvblRleHQpe1xuICAgIGNyZWF0ZUhlYWRlcignSmFtYiBKdWljZScpO1xuICAgIGNvbnN0IGZsdWlkQ2FyZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZjc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRJTWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRJTWFnZUZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRUaXRsZUgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBwQ2FyZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGJ0bldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhQnV0dG9uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBcblxuICAgIGZsdWlkQ2FyZFJvdy5jbGFzc0xpc3QuYWRkKCdmbHVpZC1jYXJkLXJvdycpO1xuICAgIGZjc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmY3MtY29udGFpbmVyJyk7XG4gICAgY2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250ZW50Jyk7XG4gICAgY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgY2FyZElNYWdlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1hZ2UnKTtcbiAgICBcblxuICAgIGZsdWlkQ2FyZFJvdy5hcHBlbmRDaGlsZChmY3NDb250YWluZXIpO1xuICAgIGZjc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkSU1hZ2UpO1xuICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChjYXJkVGl0bGVIMyk7XG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChwQ2FyZERlc2NyaXB0aW9uKTtcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChidG5XcmFwcGVyKTtcbiAgICBmY3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnQpO1xuICAgIGNhcmRJTWFnZS5hcHBlbmRDaGlsZChjYXJkSU1hZ2VGaWxlKTtcbiAgICBidG5XcmFwcGVyLmFwcGVuZENoaWxkKGFCdXR0b25MaW5rKTtcblxuICAgIHBDYXJkRGVzY3JpcHRpb24udGV4dENvbnRlbnQ9IHBEZXNjcmlwdGlvblRleHQ7XG4gICAgY2FyZElNYWdlRmlsZS5zcmMgPSBwaWN0dXJlU3JjO1xuICAgIGNhcmRUaXRsZUgzLmlubmVySFRNTCA9IGNhcmRUaXRsZVRleHQ7XG4gICAgYUJ1dHRvbkxpbmsuaW5uZXJIVE1MID0gYnV0dG9uVGV4dDtcbiAgICBhQnV0dG9uTGluay5ocmVmID0gJ3d3dy5nb29nbGUuY29tJztcbiAgICByZXR1cm4gZmx1aWRDYXJkUm93O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCl7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZU1haW5Db250YWluZXIoKTtcbiAgICBjb25zdCBmaXJzdENhcmQgPSBjcmVhdGVDYXJkKFxuICAgICAgICAnVHJ5IG91ciB0b2FzdHksIHByb3RlaW4tcGFja2VkIGZvb2QgdGhhdCB3aWxsIHdhcm0geW91IHVwIGR1cmluZyB0aGUgY2hpbGxpZXIgc2Vhc29ucy4gUGVyZmVjdCB0byBwYWlyIHdpdGggeW91ciBmYXZvcml0ZSBzbW9vdGhpZSwgYm93bCBvciBpY2VkIGJldmVyYWdlIScsXG4gICAgICAgIGZvb2QsIFxuICAgICAgICAnUGVyZmVjdCB0byBQYWlyIENvenksIFdhcm0gRm9vZCcsXG4gICAgICAgICdhaGgsIHRyeSBub3chJ1xuICAgICk7XG4gICAgY29uc3Qgc2Vjb25kQ2FyZCA9IGNyZWF0ZUNhcmQoXG4gICAgICAgICdUcnkgb3VyIHRvYXN0eSwgcHJvdGVpbi1wYWNrZWQgZm9vZCB0aGF0IHdpbGwgd2FybSB5b3UgdXAgZHVyaW5nIHRoZSBjaGlsbGllciBzZWFzb25zLiBQZXJmZWN0IHRvIHBhaXIgd2l0aCB5b3VyIGZhdm9yaXRlIHNtb290aGllLCBib3dsIG9yIGljZWQgYmV2ZXJhZ2UhJyxcbiAgICAgICAgZm9vZCwgXG4gICAgICAgICdQZXJmZWN0IHRvIFBhaXIgQ296eSwgV2FybSBGb29kJyxcbiAgICAgICAgJ2FoaCwgdHJ5IG5vdyEnXG4gICAgKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0Q2FyZCk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRDYXJkKTtcbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7IiwiZnVuY3Rpb24gbG9hZE1lbnUoKXtcbiAgICBjb25zb2xlLmxvZygnbG9hZGluZyBtZW51IHdlYnBhZ2UnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiaW1wb3J0IGNyZWF0ZUNhcmQgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGxvYWRSZXdhcmRzIGZyb20gJy4vcmV3YXJkcyc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHRpdGxlKXtcbiAgICBjb25zdCBtYWluQ29udGFpbmVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgbWFpbkNvbnRhaW5lckhlYWRlci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRpbmVyLWhlYWRlcicpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlckgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXJIMS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgbWFpbkNvbnRhaW5lckhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJIMSk7XG4gICAgXG4gICAgcmV0dXJuIG1haW5Db250YWluZXJIZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpe1xuICAgIGNvbnN0IHRvcE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCByZXdhcmRzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY29udGFjdFVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBtZW51QnV0dG9uLmlubmVySFRNTCA9ICdNZW51JztcblxuICAgIHJld2FyZHNCdXR0b24uaW5uZXJIVE1MID0gJ1Jld2FyZHMnO1xuICAgIGNvbnRhY3RVc0J1dHRvbi5pbm5lckhUTUwgPSAnQ29udGFjdCBVcyc7XG5cbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgcmV3YXJkc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2Jyk7XG4gICAgY29udGFjdFVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnKTtcblxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgY3JlYXRlQ2FyZCgpO1xuICAgIH0pO1xuXG4gICAgcmV3YXJkc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICBsb2FkUmV3YXJkcygpO1xuICAgIH0pO1xuXG4gICAgY29udGFjdFVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgIGxvYWRDb250YWN0KCk7XG4gICAgfSk7XG5cbiAgICB0b3BOYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gICAgdG9wTmF2LmFwcGVuZENoaWxkKHJld2FyZHNCdXR0b24pO1xuICAgIHRvcE5hdi5hcHBlbmRDaGlsZChjb250YWN0VXNCdXR0b24pO1xuICAgIFxuICAgIHJldHVybiB0b3BOYXY7ICAgXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKCkpO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYWluQ29udGFpbmVyKCl7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbkNvbnRhaW5lcicpO1xuICAgIFxuICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xufVxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gJy4vd2Vic2l0ZSc7XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9