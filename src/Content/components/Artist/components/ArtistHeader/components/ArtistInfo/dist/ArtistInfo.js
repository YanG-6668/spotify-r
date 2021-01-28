"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./ArtistInfo.sass");
var Button_1 = require("../../../../../../../Ui/Button");
var io_1 = require("react-icons/io");
var bs_1 = require("react-icons/bs");
var ArtistInfo = function () {
    return (react_1["default"].createElement("div", { className: "artist-info" },
        react_1["default"].createElement("div", { className: "artist-info__info" },
            react_1["default"].createElement("div", { className: "artist-info__info-img" },
                react_1["default"].createElement("img", { src: "./artist-img.jpg", alt: "" }),
                react_1["default"].createElement("span", { className: "artist-info__info-check" },
                    react_1["default"].createElement(bs_1.BsCheck, null))),
            react_1["default"].createElement("div", { className: "artist-info__info-meta" },
                react_1["default"].createElement("div", { className: "artist-info__info-type" }, "artist"),
                react_1["default"].createElement("div", { className: "artist-info__info-name" }, "G-Eazy"),
                react_1["default"].createElement("div", { className: "artist-info__info-actions" },
                    react_1["default"].createElement(Button_1["default"], { buttonClass: 'button-dark artist-info__info-btn', icon: react_1["default"].createElement(io_1.IoMdPlay, null), title: 'Play' }),
                    react_1["default"].createElement(Button_1["default"], { buttonClass: 'button-light', title: 'follow' }),
                    react_1["default"].createElement("button", { type: "button", className: "artist-info__info-more" },
                        react_1["default"].createElement(io_1.IoIosMore, null))))),
        react_1["default"].createElement("div", { className: "artist-info__listened" },
            react_1["default"].createElement("div", { className: "artist-info__listened-counter" }, "15,662,810"),
            react_1["default"].createElement("div", { className: "artist-info__listened-label" }, "monthly listeners"))));
};
exports["default"] = ArtistInfo;
