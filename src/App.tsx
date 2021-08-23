import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FormSubSite from './components/FormSubSite';
import NavPanel from './components/NavPanel';
import SubSite from './components/SubSite';
import { mainSubSites, secondarySubSites, getPath } from './subSites';

function App() {

  const [openNavPanel, setOpenNavPanel] = useState(false);
  const closeNavPanel = () =>  setOpenNavPanel(false);

  useEffect(() => {

    function handleResize() {
      const isMobile = !window.matchMedia('(min-width: 1024px)').matches;
      if (!isMobile) closeNavPanel();
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className='font-sans text-navy text-base lg:bg-gradient-to-r lg:from-red lg:to-yellow'>
        <div className="hidden bg-lightgrey absolute w-screen h-100-px top-0 lg:block"></div>
        <div className="relative bg-white lg:grid lg:grid-cols-12 lg:container lg:xl lg:mx-auto">
          <button className='absolute right-0 top-0 p-4 lg:hidden' onClick={() => setOpenNavPanel(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30.226" height="17.156" viewBox="0 0 30.226 17.156">
              <g id="Group_13" data-name="Group 13" transform="translate(-1861.108 -27.344)">
                <line id="Line_11" data-name="Line 11" x2="16.392" transform="translate(1861.108 43.5)" fill="none" stroke="#232a3b" strokeWidth="2" />
                <line id="Line_12" data-name="Line 12" x2="30.226" transform="translate(1861.108 35.922)" fill="none" stroke="#232a3b" strokeWidth="2" />
                <line id="Line_13" data-name="Line 13" x2="30.226" transform="translate(1861.108 28.344)" fill="none" stroke="#232a3b" strokeWidth="2" />
              </g>
            </svg>
          </button>
          <div className='lg:col-start-2 lg:col-end-5'>
            <NavPanel shouldOpen={openNavPanel} onClose={closeNavPanel} />
          </div>
          <div className='lg:col-start-5 lg:col-end-13 lg:flex lg:flex-col'>
            <Switch>
              {
                mainSubSites.concat(secondarySubSites).map((el, i) => (
                    <Route key={i} path={getPath(el.title)}>
                      {
                        (i === 1)
                          ? <FormSubSite title={el.title} icon={el.icon} />
                          : <SubSite title={el.title} icon={el.icon} />
                      }
                    </Route>
                  )
                )
              }
            </Switch>
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;
