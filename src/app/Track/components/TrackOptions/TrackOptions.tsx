import React from "react";
import "./TrackOptions.sass";
import {
  IoMenuSharp,
  IoPhonePortraitSharp,
  IoVolumeHigh,
  HiRefresh,
  BsShuffle,
} from "react-icons/all";

const TrackOptions: React.FunctionComponent = () => {
  return (
    <div className="track-options">
      <a href="/to" className="track-options__lyrics">
        Lyrics
      </a>
      <div className="track-options__controls">
        <a href="/to" className="track-options__control">
          <IoMenuSharp />
        </a>
        <a href="/to" className="track-options__control">
          <BsShuffle />
        </a>
        <a href="/to" className="track-options__control">
          <HiRefresh />
        </a>
        <a href="/to" className="track-options__control">
          <IoPhonePortraitSharp />
          <span>Devices Available</span>
        </a>
        <a href="/to" className="track-options__control">
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
};

export default TrackOptions;
