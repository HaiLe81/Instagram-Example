export const getFollows = async (userId) => {
  const url = `${process.env.REACT_APP_URL}/suggestions/${userId}`;
  const requestOptions = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    // body: JSON.stringify(data)
  };
  const result = await fetch(url, requestOptions)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err, err));
  return result;
};

export const follow = async (userId, followUserId) => {
  const url = `${process.env.REACT_APP_URL}/follow`;
  const data = { userId, followUserId };
  const requestOptions = {
    method: "PATCH",
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
