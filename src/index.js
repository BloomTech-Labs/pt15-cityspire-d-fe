import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { config } from './utils/oktaConfig';

import { NotFoundPage } from './components/pages/NotFound';
import { ExampleListPage } from './components/pages/ExampleList';
import { HomePage } from './components/pages/Home';
import { ProfileListPage } from './components/pages/ProfileList';
import { LoginPage } from './components/pages/Login';
import { ExampleDataViz } from './components/pages/ExampleDataViz';
import { LandingPage } from './components/pages/Landing';
import { Mapbox } from './components/pages/Mapbox';
import { LoadingComponent } from './components/common';
import { Navbar } from './components/layout/Nav';
import FavoritesContainer from './components/pages/Favorite/FavoriteContainer.js';

import './styles/index.css';
const CALLBACK_PATH = '/implicit/callback';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  const history = useHistory();
  const authHandler = () => {
    history.push('/login');
  };

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/map" component={Mapbox} />

        <SecureRoute
          path="/home"
          component={() => <HomePage LoadingComponent={LoadingComponent} />}
        />
        <SecureRoute path="/example-list" component={ExampleListPage} />
        <SecureRoute path="/favorites" component={FavoritesContainer} />
        <SecureRoute path="/profile-list" component={ProfileListPage} />
        <SecureRoute path="/datavis" component={ExampleDataViz} />

        <Route path={CALLBACK_PATH} component={LoginCallback} />
        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
}
