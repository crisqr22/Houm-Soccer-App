import React, { Suspense, lazy } from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {withTranslation} from "react-i18next";
import Loader from './components/loading/Loader';

const Home = lazy(() => import('./pages/Home'))
const Players = lazy(() => import('./pages/Players'));

function App() {
  return (
      <Router>
          <Suspense fallback={Loader}>
              <Switch>
                  <Route exact path="/" component={withTranslation()(Home)}/>
                  <Route path="/players" component={withTranslation()(Players)}/>
              </Switch>
          </Suspense>
      </Router>
  );
}

export default App;
