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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _pages_landingHero_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/landingHero.js */ \"./src/pages/landingHero.js\");\n/* harmony import */ var _templates_modalTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @templates/modalTemplate.js */ \"./src/templates/modalTemplate.js\");\n/* harmony import */ var _styles_sass_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/sass/styles.scss */ \"./src/styles/sass/styles.scss\");\n\n\n\n\nvar tablet_media = matchMedia('screen and (min-width: 440px) and (max-width: 999px)');\nvar desktop_media = matchMedia('screen and (min-width: 1000px)');\n\nvar autoChangeSize = function autoChangeSize(mediaquery) {\n  if (mediaquery.media === 'screen and (min-width: 440px) and (max-width: 999px)') {\n    if (mediaquery.matches) {\n      __webpack_require__.e(/*! import() */ \"src_styles_sass_styles-tablet_scss\").then(__webpack_require__.bind(__webpack_require__, /*! @styles/sass/styles-tablet.scss */ \"./src/styles/sass/styles-tablet.scss\"));\n    }\n  } else if (mediaquery.media === 'screen and (min-width: 1000px)') {\n    if (mediaquery.matches) {\n      __webpack_require__.e(/*! import() */ \"src_styles_sass_styles-tablet_scss\").then(__webpack_require__.bind(__webpack_require__, /*! @styles/sass/styles-tablet.scss */ \"./src/styles/sass/styles-tablet.scss\"));\n      __webpack_require__.e(/*! import() */ \"src_styles_sass_styles-desktop_scss\").then(__webpack_require__.bind(__webpack_require__, /*! @styles/sass/styles-desktop.scss */ \"./src/styles/sass/styles-desktop.scss\"));\n    }\n  }\n};\n\ntablet_media.addListener(autoChangeSize);\ndesktop_media.addListener(autoChangeSize);\nautoChangeSize(tablet_media);\nautoChangeSize(desktop_media);\n\nfunction landingLoad() {\n  var page = document.querySelector('.page');\n  page.innerHTML = \"\".concat((0,_pages_landingHero_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  console.log('ready');\n  landingReady(page);\n}\n\nwindow.addEventListener('DOMContentLoaded', landingLoad);\n\nfunction landingReady(page) {\n  var pageReady = page;\n  var footer = document.querySelector('.footer');\n  var nodeList_img_footer = footer.querySelectorAll('.menu_designs__image');\n\n  var arrayFooter_img = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(nodeList_img_footer);\n\n  var openModal = function openModal(ev) {\n    var modal = document.createElement('section');\n    modal.className = 'modal';\n    modal.innerHTML = (0,_templates_modalTemplate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ev.target.dataset.set);\n    pageReady.append(modal);\n    /* Navegación por teclado dentro del modal (Accesibilidad) */\n\n    var labels_modal = modal.querySelectorAll('label');\n\n    var array_labels = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(labels_modal);\n\n    array_labels.forEach(function (element) {\n      element.addEventListener('focus', function (ev) {\n        var inputs_modal = modal.querySelectorAll('input');\n\n        var array_inputs = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(inputs_modal);\n\n        array_inputs.forEach(function (element) {\n          if (element.id === ev.path[0].htmlFor) {\n            element.checked = true;\n          }\n        });\n      });\n    });\n    /* Ponerle el foco al modal cuando se abre */\n\n    modal.querySelector('.modal__container').focus();\n    /* Eliminar el modal */\n\n    var closeModal = function closeModal() {\n      modal.remove();\n      footer.querySelector(\".\".concat(ev.target.className)).focus();\n    };\n    /* Eventos para eliminar el modal, boton ESC, Click fuera del modal, click en botón cerrar y\n    botón shift para evitar que valla atrás sin cerrar el modal*/\n\n\n    var btn_cerrar_modal = modal.querySelector('.modal__btnclose');\n    btn_cerrar_modal.addEventListener('click', closeModal);\n    btn_cerrar_modal.addEventListener('keydown', function (ev) {\n      if (ev.keyCode !== 9 && ev.keyCode !== 16)\n        /* Tab or Shift */\n        {\n          closeModal();\n        }\n    });\n    modal.addEventListener('click', function (ev) {\n      if (ev.target.className === 'modal') {\n        closeModal();\n      }\n    });\n    var shift_apretado = 0;\n    modal.addEventListener('keydown', function (ev) {\n      if (ev.keyCode === 16) {\n        shift_apretado = 1;\n      }\n    });\n    modal.addEventListener('keyup', function (ev) {\n      if (ev.keyCode === 16) {\n        shift_apretado = 0;\n      }\n    });\n    modal.addEventListener('keydown', function (ev) {\n      if (ev.keyCode === 27)\n        /* ESC */\n        {\n          closeModal();\n        }\n\n      if (ev.keyCode === 16 && ev.target.className === 'modal__container') {\n        closeModal();\n      }\n\n      if (ev.keyCode === 9 && shift_apretado === 1 && ev.target.className === 'modal__container') {\n        closeModal();\n      }\n    });\n  };\n\n  arrayFooter_img.forEach(function (element) {\n    element.addEventListener('click', openModal);\n    element.addEventListener('keydown', function (ev) {\n      if (ev.keyCode === 32 || ev.keyCode === 13) {\n        openModal(ev);\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://cssanima/./src/index.js?");

