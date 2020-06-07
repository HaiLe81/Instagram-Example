export const getUserById = async (userId) => {
  const url = `${process.env.REACT_APP_URL}/account/${userId}`;
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

export const getUsers = async () => {
  const url = `${process.env.REACT_APP_URL}/accounts`;
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