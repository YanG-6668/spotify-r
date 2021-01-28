import React from 'react';

import './TrackOptions.sass';

import { IoMenuSharp, IoPhonePortraitSharp, IoVolumeHigh } from 'react-icons/io5';
import { HiRefresh } from 'react-icons/hi';
import { BsShuffle } from 'react-icons/bs';

const TrackOptions: React.FunctionComponent = () => {
  return (
    <div className="track-options">
      <a href="#" className="track-options__lyrics">Lyrics</a>
      <div className="track-options__controls">
        <a href="#" type="button" className="track-options__control">
          <IoMenuSharp />
        </a>
        <a href="#" type="button" className="track-options__control">
          <BsShuffle />
        </a>
        <a href="#" type="button" className="track-options__control">
          <HiRefresh />
        </a>
        <a href="#" type="button" className="track-options__control">
          <IoPhonePortraitSharp />
          <span>Devices Available</span>
        </a>
        <a href="#" type="button" className="track-options__control">
          <IoVolumeHigh />
          <div className="track-options__volume">
            <div className="track-options__volume-line">
              <div className="track-options__volume-active"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default TrackOptions;
