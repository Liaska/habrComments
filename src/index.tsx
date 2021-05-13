import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';
import App from './App';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Auth0Provider
        domain='liaska.eu.auth0.com'
        clientId='cIzr0fg8FUvTzBrEPLZ5ccNy2ivUGatp'
        redirectUri={window.location.origin}>
        <Router history={history}>
          <App />
        </Router>
      </Auth0Provider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
