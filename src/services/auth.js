import { getCookie } from "../services/storage";

export const login = async (username, password) => {
  const token = getCookie(process.env.REACT_APP_COOKIE_KEY);
  const url = `${process.env.REACT_APP_URL}/auth/login`;
  const data = { username, password };
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
export const signup = async (username, fullname, email, password) => {
  const token = getCookie(process.env.REACT_APP_COOKIE_KEY);
  const url = `${process.env.REACT_APP_URL}/auth/signup`;
  const data = { username, fullname, email, password };
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
