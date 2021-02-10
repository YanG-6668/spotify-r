import React, { useState } from "react";
import "./ArtistNavigation.sass";
import { TabsItem } from "../../../types";

interface ArtistNavigationProps {
  tabs: TabsItem[];
  onChange: (option: { id: number; title: string }) => void;
}

const ArtistNavigation: React.FunctionComponent<ArtistNavigationProps> = ({
  onChange,
  tabs,
}) => {
  const [tabPosition, setTabPosition] = useState({
    elementLeft: 0,
    elementWidth: 100,
  });

  const clickTabHandler = (
    e: React.MouseEvent<HTMLElement>,
    option: { id: number; title: string }
  ): void => {
    const elL = (e.target as any).offsetLeft;
    const elW = (e.target as any).offsetWidth;
    setTabPosition({
      elementLeft: elL,
      elementWidth: elW,
    });
    onChange(option);
  };

  return (
    <div className="artist-navigation">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className="tabs__btn"
            onClick={(e) => clickTabHandler(e, tab)}
          >
            {tab.title}
          </button>
        ))}
        <span
          className="is-active"
          style={{
            left: `${tabPosition.elementLeft}px`,
            width: `${tabPosition.elementWidth - 30}px`,
          }}
        ></span>
      </div>

      <div className="friends">
        <a href="/to" className="friends__friend">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg"
            alt=""
          />
        </a>
        <a href="/to" className="friends__friend">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg"
            alt=""
          />
        </a>
        <a href="/to" className="friends__friend">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default ArtistNavigation;
