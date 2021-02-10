import React from "react";
import "./Navigation.sass";

import NavigationMenu from "./components/NavigationMenu";
import Playlist from "./components/Playlist";
import Playing from "./components/Playing";
import { navigationList } from "../types";

interface NavigationProps {
  navigationMainList: navigationList[];
  navigationPlaylistList: navigationList[];
  navigationMusicList: navigationList[];
}

const Navigation: React.FunctionComponent<NavigationProps> = ({
  navigationMainList,
  navigationPlaylistList,
  navigationMusicList,
}) => {
  return (
    <div>
      <NavigationMenu
        navigationMainList={navigationMainList}
        navigationPlaylistList={navigationPlaylistList}
        navigationMusicList={navigationMusicList}
      />
      <Playlist />
      <Playing />
    </div>
  );
};

export default Navigation;
