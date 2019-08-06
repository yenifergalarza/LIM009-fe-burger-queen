import React from "react";

import { Switch, Route } from "react-router-dom";
import "./App.css";

import "firebase/firestore";
import NavBar from "./components/navBar";
import MenuView from "./components/menu_view/menu";
import KitchenView from "./components/kitchen_view/kitchen";
import HistoryView from "./components/history_view/orders_history";
import Default from "./components/default";

const App = () => {
  // Initialize Firebase

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={MenuView} />
        <Route path="/cocina" component={KitchenView} />
        <Route path="/historial" component={HistoryView} />
        <Route component={Default} />
      </Switch>
    </>
  );
};

export default App;
