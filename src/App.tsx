import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainNav from './components/NavPanel';
import SubSite from './components/SubSite';
import { mainSubSites, secondarySubSites, getPath } from './subSites';

function App() {
  return (
    <Router>
      <div className='font-sans text-navy text-base'>
        <MainNav />
        <Switch>
          {
            mainSubSites.map((el, i) =>
              <Route key={i} path={getPath(el.title)}>
                <SubSite title={el.title} />
              </Route>
            )
          }
          {
            secondarySubSites.map((el, i) =>
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
