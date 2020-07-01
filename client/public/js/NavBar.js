"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Navbar = _interopRequireDefault(require("react-bootstrap/Navbar"));

var _Nav = _interopRequireDefault(require("react-bootstrap/Nav"));

var _NavDropdown = _interopRequireDefault(require("react-bootstrap/NavDropdown"));

var _Cart = _interopRequireDefault(require("./Cart"));

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

function NavBar() {
  var showCart = function showCart() {
    var cart = document.querySelector('.cart_container');
    cart.style.display = "block";
  };

  var displayPurchaseH = function displayPurchaseH() {
    var container = document.querySelector('.purchase_container');

    if (container.style.display === "none") {
      container.style.display = 'block';
    } else {
      container.style.display = 'none';
    }
  };

  var _useContext = (0, _react.useContext)(_Context.ShopContext),
      _useContext2 = _slicedToArray(_useContext, 6),
      total = _useContext2[0],
      setTotal = _useContext2[1],
      index = _useContext2[2],
      handleIndex = _useContext2[3],
      user = _useContext2[4],
      setUser = _useContext2[5];

  (0, _react.useEffect)(function () {
    _axios.default.get('/api/info').then(function (user) {
      setUser(user.data);
      var saved = document.querySelectorAll('.fav-icon');

      for (var i = 0; i < saved.length; i++) {
        if (user.data.favourite.includes(saved[i].classList[3])) {
          saved[i].classList.add('fav-saved');
        }
      }
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement(_Navbar.default, {
    collapseOnSelect: true,
    expand: "lg"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default.Brand, null, /*#__PURE__*/_react.default.createElement("img", {
    className: "profile_logo",
    src: "./images/logo.jpg"
  })), /*#__PURE__*/_react.default.createElement(_Navbar.default.Toggle, {
    "aria-controls": "responsive-navbar-nav"
  }), /*#__PURE__*/_react.default.createElement(_Navbar.default.Collapse, {
    id: "responsive-navbar-nav"
  }, /*#__PURE__*/_react.default.createElement(_Nav.default, {
    className: "mr-auto"
  }, /*#__PURE__*/_react.default.createElement(_NavDropdown.default, {
    title: "",
    id: "collasible-nav-dropdown"
  }, /*#__PURE__*/_react.default.createElement(_NavDropdown.default.Item, {
    onClick: showCart,
    className: "cart_button"
  }, "View Cart"), /*#__PURE__*/_react.default.createElement(_NavDropdown.default.Item, {
    onClick: function onClick() {
      return handleIndex(0);
    }
  }, "Aloe Vera Products"), /*#__PURE__*/_react.default.createElement(_NavDropdown.default.Item, {
    onClick: function onClick() {
      return handleIndex(1);
    }
  }, "Natural Products"), /*#__PURE__*/_react.default.createElement(_NavDropdown.default.Item, {
    onClick: function onClick() {
      return handleIndex(2);
    }
  }, "Detox Prodcuts"), /*#__PURE__*/_react.default.createElement(_NavDropdown.default.Item, {
    onClick: function onClick() {
      return handleIndex(3);
    }
  }, "Skincare Products"), /*#__PURE__*/_react.default.createElement(_NavDropdown.default.Item, {
    onClick: function onClick() {
      return handleIndex(4);
    }
  }, "Supplementation"), /*#__PURE__*/_react.default.createElement(_NavDropdown.default.Item, {
    onClick: function onClick() {
      return handleIndex(5);
    }
  }, "Nutrition Plan"), /*#__PURE__*/_react.default.createElement(_NavDropdown.default.Divider, null), /*#__PURE__*/_react.default.createElement(_NavDropdown.default.Item, {
    href: "/api/logout"
  }, "Logout")), /*#__PURE__*/_react.default.createElement("img", {
    onClick: displayPurchaseH,
    className: "pay-history",
    src: "https://img.icons8.com/color/48/000000/payment-history.png"
  }))));
}

var _default = NavBar;
exports.default = _default;