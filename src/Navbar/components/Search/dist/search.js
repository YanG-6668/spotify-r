"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Search.sass");
var ri_1 = require("react-icons/ri");
var fa_1 = require("react-icons/fa");
var Search = function (_a) {
    var changeHandler = _a.changeHandler, keyPressHandler = _a.keyPressHandler, title = _a.title;
    return (react_1["default"].createElement("div", { className: "search" },
        react_1["default"].createElement("div", { className: "search__flows" },
            react_1["default"].createElement("a", { href: "#", type: "button", className: "search__flows-left is-active" },
                react_1["default"].createElement(ri_1.RiArrowLeftSLine, null)),
            react_1["default"].createElement("a", { href: "#", type: "button", className: "search__flows-right" },
                react_1["default"].createElement(ri_1.RiArrowRightSLine, null))),
        react_1["default"].createElement("form", { action: "", className: "search__form" },
            react_1["default"].createElement("span", { className: "search__form-icon" },
                react_1["default"].createElement(fa_1.FaSearch, null)),
            react_1["default"].createElement("input", { type: "text", onChange: changeHandler, value: title, className: "search__form-input", placeholder: "Search", onKeyPress: keyPressHandler }))));
};
exports["default"] = Search;
