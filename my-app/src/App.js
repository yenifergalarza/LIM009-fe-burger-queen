import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import "firebase/firestore";
import NavBar from "./components/navBar";
import MenuView from "./components/menu_view/menu";
import KitchenView from "./components/kitchen_view/kitchen";
import HistoryView from "./components/history_view/ordersHistory";
import Default from "./components/default";

const App = () => {
  // Initialize Firebase

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={MenuView} />
        <Route path="/cocina" component={KitchenView} />
        <Route path="/historial" component={HistoryView} />
        <Route component={MenuView} />
      </Switch>
    </Router>
  );
};

export default App;