/***/ }),

/***/ "./src/pages/landingHero.js":
/*!**********************************!*\
  !*** ./src/pages/landingHero.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates_loaderTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @templates/loaderTemplate.js */ \"./src/templates/loaderTemplate.js\");\n/* harmony import */ var _templates_headerTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @templates/headerTemplate.js */ \"./src/templates/headerTemplate.js\");\n/* harmony import */ var _templates_asideTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @templates/asideTemplate.js */ \"./src/templates/asideTemplate.js\");\n/* harmony import */ var _templates_mainTemplate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @templates/mainTemplate.js */ \"./src/templates/mainTemplate.js\");\n/* harmony import */ var _templates_footerTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @templates/footerTemplate.js */ \"./src/templates/footerTemplate.js\");\n\n\n\n\n\n\nvar landingHero = function landingHero() {\n  var view = \"\".concat((0,_templates_loaderTemplate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()).concat((0,_templates_headerTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()).concat((0,_templates_asideTemplate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()).concat((0,_templates_mainTemplate_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()).concat((0,_templates_footerTemplate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (landingHero);\n\n//# sourceURL=webpack://cssanima/./src/pages/landingHero.js?");

/***/ }),

/***/ "./src/templates/asideTemplate.js":
/*!****************************************!*\
  !*** ./src/templates/asideTemplate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_super_man_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @images/super-man.webp */ \"./src/assets/images/super-man.webp\");\n\n\nvar asideTemplate = function asideTemplate() {\n  var view = \"\\n        <aside class=\\\"aside\\\">\\n            <p class=\\\"aside__name\\\" aria-hidden=\\\"true\\\">Superman</p>\\n            <img class=\\\"aside__img\\\" src=\\\"\".concat(_images_super_man_webp__WEBPACK_IMPORTED_MODULE_0__, \"\\\" alt=\\\"Superman Lego\\\" aria-label=\\\"Imagen del Superman Lego, con su capa roja y mirada desafiante.\\\">\\n            <div class=\\\"aside__back\\\"></div>\\n        </aside>\\n    \");\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (asideTemplate);\n\n//# sourceURL=webpack://cssanima/./src/templates/asideTemplate.js?");

/***/ }),

