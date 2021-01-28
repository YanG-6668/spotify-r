"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./ContentCenter.sass");
var bs_1 = require("react-icons/bs");
var io_1 = require("react-icons/io");
var fa_1 = require("react-icons/fa");
var ri_1 = require("react-icons/ri");
var songsData = [
    {
        "id": 1,
        "icon": true,
        "title": "Me, Myself & I",
        "explicit": true,
        "plays": "147,544,165",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 2,
        "icon": true,
        "title": "I Mean It",
        "explicit": true,
        "plays": "74,568,782",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 3,
        "icon": true,
        "title": "Calm Down",
        "explicit": true,
        "plays": "13,737,506",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 4,
        "icon": false,
        "title": "Some Kind Of Drug",
        "explicit": true,
        "plays": "12,234,881",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 5,
        "icon": true,
        "title": "Let's Get Lost",
        "explicit": true,
        "plays": "40,882,954",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 6,
        "icon": true,
        "title": "Me, Myself & I",
        "explicit": true,
        "plays": "147,544,165",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 7,
        "icon": true,
        "title": "I Mean It",
        "explicit": true,
        "plays": "74,568,782",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 8,
        "icon": true,
        "title": "Calm Down",
        "explicit": true,
        "plays": "13,737,506",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    }
];
var songsData1 = [
    {
        "id": 1,
        "icon": true,
        "title": "Me, Myself & I",
        "explicit": true,
        "plays": "147,544,165",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 2,
        "icon": true,
        "title": "I Mean It",
        "explicit": true,
        "plays": "74,568,782",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 3,
        "icon": true,
        "title": "Calm Down",
        "explicit": true,
        "plays": "13,737,506",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 4,
        "icon": false,
        "title": "Some Kind Of Drug",
        "explicit": true,
        "plays": "12,234,881",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 5,
        "icon": true,
        "title": "Let's Get Lost",
        "explicit": true,
        "plays": "40,882,954",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 6,
        "icon": true,
        "title": "I Mean It",
        "explicit": true,
        "plays": "74,568,782",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 7,
        "icon": true,
        "title": "Calm Down",
        "explicit": true,
        "plays": "13,737,506",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 8,
        "icon": false,
        "title": "Some Kind Of Drug",
        "explicit": true,
        "plays": "12,234,881",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 9,
        "icon": true,
        "title": "Let's Get Lost",
        "explicit": true,
        "plays": "40,882,954",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 10,
        "icon": true,
        "title": "I Mean It",
        "explicit": true,
        "plays": "74,568,782",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 11,
        "icon": true,
        "title": "Calm Down",
        "explicit": true,
        "plays": "13,737,506",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 12,
        "icon": false,
        "title": "Some Kind Of Drug",
        "explicit": true,
        "plays": "12,234,881",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 13,
        "icon": true,
        "title": "Let's Get Lost",
        "explicit": true,
        "plays": "40,882,954",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 14,
        "icon": true,
        "title": "I Mean It",
        "explicit": true,
        "plays": "74,568,782",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 15,
        "icon": true,
        "title": "Calm Down",
        "explicit": true,
        "plays": "13,737,506",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 16,
        "icon": false,
        "title": "Some Kind Of Drug",
        "explicit": true,
        "plays": "12,234,881",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    },
    {
        "id": 17,
        "icon": true,
        "title": "Let's Get Lost",
        "explicit": true,
        "plays": "40,882,954",
        "length": "1:11",
        "popularity": true,
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
    }
];
var artistsData = [
    {
        "id": 1,
        'title': "Hoodie Allen",
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg"
    },
    {
        "id": 2,
        'title': "Mike Stud",
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud_large.jpg"
    },
    {
        "id": 3,
        'title': "Drake",
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake_large.jpg"
    },
    {
        "id": 4,
        'title': "J. Cole",
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole_large.jpg"
    },
    {
        "id": 5,
        'title': "Hoodie Allen",
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg"
    },
    {
        "id": 6,
        'title': "Mike Stud",
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud_large.jpg"
    },
    {
        "id": 7,
        'title': "Drake",
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake_large.jpg"
    },
    {
        "id": 8,
        'title': "J. Cole",
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole_large.jpg"
    }
];
var ContentCenter = function () {
    var _a = react_1.useState(false), showSongs = _a[0], setShowSongs = _a[1];
    var _b = react_1.useState({
        elementLeft: 0,
        elementWidth: 100
    }), tabPosition = _b[0], setTabPosition = _b[1];
    var _c = react_1.useState({ id: 1, title: "overview" }), tabItem = _c[0], setTabItem = _c[1];
    var clickTabHandler = function (e, option) {
        var elL = e.target.offsetLeft;
        var elW = e.target.offsetWidth;
        setTabPosition({
            elementLeft: elL,
            elementWidth: elW
        });
        console.log(elL, elW);
        setTabItem(option);
        console.log(option);
    };
    var clickShowHandler = function () {
        setShowSongs(!showSongs);
    };
    var numberOfItems = showSongs ? songsData.length : 5;
    var option = 'Hello MF';
    return (react_1["default"].createElement("div", { className: "content-center" },
        react_1["default"].createElement("div", { className: "artist" },
            react_1["default"].createElement("div", { className: "artist__content" },
                react_1["default"].createElement("div", { className: "tab-content" },
                    react_1["default"].createElement("div", { className: "tab-content__item " + (tabItem.id === 1 ? 'is-active' : '') },
                        react_1["default"].createElement("div", { className: "overview" },
                            react_1["default"].createElement("div", { className: "overview__artist" },
                                react_1["default"].createElement("div", { className: "overview__songs" },
                                    react_1["default"].createElement("div", { className: "section-title" }, "latest-release"),
                                    react_1["default"].createElement("div", { className: "latest-release" },
                                        react_1["default"].createElement("div", { className: "latest-release__img" },
                                            react_1["default"].createElement("img", { src: "./spotify-user.jpg", alt: "" })),
                                        react_1["default"].createElement("div", { className: "latest-release__song" },
                                            react_1["default"].createElement("div", { className: "latest-release__song-title" }, "Drifting (Track Commentary)"),
                                            react_1["default"].createElement("div", { className: "latest-release__song-date" },
                                                react_1["default"].createElement("span", { className: "day" }, "4"),
                                                react_1["default"].createElement("span", { className: "month" }, "December"),
                                                react_1["default"].createElement("span", { className: "year" }, "2015")))),
                                    react_1["default"].createElement("div", { className: "section-title" }, "popular"),
                                    react_1["default"].createElement("div", { className: "popular-tracks" }, songsData.slice(0, numberOfItems).map(function (song, i) { return (react_1["default"].createElement("div", { className: "popular-track" },
                                        react_1["default"].createElement("div", { className: "popular-track__img" },
                                            react_1["default"].createElement("img", { src: song.img, alt: "" })),
                                        react_1["default"].createElement("div", { className: "popular-track__number" }, i + 1),
                                        react_1["default"].createElement("div", { className: "popular-track__added" }, song.icon ? react_1["default"].createElement(bs_1.BsCheck, null) : react_1["default"].createElement(bs_1.BsPlus, null)),
                                        react_1["default"].createElement("div", { className: "popular-track__title" }, song.title),
                                        react_1["default"].createElement("div", { className: "popular-track__explicit" }, song.explicit ? 'explicit' : null),
                                        react_1["default"].createElement("div", { className: "popular-track__plays" }, song.plays))); })),
                                    react_1["default"].createElement("button", { className: "button button-light", onClick: clickShowHandler }, !showSongs ? 'show more' : 'show less')),
                                react_1["default"].createElement("div", { className: "overview__related" },
                                    react_1["default"].createElement("div", { className: "section-title" }, "related artist"),
                                    react_1["default"].createElement("div", { className: "related-artists" }, artistsData.map(function (artist) { return (react_1["default"].createElement("a", { href: "#", className: "related-artist" },
                                        react_1["default"].createElement("div", { className: "related-artist__img" },
                                            react_1["default"].createElement("img", { src: artist.img, alt: "" })),
                                        react_1["default"].createElement("div", { className: "related-artist__name" }, artist.title))); })))),
                            react_1["default"].createElement("div", { className: "overview__albums" },
                                react_1["default"].createElement("div", { className: "overview__albums-title" },
                                    react_1["default"].createElement("span", { className: "section-title" }, "albums"),
                                    react_1["default"].createElement("div", { className: "view-type" },
                                        react_1["default"].createElement("span", { className: "view-type__item is-active" },
                                            react_1["default"].createElement(fa_1.FaListUl, null)),
                                        react_1["default"].createElement("span", { className: "view-type__item" },
                                            react_1["default"].createElement(fa_1.FaThLarge, null)))),
                                react_1["default"].createElement("div", { className: "album" },
                                    react_1["default"].createElement("div", { className: "album__info" },
                                        react_1["default"].createElement("div", { className: "album__info-img" },
                                            react_1["default"].createElement("img", { src: "./spotify-user.jpg", alt: "" })),
                                        react_1["default"].createElement("div", { className: "album__info-meta" },
                                            react_1["default"].createElement("div", { className: "album__year" }, "2015"),
                                            react_1["default"].createElement("div", { className: "album__name" }, "When It's Dark Out"),
                                            react_1["default"].createElement("div", { className: "album__actions" },
                                                react_1["default"].createElement("button", { type: "button", className: "button button-light album__actions-save" }, "save"),
                                                react_1["default"].createElement("button", { type: "button", className: "album__actions-more" },
                                                    react_1["default"].createElement(io_1.IoIosMore, null))))),
                                    react_1["default"].createElement("div", { className: "album__tracks" },
                                        react_1["default"].createElement("div", { className: "popular-tracks" },
                                            react_1["default"].createElement("div", { className: "popular-tracks__heading" },
                                                react_1["default"].createElement("div", { className: "popular-tracks__heading-number" }, "#"),
                                                react_1["default"].createElement("div", { className: "popular-tracks__heading-title" }, "song"),
                                                react_1["default"].createElement("div", { className: "popular-tracks__heading-length" },
                                                    react_1["default"].createElement(ri_1.RiTimerFlashLine, null)),
                                                react_1["default"].createElement("div", { className: "popular-tracks__heading-popularity" },
                                                    react_1["default"].createElement(fa_1.FaThumbsUp, null))),
                                            songsData1.map(function (song, i) { return (react_1["default"].createElement("div", { className: "popular-track" },
                                                react_1["default"].createElement("div", { className: "popular-track__number" }, i + 1),
                                                react_1["default"].createElement("div", { className: "popular-track__added" }, song.icon ? react_1["default"].createElement(bs_1.BsCheck, null) : react_1["default"].createElement(bs_1.BsPlus, null)),
                                                react_1["default"].createElement("div", { className: "popular-track__title track-width" }, song.title),
                                                react_1["default"].createElement("div", { className: "popular-track__explicit" }, song.explicit ? "explicit" : null),
                                                react_1["default"].createElement("div", { className: "popular-track__length" }, song.length),
                                                react_1["default"].createElement("div", { className: "popular-track__popularity" }, song.popularity ? react_1["default"].createElement(bs_1.BsArrowUpRight, null) : react_1["default"].createElement(bs_1.BsArrowDownRight, null)))); }))))))),
                    react_1["default"].createElement("div", { className: "tab-content__item " + (tabItem.id === 2 ? 'is-active' : '') },
                        react_1["default"].createElement("div", { className: "media-cards" }, artistsData.map(function (artist) { return (react_1["default"].createElement("div", { className: "media-card" },
                            react_1["default"].createElement("div", { className: "media-card__img" },
                                react_1["default"].createElement("img", { src: artist.img, alt: "" }),
                                react_1["default"].createElement("span", { className: "media-card__img-icon" },
                                    react_1["default"].createElement(io_1.IoMdPlay, null))),
                            react_1["default"].createElement("a", { href: "#", className: "media-card__name" }, artist.title))); }))))))));
};
exports["default"] = ContentCenter;
