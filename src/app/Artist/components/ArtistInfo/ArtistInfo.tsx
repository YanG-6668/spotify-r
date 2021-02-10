import React from "react";
import "./ArtistInfo.sass";
import { IoMdPlay, IoIosMore, BsCheck } from "react-icons/all";
import Button from "../../../../Ui/Button";

const ArtistInfo: React.FunctionComponent = () => {
  return (
    <div className="artist-info">
      <div className="artist-info__info">
        <div className="artist-info__info-img">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg"
            alt="g-eazy"
          />
          <span className="artist-info__info-check">
            <BsCheck />
          </span>
        </div>
        <div className="artist-info__info-meta">
          <div className="artist-info__info-type">artist</div>
          <div className="artist-info__info-name">G-Eazy</div>
          <div className="artist-info__info-actions">
            <Button color="dark" icon={<IoMdPlay />} title="Play" />
            <Button color="light" title="follow" />
            <button type="button" className="artist-info__info-more">
              <IoIosMore />
            </button>
          </div>
        </div>
      </div>
      <div className="artist-info__listened">
        <div className="artist-info__listened-counter">15,662,810</div>
        <div className="artist-info__listened-label">monthly listeners</div>
      </div>
    </div>
  );
};

export default ArtistInfo;
