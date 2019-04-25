import React from "react";
import { Route, Switch } from "react-router";
import Home from "./containers/Home";
import HeroDetails from "./components/HeroDetails";
import NotFound from "./components/NotFound";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/heros/:id" component={HeroDetails} />
    <Route component={NotFound} />
  </Switch>
);
export default Router;
