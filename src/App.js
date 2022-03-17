import './App.css';
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Forgive from './pages/Forgive/Forgive'
import Manic from './pages/Manic/Manic'
import Lynk from './pages/Lynk/Lynk'
import ToT from './pages/ToT/ToT'

// footer
import Footer from './components/Footer';

// HOC
import ScrollToTop from '../src/HOCs/ScrollToTop';

// data
import projectNavData from './data/projectNavData';

function App() {
  const { tot, forgive, lynk, manic } = projectNavData;
  const smallerThan525 = useMediaPredicate("(max-width: 525px)");
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/tot">
            <ToT data={tot} />
            <Footer />
          </Route>
          <Route path="/forgive">
            <Forgive data={forgive} />
            <Footer />
          </Route>
          <Route path="/lynk">
            <Lynk data={lynk} />
            <Footer />
          </Route>
          <Route path="/manic">
            <Manic data={manic} />
            <Footer />
          </Route>
          <Route path="/about">
            <About />
            {smallerThan525 ? <Fragment /> : <Footer about />}
          </Route>
          <Route path="/">
            <Home />
            <Footer />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
