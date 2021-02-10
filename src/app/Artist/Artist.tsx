import React, { useState } from "react";
import "./Artist.sass";

import ArtistHeader from "./components/ArtistHeader";
import ArtistContent from "./components/ArtistContent";
import { TabsItem, ArtistsItem, SongsItem } from "../types";

interface ArtistProps {
  tabs: TabsItem[];
  artists: ArtistsItem[];
  songs: SongsItem[];
}

const Artist: React.FunctionComponent<ArtistProps> = ({
  tabs,
  artists,
  songs,
}) => {
  const [tabItem, setTabItem] = useState({ id: 1, title: "overview" });

  const handleOnChange = (option: { id: number; title: string }): void => {
    setTabItem(option);
  };

  return (
    <div className="artist">
      <ArtistHeader tabs={tabs} onChange={handleOnChange} />
      <ArtistContent artists={artists} songs={songs} tabItem={tabItem} />
    </div>
  );
};

export default Artist;
