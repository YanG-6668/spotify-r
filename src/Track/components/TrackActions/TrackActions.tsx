import React from 'react';

import './TrackActions.sass';

import { IoMdSkipBackward, IoMdSkipForward, IoMdPlay } from 'react-icons/io';

const TrackActions: React.FunctionComponent = () => {
  return (
    <div className="track-actions">
      <a href="#" type="button" className="track-actions__skipback">
        <IoMdSkipBackward />
      </a>
      <a href="#" type="button" className="track-actions__play">
        <IoMdPlay />
      </a>
      <a href="#" type="button" className="track-actions__skipforward">
        <IoMdSkipForward />
      </a>
    </div>
  );
}

export default TrackActions;
