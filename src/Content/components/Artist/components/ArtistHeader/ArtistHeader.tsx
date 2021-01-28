import React from 'react';

import './ArtistHeader.sass';

import ArtistInfo from './components/ArtistInfo';
import ArtistNavigation from './components/ArtistNavigation';

type Props = {
  tabsData: { id: number, title: string }[],
  onChange: (option: { id: number, title: string }) => void,
}

const ArtistHeader: React.FunctionComponent<Props> = ({ tabsData, onChange }) => {
  return (
    <div className="artist-header">
      <ArtistInfo />
      <ArtistNavigation
        tabsData={tabsData}
        onChange={onChange}
      />
    </div>
  );
}

export default ArtistHeader;
