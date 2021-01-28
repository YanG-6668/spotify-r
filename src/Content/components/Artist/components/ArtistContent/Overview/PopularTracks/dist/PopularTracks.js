"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./PopularTracks.sass");
var bs_1 = require("react-icons/bs");
var OverviewTitle_1 = require("../../../../../../../Ui/OverviewTitle");
var Button_1 = require("../../../../../../../Ui/Button");
var PopularTracks = function (_a) {
    var songsData = _a.songsData;
    var _b = react_1.useState(false), showSongs = _b[0], setShowSongs = _b[1];
    var clickShowHandler = function () {
        setShowSongs(!showSongs);
    };
    var numberOfItems = showSongs ? songsData.length : 5;
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement(OverviewTitle_1["default"], { title: 'Popular' }),
        react_1["default"].createElement("div", { className: "popular-tracks" }, songsData.slice(0, numberOfItems).map(function (song, i) { return (react_1["default"].createElement("div", { key: song.id, className: "popular-tracks__track" },
            react_1["default"].createElement("div", { className: "popular-tracks__track-img" },
                react_1["default"].createElement("img", { src: song.img, alt: "" })),
            react_1["default"].createElement("div", { className: "popular-tracks__track-number" }, i + 1),
            react_1["default"].createElement("div", { className: "popular-tracks__track-added" }, song.icon ? react_1["default"].createElement(bs_1.BsCheck, null) : react_1["default"].createElement(bs_1.BsPlus, null)),
            react_1["default"].createElement("div", { className: "popular-tracks__track-title" }, song.title),
            react_1["default"].createElement("div", { className: "popular-tracks__track-explicit" }, song.explicit ? 'explicit' : null),
            react_1["default"].createElement("div", { className: "popular-tracks__track-plays" }, song.plays))); })),
        react_1["default"].createElement(Button_1["default"], { onClick: clickShowHandler, buttonClass: 'button-light', title: !showSongs ? 'show more' : 'show less' })));
};
exports["default"] = PopularTracks;
