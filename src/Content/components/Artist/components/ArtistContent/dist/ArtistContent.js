"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./ArtistContent.sass");
var Overview_1 = require("./Overview");
var MediaCards_1 = require("./MediaCards");
var ArtistContent = function (_a) {
    var artistsData = _a.artistsData, songsData = _a.songsData, tabItem = _a.tabItem;
    return (react_1["default"].createElement("div", { className: "artist-content" },
        react_1["default"].createElement("div", { className: "tab-content" },
            react_1["default"].createElement("div", { className: "tab-content__item \n        " + (tabItem.id === 1 ? 'is-active' : '') },
                react_1["default"].createElement(Overview_1["default"], { artistsData: artistsData, songsData: songsData })),
            react_1["default"].createElement("div", { className: "tab-content__item \n        " + (tabItem.id === 2 ? 'is-active' : '') },
                react_1["default"].createElement(MediaCards_1["default"], { artistsData: artistsData })))));
};
exports["default"] = ArtistContent;
