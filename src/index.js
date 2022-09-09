import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import './css/index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import viMessages from './translations/vi.json';
import enMessages from './translations/en.json';
import configureStore from './configureStore';

const messages = {
  en: enMessages,
  vi: viMessages,
};
const root = ReactDOM.createRoot(document.getElementById('root'));
const initialState = {};
const store = configureStore(initialState);

root.render(
  <Provider store={store}>
    <IntlProvider locale="en" defaultLocale="en" messages={messages.en}>
      <App />
    </IntlProvider>
  </Provider>,
);

reportWebVitals();
