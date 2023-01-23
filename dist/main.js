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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadAbout\": () => (/* binding */ loadAbout)\n/* harmony export */ });\n/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ \"./src/general.js\");\n\n\nconst createAbout = ()=>{\n    //TODO\n    //create about section \n    const about = document.createElement('div')\n    about.classList.add('about')\n    const aboutTitle = (0,_general__WEBPACK_IMPORTED_MODULE_0__.createTextElement)('h1','About Us')\n    const paragraph1 =  (0,_general__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(\"p\",\"Welcome to our authentic Spanish restaurant, located in the heart of Barcelona. We have been serving traditional Catalan and Spanish cuisine for over 20 years, using only the freshest ingredients sourced straight from the local markets. Our menu features a wide variety of dishes from paella to botifarra, and our skilled chefs are dedicated to ensuring that each dish is cooked to perfection.\")\n    const paragraph2 = (0,_general__WEBPACK_IMPORTED_MODULE_0__.createTextElement)('p', \"We believe that dining should be an experience, not just a meal. That's why we've created a cozy and charming atmosphere in our restaurant that will make you feel like you're in the streets of Barcelona. Whether you're celebrating a special occasion or just looking for a casual meal, we're sure you'll enjoy our warm hospitality and delicious food.\")\n    const paragraph3 = (0,_general__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(\"p\", \"We also offer a variety of options for those with dietary restrictions, such as gluten-free options, so everyone can enjoy our delicious food. Our restaurant also have a bar area where you can enjoy a variety of Spanish wines, sherries and cava.\")\n    const paragraph4 = (0,_general__WEBPACK_IMPORTED_MODULE_0__.createTextElement)(\"p\", \"We are passionate about sharing our love of Spanish and Catalan cuisine with our customers and we hope you'll come dine with us soon! Enjoy the true taste of Barcelona in our restaurant.\")\n    about.appendChild(aboutTitle)\n    about.appendChild(paragraph1)\n    about.appendChild(paragraph2)\n    about.appendChild(paragraph3)\n    about.appendChild(paragraph4)\n\n    return about\n}\n\nconst loadAbout = ()=>{\n    const main = document.getElementById('main')\n    main.innerHTML = \"\"\n    main.appendChild(createAbout())\n}\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/aboutPage.js?");

/***/ }),

/***/ "./src/general.js":
/*!************************!*\
  !*** ./src/general.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createImgElement\": () => (/* binding */ createImgElement),\n/* harmony export */   \"createTextElement\": () => (/* binding */ createTextElement)\n/* harmony export */ });\nconst createTextElement = (el, text)=>{\n    const element = document.createElement(el)\n    element.textContent = text\n\n    return element\n}\nconst createImgElement =(imagePath, text)=>{\n\n    const element = document.createElement('img')\n    element.src = imagePath\n    \n    return element\n}\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/general.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage */ \"./src/mainPage.js\");\n/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutPage */ \"./src/aboutPage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n//create nav and nav links\n\n\n\nconst CreateNavbar = () =>{\n    const nav = document.createElement('nav')\n    const navLinks =  document.createElement('ul')\n    const navLinkHome = document.createElement('li')\n    navLinkHome.classList.add('nav-btn')\n    navLinkHome.setAttribute('data-target', 'home')\n    const navLinkMenu = document.createElement('li')\n    navLinkMenu.classList.add('nav-btn')\n    navLinkMenu.setAttribute('data-target', 'menu')\n    const navLinkAbout = document.createElement('li')\n    navLinkAbout.classList.add('nav-btn')\n    navLinkAbout.setAttribute('data-target', 'about')\n\n    nav.appendChild(navLinks)\n\n    navLinks.appendChild(navLinkHome)\n    navLinks.appendChild(navLinkMenu)\n    navLinks.appendChild(navLinkAbout)\n\n    navLinkHome.textContent = 'Home';\n    navLinkMenu.textContent = 'Menu';\n    navLinkAbout.textContent = 'About Us';\n\n    return nav\n}\nconst CreateMain = ()=>{\n    const main = document.createElement('main')\n    main.setAttribute(\"id\",'main')\n    return main\n}\n\n//create footer\nconst CreateFooter = ()=>{\n    const footer = document.createElement('footer')\n    const paragraph = document.createElement(\"p\")\n    paragraph.textContent = 'Copywrite \\u00A9 2023 MarkoJanja '\n    footer.appendChild(paragraph)\n\n\n    return footer\n}\n\n\nconst initWebsite = (()=>{\n    const content = document.getElementById('content')\n    content.appendChild(CreateNavbar())\n    content.appendChild(CreateMain())\n    ;(0,_mainPage__WEBPACK_IMPORTED_MODULE_0__.loadHome)()\n    content.appendChild(CreateFooter())\n})()\n\nconst handlePages = (()=>{\n    const navBtns = document.querySelectorAll('.nav-btn')\n    navBtns.forEach((btn)=>{\n        btn.addEventListener('click', function(){\n            switch(btn.dataset.target){\n                case \"home\":\n                    ;(0,_mainPage__WEBPACK_IMPORTED_MODULE_0__.loadHome)()\n                    setActive(btn)\n                    break;\n                case \"about\":\n                    (0,_aboutPage__WEBPACK_IMPORTED_MODULE_1__.loadAbout)()\n                    setActive(btn)\n                    break\n                case 'menu':\n                    ;(0,_menuPage__WEBPACK_IMPORTED_MODULE_2__.loadMenu)()\n                    setActive(btn)\n                    break    \n                default:\n                    console.log('hola');\n            }\n            \n        })\n        \n    })\n})()\n\nfunction setActive(button){\n    const buttons = document.querySelectorAll('.nav-btn')\n\n    buttons.forEach((btn) =>{\n        if(btn!==this)  btn.classList.remove('active')\n    })\n    button.classList.add('active')\n}\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ \"./src/general.js\");\n\n\nconst createHome = () =>{\n    \n    const home = document.createElement('div')\n    home.classList.add('home')\n    const heading = document.createElement(\"h1\")\n    const copy = (0,_general__WEBPACK_IMPORTED_MODULE_0__.createTextElement)('p', \"Discover the Ultimate Spanish Dining Experience at Our Authentic Restaurant in Barcelona!\")\n    heading.textContent = 'El Jardín de España '\n    home.appendChild(heading)\n    home.appendChild(copy)\n    return home\n}\n\nconst loadHome = () =>{\n    const main = document.getElementById('main')\n    main.innerHTML = \"\";\n    main.appendChild(createHome())\n}\n\n\n//# sourceURL=webpack://restaurant_page/./src/mainPage.js?");

