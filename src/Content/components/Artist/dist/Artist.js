"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Artist.sass");
var ArtistHeader_1 = require("./components/ArtistHeader");
var ArtistContent_1 = require("./components/ArtistContent");
var Artist = function (_a) {
    var tabsData = _a.tabsData, artistsData = _a.artistsData, songsData = _a.songsData;
    var _b = react_1.useState({ id: 1, title: "overview" }), tabItem = _b[0], setTabItem = _b[1];
    var handleOnChange = function (option) {
        setTabItem(option);
    };
    return (react_1["default"].createElement("div", { className: "artist" },
        react_1["default"].createElement(ArtistHeader_1["default"], { tabsData: tabsData, onChange: handleOnChange }),
        react_1["default"].createElement(ArtistContent_1["default"], { artistsData: artistsData, songsData: songsData, tabItem: tabItem })));
};
exports["default"] = Artist;
