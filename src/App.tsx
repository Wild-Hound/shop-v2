import React from "react";
import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductPage from "./Pages/ProductPage/ProductPage";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/product/:id">
            <ProductPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
