"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./TrackOptions.sass");
var io5_1 = require("react-icons/io5");
var hi_1 = require("react-icons/hi");
var bs_1 = require("react-icons/bs");
var TrackOptions = function () {
    return (react_1["default"].createElement("div", { className: "track-options" },
        react_1["default"].createElement("a", { href: "#", className: "track-options__lyrics" }, "Lyrics"),
        react_1["default"].createElement("div", { className: "track-options__controls" },
            react_1["default"].createElement("a", { href: "#", type: "button", className: "track-options__control" },
                react_1["default"].createElement(io5_1.IoMenuSharp, null)),
            react_1["default"].createElement("a", { href: "#", type: "button", className: "track-options__control" },
                react_1["default"].createElement(bs_1.BsShuffle, null)),
            react_1["default"].createElement("a", { href: "#", type: "button", className: "track-options__control" },
                react_1["default"].createElement(hi_1.HiRefresh, null)),
            react_1["default"].createElement("a", { href: "#", type: "button", className: "track-options__control" },
                react_1["default"].createElement(io5_1.IoPhonePortraitSharp, null),
                react_1["default"].createElement("span", null, "Devices Available")),
            react_1["default"].createElement("a", { href: "#", type: "button", className: "track-options__control" },
                react_1["default"].createElement(io5_1.IoVolumeHigh, null),
                react_1["default"].createElement("div", { className: "track-options__volume" },
                    react_1["default"].createElement("div", { className: "track-options__volume-line" },
                        react_1["default"].createElement("div", { className: "track-options__volume-active" })))))));
};
exports["default"] = TrackOptions;
