import React from "react";
import "./MediaCards.sass";
import { IoMdPlay } from "react-icons/io";
import { ArtistsItem } from "../../../types";

interface MediaCardsProps {
  artists: ArtistsItem[];
}
const MediaCards: React.FunctionComponent<MediaCardsProps> = ({ artists }) => {
  return (
    <div className="media-cards">
      {artists.map((artist) => (
        <div key={artist.id} className="media-card">
          <div className="media-card__img">
            <img src={artist.img} alt="" />
            <span className="media-card__img-icon">
              <IoMdPlay />
            </span>
          </div>
          <a href="/to" className="media-card__name">
            {artist.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default MediaCards;
