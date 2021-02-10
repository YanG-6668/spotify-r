import React, { Fragment } from "react";
import "./RelatedArtists.sass";

import OverviewTitle from "../../../../Ui/OverviewTitle";
import { ArtistsItem } from "../../../types";

interface RelatedArtistsProps {
  artists: ArtistsItem[];
}

const RelatedArtists: React.FunctionComponent<RelatedArtistsProps> = ({
  artists,
}) => {
  return (
    <Fragment>
      <OverviewTitle title="Related Artists" />
      <div className="related-artists">
        {artists.slice(0, 7).map((artist) => (
          <a key={artist.id} href="/to" className="related-artists__artist">
            <div className="related-artists__artist-img">
              <img src={artist.img} alt="" />
            </div>
            <div className="related-artists__artist-name">{artist.title}</div>
          </a>
        ))}
      </div>
    </Fragment>
  );
};

export default RelatedArtists;
