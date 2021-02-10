import React from "react";
import "./Search.sass";
import { RiArrowLeftSLine, RiArrowRightSLine, FaSearch } from "react-icons/all";
import classNames from "classnames";

interface SearchProps {
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  keyPressHandler: (event: React.KeyboardEvent) => void;
  title: string;
}

const Search: React.FunctionComponent<SearchProps> = ({
  changeHandler,
  keyPressHandler,
  title,
}) => {
  const searchFlowsLeft = classNames("search__flows-left", {
    "is-active": true,
  });

  return (
    <div className="search">
      <div className="search__flows">
        <a href="/to" type="button" className={searchFlowsLeft}>
          <RiArrowLeftSLine />
        </a>
        <a href="/to" type="button" className="search__flows-right">
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
};

export default Search;
