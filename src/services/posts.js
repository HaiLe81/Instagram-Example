import { getCookie } from "../services/storage";

export const getUrlPostLikedOrComment = async (postId) => {
  const token = getCookie(process.env.REACT_APP_COOKIE_KEY);

  const url = `${process.env.REACT_APP_URL}/posts`;
  const requestOptions = {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),
    // body: JSON.stringify(data)
  };
  const result = await fetch(url, requestOptions)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err, err));
  const post = result.posts.find((item) => item.postId === postId);
  return post;
};

export const addNewPost = async (userId, caption, imageUrl) => {
  const token = getCookie(process.env.REACT_APP_COOKIE_KEY);

  const url = `${process.env.REACT_APP_URL}/newPost`;
  const data = { userId, caption, imageUrl };
  const requestOptions = {
    method: "POST",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  };
  const result = await fetch(url, requestOptions)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err, err));
  return result;
};
