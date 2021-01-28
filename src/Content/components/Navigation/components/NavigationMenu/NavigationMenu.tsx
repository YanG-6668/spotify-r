import React, { useState } from 'react';
import { IoIosArrowDown, IoIosMusicalNotes, IoIosBrowsers, IoIosRadio } from 'react-icons/io';
import { BsFillPeopleFill, BsFillPersonFill, BsFileEarmark } from 'react-icons/bs';
import { FaHeadphones } from 'react-icons/fa';

import './NavigationMenu.sass';

type Props = {
  playlistData: { id: number, title: string }[],
}

const NavigationMenu: React.FunctionComponent<Props> = ({ playlistData }) => {

  const [main, setMain] = useState(false);
  const [yourMusic, setYourMusic] = useState(false);
  const [playlist, setPlaylist] = useState(false);

  const onClickHandlerMain = () => {
    setMain(!main);
  }
  const onClickHandlerMusic = () => {
    setYourMusic(!yourMusic);
  }
  const onClickHandlerPlaylist = () => {
    setPlaylist(!playlist);
  }

  return (
    <div className="navigation">
      <div className="navigation__list">
        <div className={`navigation__list-title ${main ? 'is-active' : 'is-close'}`} onClick={onClickHandlerMain}>
          <span>main</span>
          <IoIosArrowDown />
        </div>
        <div className={`navigation__list-container ${main ? 'is-active' : 'is-close'}`}>
          <a href="#" className="navigation__list-item">
            <IoIosBrowsers />
            <span>Browse</span>
          </a>
          <a href="#" className="navigation__list-item">
            <BsFillPeopleFill />
            <span>Activity</span>
          </a>
          <a href="#" className="navigation__list-item">
            <IoIosRadio />
            <span>Radio</span>
          </a>
        </div>
      </div>
      <div className="navigation__list">
        <div className={`navigation__list-title ${yourMusic ? 'is-active' : 'is-close'}`} onClick={onClickHandlerMusic}>
          your music
            <IoIosArrowDown />
        </div>
        <div className={`navigation__list-container ${yourMusic ? 'is-active' : 'is-close'}`}>
          <a href="#" className="navigation__list-item">
            <FaHeadphones />
              Songs
            </a>
          <a href="#" className="navigation__list-item">
            <IoIosMusicalNotes />
              Albums
            </a>
          <a href="#" className="navigation__list-item">
            <BsFillPersonFill />
              Artists
            </a>
          <a href="#" className="navigation__list-item">
            <BsFileEarmark />
              Local Files
            </a>
        </div>
      </div>
      <div className="navigation__list">
        <div className={`navigation__list-title ${playlist ? 'is-active' : 'is-close'}`} onClick={onClickHandlerPlaylist}>
          playlist
            <IoIosArrowDown />
        </div>
        <div className={`navigation__list-container ${playlist ? 'is-active' : 'is-close'}`}>

          {playlistData.map(item => (
            <a key={item.id} href="#" className="navigation__list-item">
              <IoIosMusicalNotes />
              <span>{item.title}</span>
            </a>
          ))}

        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;
