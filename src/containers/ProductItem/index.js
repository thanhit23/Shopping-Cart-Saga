import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Product extends Component {
    onDelete = id => {
      if (confirm('Bạn có chắc muốn xoá không ?')) {
        this.props.onDelete(id);
      }
    }

    render() {
        const { product: { id, name, price, status } } = this.props;
        const statusElement = status ? 'Còn Hàng' : 'Đã Hết';
        return (
            <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{id}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {name}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {price} $
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap bg-red-600">
                    {statusElement}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <Link to={`/product/${id}/edit`}>
                        <button
                            style={{backgroundColor: 'rgb(234, 179, 8)'}}
                            type="button"
                            className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Update
                        </button>
                    </Link>
                    <button
                        style={{backgroundColor: 'rgb(220, 38, 38)'}}
                        type="button"
                        className="ml-[15px] inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={ () => this.onDelete(id)}
                    >
                      Delete
                    </button>
                </td>
            </tr>
        )
    }
}

export default Product;
