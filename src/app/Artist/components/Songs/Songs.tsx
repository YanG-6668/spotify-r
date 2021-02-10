import React from "react";
import "./Songs.sass";
import {
  FaThumbsUp,
  RiTimerFlashLine,
  BsCheck,
  BsPlus,
  BsArrowUpRight,
  BsArrowDownRight,
} from "react-icons/all";
import classNames from "classnames";

import { SongsItem } from "../../../types";

interface SongsProps {
  songs: SongsItem[];
}

const Songs: React.FunctionComponent<SongsProps> = ({ songs }) => {
  const popularTracksTitle = classNames("popular-tracks__track-title", {
    "track-width": true,
  });

  return (
    <div className="popular-tracks">
      <div className="popular-tracks__heading">
        <div className="popular-tracks__heading-number">#</div>
        <div className="popular-tracks__heading-title">song</div>
        <div className="popular-tracks__heading-length">
          <RiTimerFlashLine />
        </div>
        <div className="popular-tracks__heading-popularity">
          <FaThumbsUp />
        </div>
      </div>

      {songs.map((song, i) => (
        <div key={song.id} className="popular-tracks__track">
          <div className="popular-tracks__track-number">{i + 1}</div>
          <div className="popular-tracks__track-added">
            {song.icon ? <BsCheck /> : <BsPlus />}
          </div>
          <div className={popularTracksTitle}>{song.title}</div>
          <div className="popular-tracks__track-explicit">
            {song.explicit ? "explicit" : null}
          </div>
          <div className="popular-tracks__track-length">{song.length}</div>
          <div className="popular-tracks__track-popularity">
            {song.popularity ? <BsArrowUpRight /> : <BsArrowDownRight />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Songs;
