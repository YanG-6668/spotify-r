import React from 'react';

import './ArtistInfo.sass';
import Button from '../../../../../../../Ui/Button';

import { IoMdPlay, IoIosMore } from 'react-icons/io';
import { BsCheck } from 'react-icons/bs';

const ArtistInfo: React.FunctionComponent = () => {

  return (
    <div className="artist-info">
      <div className="artist-info__info">
        <div className="artist-info__info-img">
          <img src="./artist-img.jpg" alt="" />
          <span className="artist-info__info-check">
            <BsCheck />
          </span>
        </div>
        <div className="artist-info__info-meta">
          <div className="artist-info__info-type">
            artist
                </div>
          <div className="artist-info__info-name">
            G-Eazy
                </div>
          <div className="artist-info__info-actions">
            <Button 
              buttonClass='button-dark artist-info__info-btn' 
              icon={<IoMdPlay/>} 
              title='Play'
            />
            <Button 
              buttonClass='button-light' 
              title='follow'
            />
            <button type="button" className="artist-info__info-more">
              <IoIosMore />
            </button>
          </div>
        </div>
      </div>
      <div className="artist-info__listened">
        <div className="artist-info__listened-counter">15,662,810</div>
        <div className="artist-info__listened-label">monthly listeners</div>
      </div>
    </div>
  );
}

export default ArtistInfo;
