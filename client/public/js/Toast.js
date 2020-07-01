"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Toast = _interopRequireDefault(require("react-bootstrap/Toast"));

var _Button = _interopRequireDefault(require("react-bootstrap/Button"));

var _Row = _interopRequireDefault(require("react-bootstrap/Row"));

var _Col = _interopRequireDefault(require("react-bootstrap/Col"));

var _Context = require("./Context");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Pop(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showA = _useState2[0],
      setShowA = _useState2[1];

  var _useContext = (0, _react.useContext)(_Context.ShopContext),
      _useContext2 = _slicedToArray(_useContext, 6),
      total = _useContext2[0],
      setTotal = _useContext2[1],
      index = _useContext2[2],
      handleIndex = _useContext2[3],
      user = _useContext2[4],
      setUser = _useContext2[5];

  var saveFav = function saveFav(e) {
    var target = e.target;

    if (target.classList.contains('fav-saved')) {
      target.classList.remove('fav-saved');

      _axios.default.post('/api/favourite/remove', {
        name: target.classList[3],
        user: user.username
      });
    } else {
      target.classList.add('fav-saved');

      _axios.default.post('/api/favourite', {
        name: target.classList[3],
        user: user.username
      });
    }
  };

  var toggleShowA = function toggleShowA(e) {
    var img = e.target.parentElement.parentElement.children[0];

    if (showA === false) {
      img.classList.add('active_img');
    } else {
      img.classList.remove('active_img');
    }

    setShowA(!showA);
  };

  var buyItem = function buyItem(e) {
    var cartBody = document.querySelector('.modal-body');

    if (e.target.className === 'fa fa-cart-plus') {
      var cart = document.querySelector('.cart_items');
      var name = e.target.parentElement.parentElement.children[0];
      var qty = e.target.parentElement.children[1].children[1];
      var itemImg = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].src;
      var img = document.createElement('img');
      var li = document.createElement('li');

      if (qty.value !== '' && qty.value !== '0') {
        var price = parseInt(qty.value) * parseInt(e.target.parentElement.children[0].className);
        var item = document.querySelector('.add_item');
        setTotal(total + price);
        img.src = itemImg;
        li.appendChild(img);
        li.innerHTML += "".concat(name.innerHTML, " - x").concat(qty.value, " - ").concat(price, "$ <i class=\"fa fa-close\"></i>");
        li.className = price;
        cart.appendChild(li);
        qty.value = '';
      }
    }
  };

  return /*#__PURE__*/_react.default.createElement(_Row.default, {
    xs: 12
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fav-icon fa fa-heart ".concat(props.name.replace(/[" "]/g, '-')),
    onClick: saveFav
  }), /*#__PURE__*/_react.default.createElement(_Col.default, {
    className: "info_item"
  }, /*#__PURE__*/_react.default.createElement(_Toast.default, {
    show: showA,
    onClose: toggleShowA
  }, /*#__PURE__*/_react.default.createElement(_Toast.default.Header, null, /*#__PURE__*/_react.default.createElement("strong", {
    className: "mr-auto"
  }, props.name)), /*#__PURE__*/_react.default.createElement(_Toast.default.Body, null, /*#__PURE__*/_react.default.createElement("p", {
    className: props.price
  }, props.info), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "QTY - "), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    min: "1"
  })), /*#__PURE__*/_react.default.createElement("h6", null, "Price Per Unit - ", props.price), /*#__PURE__*/_react.default.createElement("i", {
    onClick: buyItem,
    className: "fa fa-cart-plus"
  })))), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-info-circle",
    onClick: toggleShowA
  }));
}

var _default = Pop;
exports.default = _default;