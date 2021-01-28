import React from 'react';

import './Search.sass';

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';

type Props = {
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
  keyPressHandler: (event: React.KeyboardEvent) => void,
  title: string,
}

const Search: React.FunctionComponent<Props> = ({ changeHandler, keyPressHandler, title }) => {

  return (
    <div className="search">
      <div className="search__flows">
        <a href="#" type="button" className="search__flows-left is-active">
          <RiArrowLeftSLine />
        </a>
        <a href="#" type="button" className="search__flows-right">
          <RiArrowRightSLine />
        </a>
      </div>

      <form action="" className="search__form">
        <span className="search__form-icon">
          <FaSearch />
        </span>
        <input
          type="text"
          onChange={changeHandler}
          value={title}
          className="search__form-input"
          placeholder="Search"
          onKeyPress={keyPressHandler}
        />
      </form>
    </div>
  );
}

export default Search;
