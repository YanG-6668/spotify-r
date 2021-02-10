"use strict";
exports.__esModule = true;
var react_1 = require("react");
var io_1 = require("react-icons/io");
var bs_1 = require("react-icons/bs");
var fa_1 = require("react-icons/fa");
require("./NavigationMenu.sass");
var playlistData = [
    {
        "id": 1,
        'title': "Doo Wop"
    },
    {
        "id": 2,
        'title': "Pop Classics"
    },
    {
        "id": 3,
        'title': "Love $ongs"
    },
    {
        "id": 4,
        'title': "Hipster"
    },
    {
        "id": 5,
        'title': "New Music Friday"
    },
    {
        "id": 6,
        'title': "Techno Poppers"
    },
    {
        "id": 7,
        'title': "Summer Soothers"
    },
    {
        "id": 8,
        'title': "Hard Rap"
    },
    {
        "id": 9,
        'title': "Pop Rap"
    },
    {
        "id": 10,
        'title': "5 Stars"
    },
    {
        "id": 11,
        'title': "Dope Dancin"
    },
    {
        "id": 12,
        'title': "Sleep"
    }
];
var NavigationMenu = function () {
    var _a = react_1.useState(false), main = _a[0], setMain = _a[1];
    var _b = react_1.useState(false), yourMusic = _b[0], setYourMusic = _b[1];
    var _c = react_1.useState(false), playlist = _c[0], setPlaylist = _c[1];
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
            react_1["default"].createElement("div", { className: "navigation__list-container " + (playlist ? 'is-active' : 'is-close') }, playlistData.map(function (item) { return (react_1["default"].createElement("a", { href: "#", className: "navigation__list-item" },
                react_1["default"].createElement(io_1.IoIosMusicalNotes, null),
                react_1["default"].createElement("span", null, item.title))); })))));
};
exports["default"] = NavigationMenu;
