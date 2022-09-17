import React, { Component } from "react";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { findIndex } from 'lodash';
import { Link } from 'react-router-dom';

import CallAPI from '../../utils/CallAPI';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';
import ProductItem from '../ProductItem';
import ProductList from '../ProductList';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }
    showProducts(products) {
        let result = null;
        if (products) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            })
        }
        return result;
    }

    componentDidMount() {
        CallAPI('products', 'GET', null).then(({ data }) => {
            this.setState({
                products: data,
            })
        })
    }

    onDelete = id => {
        const { products } = this.state;
        const index = findIndex(products, ({ id: idProduct }) => id === idProduct )
        CallAPI(`products/${id}`, 'DELETE', null).then(({ status }) => {
            console.log(status);
            if (status === 200) {
                products.splice(index, 1);
                this.setState({
                    products,
                })
            }
        })
    }

    render() {
        const { products } = this.state;
        console.log(products);

        return (
            <div className="flex flex-col w-[1000px] m-auto">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <Link to="/product/add">
                                <button type="button" className="btn-product">
                                    Add Product
                                </button>
                            </Link>
                            <ProductList>
                                {this.showProducts(products)}
                            </ProductList>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    const { product } = state;
    return {
        product,
    };
};

const withConnect = connect(mapStateToProps, null);
const withReducer = injectReducer({ key: 'product', reducer });

export default compose(withReducer, withConnect)(Product);
