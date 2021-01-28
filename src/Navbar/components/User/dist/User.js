"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Dropdowns_1 = require("../Dropdowns");
require("./User.sass");
var io_1 = require("react-icons/io");
var fa_1 = require("react-icons/fa");
var User = function (_a) {
    var clickHandlerMenu = _a.clickHandlerMenu, dropMenu = _a.dropMenu;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "user" },
            react_1["default"].createElement("a", { href: "#", type: "button", className: "icon-link user__notification" },
                react_1["default"].createElement(fa_1.FaBell, null)),
            react_1["default"].createElement("a", { href: "#", type: "button", className: "icon-link user__download" },
                react_1["default"].createElement(fa_1.FaDownload, null)),
            react_1["default"].createElement("div", { className: "user__author" },
                react_1["default"].createElement("img", { src: "./spotify-user.jpg", alt: "User", className: "user__author-img" }),
                react_1["default"].createElement("span", { className: "user__author-name" }, "Adam Lowenthal")),
            react_1["default"].createElement("a", { href: "#", type: "button", className: "icon-link user__menu", onClick: clickHandlerMenu },
                react_1["default"].createElement(io_1.IoIosArrowDown, null))),
        react_1["default"].createElement(Dropdowns_1["default"], { dropMenu: dropMenu })));
};
exports["default"] = User;
