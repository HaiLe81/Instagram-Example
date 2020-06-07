import React, { useState, useEffect, useContext } from "react";
import "./RecommendedFriends.css";
import FollowFriendListItem from "./FollowFriendListItem/FollowFriendListItem";
import { getFollows } from "../../services/suggestionFollow";
import { DataContext } from "../../DataProvider/DataProvider";

export default function RecommendedFriends(props) {
  const context = useContext(DataContext)
  const [followers, setFollowers] = useState([]);
  // data
  useEffect(
    () => {
      getFollows(context.user.id)
      .then(doc => {
        setFollowers(doc.users)
      })
    }, [context.user.id]
  )
  
  return (
    <div className="r-wrapper">
      <div className="RecFriends">
        <p className="title">Gợi ý cho bạn</p>
        <a className="title" href="/">
          Xem tất cả
        </a>
      </div>
      {followers.slice(0,5).map((item, index) => (
        <FollowFriendListItem key={index} item={item} />
      ))}
    </div>
  );
}
