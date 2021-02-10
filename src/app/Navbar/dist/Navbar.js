"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Navbar.sass");
var Search_1 = require("./components/Search");
var User_1 = require("./components/User");
var Navbar = function () {
    var _a = react_1.useState(false), dropMenu = _a[0], setDropMenu = _a[1];
    var _b = react_1.useState(''), title = _b[0], setTitle = _b[1];
    var changeHandler = function (event) {
        setTitle(event.target.value);
    };
    var keyPressHandler = function (event) {
        if (event.key === 'Enter') {
            setTitle('');
        }
    };
    var clickHandlerMenu = function () {
        setDropMenu(!dropMenu);
    };
    return (react_1["default"].createElement("div", { className: "navbar" },
        react_1["default"].createElement(Search_1["default"], { changeHandler: changeHandler, keyPressHandler: keyPressHandler, title: title }),
        react_1["default"].createElement(User_1["default"], { clickHandlerMenu: clickHandlerMenu, dropMenu: dropMenu })));
};
exports["default"] = Navbar;
