import React, { useState } from 'react';
import './ArtistNavigation.sass';

type Props = {
  tabsData: {id : number, title: string}[],
  onChange: (option: {id : number, title: string}) => void,
}

const ArtistNavigation: React.FunctionComponent<Props> = ({tabsData, onChange}) => {

  const [tabPosition, setTabPosition] = useState({
    elementLeft: 0,
    elementWidth: 100
  });

  const clickTabHandler = (e: React.MouseEvent<HTMLElement>, option: {id : number, title: string}): void => {
    const elL = (e.target as any).offsetLeft;
    const elW = (e.target as any).offsetWidth;
    setTabPosition({
      elementLeft: elL,
      elementWidth: elW
    });
    onChange(option);
  }

  return (
    <div className="artist-navigation">
      <div className="tabs">
        {tabsData.map(tab => (
          <button
            key={tab.id}
            type="button" 
            className="tabs__btn" 
            onClick={(e) => clickTabHandler(e, tab)}
          >
            {tab.title}
          </button>
        ))}
        <span className="is-active" style={{
          left: `${tabPosition.elementLeft}px`,
          width: `${tabPosition.elementWidth - 30}px`
        }}></span>
      </div>

      <div className="friends">
        <a href="#" className="friends__friend">
          <img src="./spotify-user.jpg" alt="" />
        </a>
        <a href="#" className="friends__friend">
          <img src="./spotify-user.jpg" alt="" />
        </a>
        <a href="3" className="friends__friend">
          <img src="./spotify-user.jpg" alt="" />
        </a>
      </div>
    </div>
  );
}

export default ArtistNavigation;
