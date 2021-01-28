"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Button.sass");
var Button = function (_a) {
    var title = _a.title, onClick = _a.onClick, buttonClass = _a.buttonClass, icon = _a.icon;
    return (react_1["default"].createElement("button", { className: "button " + buttonClass, onClick: onClick },
        icon,
        title));
};
exports["default"] = Button;
