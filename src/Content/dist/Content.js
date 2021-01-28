"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Content.sass");
var Navigation_1 = require("./components/Navigation");
var Artist_1 = require("./components/Artist");
var Social_1 = require("./components/Social");
var Content = function (_a) {
    var friendsData = _a.friendsData, playlistData = _a.playlistData, tabsData = _a.tabsData, artistsData = _a.artistsData, songsData = _a.songsData;
    return (react_1["default"].createElement("div", { className: "content" },
        react_1["default"].createElement(Navigation_1["default"], { playlistData: playlistData }),
        react_1["default"].createElement(Artist_1["default"], { tabsData: tabsData, artistsData: artistsData, songsData: songsData }),
        react_1["default"].createElement(Social_1["default"], { friendsData: friendsData })));
};
exports["default"] = Content;
