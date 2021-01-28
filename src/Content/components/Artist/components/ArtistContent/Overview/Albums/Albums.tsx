import React, { Fragment } from 'react';

import MainSong from './MainSong';
import Songs from './Songs';
import './Albums.sass';

import { FaThLarge, FaListUl } from 'react-icons/fa';

type Props = {
  songsData: { id: number, icon: boolean, title: string, explicit: boolean, plays: string, length: string, popularity: boolean, img: string }[],
}

const Albums: React.FunctionComponent<Props> = ({songsData}) => {
  return (
    <Fragment>
      <div className="overview__albums-title">
        <span className="section-title">albums</span>
        <div className="view-type">
          <span className="view-type__item is-active"><FaListUl /></span>
          <span className="view-type__item"><FaThLarge /></span>
        </div>
      </div>
      <div className="album">
        <MainSong />
        <div className="album__tracks">
          <Songs songsData={songsData}/>
        </div>
      </div>
    </Fragment>
  );
}

export default Albums;
