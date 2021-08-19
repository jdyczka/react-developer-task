import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainNav from './components/NavPanel';
import SubSite from './components/SubSite';
import { mainSubSites, secondarySubSites, getPath } from './subSites';

function App() {

  const [openNavPanel, setOpenNavPanel] = useState(false);

  return (
    <Router>
      <div className='font-sans text-navy text-base'>
        <button onClick={() => setOpenNavPanel(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30.226" height="17.156" viewBox="0 0 30.226 17.156">
            <g id="Group_13" data-name="Group 13" transform="translate(-1861.108 -27.344)">
              <line id="Line_11" data-name="Line 11" x2="16.392" transform="translate(1861.108 43.5)" fill="none" stroke="#232a3b" strokeWidth="2" />
              <line id="Line_12" data-name="Line 12" x2="30.226" transform="translate(1861.108 35.922)" fill="none" stroke="#232a3b" strokeWidth="2" />
              <line id="Line_13" data-name="Line 13" x2="30.226" transform="translate(1861.108 28.344)" fill="none" stroke="#232a3b" strokeWidth="2" />
            </g>
          </svg>
        </button>
        <MainNav shouldOpen={openNavPanel} onClose={() => setOpenNavPanel(false)} />
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