/***/ "./src/templates/footerTemplate.js":
/*!*****************************************!*\
  !*** ./src/templates/footerTemplate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_spiderman_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @images/spiderman.webp */ \"./src/assets/images/spiderman.webp\");\n/* harmony import */ var _images_robin_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @images/robin.webp */ \"./src/assets/images/robin.webp\");\n/* harmony import */ var _images_batman_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @images/batman.webp */ \"./src/assets/images/batman.webp\");\n\n\n\n\nvar footerTemplate = function footerTemplate() {\n  var view = \"\\n    <footer class=\\\"footer\\\">\\n            <nav class=\\\"footer__menu\\\">\\n                <ul class=\\\"menu menu_designs\\\">\\n                    <li class=\\\"menu_designs__li\\\">\\n                        <img class=\\\"menu_designs__image\\\" data-set=\\\"spiderman\\\" src=\\\"\".concat(_images_spiderman_webp__WEBPACK_IMPORTED_MODULE_0__, \"\\\" tabindex=\\\"0\\\" alt=\\\"Imagen de Spiderman Lego\\\" aria-label=\\\"Imagen del Spiderman Lego, presione para abrir el modal donde se muestran los dise\\xF1os de Spiderman.\\\">\\n                    </li>\\n                    <li class=\\\"menu_designs__li\\\">\\n                        <img class=\\\"menu_designs__image\\\" data-set=\\\"robin\\\" src=\\\"\").concat(_images_robin_webp__WEBPACK_IMPORTED_MODULE_1__, \"\\\" tabindex=\\\"0\\\" alt=\\\"Imagen de Robin Lego\\\" aria-label=\\\"Imagen del Robin Lego, presione para abrir el modal donde se muestran los dise\\xF1os de Robin.\\\">\\n                    </li>\\n                    <li class=\\\"menu_designs__li\\\">\\n                        <img class=\\\"menu_designs__image\\\" data-set=\\\"batman\\\" src=\\\"\").concat(_images_batman_webp__WEBPACK_IMPORTED_MODULE_2__, \"\\\" tabindex=\\\"0\\\" alt=\\\"Imagen de Batman Lego\\\" aria-label=\\\"Imagen del Batman Lego, presione para abrir el modal donde se muestran los dise\\xF1os de Batman.\\\">\\n                    </li>\\n                </ul>\\n            </nav>\\n        </footer>\\n    \");\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerTemplate);\n\n//# sourceURL=webpack://cssanima/./src/templates/footerTemplate.js?");

/***/ }),

/***/ "./src/templates/headerTemplate.js":
/*!*****************************************!*\
  !*** ./src/templates/headerTemplate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_lego_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @images/lego.webp */ \"./src/assets/images/lego.webp\");\n\n\nvar headerTemplate = function headerTemplate() {\n  var view = \"\\n        <header class=\\\"header\\\">\\n                <img class=\\\"header__logo\\\" src=\\\"\".concat(_images_lego_webp__WEBPACK_IMPORTED_MODULE_0__, \"\\\" alt=\\\"Logo de la marca Lego.\\\" aria-label=\\\"Logo de la marca de juguetes Lego.\\\">\\n                <nav class=\\\"header__menu\\\" aria-label=\\\"Men\\xFA de navegaci\\xF3n de la p\\xE1gina.\\\">\\n                    <ul class=\\\"menu menu_lego\\\">\\n                        <li class=\\\"menu_lego__li\\\">\\n                            <a class=\\\"menu_lego__link\\\" href=\\\"#\\\" aria-label=\\\"Ir a la p\\xE1gina de articulos exclusivos.\\\">Exclusivos</a>\\n                        </li>\\n                        <li class=\\\"menu_lego__li\\\">\\n                            <a class=\\\"menu_lego__link\\\" href=\\\"#\\\" aria-label=\\\"Ir a la p\\xE1gina de articulos nuevos.\\\">Nuevos</a>\\n                        </li>\\n                        <li class=\\\"menu_lego__li\\\">\\n                            <a class=\\\"menu_lego__link\\\" href=\\\"#\\\" aria-label=\\\"Ir a la p\\xE1gina de tarjetas de regalo.\\\">Tarjetas</a>\\n                        </li>\\n                        <li class=\\\"menu_lego__li\\\">\\n                            <a class=\\\"menu_lego__link\\\" href=\\\"#\\\" aria-label=\\\"Ir a la p\\xE1gina que muestra otras tiendas donde puedo comprar.\\\">Tiendas</a>\\n                        </li>\\n                    </ul>\\n                </nav>\\n        </header>\\n    \");\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerTemplate);\n\n//# sourceURL=webpack://cssanima/./src/templates/headerTemplate.js?");

