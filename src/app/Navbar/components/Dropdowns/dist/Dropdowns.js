"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Dropdowns.sass");
var Dropdowns = function (_a) {
    var dropMenu = _a.dropMenu;
    return (react_1["default"].createElement("ul", { className: "dropdown-menu " + (dropMenu ? 'is-active' : '') },
        react_1["default"].createElement("li", { className: "dropdown-menu__item" },
            react_1["default"].createElement("a", { href: "#", className: "dropdown-menu__link" }, "Private Session")),
        react_1["default"].createElement("li", { className: "dropdown-menu__item" },
            react_1["default"].createElement("a", { href: "#", className: "dropdown-menu__link" }, "Account")),
        react_1["default"].createElement("li", { className: "dropdown-menu__item" },
            react_1["default"].createElement("a", { href: "#", className: "dropdown-menu__link" }, "Settings")),
        react_1["default"].createElement("li", { className: "dropdown-menu__item" },
            react_1["default"].createElement("a", { href: "#", className: "dropdown-menu__link" }, "Log Out"))));
};
exports["default"] = Dropdowns;
