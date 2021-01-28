import React from 'react';

import './Content.sass';

import Navigation from './components/Navigation';
import Artist from './components/Artist';
import Social from './components/Social';

type Props = {
  friendsData: { id: number, title: string }[],
  playlistData: { id: number, title: string }[],
  tabsData: { id: number, title: string }[],
  artistsData: { id: number, title: string, img: string }[],
  songsData: { id: number, icon: boolean, title: string, explicit: boolean, plays: string, length: string, popularity: boolean, img: string }[],
}

const Content: React.FunctionComponent<Props> = ({ friendsData, playlistData, tabsData, artistsData, songsData }) => {
  return (
    <div className="content">
      <Navigation 
        playlistData={playlistData} 
      />
      <Artist 
        tabsData={tabsData} 
        artistsData={artistsData} 
        songsData={songsData}
      />
      <Social 
        friendsData={friendsData} 
      />
    </div>
  );
}

export default Content;
