"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./ArtistNavigation.sass");
var ArtistNavigation = function (_a) {
    var tabsData = _a.tabsData, onChange = _a.onChange;
    var _b = react_1.useState({
        elementLeft: 0,
        elementWidth: 100
    }), tabPosition = _b[0], setTabPosition = _b[1];
    var clickTabHandler = function (e, option) {
        var elL = e.target.offsetLeft;
        var elW = e.target.offsetWidth;
        setTabPosition({
            elementLeft: elL,
            elementWidth: elW
        });
        onChange(option);
    };
    return (react_1["default"].createElement("div", { className: "artist-navigation" },
        react_1["default"].createElement("div", { className: "tabs" },
            tabsData.map(function (tab) { return (react_1["default"].createElement("button", { key: tab.id, type: "button", className: "tabs__btn", onClick: function (e) { return clickTabHandler(e, tab); } }, tab.title)); }),
            react_1["default"].createElement("span", { className: "is-active", style: {
                    left: tabPosition.elementLeft + "px",
                    width: tabPosition.elementWidth - 30 + "px"
                } })),
        react_1["default"].createElement("div", { className: "friends" },
            react_1["default"].createElement("a", { href: "#", className: "friends__friend" },
                react_1["default"].createElement("img", { src: "./spotify-user.jpg", alt: "" })),
            react_1["default"].createElement("a", { href: "#", className: "friends__friend" },
                react_1["default"].createElement("img", { src: "./spotify-user.jpg", alt: "" })),
            react_1["default"].createElement("a", { href: "3", className: "friends__friend" },
                react_1["default"].createElement("img", { src: "./spotify-user.jpg", alt: "" })))));
};
exports["default"] = ArtistNavigation;
