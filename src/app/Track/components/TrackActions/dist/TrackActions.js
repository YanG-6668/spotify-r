"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./TrackActions.sass");
var io_1 = require("react-icons/io");
var TrackActions = function () {
    return (react_1["default"].createElement("div", { className: "track-actions" },
        react_1["default"].createElement("a", { href: "#", type: "button", className: "track-actions__skipback" },
            react_1["default"].createElement(io_1.IoMdSkipBackward, null)),
        react_1["default"].createElement("a", { href: "#", type: "button", className: "track-actions__play" },
            react_1["default"].createElement(io_1.IoMdPlay, null)),
        react_1["default"].createElement("a", { href: "#", type: "button", className: "track-actions__skipforward" },
            react_1["default"].createElement(io_1.IoMdSkipForward, null))));
};
exports["default"] = TrackActions;
