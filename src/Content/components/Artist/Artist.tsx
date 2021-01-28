import React, { useState } from 'react';

import './Artist.sass';

import ArtistHeader from './components/ArtistHeader';
import ArtistContent from './components/ArtistContent';

type Props = {
  tabsData: { id: number, title: string }[],
  artistsData: { id: number, title: string, img: string }[],
  songsData: { id: number, icon: boolean, title: string, explicit: boolean, plays: string, length: string, popularity: boolean, img: string }[],
}

const Artist: React.FunctionComponent<Props> = ({ tabsData, artistsData, songsData }) => {

  const [tabItem, setTabItem] = useState({ id: 1, title: "overview" });

  const handleOnChange = ( option : {id : number, title: string} ): void => {
    setTabItem(option);
  }

  return (
    <div className="artist">
      <ArtistHeader 
        tabsData={tabsData} 
        onChange={handleOnChange}
      />
      <ArtistContent 
        artistsData={artistsData} 
        songsData={songsData} 
        tabItem={tabItem}
      />
    </div>
  );
}

export default Artist;
