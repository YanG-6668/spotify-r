"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Playing.sass");
var bs_1 = require("react-icons/bs");
var Playing = function () {
    return (react_1["default"].createElement("div", { className: "playing" },
        react_1["default"].createElement("div", { className: "playing__img" },
            react_1["default"].createElement("img", { src: "./playing.jpg", alt: "Album" })),
        react_1["default"].createElement("div", { className: "playing__song" },
            react_1["default"].createElement("a", { href: "#", className: "playing__song-name" }, "Some Type of Love"),
            react_1["default"].createElement("a", { href: "#", className: "playing__song-artist" }, "Charlie Puth")),
        react_1["default"].createElement("a", { href: "#", className: "playing__add" },
            react_1["default"].createElement(bs_1.BsCheck, null))));
};
exports["default"] = Playing;
