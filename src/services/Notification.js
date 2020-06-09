import { getCookie } from "../services/storage";

export const getNotification = async (userId) => {
  const token = getCookie(process.env.REACT_APP_COOKIE_KEY);

  const url = `${process.env.REACT_APP_URL}/notification/${userId}`;
  const requestOptions = {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),
  };
  const result = await fetch(url, requestOptions)
    .then((res) => res.json())
    .catch((err) => console.log(err, err));
  return result;
};
