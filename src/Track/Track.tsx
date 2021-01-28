import React from 'react';

import './Track.sass';

import TrackActions from './components/TrackActions';
import TrackProgress from './components/TrackProgress';
import TrackOptions from './components/TrackOptions';

const Track: React.FunctionComponent = () => {
  return (
    <div className="track">
      <TrackActions />
      <TrackProgress />
      <TrackOptions />
    </div>
  );
}

export default Track;
