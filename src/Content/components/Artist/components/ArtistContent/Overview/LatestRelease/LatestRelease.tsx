import React, { Fragment } from 'react';

import './LatestRelease.sass';

import OverviewTitle from '../../../../../../../Ui/OverviewTitle';

const LatestRelease: React.FunctionComponent = () => {
  return (
    <Fragment>
      <OverviewTitle title='Latest Release'/>
      <div className="latest-release">
        <div className="latest-release__img">
          <img src="./spotify-user.jpg" alt="" />
        </div>
        <div className="latest-release__song">
          <div className="latest-release__song-title">Drifting (Track Commentary)</div>
          <div className="latest-release__song-date">
            <span className="day">4</span>
            <span className="month">December</span>
            <span className="year">2015</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default LatestRelease;
