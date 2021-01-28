import React, { useState } from 'react';

import './ArtistContent.sass';

import Overview from './Overview';
import MediaCards from './MediaCards';

type Props = {
  artistsData: { id: number, title: string, img: string }[],
  songsData: { id: number, icon: boolean, title: string, explicit: boolean, plays: string, length: string, popularity: boolean, img: string }[],
  
  tabItem: { id: number, title: string },
}


const ArtistContent: React.FunctionComponent<Props> = ({ artistsData, songsData, tabItem }) => {

  return (
    <div className="artist-content">

      <div className="tab-content">

        <div className={`tab-content__item 
        ${tabItem.id === 1 ? 'is-active' : ''}`}>
          <Overview 
            artistsData={artistsData} 
            songsData={songsData} 
          />
        </div>

        <div className={`tab-content__item 
        ${tabItem.id === 2 ? 'is-active' : ''}`}>
          <MediaCards artistsData={artistsData} />
        </div>
      </div>
    </div>
  );
}

export default ArtistContent;