/***/ }),

/***/ "./src/templates/loaderTemplate.js":
/*!*****************************************!*\
  !*** ./src/templates/loaderTemplate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar loaderTemplate = function loaderTemplate() {\n  var view = \"\\n        <section class=\\\"loader\\\" aria-hidden=\\\"true\\\" tabindex=\\\"-1\\\">\\n            <div></div>\\n            <div></div>\\n            <div></div>\\n        </section>\\n    \";\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loaderTemplate);\n\n//# sourceURL=webpack://cssanima/./src/templates/loaderTemplate.js?");

/***/ }),

/***/ "./src/templates/mainTemplate.js":
/*!***************************************!*\
  !*** ./src/templates/mainTemplate.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar mainTemplate = function mainTemplate() {\n  var view = \"\\n        <main class=\\\"main\\\">\\n            <article class=\\\"article\\\">\\n                <p class=\\\"article__subt\\\">Encuentra tu</p>\\n                <h2 class=\\\"article__title\\\">S\\xFAper H\\xE9roe!</h2>\\n                <p class=\\\"article__resum\\\">En esta p\\xE1gina podr\\xE1s encontrar dise\\xF1os impresionantes de tus personajes favoritos en juguetes Lego. Selecciona los que m\\xE1s te gusten y te ayudamos a conseguirlos.<br > <strong>\\xA1Tenemos dise\\xF1os impresionantes para ti!</strong></p>\\n            </article>\\n        </main>\\n    \";\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainTemplate);\n\n//# sourceURL=webpack://cssanima/./src/templates/mainTemplate.js?");

/***/ }),

