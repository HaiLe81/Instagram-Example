import React, { createContext, useState, useEffect } from "react";
import { decode } from "jsonwebtoken";
import { getCookie } from "../services/storage";

const DataContext = createContext(null);
const DataProvider = (props) => {
  const [user, setUser] = useState({
    id: "",
    username: "",
    fullname: "",
    email: "",
    urlAvatar: "",
  });
  const [post, setPost] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [initloading, setInitLoading] = useState(true)

  useEffect(() => {
    // get token
    const token = getCookie(process.env.REACT_APP_COOKIE_KEY);
    if (token) {
      const user = decode(token);
      setUser(user);
      setLoggedIn(true);
      setToken(token)
      setInitLoading(false)
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      async function fecthAccounts() {
        const token = getCookie(process.env.REACT_APP_COOKIE_KEY);

        const url = `${process.env.REACT_APP_URL}/accounts`;
        const requestOptions = {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }),
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
        const token = getCookie(process.env.REACT_APP_COOKIE_KEY);

        const url = `${process.env.REACT_APP_URL}/timeline/${user.id}`;
        // const data = { id: user.id };
        const requestOptions = {
          method: "GET",
          headers: new Headers({
            Authorization: `Bearer ${token}`,
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
        token,
        user,
        post,
        accounts,
        loggedIn,
        setUser,
        setLoggedIn,
        initloading,
        setInitLoading,
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
