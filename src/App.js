import React, { useState } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import UserContext from "./UserContext";
import { API_URL } from "./config";

import "./assets/scss/material-kit-react.scss";

// pages for this product
import ProfilePage from "./views/ProfilePage/ProfilePage.jsx";
import LoginPage from "./views/LoginPage/LoginPage.jsx";
import HomePage from "./views/Home/Home.jsx";

export default function App() {
  const [user, setUser] = useState({ status: "pending" });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL + "/auth/session", {
          credentials: "include"
        });
        const json = await res.json();
        setUser(json);
      } catch (error) {
        //error
      }
    };
    fetchData();
  }, []);

  const updateUser = user => {
    setUser(user);
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, updateUser }}>
        <Switch>
          <Route path="/landing-page" component={HomePage} />
          <Route path="/profile-page" component={ProfilePage} />
          <Route path="/login-page" component={withRouter(LoginPage)} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
