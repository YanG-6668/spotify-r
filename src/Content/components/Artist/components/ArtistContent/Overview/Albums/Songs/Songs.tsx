import React from 'react';

import './Songs.sass';

import { BsCheck, BsPlus, BsArrowUpRight, BsArrowDownRight } from 'react-icons/bs';
import { FaThumbsUp } from 'react-icons/fa';
import { RiTimerFlashLine } from 'react-icons/ri';

type Props = {
  songsData: { id: number, icon: boolean, title: string, explicit: boolean, plays: string, length: string, popularity: boolean, img: string }[],
}

const Songs: React.FunctionComponent<Props> = ({songsData}) => {
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

      {songsData.map((song, i) => (
        <div key={song.id} className="popular-tracks__track">
          <div className="popular-tracks__track-number">{i + 1}</div>
          <div className="popular-tracks__track-added">
            {song.icon ? <BsCheck /> : <BsPlus />}
          </div>
          <div className="popular-tracks__track-title track-width">{song.title}</div>
          <div className="popular-tracks__track-explicit">
            {song.explicit ? "explicit" : null}
          </div>
          <div className="popular-tracks__track-length">
            {song.length}
          </div>
          <div className="popular-tracks__track-popularity">
            {song.popularity ? <BsArrowUpRight /> : <BsArrowDownRight />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Songs;
