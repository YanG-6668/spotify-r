"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./RelatedArtists.sass");
var OverviewTitle_1 = require("../../../../../../../Ui/OverviewTitle");
var RelatedArtists = function (_a) {
    var artistsData = _a.artistsData;
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement(OverviewTitle_1["default"], { title: 'Related Artists' }),
        react_1["default"].createElement("div", { className: "related-artists" }, artistsData.slice(0, 7).map(function (artist) { return (react_1["default"].createElement("a", { key: artist.id, href: "#", className: "related-artists__artist" },
            react_1["default"].createElement("div", { className: "related-artists__artist-img" },
                react_1["default"].createElement("img", { src: artist.img, alt: "" })),
            react_1["default"].createElement("div", { className: "related-artists__artist-name" }, artist.title))); }))));
};
exports["default"] = RelatedArtists;
