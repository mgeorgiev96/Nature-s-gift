"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("react-bootstrap/Card"));

var _Toast = _interopRequireDefault(require("./Toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ShopItems() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "shop_aloe"
  }, /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/aloe1.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: 'Aloe Vera Soap',
    info: 'High quality aloe vera soap.',
    price: '3$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/aloe2.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: 'Aloe Gel',
    info: 'Natural aloe vera gel for skin and hair.',
    price: '5$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/aloe3.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: 'Body Scrub',
    info: 'Natural aloe vera body scrub  - 250g.',
    price: '25$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/aloe4.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: 'Drinking Gel',
    info: 'Aloe Vera based drink - 500ml.',
    price: '10$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/aloe5.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: 'Aloe Vera Toothpaste',
    info: 'Natural aloe vera toothpaste - 75g',
    price: '7$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/aloe6.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: 'Hand Cream',
    info: 'Aloe Vera hand cream - 100ml.',
    price: '5$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/aloe7.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: 'Aloe Vera Jelly Bites',
    info: 'Oranic aloe vera jelly bites(20x35g).',
    price: '13$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/aloe8.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: 'Dried Aloe Vera',
    info: 'Oranic dried aloe vera pieces(20x35g).',
    price: '10$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/aloe9.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: 'Aloe Vera Detox Drink',
    info: 'Aloe Vera and lemon detox drink - 500ml.',
    price: '10$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/aloe10.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: 'Aloe Vera Jasmine Soap',
    info: 'Aloe Vera and jasmine soap.',
    price: '5$'
  })));
}

var _default = ShopItems;
exports.default = _default;