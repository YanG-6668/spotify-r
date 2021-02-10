import React from "react";
import { IoIosArrowDown, FaBell, FaDownload } from "react-icons/all";
import "./User.sass";
import Dropdowns from "../Dropdowns";

interface UserProps {
  clickHandlerMenu: () => void;
  dropMenu: boolean;
}

const User: React.FunctionComponent<UserProps> = ({
  clickHandlerMenu,
  dropMenu,
}) => {
  return (
    <>
      <div className="user">
        <a href="/to" type="button" className="icon-link user__notification">
          <FaBell />
        </a>
        <a href="/to" type="button" className="icon-link user__download">
          <FaDownload />
        </a>
        <div className="user__author">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/adam_proPic.jpg"
            alt="User"
            className="user__author-img"
          />
          <span className="user__author-name">Adam Lowenthal</span>
        </div>
        <a
          href="#"
          type="button"
          className="icon-link user__menu"
          onClick={clickHandlerMenu}
        >
          <IoIosArrowDown />
        </a>
      </div>
      <Dropdowns dropMenu={dropMenu} />
    </>
  );
};

export default User;
