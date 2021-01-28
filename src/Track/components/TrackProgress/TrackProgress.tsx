import React from 'react';

import './TrackProgress.sass';

const TrackProgress: React.FunctionComponent = () => {

  return (
    <div className="track-progress">
      <span className="track-progress__start">
        0:01
        </span>
      <div className="track-progress__bar">
        <div className="track-progress__line">
          <div className="track-progress__active"></div>
        </div>
      </div>
      <span className="track-progress__finish">
        3:07
        </span>
    </div>
  );
}

export default TrackProgress;
