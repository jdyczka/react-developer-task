import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import MainNav from './components/MainNav';
import SubSite from './components/SubSite';
import subSites, { getPath } from './subSites';

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav />
        <Switch>
          {
            subSites.map((el, i) =>
              <Route key={i} path={getPath(el.title)}>
                <SubSite title={el.title} />
              </Route>
            )
          }

        </Switch>
      </div>
    </Router>

  );
}

export default App;
