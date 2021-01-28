import React, { Fragment, useState } from 'react';

import './PopularTracks.sass';
import { BsCheck, BsPlus } from 'react-icons/bs';

import OverviewTitle from '../../../../../../../Ui/OverviewTitle';
import Button from '../../../../../../../Ui/Button';

type Props = {
  songsData: { id: number, icon: boolean, title: string, explicit: boolean, plays: string, length: string, popularity: boolean, img: string }[],
}

const PopularTracks: React.FunctionComponent<Props> = ({songsData}) => {

  const [showSongs, setShowSongs] = useState(false);

  const clickShowHandler = (): void => {
    setShowSongs(!showSongs);
  }
  const numberOfItems: number = showSongs ? songsData.length : 5;

  return (
    <Fragment>
      <OverviewTitle title='Popular'/>
      <div className="popular-tracks">
        {songsData.slice(0, numberOfItems).map((song, i) => (
          <div key={song.id} className="popular-tracks__track">
            <div className="popular-tracks__track-img">
              <img src={song.img} alt="" />
            </div>
            <div className="popular-tracks__track-number">{i + 1}</div>
            <div className="popular-tracks__track-added">
              {song.icon ? <BsCheck /> : <BsPlus />}
            </div>
            <div className="popular-tracks__track-title">
              {song.title}
            </div>
            <div className="popular-tracks__track-explicit">
              {song.explicit ? 'explicit' : null}
            </div>
            <div className="popular-tracks__track-plays">
              {song.plays}
            </div>
          </div>

        ))}

      </div>
      <Button onClick={clickShowHandler} buttonClass='button-light' title={!showSongs ? 'show more' : 'show less'}/>
    </Fragment>
  );
}

export default PopularTracks;
