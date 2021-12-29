import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import DetailPage from "./DetailPage";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/about-me" exact component={AboutMe} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/portfolio/:title/" exact component={DetailPage} />
      {/* <Route path="/portfolio/:title/:p" exact component={DetailPage} /> */}

      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
