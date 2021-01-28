"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./ContentRight.sass");
var bs_1 = require("react-icons/bs");
var friendsData = [
    {
        "id": 1,
        'title': "Sam Smith"
    },
    {
        "id": 2,
        'title': "Tarah Forsyth"
    },
    {
        "id": 3,
        'title': "Ricahrd Tomkins"
    },
    {
        "id": 4,
        'title': "Tony Russo"
    },
    {
        "id": 5,
        'title': "Alyssa Marist"
    },
    {
        "id": 6,
        'title': "Ron Samson"
    }
];
var ContentRight = function () {
    return (react_1["default"].createElement("div", { className: "content-right" },
        react_1["default"].createElement("div", { className: "social" },
            react_1["default"].createElement("div", { className: "social__friends" }, friendsData.map(function (friend) { return (react_1["default"].createElement("a", { href: "#", className: "social__friends-friend" },
                react_1["default"].createElement(bs_1.BsFillPersonFill, null),
                react_1["default"].createElement("span", null, friend.title))); })),
            react_1["default"].createElement("button", { type: "button", className: "button button-light social__button" }, "Find Friends"))));
};
exports["default"] = ContentRight;
