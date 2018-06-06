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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _header = __webpack_require__(1);

var _header2 = _interopRequireDefault(_header);

var _main = __webpack_require__(2);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _header2.default)(); // import template from './template';

// template();

(0, _main2.default)();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$('.js-accordion-trigger').on('click', function () {
  $('.sp-header-nav').toggleClass('sp-header-nav--active');
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  $('.slick-box').slick({
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        infinite: true,
        dots: true,
        arrows: false,
        touchMove: true,
        variableWidth: false
      }
    }]
  });

  $('#js-speech-btn').on('click', function () {
    if (!'SpeechSynthesisUtterance' in window) {
      alert('Speech synthesis(音声合成) APIには未対応です.');
      return;
    }
    var msg = new SpeechSynthesisUtterance();
    msg.text = $('#js-speech-txt').val();
    msg.lang = 'ja-JP';
    speechSynthesis.speak(msg);
  });

  $('.speech-area__txt-change-btn').on('click', function (e) {
    e.preventDefault();
    var id = Number($(e.currentTarget).attr('id').substr(-1, 1));
    var diaryTxt = void 0;
    var diaryDate = void 0;
    switch (id) {
      case 1:
        diaryTxt = 'ふだん勉強しないのがいけないんだ';
        diaryDate = '『テストにアンキパン』より';
        break;
      case 2:
        diaryTxt = 'まずい、雲行きがあやしい';
        diaryDate = '『町内突破大作戦』より';
        break;
      case 3:
        diaryTxt = 'いくらなんでも先生に迷惑だ';
        diaryDate = '『本人ビデオ』より';
        break;
      case 4:
        diaryTxt = 'けちくさいこというな';
        diaryDate = '『メカ・メーカー』より';
        break;
      case 5:
        diaryTxt = '二階でやったから怒られたんだ。三階でやろう';
        diaryDate = '『四次元たてましブロック』より';
        break;
      case 6:
        diaryTxt = '風が爽やかだよ。窓を開けようよ';
        diaryDate = '『音のない世界』より';
        break;
    }
    $('#js-speech-number').val(diaryDate);
    $('#js-speech-txt').val(diaryTxt);
  });
})();

/***/ })
/******/ ]);