/***/ "./src/templates/modalTemplate.js":
/*!****************************************!*\
  !*** ./src/templates/modalTemplate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_spiderman_spiderman1_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @images/spiderman/spiderman1.webp */ \"./src/assets/images/spiderman/spiderman1.webp\");\n/* harmony import */ var _images_spiderman_spiderman2_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @images/spiderman/spiderman2.webp */ \"./src/assets/images/spiderman/spiderman2.webp\");\n/* harmony import */ var _images_spiderman_spiderman3_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @images/spiderman/spiderman3.webp */ \"./src/assets/images/spiderman/spiderman3.webp\");\n/* harmony import */ var _images_robin_robin1_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @images/robin/robin1.webp */ \"./src/assets/images/robin/robin1.webp\");\n/* harmony import */ var _images_robin_robin2_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @images/robin/robin2.webp */ \"./src/assets/images/robin/robin2.webp\");\n/* harmony import */ var _images_robin_robin3_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @images/robin/robin3.webp */ \"./src/assets/images/robin/robin3.webp\");\n/* harmony import */ var _images_batman_batman1_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @images/batman/batman1.webp */ \"./src/assets/images/batman/batman1.webp\");\n/* harmony import */ var _images_batman_batman2_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @images/batman/batman2.webp */ \"./src/assets/images/batman/batman2.webp\");\n/* harmony import */ var _images_batman_batman3_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @images/batman/batman3.webp */ \"./src/assets/images/batman/batman3.webp\");\n\n\n\n\n\n\n\n\n\nvar spiderman = [_images_spiderman_spiderman1_webp__WEBPACK_IMPORTED_MODULE_0__, _images_spiderman_spiderman2_webp__WEBPACK_IMPORTED_MODULE_1__, _images_spiderman_spiderman3_webp__WEBPACK_IMPORTED_MODULE_2__];\nvar robin = [_images_robin_robin1_webp__WEBPACK_IMPORTED_MODULE_3__, _images_robin_robin2_webp__WEBPACK_IMPORTED_MODULE_4__, _images_robin_robin3_webp__WEBPACK_IMPORTED_MODULE_5__];\nvar batman = [_images_batman_batman1_webp__WEBPACK_IMPORTED_MODULE_6__, _images_batman_batman2_webp__WEBPACK_IMPORTED_MODULE_7__, _images_batman_batman3_webp__WEBPACK_IMPORTED_MODULE_8__];\nvar arrayImgs = [{\n  'hero': 'spiderman',\n  'images': spiderman\n}, {\n  'hero': 'robin',\n  'images': robin\n}, {\n  'hero': 'batman',\n  'images': batman\n}];\n\nvar modalTemplate = function modalTemplate(name) {\n  var view = '';\n  arrayImgs.forEach(function (element) {\n    if (element.hero === name) {\n      view = \"\\n                <div class=\\\"modal__container\\\" tabindex=\\\"0\\\" aria-live=\\\"assertive\\\" aria-label=\\\"En este modal te mostramos los diferentes trajes para \".concat(name, \".\\\">\\n                    <button class=\\\"modal__btnclose\\\" aria-label=\\\"Bot\\xF3n para cerrar el modal.\\\">\\n                        <span class=\\\"modal__btnclose-x\\\">X</span>\\n                    </button>\\n                    <div class=\\\"modal__slider\\\">\\n                        <input class=\\\"modal__slider_input-a\\\" type=\\\"radio\\\" name=\\\"slide-1\\\" id=\\\"radio-a\\\" checked>\\n                        <input class=\\\"modal__slider_input-b\\\" type=\\\"radio\\\" name=\\\"slide-1\\\" id=\\\"radio-b\\\">\\n                        <input class=\\\"modal__slider_input-c\\\" type=\\\"radio\\\" name=\\\"slide-1\\\" id=\\\"radio-c\\\">\\n                        <div class=\\\"modal__slider_container\\\" tabindex=\\\"0\\\" aria-label=\\\"Slide con fotos de trajes para \").concat(name, \".\\\">\\n                            <label class=\\\"modal__slider_imglabel-a\\\" for=\\\"radio-a\\\" tabindex=\\\"0\\\">\\n                                <img class=\\\"modal__slider_img\\\" src=\\\"\").concat(element.images[0], \"\\\" alt=\\\"Primera imagen del traje de \").concat(name, \"\\\">\\n                            </label>\\n                            <label class=\\\"modal__slider_imglabel-b\\\" for=\\\"radio-b\\\" tabindex=\\\"0\\\">\\n                                <img class=\\\"modal__slider_img\\\" src=\\\"\").concat(element.images[1], \"\\\" alt=\\\"Segunda imagen del traje de \").concat(name, \"\\\">\\n                            </label>\\n                            <label class=\\\"modal__slider_imglabel-c\\\" for=\\\"radio-c\\\" tabindex=\\\"0\\\">\\n                                <img class=\\\"modal__slider_img\\\" src=\\\"\").concat(element.images[2], \"\\\" alt=\\\"Tercera imagen del traje de \").concat(name, \"\\\">\\n                            </label>\\n                        </div>\\n                    </div>\\n                    <button class=\\\"modal__btnbuy\\\" aria-label=\\\"Bot\\xF3n para comprar los dise\\xF1os.\\\">Lo Quiero!</button>\\n                </div>\\n            \");\n    }\n  });\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalTemplate);\n\n//# sourceURL=webpack://cssanima/./src/templates/modalTemplate.js?");

/***/ }),

/***/ "./src/styles/sass/styles.scss":
/*!*************************************!*\
  !*** ./src/styles/sass/styles.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cssanima/./src/styles/sass/styles.scss?");

/***/ }),

/***/ "./src/assets/images/batman.webp":
/*!***************************************!*\
  !*** ./src/assets/images/batman.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/batman.webp\";\n\n//# sourceURL=webpack://cssanima/./src/assets/images/batman.webp?");

/***/ }),

