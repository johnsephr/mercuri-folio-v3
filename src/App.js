import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Forgive from './pages/Forgive/Forgive'
import Manic from './pages/Manic/Manic'
import Lynk from './pages/Lynk/Lynk'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/forgive">
          <Forgive />
        </Route>
        <Route path="/manic">
          <Manic />
        </Route>
        <Route path="/lynk">
          <Lynk />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
