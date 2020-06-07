import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext(null);
const DataProvider = (props) => {
  const [user, setUser] = useState({
    id: "",
    username: "",
    fullname: "",
    email: "",
    password: "",
  });
  const [post, setPost] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      async function fecthAccounts() {
        const url = `${process.env.REACT_APP_URL}/accounts`;
        // const data = { id: user.id };
        const requestOptions = {
          method: "GET",
          headers: new Headers({
            // Accept: "application/json",
            "Content-Type": "application/json",
          }),
          // body: JSON.stringify(data)
        };
        const result = await fetch(url, requestOptions)
          .then((res) => res.json())
          .then((data) => data)
          .catch((err) => console.log(err, err));
        setAccounts(result.accounts);
      }
      fecthAccounts();
    }
  }, [loggedIn]);

  useEffect(() => {
    async function fetchData() {
      if (user.id) {
        const url = `${process.env.REACT_APP_URL}/timeline/${user.id}`;
        // const data = { id: user.id };
        const requestOptions = {
          method: "GET",
          headers: new Headers({
            // Accept: "application/json",
            "Content-Type": "application/json",
          }),
          // body: JSON.stringify(data)
        };
        const result = await fetch(url, requestOptions)
          .then((res) => res.json())
          .then((data) => data)
          .catch((err) => console.log(err, err));
        setPost(result.posts);
      }
    }
    fetchData();
  }, [user.id]);

  const getUserNameById = (userId) => {
    if (accounts) {
      const result = accounts.find((item) => item.id === userId);
      if (!result) {
        return "Robot";
      } else {
        return result.username;
      }
    }
    return "";
  };

  // get urlAvatar by userId
  const getUrlAvatar = (userId) => {
    if (accounts) {
      const result = accounts.find((item) => item.id === userId);
      if (!result) {
        return "Robot";
      } else {
        return result.urlAvatar;
      }
    }
  };

  return (
    <DataContext.Provider
      value={{
        user,
        post,
        accounts,
        loggedIn,
        setUser,
        setLoggedIn,
        actions: {
          getUserNameById,
          setPost,
          getUrlAvatar,
        },
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
