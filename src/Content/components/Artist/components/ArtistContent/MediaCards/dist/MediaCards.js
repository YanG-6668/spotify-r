"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./MediaCards.sass");
var io_1 = require("react-icons/io");
var MediaCards = function (_a) {
    var artistsData = _a.artistsData;
    return (react_1["default"].createElement("div", { className: "media-cards" }, artistsData.map(function (artist) { return (react_1["default"].createElement("div", { key: artist.id, className: "media-card" },
        react_1["default"].createElement("div", { className: "media-card__img" },
            react_1["default"].createElement("img", { src: artist.img, alt: "" }),
            react_1["default"].createElement("span", { className: "media-card__img-icon" },
                react_1["default"].createElement(io_1.IoMdPlay, null))),
        react_1["default"].createElement("a", { href: "#", className: "media-card__name" }, artist.title))); })));
};
exports["default"] = MediaCards;
