"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Context = require("./Context");

var _reactRouterDom = require("react-router-dom");

var _Profile = _interopRequireDefault(require("./Profile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  console.log(process.env);
  return /*#__PURE__*/_react.default.createElement(_Context.ShopProvider, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/profile",
    component: _Profile.default
  })));
}

var _default = App;
exports.default = _default;