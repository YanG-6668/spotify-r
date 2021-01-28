"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./ArtistHeader.sass");
var ArtistInfo_1 = require("./components/ArtistInfo");
var ArtistNavigation_1 = require("./components/ArtistNavigation");
var ArtistHeader = function (_a) {
    var tabsData = _a.tabsData, onChange = _a.onChange;
    return (react_1["default"].createElement("div", { className: "artist-header" },
        react_1["default"].createElement(ArtistInfo_1["default"], null),
        react_1["default"].createElement(ArtistNavigation_1["default"], { tabsData: tabsData, onChange: onChange })));
};
exports["default"] = ArtistHeader;
