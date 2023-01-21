/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadAbout\": () => (/* binding */ loadAbout)\n/* harmony export */ });\nconst createAbout = ()=>{\n    //TODO\n    //create about section \n    return about\n}\n\n\n\nconst loadAbout = ()=>{\n    const main = document.getElementById('main')\n    main.innerHTML = 'this is about page'\n}\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/aboutPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage */ \"./src/mainPage.js\");\n/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutPage */ \"./src/aboutPage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n//create nav and nav links\n\n\n\nconst CreateNavbar = () =>{\n    const nav = document.createElement('nav')\n    const navLinkContiner =  document.createElement('ul')\n    const navLinkHome = document.createElement('li')\n    navLinkHome.classList.add('nav-btn')\n    navLinkHome.setAttribute('data-target', 'home')\n    const navLinkMenu = document.createElement('li')\n    navLinkMenu.classList.add('nav-btn')\n    navLinkMenu.setAttribute('data-target', 'menu')\n    const navLinkAbout = document.createElement('li')\n    navLinkAbout.classList.add('nav-btn')\n    navLinkAbout.setAttribute('data-target', 'about')\n\n    nav.appendChild(navLinkContiner)\n\n    navLinkContiner.appendChild(navLinkHome)\n    navLinkContiner.appendChild(navLinkMenu)\n    navLinkContiner.appendChild(navLinkAbout)\n\n    navLinkHome.textContent = 'Home';\n    navLinkMenu.textContent = 'Menu';\n    navLinkAbout.textContent = 'About';\n\n    return nav\n}\nconst CreateMain = ()=>{\n    const main = document.createElement('main')\n    main.setAttribute(\"id\",'main')\n    return main\n}\n\n//create footer\nconst CreateFooter = ()=>{\n    const footer = document.createElement('footer')\n    const paragraph = document.createElement(\"p\")\n    paragraph.textContent = 'Copywrite \\u00A9 2023 MarkoJanja '\n    footer.appendChild(paragraph)\n\n\n    return footer\n}\n\n\nconst initWebsite = (()=>{\n    const content = document.getElementById('content')\n    content.appendChild(CreateNavbar())\n    content.appendChild(CreateMain())\n    ;(0,_mainPage__WEBPACK_IMPORTED_MODULE_0__.loadHome)()\n    content.appendChild(CreateFooter())\n})()\n\nconst handlePages = (()=>{\n    const navBtns = document.querySelectorAll('.nav-btn')\n    navBtns.forEach((btn)=>{\n        btn.addEventListener('click', function(){\n            switch(btn.dataset.target){\n                case \"home\":\n                    ;(0,_mainPage__WEBPACK_IMPORTED_MODULE_0__.loadHome)()\n                    setActive(btn)\n                    break;\n                case \"about\":\n                    (0,_aboutPage__WEBPACK_IMPORTED_MODULE_1__.loadAbout)()\n                    setActive(btn)\n                    break\n                case 'menu':\n                    ;(0,_menuPage__WEBPACK_IMPORTED_MODULE_2__.loadMenu)()\n                    setActive(btn)\n                    break    \n                default:\n                    console.log('hola');\n            }\n            \n        })\n        \n    })\n})()\n\nfunction setActive(button){\n    const buttons = document.querySelectorAll('.nav-btn')\n\n    buttons.forEach((btn) =>{\n        (btn!==this) ? btn.classList.remove('active'):false\n    })\n    button.classList.add('active')\n}\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\nconst createHome = () =>{\n    \n    const home = document.createElement('div')\n    const heading = document.createElement(\"h1\")\n    home.style.background = \"url('./assets/banner.jpg') no-repeat center center / cover\";\n    heading.textContent = 'My awesome website '\n    home.appendChild(heading)\n    return home\n}\n\nconst loadHome = () =>{\n    const main = document.getElementById('main')\n    main.innerHTML = \"\";\n    main.appendChild(createHome())\n}\n\n\n//# sourceURL=webpack://restaurant_page/./src/mainPage.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nconst creatMenu = ()=>{\n    //TODO\n    //create menu\n\n    return menu\n}\n\n\nconst loadMenu = ()=>{\n    const main = document.getElementById('main')\n    main.innerHTML = 'this is menu page'\n}\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/menuPage.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;