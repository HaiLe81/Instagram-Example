import { getCookie } from "../services/storage";

export const addComment = async (postId, authorId, userId, content) => {
  const token = getCookie(process.env.REACT_APP_COOKIE_KEY);

  const data = {
    postId: postId,
    authorId: authorId,
    userId: userId,
    content: content,
  };
  const url = `${process.env.REACT_APP_URL}/comment`;
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

export const getDataComments = async (postId) => {
  const token = getCookie(process.env.REACT_APP_COOKIE_KEY);

  const url = `${process.env.REACT_APP_URL}/comments/${postId}`;
  const result = await fetch(url, {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),
  })
    .then((res) => res.json())
    .then((data) => data.comments)
    .catch((err) => console.log(err, err));
  return result;
};

export const addLike = async (userId, postId, authorId) => {
  const token = getCookie(process.env.REACT_APP_COOKIE_KEY);

  const url = `${process.env.REACT_APP_URL}/like`;
  const data = {
    userId: userId,
    postId: postId,
    authorId: authorId,
  };
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
