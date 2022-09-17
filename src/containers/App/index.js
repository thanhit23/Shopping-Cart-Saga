import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';

import Header from '../../components/Header';
import Product from '../Product';
import HomePage from '../HomePage';
import AddProductPage from '../AddProductPage';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Routes>
                    <Route index exact path="/" element={<HomePage />} />
                    <Route exact path="/home" element={<HomePage />} />
                    <Route exact path="/product" element={<Product />} />
                    <Route exact path="/product/:id/edit" element={<AddProductPage />}  />
                    <Route exact path="/product/add" element={<AddProductPage />} />
                </Routes>
            </>
        );
    }
}

export default App;
