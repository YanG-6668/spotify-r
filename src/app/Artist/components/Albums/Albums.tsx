import React, { Fragment } from "react";
import { FaThLarge, FaListUl } from "react-icons/fa";
import "./Albums.sass";
import classNames from "classnames";

import MainSong from "../MainSong";
import Songs from "../Songs";
import { SongsItem } from "../../../types";

interface AlbumsProps {
  songs: SongsItem[];
}

const Albums: React.FunctionComponent<AlbumsProps> = ({ songs }) => {
  const viewTypeItem = classNames("view-type__item", {
    "is-active": true,
  });

  return (
    <Fragment>
      <div className="overview__albums-title">
        <span className="section-title">albums</span>
        <div className="view-type">
          <span className={viewTypeItem}>
            <FaListUl />
          </span>
          <span className="view-type__item">
            <FaThLarge />
          </span>
        </div>
      </div>
      <div className="album">
        <MainSong />
        <div className="album__tracks">
          <Songs songs={songs} />
        </div>
      </div>
    </Fragment>
  );
};

export default Albums;
