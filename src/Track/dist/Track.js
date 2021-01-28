"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Track.sass");
var TrackActions_1 = require("./components/TrackActions");
var TrackProgress_1 = require("./components/TrackProgress");
var TrackOptions_1 = require("./components/TrackOptions");
var Track = function () {
    return (react_1["default"].createElement("div", { className: "track" },
        react_1["default"].createElement(TrackActions_1["default"], null),
        react_1["default"].createElement(TrackProgress_1["default"], null),
        react_1["default"].createElement(TrackOptions_1["default"], null)));
};
exports["default"] = Track;
