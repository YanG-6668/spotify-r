import React from 'react';

import Dropdowns from '../Dropdowns';
import './User.sass';

import { IoIosArrowDown } from 'react-icons/io';
import { FaBell, FaDownload } from 'react-icons/fa';

type Props = {
  clickHandlerMenu: () => void,
  dropMenu: boolean
}

const User: React.FunctionComponent<Props> = ({clickHandlerMenu, dropMenu}) => {

  return (
    <>
      <div className="user">
        <a href="#" type="button" className="icon-link user__notification">
          <FaBell />
        </a>
        <a href="#" type="button" className="icon-link user__download">
          <FaDownload />
        </a>
        <div className="user__author">
          <img src="./spotify-user.jpg" alt="User" className="user__author-img" />
          <span className="user__author-name">Adam Lowenthal</span>
        </div>
        <a href="#" type="button" className="icon-link user__menu" onClick={clickHandlerMenu}>
          <IoIosArrowDown />
        </a>
      </div>
      <Dropdowns dropMenu={dropMenu} />
    </>
  );
}

export default User;
