"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Context = require("./Context");

var _reactStripeCheckout = _interopRequireDefault(require("react-stripe-checkout"));

var _axios = _interopRequireDefault(require("axios"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Cart() {
  var _useContext = (0, _react.useContext)(_Context.ShopContext),
      _useContext2 = _slicedToArray(_useContext, 6),
      total = _useContext2[0],
      setTotal = _useContext2[1],
      index = _useContext2[2],
      handleIndex = _useContext2[3],
      user = _useContext2[4],
      setUser = _useContext2[5];

  (0, _react.useEffect)(function () {
    var stripeBtn = document.querySelector('.stripe_button');
    var btn = document.createElement('p');
    btn.style.backgroundImage = 'url("./images/moneyo.png")';
    stripeBtn.appendChild(btn);
    stripeBtn.children[0].style.display = 'none';
  }, []);

  var hideCart = function hideCart() {
    var cart = document.querySelector('.cart_container');
    cart.style.display = 'none';
  };

  var removeItem = function removeItem(e) {
    var target = e.target;

    if (target.className === 'fa fa-close') {
      var price = parseInt(target.parentElement.className);
      target.parentElement.parentElement.removeChild(target.parentElement);
      setTotal(total - price);
    }
  };

  var handleToken = function handleToken(token) {
    var cart = document.querySelector('.cart_items');
    var date = new Date();

    _axios.default.post('/api/purchase', {
      username: user.username,
      value: total,
      date: (0, _moment.default)(date).format("LLLL")
    });

    cart.innerHTML = '';
    setTotal(0);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "cart_container"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactStripeCheckout.default, {
    className: "stripe_button",
    token: handleToken,
    stripeKey: "pk_test_51GxXTwJWnlXzpGEmHhKz3nGdCrzRjY8QE4fuYMo6CNYAuJXIQCDMy2LXCAVyTbME9zrYK60HxAjBEaE9ulvYSRJ700jdk4z5x2",
    billingAddress: true,
    shippingAddress: true,
    description: "Nature's Gift"
  }), /*#__PURE__*/_react.default.createElement("h5", null, "Cart Total - ", total, "$ "), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-close",
    onClick: hideCart
  })), /*#__PURE__*/_react.default.createElement("ul", {
    className: "cart_items",
    onClick: removeItem
  }));
}

var _default = Cart;
exports.default = _default;