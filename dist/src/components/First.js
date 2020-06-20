"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var First = function First(_ref) {
  var desc = _ref.desc;
  return /*#__PURE__*/_react.default.createElement("h1", null, desc);
};

First.propTypes = {
  desc: _propTypes.default.string
};
var _default = First;
exports.default = _default;

//# sourceMappingURL=First.js.map