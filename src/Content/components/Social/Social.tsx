import React from 'react';

import './Social.sass';
import Button from '../../../Ui/Button';

import { BsFillPersonFill } from 'react-icons/bs';

type Props = {
  friendsData: { id: number, title: string }[],
}

const Social: React.FunctionComponent<Props> = ({ friendsData }) => {
  return (
    <div className="social">
      <div className="social__friends">

        {friendsData.map(friend => (
          <a key={friend.id} href="#" className="social__friends-friend">
            <BsFillPersonFill />
            <span>{friend.title}</span>
          </a>
        ))}

      </div>
      <Button buttonClass='button-light' title='Find Friends' />
    </div>
  );
}

export default Social;
