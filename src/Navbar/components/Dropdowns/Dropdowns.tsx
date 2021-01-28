import React from 'react';

import './Dropdowns.sass';

type DropdownMenu = {
  dropMenu: boolean,
}

const Dropdowns: React.FunctionComponent<DropdownMenu> = ({ dropMenu }: DropdownMenu) => {

  return (
    <ul className={`dropdown-menu ${dropMenu ? 'is-active' : ''}`}>
      <li className="dropdown-menu__item"><a href="#" className="dropdown-menu__link">Private Session</a></li>
      <li className="dropdown-menu__item"><a href="#" className="dropdown-menu__link">Account</a></li>
      <li className="dropdown-menu__item"><a href="#" className="dropdown-menu__link">Settings</a></li>
      <li className="dropdown-menu__item"><a href="#" className="dropdown-menu__link">Log Out</a></li>
    </ul>
  );
}

export default Dropdowns;
