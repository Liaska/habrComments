import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Auth0Provider
        domain='liaska.eu.auth0.com'
        clientId='cIzr0fg8FUvTzBrEPLZ5ccNy2ivUGatp'
        redirectUri={window.location.origin}>
        <App />
      </Auth0Provider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

module.hot.accept();
