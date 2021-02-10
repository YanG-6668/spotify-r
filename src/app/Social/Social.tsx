import React from "react";
import "./Social.sass";
import { BsFillPersonFill } from "react-icons/bs";

import Button from "../../Ui/Button";
import { FriendsItem } from "../types";

interface SocialProps {
  friends: FriendsItem[];
}

const Social: React.FunctionComponent<SocialProps> = ({ friends }) => {
  return (
    <div className="social">
      <div className="social__friends">
        {friends.map((friend) => (
          <a key={friend.id} href="/to" className="social__friends-friend">
            <BsFillPersonFill />
            <span>{friend.title}</span>
          </a>
        ))}
      </div>
      <Button color="light" title="Find Friends" />
    </div>
  );
};

export default Social;
