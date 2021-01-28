"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Social.sass");
var Button_1 = require("../../../Ui/Button");
var bs_1 = require("react-icons/bs");
var Social = function (_a) {
    var friendsData = _a.friendsData;
    return (react_1["default"].createElement("div", { className: "social" },
        react_1["default"].createElement("div", { className: "social__friends" }, friendsData.map(function (friend) { return (react_1["default"].createElement("a", { key: friend.id, href: "#", className: "social__friends-friend" },
            react_1["default"].createElement(bs_1.BsFillPersonFill, null),
            react_1["default"].createElement("span", null, friend.title))); })),
        react_1["default"].createElement(Button_1["default"], { buttonClass: 'button-light', title: 'Find Friends' })));
};
exports["default"] = Social;
