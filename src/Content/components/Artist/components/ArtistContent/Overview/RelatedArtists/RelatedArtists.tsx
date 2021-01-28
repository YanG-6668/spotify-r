import React, { Fragment } from 'react';

import './RelatedArtists.sass';
import OverviewTitle from '../../../../../../../Ui/OverviewTitle';

type Props = {
  artistsData: { id: number, title: string, img: string }[],
}

const RelatedArtists: React.FunctionComponent<Props> = ({ artistsData }) => {
  return (
    <Fragment>
      <OverviewTitle title='Related Artists' />
      <div className="related-artists">
        {artistsData.slice(0, 7).map(artist => (
          <a key={artist.id} href="#" className="related-artists__artist">
            <div className="related-artists__artist-img">
              <img src={artist.img} alt="" />
            </div>
            <div className="related-artists__artist-name">{artist.title}</div>
          </a>
        ))}
      </div>
    </Fragment>
  );
}

export default RelatedArtists;
