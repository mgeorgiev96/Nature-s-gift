"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Carousel = _interopRequireDefault(require("react-bootstrap/Carousel"));

var _Context = require("./Context");

var _ShopItems = _interopRequireDefault(require("./ShopItems"));

var _HoneyItems = _interopRequireDefault(require("./HoneyItems"));

var _DetoxItems = _interopRequireDefault(require("./DetoxItems"));

var _SkincareItems = _interopRequireDefault(require("./SkincareItems"));

var _SuppItems = _interopRequireDefault(require("./SuppItems"));

var _Jumbotron = _interopRequireDefault(require("react-bootstrap/Jumbotron"));

var _Button = _interopRequireDefault(require("react-bootstrap/Button"));

var _Email = _interopRequireDefault(require("./Email"));

var _Popover = _interopRequireDefault(require("./Popover"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Shop() {
  var _useContext = (0, _react.useContext)(_Context.ShopContext),
      _useContext2 = _slicedToArray(_useContext, 6),
      total = _useContext2[0],
      setTotal = _useContext2[1],
      index = _useContext2[2],
      handleIndex = _useContext2[3],
      user = _useContext2[4],
      setUser = _useContext2[5];

  var handleNextPrev = function handleNextPrev(e) {
    if (e.target.className === "carousel-control-next-icon") {
      if (index === 5) {
        handleIndex(0);
      } else {
        handleIndex(index + 1);
      }
    }

    if (e.target.className === "carousel-control-prev-icon") {
      if (index === 0) {
        handleIndex(5);
      } else {
        handleIndex(index - 1);
      }
    }
  };

  return /*#__PURE__*/_react.default.createElement(_Carousel.default, {
    activeIndex: index,
    onClick: handleNextPrev
  }, /*#__PURE__*/_react.default.createElement(_Carousel.default.Item, {
    className: "shop_window_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title_text"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Aloe Vera Products")), /*#__PURE__*/_react.default.createElement("div", {
    className: "background_image background_aloe"
  }, /*#__PURE__*/_react.default.createElement(_ShopItems.default, null))), /*#__PURE__*/_react.default.createElement(_Carousel.default.Item, {
    className: "shop_window_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title_text"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Natural Products")), /*#__PURE__*/_react.default.createElement("div", {
    className: "background_image background_honey"
  }, /*#__PURE__*/_react.default.createElement(_HoneyItems.default, null))), /*#__PURE__*/_react.default.createElement(_Carousel.default.Item, {
    className: "shop_window_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title_text"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Detox Products")), /*#__PURE__*/_react.default.createElement("div", {
    className: "background_image background_detox"
  }, /*#__PURE__*/_react.default.createElement(_DetoxItems.default, null))), /*#__PURE__*/_react.default.createElement(_Carousel.default.Item, {
    className: "shop_window_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title_text"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Skincare Products")), /*#__PURE__*/_react.default.createElement("div", {
    className: "background_image background_skincare"
  }, /*#__PURE__*/_react.default.createElement(_SkincareItems.default, null))), /*#__PURE__*/_react.default.createElement(_Carousel.default.Item, {
    className: "shop_window_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title_text"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Supplementation")), /*#__PURE__*/_react.default.createElement("div", {
    className: "background_image background_supplement"
  }, /*#__PURE__*/_react.default.createElement(_SuppItems.default, null))), /*#__PURE__*/_react.default.createElement(_Carousel.default.Item, {
    className: "shop_window_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title_text"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Nutrition Plan")), /*#__PURE__*/_react.default.createElement("div", {
    className: "background_image background_nutrition"
  }, /*#__PURE__*/_react.default.createElement(_Jumbotron.default, null, /*#__PURE__*/_react.default.createElement(_Popover.default, null), /*#__PURE__*/_react.default.createElement("h1", null, "Hello, ", user.name, "!"), /*#__PURE__*/_react.default.createElement("h4", null, "Are you in need of some help organizing your training routines and diet?"), /*#__PURE__*/_react.default.createElement("p", null, "Email us below with your personal details and we will get back to you, as soon as possible!"), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_Email.default, null))))));
}

var _default = Shop;
exports.default = _default;