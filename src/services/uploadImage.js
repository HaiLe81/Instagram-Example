export const uploadImage = async (id, urlImage) => {
  const data = { url: urlImage };
  const url = `${process.env.REACT_APP_URL}/avatar/${id}`;
  const requestOptions = {
    method: "PATCH",
    headers: new Headers({
      // Accept: "application/json",
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
