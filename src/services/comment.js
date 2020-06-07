export const addComment = async (postId, authorId, userId, content) => {
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
      // Accept: "application/json",
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
  const url = `${process.env.REACT_APP_URL}/comments/${postId}`;
  const result = await fetch(url, {
    method: "GET",
    headers: new Headers({
      // Accept: "application/json",
      "Content-Type": "application/json",
    }),
  })
    .then((res) => res.json())
    .then((data) => data.comments)
    .catch((err) => console.log(err, err));
  return result;
};

export const addLike = async (userId, postId, authorId) => {
  const url = `${process.env.REACT_APP_URL}/like`;
  const data = {
    userId: userId,
    postId: postId,
    authorId: authorId,
  };
  const requestOptions = {
    method: "POST",
    headers: new Headers({
      // Accept: "application/json",
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