/***/ }),

/***/ "./src/menuItems.js":
/*!**************************!*\
  !*** ./src/menuItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenuList\": () => (/* binding */ createMenuList)\n/* harmony export */ });\nclass MenuItem{\n    constructor(title,desc){\n        this.title,\n        this.title,\n        this.image\n    }\n}\n\n\n\nconst createMenuList=()=>{\n    \n    const menuItem1 = new MenuItem()\n    menuItem1.title = \"Paella\"\n    menuItem1.desc = \"A traditional Valencian dish made with saffron, rice, vegetables, and meat or seafood. The dish is cooked in a wide, shallow pan called a paellera, and is typically made with chicken, rabbit, and snails. The rice is cooked in chicken or fish stock and saffron, and is typically served with a variety of vegetables, such as tomatoes, bell peppers, and green beans.\"\n    menuItem1.image = './assets/paella.jpg'\n\n    const menuItem2 = new MenuItem()\n    menuItem2.title = \"Escalivada\"\n    menuItem2.desc = \"Grilled vegetables, such as eggplant, bell peppers, and onions, are the main ingredient of this traditional Catalan dish. The vegetables are cooked over an open flame until they are tender and slightly charred. They are then peeled and sliced, and served with anchovies. The dish is typically served cold and is often accompanied by bread.\"\n    menuItem2.image = './assets/escalivada.jpg'\n\n    const menuItem3 = new MenuItem()\n    menuItem3.title = \"Fideuà\"\n    menuItem3.desc = \"A noodle dish similar to paella, but made with short, thin noodles instead of rice. The dish is typically made with seafood, such as squid, shrimp, and mussels. The noodles are cooked in fish or seafood stock, and are typically served with a variety of vegetables, such as tomatoes, bell peppers, and green beans.\"\n    menuItem3.image = './assets/Fideua.jpg'\n\n    const menuItem4 = new MenuItem()\n    menuItem4.title = \"Botifarra amb mongetes\"\n    menuItem4.desc = \"A traditional Catalan dish consisting of grilled sausages served with white beans. The sausages are made with pork and typically seasoned with spices, such as black pepper, paprika, and cumin. The white beans are cooked with garlic and onion, and are typically served in a casserole dish.\"\n    menuItem4.image = './assets/Botafire.jpg'\n\n    const menuItem5 = new MenuItem()\n    menuItem5.title = \"Calçots amb romesco\"\n    menuItem5.desc = \"A traditional Catalan dish of grilled green onions, often served with a spicy red pepper and almond sauce. Calçots are a type of green onion that are typically grilled over an open flame until they are tender and slightly charred. They are served with a sauce made from red peppers, tomatoes, bread, almonds and olive oil, called Romesco sauce.\"\n    menuItem5.image = './assets/calc.jpg'\n\n    const menuItem6 = new MenuItem()\n    menuItem6.title = \"Esqueixada\"\n    menuItem6.desc = \"A traditional Catalan salad made with salt cod, tomatoes, onions, and olives. The salt cod is soaked in water for several hours to remove the salt, then flaked and mixed with the tomatoes, onions, and olives. The salad is typically dressed with olive oil and vinegar, and is often garnished with parsley.\"\n    menuItem6.image = './assets/Ex.jpg'\n    \n    \n    const menuList = [menuItem2,menuItem6, menuItem1, menuItem3, menuItem4, menuItem5]\n\n    return menuList\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/menuItems.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ \"./src/general.js\");\n/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuItems */ \"./src/menuItems.js\");\n\n\n\n\nconst createMenu = ()=>{\n    const menuList1 = (0,_menuItems__WEBPACK_IMPORTED_MODULE_1__.createMenuList)()\n    console.log(menuList1)\n    const menu = document.createElement('div')\n    menu.classList.add('menu')\n\n    menuList1.map(item=>{\n        menu.appendChild(card(item.title, item.desc,item.image))\n    })\n\n    return menu\n}\n\nconst card = (title, text,img,alt) =>{\n    const card = document.createElement('div')\n    card.classList.add('card')\n    card.appendChild((0,_general__WEBPACK_IMPORTED_MODULE_0__.createImgElement)(img))\n    card.appendChild((0,_general__WEBPACK_IMPORTED_MODULE_0__.createTextElement)('h3',title))\n    card.appendChild((0,_general__WEBPACK_IMPORTED_MODULE_0__.createTextElement)('p', text))\n\n    return card\n}\n\n\nconst loadMenu = ()=>{\n    const main = document.getElementById('main')\n    main.innerHTML = \"\"\n    main.appendChild(createMenu())\n}\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/menuPage.js?");

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