import React from "react";
import "./Playing.sass";
import { BsCheck } from "react-icons/bs";

const Playing: React.FunctionComponent = () => {
  return (
    <div className="playing">
      <div className="playing__img">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg"
          alt="Album"
        />
      </div>
      <div className="playing__song">
        <a href="/to" className="playing__song-name">
          Some Type of Love
        </a>
        <a href="/to" className="playing__song-artist">
          Charlie Puth
        </a>
      </div>
      <a href="/to" className="playing__add">
        <BsCheck />
      </a>
    </div>
  );
};

export default Playing;
