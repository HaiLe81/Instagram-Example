export const getNotification = async userId => {
  const url = `${process.env.REACT_APP_URL}/notification/${userId}`;
  const requestOptions = {
    method: "GET",
    headers: new Headers({
      // Accept: "application/json",
      "Content-Type": "application/json"
    })
  };
  const result = await fetch(url, requestOptions)
    .then(res => res.json())
    .catch(err => console.log(err, err));
  return result;
};
