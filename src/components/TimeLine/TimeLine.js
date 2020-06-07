import React, { useContext } from "react";
import "./TimeLine.css";
import Post from "./Post/Post";
import { DataContext } from "../../DataProvider/DataProvider";
import AddPost from "./AddPost/AddPost";

export default function TimeLine() {
  const context = useContext(DataContext);
  return (
    <div className="TimeLine">
      <AddPost />
      {context.post &&
        context.post.map((item, index) => {
          return <Post key={index} item={item} />;
        })}
      {/* <Post /> */}
    </div>
  );
}
