import React from "react";
import "./App.sass";
// icons
import {
  FaHeadphones,
  BsFillPeopleFill,
  BsFillPersonFill,
  BsFileEarmark,
  IoIosMusicalNotes,
  IoIosBrowsers,
  IoIosRadio,
} from "react-icons/all";
// icons

import Navbar from "./app/Navbar";
import Content from "./app/Content";
import Track from "./app/Track";

// data
import artists from "./data/artists.json";
import friends from "./data/friends.json";
import songs from "./data/songs.json";
import tabs from "./data/tabs.json";
// data

// data with icons
const navigationMainList = [
  {
    id: 1,
    url: "to",
    title: "Browse",
    icon: <IoIosBrowsers />,
  },
  {
    id: 2,
    url: "to",
    title: "Activity",
    icon: <BsFillPeopleFill />,
  },
  {
    id: 3,
    url: "to",
    title: "Radio",
    icon: <IoIosRadio />,
  },
];

const navigationPlaylistList = [
  {
    id: 1,
    url: "to",
    title: "Doo Wop",
    icon: <IoIosMusicalNotes />
  },
  {
    id: 2,
    url: "to",
    title: "Pop Classics",
    icon: <IoIosMusicalNotes />
  },
  {
    id: 3,
    url: "to",
    title: "Love $ongs",
    icon: <IoIosMusicalNotes />
  },
  {
    id: 4,
    url: "to",
    title: "Hipster",
    icon: <IoIosMusicalNotes />
  },
  {
    id: 5,
    url: "to",
    title: "New Music Friday",
    icon: <IoIosMusicalNotes />
  },
  {
    id: 6,
    url: "to",
    title: "Techno Poppers",
    icon: <IoIosMusicalNotes />
  },
  {
    id: 7,
    url: "to",
    title: "Summer Soothers",
    icon: <IoIosMusicalNotes />
  },
  {
    id: 8,
    url: "to",
    title: "Hard Rap",
    icon: <IoIosMusicalNotes />
  },
  {
    id: 9,
    url: "to",
    title: "Pop Rap",
    icon: <IoIosMusicalNotes />
  },
  {
    id: 10,
    url: "to",
    title: "5 Stars",
    icon: <IoIosMusicalNotes />
  },
  {
    id: 11,
    url: "to",
    title: "Dope Dancin",
    icon: <IoIosMusicalNotes />
  },
  {
    id: 12,
    url: "to",
    title: "Sleep",
    icon: <IoIosMusicalNotes />
  },
];

const navigationMusicList = [
  {
    id: 1,
    url: "to",
    title: "Songs",
    icon: <FaHeadphones />,
  },
  {
    id: 2,
    url: "to",
    title: "Albums",
    icon: <IoIosMusicalNotes />,
  },
  {
    id: 3,
    url: "to",
    title: "Artists",
    icon: <BsFillPersonFill />,
  },
  {
    id: 4,
    url: "to",
    title: "Local Files",
    icon: <BsFileEarmark />,
  }
];
// data with icons

// Viewport Heights
function viewportHeight(): void {
  const totalHeight: number = window.innerHeight;
  const headerHeight: number = (document.querySelector(
    ".navbar"
  ) as HTMLElement).offsetHeight;
  const footerHeight: number = (document.querySelector(".track") as HTMLElement)
    .offsetHeight;
  const playlistHeight: number = (document.querySelector(
    ".playlist"
  ) as HTMLElement).offsetHeight;
  const nowPlaying: number = (document.querySelector(".playing") as HTMLElement)
    .offsetHeight;

  const navHeight: number =
    totalHeight - (headerHeight + footerHeight + playlistHeight + nowPlaying);
  const artistHeight: number = totalHeight - (headerHeight + footerHeight);

  (document.querySelector(
    ".navigation"
  ) as HTMLElement).style.height = `${navHeight}px`;
  (document.querySelector(
    ".artist"
  ) as HTMLElement).style.height = `${artistHeight}px`;
  (document.querySelector(
    ".social"
  ) as HTMLElement).style.height = `${artistHeight}px`;

  if (window.innerWidth <= 768) {
    (document.querySelector(".navigation") as HTMLElement).style.height =
      "auto";
    (document.querySelector(".artist") as HTMLElement).style.height = "auto";
  }
}

window.addEventListener("load", viewportHeight);
window.addEventListener("resize", viewportHeight);
// Viewport Heights

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Navbar />
      <Content
        friends={friends}
        tabs={tabs}
        artists={artists}
        songs={songs}
        navigationMainList={navigationMainList}
        navigationPlaylistList={navigationPlaylistList}
        navigationMusicList={navigationMusicList}
      />
      <Track />
    </div>
  );
};

export default App;
