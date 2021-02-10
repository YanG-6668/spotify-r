import React from "react";
import "./ArtistContent.sass";

import Overview from "../Overview";
import MediaCards from "../MediaCards";
import { SongsItem, ArtistsItem } from "../../../types";

interface ArtistContentProps {
  artists: ArtistsItem[];
  songs: SongsItem[];
  tabItem: { id: number; title: string };
}

const ArtistContent: React.FunctionComponent<ArtistContentProps> = ({
  tabItem,
  artists,
  songs,
}) => {
  return (
    <div className="artist-content">
      <div className="tab-content">
        {tabItem.id === 1 ? (
          <Overview artists={artists} songs={songs} />
        ) : (
          <MediaCards artists={artists} />
        )}
      </div>
    </div>
  );
};

export default ArtistContent;
