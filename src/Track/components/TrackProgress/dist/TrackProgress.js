"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./TrackProgress.sass");
var TrackProgress = function () {
    return (react_1["default"].createElement("div", { className: "track-progress" },
        react_1["default"].createElement("span", { className: "track-progress__start" }, "0:01"),
        react_1["default"].createElement("div", { className: "track-progress__bar" },
            react_1["default"].createElement("div", { className: "track-progress__line" },
                react_1["default"].createElement("div", { className: "track-progress__active" }))),
        react_1["default"].createElement("span", { className: "track-progress__finish" }, "3:07")));
};
exports["default"] = TrackProgress;
