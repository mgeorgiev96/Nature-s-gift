"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Container = _interopRequireDefault(require("react-bootstrap/Container"));

var _NavBar = _interopRequireDefault(require("./NavBar"));

var _Shop = _interopRequireDefault(require("./Shop"));

var _Cart = _interopRequireDefault(require("./Cart"));

var _PurchaseH = _interopRequireDefault(require("./PurchaseH"));

var _Footer = _interopRequireDefault(require("./Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Profile() {
  return /*#__PURE__*/_react.default.createElement(_Container.default, {
    fluid: true
  }, /*#__PURE__*/_react.default.createElement(_NavBar.default, null), /*#__PURE__*/_react.default.createElement(_Cart.default, null), /*#__PURE__*/_react.default.createElement(_PurchaseH.default, null), /*#__PURE__*/_react.default.createElement(_Shop.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
}

var _default = Profile;
exports.default = _default;