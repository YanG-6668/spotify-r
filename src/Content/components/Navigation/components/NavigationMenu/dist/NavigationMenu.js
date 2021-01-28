"use strict";
exports.__esModule = true;
var react_1 = require("react");
var io_1 = require("react-icons/io");
var bs_1 = require("react-icons/bs");
var fa_1 = require("react-icons/fa");
require("./NavigationMenu.sass");
var NavigationMenu = function (_a) {
    var playlistData = _a.playlistData;
    var _b = react_1.useState(false), main = _b[0], setMain = _b[1];
    var _c = react_1.useState(false), yourMusic = _c[0], setYourMusic = _c[1];
    var _d = react_1.useState(false), playlist = _d[0], setPlaylist = _d[1];
    var onClickHandlerMain = function () {
        setMain(!main);
    };
    var onClickHandlerMusic = function () {
        setYourMusic(!yourMusic);
    };
    var onClickHandlerPlaylist = function () {
        setPlaylist(!playlist);
    };
    return (react_1["default"].createElement("div", { className: "navigation" },
        react_1["default"].createElement("div", { className: "navigation__list" },
            react_1["default"].createElement("div", { className: "navigation__list-title " + (main ? 'is-active' : 'is-close'), onClick: onClickHandlerMain },
                react_1["default"].createElement("span", null, "main"),
                react_1["default"].createElement(io_1.IoIosArrowDown, null)),
            react_1["default"].createElement("div", { className: "navigation__list-container " + (main ? 'is-active' : 'is-close') },
                react_1["default"].createElement("a", { href: "#", className: "navigation__list-item" },
                    react_1["default"].createElement(io_1.IoIosBrowsers, null),
                    react_1["default"].createElement("span", null, "Browse")),
                react_1["default"].createElement("a", { href: "#", className: "navigation__list-item" },
                    react_1["default"].createElement(bs_1.BsFillPeopleFill, null),
                    react_1["default"].createElement("span", null, "Activity")),
                react_1["default"].createElement("a", { href: "#", className: "navigation__list-item" },
                    react_1["default"].createElement(io_1.IoIosRadio, null),
                    react_1["default"].createElement("span", null, "Radio")))),
        react_1["default"].createElement("div", { className: "navigation__list" },
            react_1["default"].createElement("div", { className: "navigation__list-title " + (yourMusic ? 'is-active' : 'is-close'), onClick: onClickHandlerMusic },
                "your music",
                react_1["default"].createElement(io_1.IoIosArrowDown, null)),
            react_1["default"].createElement("div", { className: "navigation__list-container " + (yourMusic ? 'is-active' : 'is-close') },
                react_1["default"].createElement("a", { href: "#", className: "navigation__list-item" },
                    react_1["default"].createElement(fa_1.FaHeadphones, null),
                    "Songs"),
                react_1["default"].createElement("a", { href: "#", className: "navigation__list-item" },
                    react_1["default"].createElement(io_1.IoIosMusicalNotes, null),
                    "Albums"),
                react_1["default"].createElement("a", { href: "#", className: "navigation__list-item" },
                    react_1["default"].createElement(bs_1.BsFillPersonFill, null),
                    "Artists"),
                react_1["default"].createElement("a", { href: "#", className: "navigation__list-item" },
                    react_1["default"].createElement(bs_1.BsFileEarmark, null),
                    "Local Files"))),
        react_1["default"].createElement("div", { className: "navigation__list" },
            react_1["default"].createElement("div", { className: "navigation__list-title " + (playlist ? 'is-active' : 'is-close'), onClick: onClickHandlerPlaylist },
                "playlist",
                react_1["default"].createElement(io_1.IoIosArrowDown, null)),
            react_1["default"].createElement("div", { className: "navigation__list-container " + (playlist ? 'is-active' : 'is-close') }, playlistData.map(function (item) { return (react_1["default"].createElement("a", { key: item.id, href: "#", className: "navigation__list-item" },
                react_1["default"].createElement(io_1.IoIosMusicalNotes, null),
                react_1["default"].createElement("span", null, item.title))); })))));
};
exports["default"] = NavigationMenu;
