"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Navigation.sass");
var NavigationMenu_1 = require("./components/NavigationMenu");
var Playlist_1 = require("./components/Playlist");
var Playing_1 = require("./components/Playing");
var Navigation = function (_a) {
    var playlistData = _a.playlistData;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(NavigationMenu_1["default"], { playlistData: playlistData }),
        react_1["default"].createElement(Playlist_1["default"], null),
        react_1["default"].createElement(Playing_1["default"], null)));
};
exports["default"] = Navigation;