/***/ "./src/assets/images/batman/batman1.webp":
/*!***********************************************!*\
  !*** ./src/assets/images/batman/batman1.webp ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/batman1.webp\";\n\n//# sourceURL=webpack://cssanima/./src/assets/images/batman/batman1.webp?");

/***/ }),

/***/ "./src/assets/images/batman/batman2.webp":
/*!***********************************************!*\
  !*** ./src/assets/images/batman/batman2.webp ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/batman2.webp\";\n\n//# sourceURL=webpack://cssanima/./src/assets/images/batman/batman2.webp?");

/***/ }),

/***/ "./src/assets/images/batman/batman3.webp":
/*!***********************************************!*\
  !*** ./src/assets/images/batman/batman3.webp ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/batman3.webp\";\n\n//# sourceURL=webpack://cssanima/./src/assets/images/batman/batman3.webp?");

/***/ }),

/***/ "./src/assets/images/lego.webp":
/*!*************************************!*\
  !*** ./src/assets/images/lego.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/lego.webp\";\n\n//# sourceURL=webpack://cssanima/./src/assets/images/lego.webp?");

/***/ }),

/***/ "./src/assets/images/robin.webp":
/*!**************************************!*\
  !*** ./src/assets/images/robin.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/robin.webp\";\n\n//# sourceURL=webpack://cssanima/./src/assets/images/robin.webp?");

/***/ }),

/***/ "./src/assets/images/robin/robin1.webp":
/*!*********************************************!*\
  !*** ./src/assets/images/robin/robin1.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/robin1.webp\";\n\n//# sourceURL=webpack://cssanima/./src/assets/images/robin/robin1.webp?");

/***/ }),

/***/ "./src/assets/images/robin/robin2.webp":
/*!*********************************************!*\
  !*** ./src/assets/images/robin/robin2.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/robin2.webp\";\n\n//# sourceURL=webpack://cssanima/./src/assets/images/robin/robin2.webp?");

/***/ }),

/***/ "./src/assets/images/robin/robin3.webp":
/*!*********************************************!*\
  !*** ./src/assets/images/robin/robin3.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/robin3.webp\";\n\n//# sourceURL=webpack://cssanima/./src/assets/images/robin/robin3.webp?");

/***/ }),

/***/ "./src/assets/images/spiderman.webp":
/*!******************************************!*\
  !*** ./src/assets/images/spiderman.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/spiderman.webp\";\n\n//# sourceURL=webpack://cssanima/./src/assets/images/spiderman.webp?");

/***/ }),

/***/ "./src/assets/images/spiderman/spiderman1.webp":
/*!*****************************************************!*\
  !*** ./src/assets/images/spiderman/spiderman1.webp ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/spiderman1.webp\";\n\n//# sourceURL=webpack://cssanima/./src/assets/images/spiderman/spiderman1.webp?");

/***/ }),

/***/ "./src/assets/images/spiderman/spiderman2.webp":
/*!*****************************************************!*\
  !*** ./src/assets/images/spiderman/spiderman2.webp ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/spiderman2.webp\";\n\n//# sourceURL=webpack://cssanima/./src/assets/images/spiderman/spiderman2.webp?");

/***/ }),

/***/ "./src/assets/images/spiderman/spiderman3.webp":
/*!*****************************************************!*\
  !*** ./src/assets/images/spiderman/spiderman3.webp ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/spiderman3.webp\";\n\n//# sourceURL=webpack://cssanima/./src/assets/images/spiderman/spiderman3.webp?");

/***/ }),

/***/ "./src/assets/images/super-man.webp":
/*!******************************************!*\
  !*** ./src/assets/images/super-man.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/super-man.webp\";\n\n//# sourceURL=webpack://cssanima/./src/assets/images/super-man.webp?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\n//# sourceURL=webpack://cssanima/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://cssanima/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack://cssanima/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://cssanima/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://cssanima/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://cssanima/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "cssanima:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"src_styles_sass_styles-tablet_scss":1,"src_styles_sass_styles-desktop_scss":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcssanima"] = self["webpackChunkcssanima"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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