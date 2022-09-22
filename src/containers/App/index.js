import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import Header from '../Header';
import LoadingIndicator from '../LoadingIndicator';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <>
        <ToastContainer />
        <Header />
        <LoadingIndicator />
        <Routes>
          <Route index exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
