import React from 'react';

import './Overview.sass';

import LatestRelease from './LatestRelease';
import PopularTracks from './PopularTracks';
import RelatedArtists from './RelatedArtists';

import Albums from './Albums';

type Props = {
  artistsData: { id: number, title: string, img: string }[],
  songsData: { id: number, icon: boolean, title: string, explicit: boolean, plays: string, length: string, popularity: boolean, img: string }[],
}

const Overview: React.FunctionComponent<Props> = ({ artistsData, songsData }) => {
  return (
    <div className="overview">
      <div className="overview__artist">
        <div className="overview__songs">
          <LatestRelease />
          <PopularTracks songsData={songsData} />
        </div>

        <div className="overview__related">
          <RelatedArtists artistsData={artistsData} />
        </div>
      </div>
      <div className="overview__albums">
        <Albums songsData={songsData}/>
      </div>
    </div>
  );
}

export default Overview;
