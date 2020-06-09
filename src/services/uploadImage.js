import { getCookie } from "../services/storage";

export const uploadImage = async (id, urlImage) => {
  const token = getCookie(process.env.REACT_APP_COOKIE_KEY);

  const data = { url: urlImage };
  const url = `${process.env.REACT_APP_URL}/avatar/${id}`;
  const requestOptions = {
    method: "PATCH",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(data)
  };
  const result = await fetch(url, requestOptions)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err, err));
  return result;
};
