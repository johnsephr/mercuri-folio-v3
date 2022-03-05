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
import ToT from './pages/ToT/ToT'

// HOC
import ScrollToTop from '../src/HOCs/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/tot">
            <ToT next='/forgive' />
          </Route>
          <Route path="/forgive">
            <Forgive next='/lynk' prev='/tot' />
          </Route>
          <Route path="/lynk">
            <Lynk next='/manic' prev='/forgive' />
          </Route>
          <Route path="/manic">
            <Manic prev='/lynk' />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
