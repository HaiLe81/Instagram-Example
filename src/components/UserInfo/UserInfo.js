import React, { useContext } from "react";
import "./UserInfo.css";
import { DataContext } from "../../DataProvider/DataProvider";

export default function UserInfo() {
  const contex = useContext(DataContext);
  return (
    <div className="u-wrapper">
      <div className="u-wrapper-row">
        <div className="u-avatar">
          <a href="/">
            <img alt="not found" src={`${contex.user.urlAvatar}`} />
          </a>
        </div>
        <div className="u-info">
          <div>
            <a href="/">{contex.user.username}</a>
          </div>
          <div className="name">Hải</div>
        </div>
      </div>
    </div>
  );
}
