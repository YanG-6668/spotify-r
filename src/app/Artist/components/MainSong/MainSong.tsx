import React from "react";
import "./MainSong.sass";
import { IoIosMore } from "react-icons/io";

import Button from "../../../../Ui/Button";

const MainSong: React.FunctionComponent = () => {
  return (
    <div className="main-song">
      <div className="main-song__img">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg"
          alt=""
        />
      </div>
      <div className="main-song__meta">
        <div className="main-song__meta-year">2015</div>
        <div className="main-song__meta-name">When It's Dark Out</div>
        <div className="main-song__actions">
          <Button color="light" title="save" />
          <button type="button" className="main-song__actions-more">
            <IoIosMore />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSong;
