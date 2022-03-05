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

// data
import projectNavData from './data/projectNavData';

function App() {
  const { tot, forgive, lynk, manic } = projectNavData;
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/tot">
            <ToT data={tot} />
          </Route>
          <Route path="/forgive">
            <Forgive data={forgive} />
          </Route>
          <Route path="/lynk">
            <Lynk data={lynk} />
          </Route>
          <Route path="/manic">
            <Manic data={manic} />
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
