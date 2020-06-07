import React, { useState, useContext } from "react";
import "./UploadImage.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import { useRouteMatch, useHistory } from "react-router-dom";
import { uploadImage } from "../../services/uploadImage";
import { DataContext } from "../../DataProvider/DataProvider";

export default function UploadImage(props) {
  let history = useHistory();
  const context = useContext(DataContext);

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  let match = useRouteMatch("/uploadImage/:id");
  const id = match.url.slice(13);
  const upLoadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "darwin");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/hai-le/image/upload",
      { method: "POST", body: data }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
  };

  const onSubmit = async () => {
    uploadImage(id, image).then((doc) => {
      if (doc) {
        context.setUser(doc.user);
        history.push("/");
      }
    });
  };
  return (
    <div className="container mt-5">
      <div className="custom-file">
        <h1>Upload Image</h1>
        <input
          name="file"
          type="file"
          placeholder="Upload an image"
          onChange={upLoadImage}
        />
        {loading ? <h3>Loading...</h3> : <img src={image} alt="not found" />}
      </div>
      <input
        onClick={onSubmit}
        type="submit"
        value="Upload"
        className="btn btn-primary btn-block mt-4"
      />
    </div>
  );
}
