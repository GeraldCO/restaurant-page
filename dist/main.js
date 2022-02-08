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
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');
    mainContainer.append('this is contact container');

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
    fcsContainer.append(cardIMage);
    cardTitle.append(cardTitleH3);
    cardContent.append(cardTitle);
    cardContent.append(pCardDescription);
    cardContent.append(btnWrapper);
    fcsContainer.append(cardContent);
    cardIMage.append(cardIMageFile);
    btnWrapper.append(aButtonLink);
    cardTitle.append(spamH3);

    pCardDescription.textContent= pDescriptionText;
    cardIMageFile.src = pictureSrc;
    spamH3.innerHTML = spamH3Text;
    cardTitleH3.innerHTML = cardTitleText;
    aButtonLink.innerHTML = buttonText;
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
function loadMenu(){
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');
    mainContainer.append('this is rewards container');

    return mainContainer
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
    return content
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

    menuButton.classList.add('button-nav');
    menuButton.classList.add('active');

    rewardsButton.classList.add('button-nav');
    contactUsButton.classList.add('button-nav');

    menuButton.addEventListener('click', (e)=>{
        content.removeChild(content.children[1]);
        content.append((0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])());
    });

    rewardsButton.addEventListener('click', (e)=>{
        content.removeChild(content.children[1]);
        content.append((0,_rewards__WEBPACK_IMPORTED_MODULE_1__["default"])());
    });

    contactUsButton.addEventListener('click', (e)=>{
        content.removeChild(content.children[1]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmU7QUFDWTtBQUNLO0FBQ2U7QUFDWjtBQUNRO0FBQ1o7OztBQUd6RDtBQUNBLElBQUksc0RBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2REFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQUU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSw2RUFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwrREFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxzRUFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwrREFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUN2SHpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUk87QUFDTTtBQUNBOztBQUU3QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQVE7QUFDL0IsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsdUJBQXVCLG9EQUFXO0FBQ2xDLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHVCQUF1QixvREFBVztBQUNsQyxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaURBQVE7O0FBRWhDOztBQUVBLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEVoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDZjBDOztBQUUxQyxvREFBaUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZXdhcmRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbG9hZENvbnRhY3QgKCl7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbkNvbnRhaW5lcicpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kKCd0aGlzIGlzIGNvbnRhY3QgY29udGFpbmVyJyk7XG5cbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7IiwiaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vd2Vic2l0ZVwiOyBcbmltcG9ydCBmb29kIGZyb20gJy4vbWVkaWEvYzNfRk9PRF9mbHVpZF82MDB4NDIwLnBuZyc7XG5pbXBvcnQgamogZnJvbSAgJy4vbWVkaWEvSkpfQzRfQ0JHTV9mbHVpZF82MDB4NDIwX3YyLnBuZyc7XG5pbXBvcnQgdGdnTHVuY2ggZnJvbSAnLi9tZWRpYS9KSl82NzkwNzdfQzFfVEdHX0xhdW5jaCBGTFVJRCBDQVJEX1YyLnBuZyc7XG5pbXBvcnQgcmV3YXJkc1BpYyBmcm9tICcuL21lZGlhL0pKX0M0X0FDUV9mbHVpZF82MDB4NDIwLnBuZyc7XG5pbXBvcnQgcGVyc29uYWxpemUgZnJvbSAnLi9tZWRpYS9jMl8yX3BlcnNvbmFsaXplX2ZsdWlkXzYwMHg0MjAucG5nJztcbmltcG9ydCBzbmFja3MgZnJvbSAnLi9tZWRpYS9jMl9zbmFja3NfZmx1aWRfNjAweDQyMC5wbmcnO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoIHBpY3R1cmVTcmMsIHNwYW1IM1RleHQsIGNhcmRUaXRsZVRleHQsIHBEZXNjcmlwdGlvblRleHQsIGJ1dHRvblRleHQpe1xuICAgIGNyZWF0ZUhlYWRlcignSmFtYiBKdWljZScpO1xuICAgIGNvbnN0IGZsdWlkQ2FyZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZjc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRJTWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRJTWFnZUZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRUaXRsZUgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBwQ2FyZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGJ0bldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhQnV0dG9uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBzcGFtSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFtJyk7XG4gICAgXG5cbiAgICBmbHVpZENhcmRSb3cuY2xhc3NMaXN0LmFkZCgnZmx1aWQtY2FyZC1yb3cnKTtcbiAgICBmY3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmNzLWNvbnRhaW5lcicpO1xuICAgIGNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGVudCcpO1xuICAgIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIGNhcmRJTWFnZS5jbGFzc0xpc3QuYWRkKCdjYXJkLWltYWdlJyk7XG4gICAgc3BhbUgzLmNsYXNzTGlzdC5hZGQoJ3NjcmlwLXRleHQnKTtcbiAgICBcblxuICAgIGZsdWlkQ2FyZFJvdy5hcHBlbmQoZmNzQ29udGFpbmVyKTtcbiAgICBmY3NDb250YWluZXIuYXBwZW5kKGNhcmRJTWFnZSk7XG4gICAgY2FyZFRpdGxlLmFwcGVuZChjYXJkVGl0bGVIMyk7XG4gICAgY2FyZENvbnRlbnQuYXBwZW5kKGNhcmRUaXRsZSk7XG4gICAgY2FyZENvbnRlbnQuYXBwZW5kKHBDYXJkRGVzY3JpcHRpb24pO1xuICAgIGNhcmRDb250ZW50LmFwcGVuZChidG5XcmFwcGVyKTtcbiAgICBmY3NDb250YWluZXIuYXBwZW5kKGNhcmRDb250ZW50KTtcbiAgICBjYXJkSU1hZ2UuYXBwZW5kKGNhcmRJTWFnZUZpbGUpO1xuICAgIGJ0bldyYXBwZXIuYXBwZW5kKGFCdXR0b25MaW5rKTtcbiAgICBjYXJkVGl0bGUuYXBwZW5kKHNwYW1IMyk7XG5cbiAgICBwQ2FyZERlc2NyaXB0aW9uLnRleHRDb250ZW50PSBwRGVzY3JpcHRpb25UZXh0O1xuICAgIGNhcmRJTWFnZUZpbGUuc3JjID0gcGljdHVyZVNyYztcbiAgICBzcGFtSDMuaW5uZXJIVE1MID0gc3BhbUgzVGV4dDtcbiAgICBjYXJkVGl0bGVIMy5pbm5lckhUTUwgPSBjYXJkVGl0bGVUZXh0O1xuICAgIGFCdXR0b25MaW5rLmlubmVySFRNTCA9IGJ1dHRvblRleHQ7XG4gICAgYUJ1dHRvbkxpbmsuaHJlZiA9ICcjJztcbiAgICByZXR1cm4gZmx1aWRDYXJkUm93O1xufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpe1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW5Db250YWluZXInKTtcbiAgICBcbiAgICBjb25zdCBmb29kQ2FyZCA9IGNyZWF0ZUNhcmQoICAgICAgICBcbiAgICAgICAgZm9vZCxcbiAgICAgICAgJ1BlcmZlY3QgdG8gUGFpcicsXG4gICAgICAgICdDb3p5LCBXYXJtIEZvb2QnLFxuICAgICAgICAnVHJ5IG91ciB0b2FzdHksIHByb3RlaW4tcGFja2VkIGZvb2QgdGhhdCB3aWxsIHdhcm0geW91IHVwIGR1cmluZyB0aGUgY2hpbGxpZXIgc2Vhc29ucy4gUGVyZmVjdCB0byBwYWlyIHdpdGggeW91ciBmYXZvcml0ZSBzbW9vdGhpZSwgYm93bCBvciBpY2VkIGJldmVyYWdlIScsXG4gICAgICAgICdhaGgsIHRyeSBub3chJ1xuICAgICk7XG4gICAgY29uc3QgYmV2ZXJhZ2VzQ2FyZCA9IGNyZWF0ZUNhcmQoXG4gICAgICAgIGpqLCBcbiAgICAgICAgJ0ZVRUwgWU9VUiBNT1JOSU5HJyxcbiAgICAgICAgJ05ldyBJY2VkIEJldmVyYWdlcycsXG4gICAgICAgICdTdGFydCB5b3VyIGRheSB3aXRoIGEgYnJpZ2h0IGFuZCBiYWxhbmNlZCBpY2VkIGdvdGNoYSBtYXRjaGEgb3IgaWN5IGJvbGQg4oCYbiBjb2xkIGJyZXcgdG9wcGVkIHdpdGggYSBkcmVhbXkgaG91c2UtbWFkZSwgcGxhbnQtYmFzZWQgc3dlZXQgY2xvdWQgd2hpcC4nLFxuICAgICAgICAnc2lwIHNpcCBnbyEnXG4gICAgKTtcblxuICAgIGNvbnN0IHRnZ0x1bmNoQ2FyZCA9IGNyZWF0ZUNhcmQoXG4gICAgICAgIHRnZ0x1bmNoLFxuICAgICAgICAnUExBTlQtQkFTRUQnLFxuICAgICAgICAnVGhlIEdvIEdldHRlciBTbW9vdGhpZScsXG4gICAgICAgICdUcnkgVGhlIEdvIEdldHRlciBzbW9vdGhpZSBmb3IgYSB0cm9waWNhbCBnZXQgYXdheSB3aXRoIGRlbGljaW91cyBwZXJrcy4gRnJ1aXR5IGZsYXZvcnMgbGlrZSBtYW5nbyB3aXRoIHN1cGVyIGZvb2RzIGxpa2Uga2FsZSBnZXQgdG9nZXRoZXIgdG8gY3JlYXRlIGEgbHVzaCwgaW1tdW5pdHkgYm9vc3RpbmcsIHBsYW50LWJhc2VkIHNtb290aGllLicsXG4gICAgICAgICdPcmRlciBOb3cnXG4gICAgKTtcblxuICAgIGNvbnN0IHJld2FyZHNDYXJkID0gY3JlYXRlQ2FyZChcbiAgICAgICAgcmV3YXJkc1BpYyxcbiAgICAgICAgJ0VBUk4gUkVXQVJEUycsXG4gICAgICAgICdQZXJrcyBhcmUgd2FpdGluZyEnLFxuICAgICAgICBcIlNpZ24gdXAgYW5kIGVuam95ICQzIE9GRiB5b3VyIGZpcnN0IG9yZGVyIGFuZCAkMiBPRkYgeW91ciBzZWNvbmQgb3JkZXIgKGdvb2Qgd2l0aCBvcmRlcnMgJDEwKykuIEl0J3MgZWFzeSAmIGZhc3QhXCIsXG4gICAgICAgICdzaWduIHVwJ1xuICAgICk7XG5cbiAgICBjb25zdCBwZXJzb25hbGl6ZUNhcmQgPSBjcmVhdGVDYXJkKFxuICAgICAgICBwZXJzb25hbGl6ZSxcbiAgICAgICAgJ0NVU1RPTUlaRScsXG4gICAgICAgICdNYWtlIHlvdXIgb3duIGNyZWF0aW9uJyxcbiAgICAgICAgJ1RoZSBza3kgKG9yIEphbWJhIG1lbnUpIGlzIHRoZSBsaW1pdCBoZXJlIGF0IEphbWJhLiBTdWJzdGl0dXRlIG1pbGssIGp1aWNlIG9yIGZydWl0cyAmIHZlZ2dpZXMgYW5kIGFkZCBib29zdHMuJyxcbiAgICAgICAgJ1Ntb28tbmlxdWUgU21vb3RoaWUnXG4gICAgKTtcblxuICAgIGNvbnN0IHNuYWNrc0NhcmQgPSBjcmVhdGVDYXJkKFxuICAgICAgICBzbmFja3MsXG4gICAgICAgICdBREQgQSBTTkFDSycsXG4gICAgICAgIFwiR3JhYiBuJyBnb1wiLFxuICAgICAgICAnRXhwbG9yZSBoZWFsdGh5IGdsdXRlbiAmIG51dC1mcmVlIHNuYWNrcyBhbmQgT3JnYW5pYyBIb25lc3QgVGVhKFRNKSBvciBTbWFydHdhdGVyKFRNKS4gVGhleSBwYWlyIHBlcmZlY3RseSB3aXRoIHlvdXIgZmF2b3JpdGUgc21vb3RoaWUgb3IgYm93bCBhbnl0aW1lLCBhbnl3aGVyZS4nLFxuICAgICAgICAneWVzc3Nzc3NzcyEnXG4gICAgKTtcblxuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgIGZvb2RDYXJkLFxuICAgICAgICBiZXZlcmFnZXNDYXJkLFxuICAgICAgICB0Z2dMdW5jaENhcmQsIFxuICAgICAgICByZXdhcmRzQ2FyZCxcbiAgICAgICAgcGVyc29uYWxpemVDYXJkLFxuICAgICAgICBzbmFja3NDYXJkXG4gICAgICAgICk7XG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51OyIsImZ1bmN0aW9uIGxvYWRNZW51KCl7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbkNvbnRhaW5lcicpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kKCd0aGlzIGlzIHJld2FyZHMgY29udGFpbmVyJyk7XG5cbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lclxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJpbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGxvYWRSZXdhcmRzIGZyb20gJy4vcmV3YXJkcyc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHRpdGxlKXtcbiAgICBjb25zdCBtYWluQ29udGFpbmVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgbWFpbkNvbnRhaW5lckhlYWRlci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRpbmVyLWhlYWRlcicpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlckgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXJIMS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgbWFpbkNvbnRhaW5lckhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJIMSk7XG4gICAgXG4gICAgcmV0dXJuIG1haW5Db250YWluZXJIZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRlbnREaXYoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICByZXR1cm4gY29udGVudFxufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKXtcbiAgICBjb25zdCB0b3BOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgcmV3YXJkc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNvbnRhY3RVc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50RGl2KCk7XG5cbiAgICBtZW51QnV0dG9uLmlubmVySFRNTCA9ICdNZW51JztcblxuICAgIHJld2FyZHNCdXR0b24uaW5uZXJIVE1MID0gJ1Jld2FyZHMnO1xuICAgIGNvbnRhY3RVc0J1dHRvbi5pbm5lckhUTUwgPSAnQ29udGFjdCBVcyc7XG5cbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgcmV3YXJkc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2Jyk7XG4gICAgY29udGFjdFVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnKTtcblxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmNoaWxkcmVuWzFdKTtcbiAgICAgICAgY29udGVudC5hcHBlbmQobG9hZE1lbnUoKSk7XG4gICAgfSk7XG5cbiAgICByZXdhcmRzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5jaGlsZHJlblsxXSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGxvYWRSZXdhcmRzKCkpO1xuICAgIH0pO1xuXG4gICAgY29udGFjdFVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5jaGlsZHJlblsxXSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGxvYWRDb250YWN0KCkpO1xuICAgIH0pO1xuXG4gICAgdG9wTmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIHRvcE5hdi5hcHBlbmRDaGlsZChyZXdhcmRzQnV0dG9uKTtcbiAgICB0b3BOYXYuYXBwZW5kQ2hpbGQoY29udGFjdFVzQnV0dG9uKTtcbiAgICBcbiAgICByZXR1cm4gdG9wTmF2OyAgIFxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50RGl2KCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2FkTWVudSgpKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplV2Vic2l0ZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSAnLi93ZWJzaXRlJztcblxuaW5pdGlhbGl6ZVdlYnNpdGUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=