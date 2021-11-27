import "./App.css";
import React from "react";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ShippingDetail from "./components/ShippingDetail";
import Payment from "./components/Payment";
import FinalStep from "./components/FinalStep";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/shippingDetail">
          <ShippingDetail />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/finalstep">
          <FinalStep />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
