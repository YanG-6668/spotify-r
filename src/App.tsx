import React from 'react';
import './App.sass';
import Navbar from './Navbar';
import Content from './Content';
import Track from './Track';

// data
const friendsData: { id: number, title: string }[] = [
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
    'title': "Ricahrd Tomkins",
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

const playlistData: { id: number, title: string }[] = [
  {
    "id": 1,
    'title': "Doo Wop",
  },
  {
    "id": 2,
    'title': "Pop Classics",
  },
  {
    "id": 3,
    'title': "Love $ongs",
  },
  {
    "id": 4,
    'title': "Hipster",
  },
  {
    "id": 5,
    'title': "New Music Friday",
  },
  {
    "id": 6,
    'title': "Techno Poppers",
  },
  {
    "id": 7,
    'title': "Summer Soothers",
  },
  {
    "id": 8,
    'title': "Hard Rap",
  },
  {
    "id": 9,
    'title': "Pop Rap",
  },
  {
    "id": 10,
    'title': "5 Stars",
  },
  {
    "id": 11,
    'title': "Dope Dancin",
  },
  {
    "id": 12,
    'title': "Sleep",
  }
];

const tabsData: { id: number, title: string }[] = [
  {
    "id": 1,
    "title": "overview",
  },
  {
    "id": 2,
    "title": "related artists",
  }
];

const artistsData: { id: number, title: string, img: string }[] = [
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

const songsData: { id: number, icon: boolean, title: string, explicit: boolean, plays: string, length: string, popularity: boolean, img: string }[] = [
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
function viewportHeight(): void {
  const totalHeight: number = window.innerHeight;
  const headerHeight: number = (document.querySelector('.navbar') as HTMLElement).offsetHeight;
  const footerHeight: number = (document.querySelector('.track') as HTMLElement).offsetHeight;
  const playlistHeight: number = (document.querySelector('.playlist') as HTMLElement).offsetHeight;
  const nowPlaying: number = (document.querySelector('.playing') as HTMLElement).offsetHeight;

  const navHeight: number = totalHeight - (headerHeight + footerHeight + playlistHeight + nowPlaying);
  const artistHeight: number = totalHeight - (headerHeight + footerHeight);

  (document.querySelector('.navigation') as HTMLElement).style.height = `${navHeight}px`;
  (document.querySelector('.artist') as HTMLElement).style.height = `${artistHeight}px`;
  (document.querySelector('.social') as HTMLElement).style.height = `${artistHeight}px`;

  if (window.innerWidth <= 768) {
    (document.querySelector('.navigation') as HTMLElement).style.height = 'auto';
    (document.querySelector('.artist') as HTMLElement).style.height = 'auto';
  }
}

window.addEventListener('load', viewportHeight);
window.addEventListener('resize', viewportHeight);
// Viewport Heights

const App: React.FunctionComponent = () => {

  return (
    <div className="App">
      <Navbar />
      <Content
        friendsData={friendsData}
        playlistData={playlistData}
        tabsData={tabsData}
        artistsData={artistsData}
        songsData={songsData}
      />
      <Track />
    </div>
  );
}

export default App;
