import React from 'react';

import './Navigation.sass';

import NavigationMenu from './components/NavigationMenu';
import Playlist from './components/Playlist';
import Playing from './components/Playing';

type Props = {
  playlistData: {id: number, title: string }[],
}

const Navigation: React.FunctionComponent<Props> = ({playlistData}) => {

  return (
    <div>
      <NavigationMenu playlistData={playlistData}/>
      <Playlist />
      <Playing />
    </div>
  );
}

export default Navigation;
