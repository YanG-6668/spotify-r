import React, { useState } from "react";
import "./Navbar.sass";

import Search from "./components/Search";
import User from "./components/User";

const Navbar: React.FunctionComponent = () => {
  const [dropMenu, setDropMenu] = useState(false);
  const [title, setTitle] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setTitle("");
    }
  };

  const clickHandlerMenu = (): void => {
    setDropMenu(!dropMenu);
  };

  return (
    <div className="navbar">
      <Search
        changeHandler={changeHandler}
        keyPressHandler={keyPressHandler}
        title={title}
      />
      <User clickHandlerMenu={clickHandlerMenu} dropMenu={dropMenu} />
    </div>
  );
};

export default Navbar;
