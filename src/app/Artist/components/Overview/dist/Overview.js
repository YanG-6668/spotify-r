"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Overview.sass");
var LatestRelease_1 = require("./LatestRelease");
var PopularTracks_1 = require("./PopularTracks");
var RelatedArtists_1 = require("./RelatedArtists");
var Albums_1 = require("./Albums");
var Overview = function (_a) {
    var artistsData = _a.artistsData, songsData = _a.songsData;
    return (react_1["default"].createElement("div", { className: "overview" },
        react_1["default"].createElement("div", { className: "overview__artist" },
            react_1["default"].createElement("div", { className: "overview__songs" },
                react_1["default"].createElement(LatestRelease_1["default"], null),
                react_1["default"].createElement(PopularTracks_1["default"], { songsData: songsData })),
            react_1["default"].createElement("div", { className: "overview__related" },
                react_1["default"].createElement(RelatedArtists_1["default"], { artistsData: artistsData }))),
        react_1["default"].createElement("div", { className: "overview__albums" },
            react_1["default"].createElement(Albums_1["default"], { songsData: songsData }))));
};
exports["default"] = Overview;
