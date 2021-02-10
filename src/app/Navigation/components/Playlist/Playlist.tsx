import React from "react";
import "./Playlist.sass";
import { BsPlusCircle } from "react-icons/bs";

const Playlist: React.FunctionComponent = () => {
  return (
    <div className="playlist">
      <a href="/to" className="playlist__link">
        <BsPlusCircle />
        <span>New Playlist</span>
      </a>
    </div>
  );
};

export default Playlist;
