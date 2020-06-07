import React, { useContext } from "react";
import "./Post.css";
import Carousel from "./Carousel/Carousel";
import Comment from "./Comment/Comment";
import { DataContext } from "../../../DataProvider/DataProvider";

export default function Post(props) {
  const contex = useContext(DataContext);
  const { item, index } = props;

  return (
    <div className="post">
      <article>
        <header>
          <div className="urlUser">
            <canvas className="CfWVH" height="53" width="53" />
            <span>
              <img
                alt="x"
                src={`${contex.actions.getUrlAvatar(item.userId)}`}
              />
            </span>
          </div>
          <div className="p-right-content">
            <div className="userName">
              <a href="/">{contex.actions.getUserNameById(item.userId)}</a>
            </div>
            <div className="option">
              <svg
                aria-label="Tùy chọn khác"
                className="_8-yf5 "
                fill="#262626"
                height="16"
                viewBox="0 0 48 48"
                width="16"
              >
                <circle
                  clipRule="evenodd"
                  cx="8"
                  cy="24"
                  fillRule="evenodd"
                  r="4.5"
                />
                <circle
                  clipRule="evenodd"
                  cx="24"
                  cy="24"
                  fillRule="evenodd"
                  r="4.5"
                />
                <circle
                  clipRule="evenodd"
                  cx="40"
                  cy="24"
                  fillRule="evenodd"
                  r="4.5"
                />
              </svg>
            </div>
          </div>
        </header>
        <div className="p-content">
          <Carousel urls={item.imageUrls} />
        </div>
        <div className="p-comment">
          <Comment index={index} />
        </div>
      </article>
    </div>
  );
}
