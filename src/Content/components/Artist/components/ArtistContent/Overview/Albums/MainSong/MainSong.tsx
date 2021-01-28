import React from 'react';

import './MainSong.sass';
import Button from '../../../../../../../../Ui/Button';

import { IoIosMore } from 'react-icons/io';

const MainSong: React.FunctionComponent = () => {
  return (
    <div className="main-song">
      <div className="main-song__img">
        <img src="./spotify-user.jpg" alt="" />
      </div>
      <div className="main-song__meta">
        <div className="main-song__meta-year">2015</div>
        <div className="main-song__meta-name">When It's Dark Out</div>
        <div className="main-song__actions">
          <Button buttonClass="button-light main-song__actions-save" title="save" />
          <button type="button" className="main-song__actions-more">
            <IoIosMore />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainSong;
