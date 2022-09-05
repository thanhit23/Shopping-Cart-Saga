import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Header from './components/Header';
import configureStore from './configureStore';

const initialState = {};
const store = configureStore(initialState);

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
