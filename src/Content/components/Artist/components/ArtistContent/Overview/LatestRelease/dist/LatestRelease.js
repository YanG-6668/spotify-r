"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./LatestRelease.sass");
var OverviewTitle_1 = require("../../../../../../../Ui/OverviewTitle");
var LatestRelease = function () {
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement(OverviewTitle_1["default"], { title: 'Latest Release' }),
        react_1["default"].createElement("div", { className: "latest-release" },
            react_1["default"].createElement("div", { className: "latest-release__img" },
                react_1["default"].createElement("img", { src: "./spotify-user.jpg", alt: "" })),
            react_1["default"].createElement("div", { className: "latest-release__song" },
                react_1["default"].createElement("div", { className: "latest-release__song-title" }, "Drifting (Track Commentary)"),
                react_1["default"].createElement("div", { className: "latest-release__song-date" },
                    react_1["default"].createElement("span", { className: "day" }, "4"),
                    react_1["default"].createElement("span", { className: "month" }, "December"),
                    react_1["default"].createElement("span", { className: "year" }, "2015"))))));
};
exports["default"] = LatestRelease;
