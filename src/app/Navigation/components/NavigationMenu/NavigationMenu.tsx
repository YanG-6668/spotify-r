import React from "react";
import "./NavigationMenu.sass";

import AccordionMenu from "../AccordionMenu";
import { navigationList } from "../../../types";

interface NavigationMenuProps {
  navigationMainList: navigationList[];
  navigationPlaylistList: navigationList[];
  navigationMusicList: navigationList[];
}

const NavigationMenu: React.FunctionComponent<NavigationMenuProps> = ({
  navigationMainList,
  navigationPlaylistList,
  navigationMusicList,
}) => {
  return (
    <div className="navigation">
      <AccordionMenu title="Main" list={navigationMainList} />
      <AccordionMenu title="your music" list={navigationMusicList} />
      <AccordionMenu title="playlist" list={navigationPlaylistList} />
    </div>
  );
};

export default NavigationMenu;
