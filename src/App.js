import React from "react";
import "./styles.css";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DataProvider } from "./DataProvider/DataProvider";
import SignUp from "./components/Auth/SignUp/SignUp";
import ForgetPassword from "./components/Auth/ForgetPassword/ForgetPassword";
import UploadImage from "./components/UploadImage/UploadImage";
import MyProfile from "./components/MyProfile/MyProfile";
import Header from "./components/Header/Header";
import { RouteWithAuth } from "./custom-routes/RouteWithAuth";
// require('dotenv').config()

export default function App() {
  return (
    <Router>
      <DataProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <RouteWithAuth path="/">
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/uploadimage/:id" component={UploadImage} />
              <Route path="/forgetpassword" component={ForgetPassword} />
              <Route path="/profile/:id" component={MyProfile} />
            </Switch>
          </RouteWithAuth>
        </Switch>
      </DataProvider>
    </Router>
  );
}
