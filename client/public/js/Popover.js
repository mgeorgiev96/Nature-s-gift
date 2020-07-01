"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Popover() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "popover_message"
  }, "Email has been sent.", /*#__PURE__*/_react.default.createElement("br", null), "One of our staff members will contact you in the next 3 days.");
}

var _default = Popover;
exports.default = _default;