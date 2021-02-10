import React from "react";
import "./Overview.sass";

import LatestRelease from "../LatestRelease";
import PopularTracks from "../PopularTracks";
import RelatedArtists from "../RelatedArtists";
import Albums from "../Albums";
import { SongsItem, ArtistsItem } from "../../../types";

interface OverviewProps {
  artists: ArtistsItem[];
  songs: SongsItem[];
}

const Overview: React.FunctionComponent<OverviewProps> = ({
  artists,
  songs,
}) => {
  return (
    <div className="overview">
      <div className="overview__artist">
        <div className="overview__songs">
          <LatestRelease />
          <PopularTracks songs={songs} />
        </div>

        <div className="overview__related">
          <RelatedArtists artists={artists} />
        </div>
      </div>
      <div className="overview__albums">
        <Albums songs={songs} />
      </div>
    </div>
  );
};

export default Overview;
