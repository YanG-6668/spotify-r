"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.sass");
var Navbar_1 = require("./Navbar");
var Content_1 = require("./Content");
var Track_1 = require("./Track");
// data
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
var playlistData = [
    {
        "id": 1,
        'title': "Doo Wop"
    },
    {
        "id": 2,
        'title': "Pop Classics"
    },
    {
        "id": 3,
        'title': "Love $ongs"
    },
    {
        "id": 4,
        'title': "Hipster"
    },
    {
        "id": 5,
        'title': "New Music Friday"
    },
    {
        "id": 6,
        'title': "Techno Poppers"
    },
    {
        "id": 7,
        'title': "Summer Soothers"
    },
    {
        "id": 8,
        'title': "Hard Rap"
    },
    {
        "id": 9,
        'title': "Pop Rap"
    },
    {
        "id": 10,
        'title': "5 Stars"
    },
    {
        "id": 11,
        'title': "Dope Dancin"
    },
    {
        "id": 12,
        'title': "Sleep"
    }
];
var tabsData = [
    {
        "id": 1,
        "title": "overview"
    },
    {
        "id": 2,
        "title": "related artists"
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
// data
// Viewport Heights
function viewportHeight() {
    var totalHeight = window.innerHeight;
    var headerHeight = document.querySelector('.navbar').offsetHeight;
    var footerHeight = document.querySelector('.track').offsetHeight;
    var playlistHeight = document.querySelector('.playlist').offsetHeight;
    var nowPlaying = document.querySelector('.playing').offsetHeight;
    var navHeight = totalHeight - (headerHeight + footerHeight + playlistHeight + nowPlaying);
    var artistHeight = totalHeight - (headerHeight + footerHeight);
    document.querySelector('.navigation').style.height = navHeight + "px";
    document.querySelector('.artist').style.height = artistHeight + "px";
    document.querySelector('.social').style.height = artistHeight + "px";
    if (window.innerWidth <= 768) {
        document.querySelector('.navigation').style.height = 'auto';
        document.querySelector('.artist').style.height = 'auto';
    }
}
window.addEventListener('load', viewportHeight);
window.addEventListener('resize', viewportHeight);
// Viewport Heights
var App = function () {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement(Content_1["default"], { friendsData: friendsData, playlistData: playlistData, tabsData: tabsData, artistsData: artistsData, songsData: songsData }),
        react_1["default"].createElement(Track_1["default"], null)));
};
exports["default"] = App;
