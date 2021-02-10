"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MainSong_1 = require("./MainSong");
var Songs_1 = require("./Songs");
require("./Albums.sass");
var fa_1 = require("react-icons/fa");
var Albums = function (_a) {
    var songsData = _a.songsData;
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement("div", { className: "overview__albums-title" },
            react_1["default"].createElement("span", { className: "section-title" }, "albums"),
            react_1["default"].createElement("div", { className: "view-type" },
                react_1["default"].createElement("span", { className: "view-type__item is-active" },
                    react_1["default"].createElement(fa_1.FaListUl, null)),
                react_1["default"].createElement("span", { className: "view-type__item" },
                    react_1["default"].createElement(fa_1.FaThLarge, null)))),
        react_1["default"].createElement("div", { className: "album" },
            react_1["default"].createElement(MainSong_1["default"], null),
            react_1["default"].createElement("div", { className: "album__tracks" },
                react_1["default"].createElement(Songs_1["default"], { songsData: songsData })))));
};
exports["default"] = Albums;
