import React from "react";
import classNames from "classnames";
import "./Dropdowns.sass";

interface DropdownMenuProps {
  dropMenu: boolean;
}

const Dropdowns: React.FunctionComponent<DropdownMenuProps> = ({
  dropMenu,
}) => {
  const dropdownMenu = classNames("dropdown-menu", {
    "is-active": dropMenu,
  });

  return (
    <ul className={dropdownMenu}>
      <li className="dropdown-menu__item">
        <a href="/to" className="dropdown-menu__link">
          Private Session
        </a>
      </li>
      <li className="dropdown-menu__item">
        <a href="/to" className="dropdown-menu__link">
          Account
        </a>
      </li>
      <li className="dropdown-menu__item">
        <a href="/to" className="dropdown-menu__link">
          Settings
        </a>
      </li>
      <li className="dropdown-menu__item">
        <a href="/to" className="dropdown-menu__link">
          Log Out
        </a>
      </li>
    </ul>
  );
};

export default Dropdowns;
