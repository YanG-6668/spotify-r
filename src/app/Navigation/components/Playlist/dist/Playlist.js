"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Playlist.sass");
var bs_1 = require("react-icons/bs");
var Playlist = function () {
    return (react_1["default"].createElement("div", { className: "playlist" },
        react_1["default"].createElement("a", { href: "#", className: "playlist__link" },
            react_1["default"].createElement(bs_1.BsPlusCircle, null),
            react_1["default"].createElement("span", null, "New Playlist"))));
};
exports["default"] = Playlist;
