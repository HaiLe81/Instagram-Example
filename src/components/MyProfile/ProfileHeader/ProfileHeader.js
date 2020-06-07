import React, { useContext } from "react";
import "./ProfileHeader.css";
import { Link } from "react-router-dom";
import { DataContext } from "../../../DataProvider/DataProvider";

export default function ProfileHeader(props) {
  const context = useContext(DataContext);
  const logout = () => {
    context.setLoggedIn(false);
  };
  return (
    <main className="profile">
      <header>
        <div className="p-avatar">
          <div className="w-avatart">
            <Link to={`/uploadImage/${context.user.id}`}>
              <img alt="not found" src={context.user.urlAvatar} />
            </Link>
          </div>
        </div>
        <div className="info">
          <div className="info-row-1">
            <h4>{context.user.username}</h4>
            <a className="edit-info" href="/">
              <button>Chỉnh sửa trang cá nhân</button>
            </a>
            <div className="logout" onClick={logout}>
              <img
                src="https://image.flaticon.com/icons/svg/1828/1828427.svg"
                alt="not found"
              />
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
