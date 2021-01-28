import React from 'react';

import './MediaCards.sass';
import { IoMdPlay } from 'react-icons/io';

type Props = {
  artistsData: { id: number, title: string, img: string }[],
}


const MediaCards: React.FunctionComponent<Props> = ({ artistsData }) => {
  return (
    <div className="media-cards">

      {artistsData.map(artist => (
        <div key={artist.id} className="media-card">
          <div className="media-card__img">
            <img src={artist.img} alt="" />
            <span className="media-card__img-icon">
              <IoMdPlay />
            </span>
          </div>
          <a href="#" className="media-card__name">
            {artist.title}
          </a>
        </div>
      ))}

    </div>
  );
}

export default MediaCards;
