import React, { Component } from "react";

class ProductList extends Component {
    render() {
        return (
            <table className="min-w-full text-center">
                <thead className="border-b bg-gray-50">
                    <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                            STT
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                            Name
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                            Price
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                            Status
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        )
    }
}

export default ProductList;
