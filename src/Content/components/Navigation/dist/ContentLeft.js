"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./ContentLeft.sass");
var Navigation_1 = require("./components/Navigation");
var Playlist_1 = require("./components/Playlist");
var Playing_1 = require("./components/Playing");
var ContentLeft = function () {
    return (react_1["default"].createElement("div", { className: "content-left" },
        react_1["default"].createElement(Navigation_1["default"], null),
        react_1["default"].createElement(Playlist_1["default"], null),
        react_1["default"].createElement(Playing_1["default"], null)));
};
exports["default"] = ContentLeft;
