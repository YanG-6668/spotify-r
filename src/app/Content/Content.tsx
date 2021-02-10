import React from "react";

import "./Content.sass";

import Navigation from "../Navigation";
import Artist from "../Artist";
import Social from "../Social";
import {
  FriendsItem,
  TabsItem,
  navigationList,
  ArtistsItem,
  SongsItem,
} from "../types";

interface ContentProps {
  friends: FriendsItem[];
  tabs: TabsItem[];
  navigationMainList: navigationList[];
  navigationPlaylistList: navigationList[];
  navigationMusicList: navigationList[];
  artists: ArtistsItem[];
  songs: SongsItem[];
}

const Content: React.FunctionComponent<ContentProps> = ({
  friends,
  tabs,
  navigationMainList,
  navigationPlaylistList,
  navigationMusicList,
  artists,
  songs,
}) => {
  return (
    <div className="content">
      <Navigation
        navigationMainList={navigationMainList}
        navigationPlaylistList={navigationPlaylistList}
        navigationMusicList={navigationMusicList}
      />
      <Artist tabs={tabs} artists={artists} songs={songs} />
      <Social friends={friends} />
    </div>
  );
};

export default Content;
