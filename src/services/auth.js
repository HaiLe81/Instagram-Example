export const login = async (username, password) => {
  const url = `${process.env.REACT_APP_URL}/auth/login`;
  const data = { username, password };
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
export const signup = async (username, fullname, email, password) => {
  const url = `${process.env.REACT_APP_URL}/auth/signup`;
  const data = { username, fullname, email, password };
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
