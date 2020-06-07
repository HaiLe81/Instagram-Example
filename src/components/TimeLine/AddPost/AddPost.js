import React, { useState, useContext } from "react";
import "./AddPost.css";
// import { useRouteMatch, useHistory } from "react-router-dom";
import { addNewPost } from "../../../services/posts";
import { DataContext } from "../../../DataProvider/DataProvider";

export default function AddPost() {
  const context = useContext(DataContext);

  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  const upLoadImage = async (e) => {
    setLoading(false)
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "darwin");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/hai-le/image/upload",
      { method: "POST", body: data }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setLoading(true)
  };
  const onChangeCaption = (e) => {
    setCaption(e.target.value);
  };
  const onSubmit = async () => {
    addNewPost(context.user.id, caption, image).then((doc) => {
      context.actions.setPost([...context.post, doc.post]);
    });
  };
  return (
    <div className="AddPost">
      <div className="title">Create Post</div>
      <div className="b-addpost">
        <input
          className="chooseImage"
          name="file"
          type="file"
          onChange={upLoadImage}
        />
        <input
          className="inputCaption"
          name="caption"
          type="text"
          placeholder="Enter everything you think"
          onChange={onChangeCaption}
        />
        <input
          className={`submit ${loading ? "" : "disabled"}`}
          type="button"
          onClick={onSubmit}
          value="AddPost"
        />
      </div>
    </div>
  );
}
