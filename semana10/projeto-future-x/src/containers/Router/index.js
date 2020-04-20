import React from "react";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import { createBrowserHistory } from "history";
import { createStore } from "redux";
import { generateReducers } from "../../reducers";
import { applyMiddleware } from "redux";
import AppForm from "../AppForm";
import TripsPage from "../TripsPage";
import CreateTripsPage from "../CreateTripsPage";
import ListTripsPage from "../ListTripsPage";
import TripDetailsPage from "../TripDetailsPage";


export const history = createBrowserHistory();

const store = createStore(
generateReducers(history), 
applyMiddleware(routerMiddleware(history))
)

export const routes = {
  root: "/LoginPage",
  home: "/",
  appForm: "/appForm",
  tripsPage: "/tripsPage",
  createPage: "/CreateTripsPage",
  listPage: "/ListTripsPage",
  detailsPage: "/TripDetailsPage"

  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.appForm} component={AppForm} />
        <Route exact path={routes.tripsPage} component={TripsPage} />
        <Route exact path={routes.createPage} component={CreateTripsPage} />
        <Route exact path={routes.listPage} component={ListTripsPage} />
        <Route exact path={routes.detailsPage} component={TripDetailsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
