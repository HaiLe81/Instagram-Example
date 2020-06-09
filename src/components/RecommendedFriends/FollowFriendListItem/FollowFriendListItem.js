import React, { useContext } from "react";
import "./FollowFriendListItem.css";
import { DataContext } from "../../../DataProvider/DataProvider";
import { follow } from "../../../services/suggestionFollow";
import { defaultConfig } from "../../../configs/index";

export default function FollowFriendListItem(props) {
  const context = useContext(DataContext);

  const { item } = props;
  const followUser = () => {
    console.log('userId', context.user.id, item.id)
    follow(context.user.id, item.id).then((doc) => {
      console.log("doc", doc);
    });
  };
  return (
    <div className="itemFlow">
      <div className="left">
        <img
          src={`${
            item.urlAvatar
              ? item.urlAvatar
              : defaultConfig.urlAvatar
          }`}
          alt="not found"
        />
        <div className="content">
          <div>
            <div>
              <a href="/" className="name">
                {item.username}
              </a>
            </div>
          </div>
          <div className="reqForYou">Gợi ý cho bạn</div>
        </div>
      </div>
      <div className="right" onClick={followUser}>
        Theo dõi
      </div>
    </div>
  );
}
