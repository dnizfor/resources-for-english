import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Resources from "./pages/Resources"


import Home from "./pages/Home";


export default function App() {
  return (
    <Router>
      <div>

        <Switch>
        <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/users">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer/>
      </div>
    </Router>
  );
}
