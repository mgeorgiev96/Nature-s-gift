"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("react-bootstrap/Card"));

var _Toast = _interopRequireDefault(require("./Toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HoneyItems() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "shop_aloe"
  }, /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/honey1.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: 'Organic Honey',
    info: 'High quality organic honey - 750g.',
    price: '10$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/honey2.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: 'Organic Lavender Honey',
    info: 'High quality organic lavender honey - 750g.',
    price: '12$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/honey3.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: 'Natural Peanut Butter',
    info: 'Homemade peanut butter - 500g.',
    price: '8$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/honey4.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: "Granola Bars",
    info: 'Granola bars with almonds - 6 x 40g.',
    price: '6$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/honey5.webp"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: 'Homemade Oatmeal Cookies',
    info: 'Soft and healthy oatmeal cookies - 6 x 35g.',
    price: '6$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/honey6.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: "Homemade Soy Milk",
    info: 'A healthy and delicious drink - 1L.',
    price: '6$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/honey7.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: 'Walnut Shortbreads',
    info: 'Homemade walnut short breads - 6 x 35g.',
    price: '4$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/honey8.webp"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: "Italian Pear Almond Cake",
    info: 'Delicious homemade pear and almond cake - 250g.',
    price: '5$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/honey9.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: "Homemade Rice Milk",
    info: 'A healthy and delicious drink - 1L.',
    price: '10$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/honey10.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: 'Dried Fruits',
    info: 'Variation of dried fruits(can be mixed) - 1kg.',
    price: '22$'
  })), /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_Card.default.Img, {
    variant: "top",
    src: "./images/honey11.webp"
  }), /*#__PURE__*/_react.default.createElement(_Toast.default, {
    name: "Pecan Energy Bites",
    info: 'Start your day with one of these amazing pecan bites - 6 x 30g.',
    price: '9$'
  })));
}

var _default = HoneyItems;
exports.default = _default;