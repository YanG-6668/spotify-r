"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Songs.sass");
var bs_1 = require("react-icons/bs");
var fa_1 = require("react-icons/fa");
var ri_1 = require("react-icons/ri");
var Songs = function (_a) {
    var songsData = _a.songsData;
    return (react_1["default"].createElement("div", { className: "popular-tracks" },
        react_1["default"].createElement("div", { className: "popular-tracks__heading" },
            react_1["default"].createElement("div", { className: "popular-tracks__heading-number" }, "#"),
            react_1["default"].createElement("div", { className: "popular-tracks__heading-title" }, "song"),
            react_1["default"].createElement("div", { className: "popular-tracks__heading-length" },
                react_1["default"].createElement(ri_1.RiTimerFlashLine, null)),
            react_1["default"].createElement("div", { className: "popular-tracks__heading-popularity" },
                react_1["default"].createElement(fa_1.FaThumbsUp, null))),
        songsData.map(function (song, i) { return (react_1["default"].createElement("div", { key: song.id, className: "popular-tracks__track" },
            react_1["default"].createElement("div", { className: "popular-tracks__track-number" }, i + 1),
            react_1["default"].createElement("div", { className: "popular-tracks__track-added" }, song.icon ? react_1["default"].createElement(bs_1.BsCheck, null) : react_1["default"].createElement(bs_1.BsPlus, null)),
            react_1["default"].createElement("div", { className: "popular-tracks__track-title track-width" }, song.title),
            react_1["default"].createElement("div", { className: "popular-tracks__track-explicit" }, song.explicit ? "explicit" : null),
            react_1["default"].createElement("div", { className: "popular-tracks__track-length" }, song.length),
            react_1["default"].createElement("div", { className: "popular-tracks__track-popularity" }, song.popularity ? react_1["default"].createElement(bs_1.BsArrowUpRight, null) : react_1["default"].createElement(bs_1.BsArrowDownRight, null)))); })));
};
exports["default"] = Songs;
