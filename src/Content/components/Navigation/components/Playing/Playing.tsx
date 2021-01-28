import React from 'react';

import './Playing.sass';
import { BsCheck } from 'react-icons/bs';

const Playing: React.FunctionComponent = () => {

  return (
    <div className="playing">
      <div className="playing__img">
        <img src="./playing.jpg" alt="Album" />
      </div>
      <div className="playing__song">
        <a href="#" className="playing__song-name">Some Type of Love</a>
        <a href="#" className="playing__song-artist">Charlie Puth</a>
      </div>
      <a href="#" className="playing__add">
        <BsCheck />
      </a>
    </div>
  );
}

export default Playing;
