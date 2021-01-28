"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./MainSong.sass");
var Button_1 = require("../../../../../../../../Ui/Button");
var io_1 = require("react-icons/io");
var MainSong = function () {
    return (react_1["default"].createElement("div", { className: "main-song" },
        react_1["default"].createElement("div", { className: "main-song__img" },
            react_1["default"].createElement("img", { src: "./spotify-user.jpg", alt: "" })),
        react_1["default"].createElement("div", { className: "main-song__meta" },
            react_1["default"].createElement("div", { className: "main-song__meta-year" }, "2015"),
            react_1["default"].createElement("div", { className: "main-song__meta-name" }, "When It's Dark Out"),
            react_1["default"].createElement("div", { className: "main-song__actions" },
                react_1["default"].createElement(Button_1["default"], { buttonClass: "button-light main-song__actions-save", title: "save" }),
                react_1["default"].createElement("button", { type: "button", className: "main-song__actions-more" },
                    react_1["default"].createElement(io_1.IoIosMore, null))))));
};
exports["default"] = MainSong;
