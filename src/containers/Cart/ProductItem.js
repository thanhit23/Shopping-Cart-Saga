import React, { Component } from 'react';

class ProductInformationBar extends Component {
  render() {
    return (
      <tr>
        <td className="product-item w-[10%]">
          <img
            className="w-[80px] h-[80px] m-auto"
            src="https://i.picsum.photos/id/1/250/300.jpg?hmac=SjXl8hpUiMGjDggTWBEPKbL-Y3PVQCPySP63BjyQPpU"
            alt="macOS"
          />
        </td>
        <td className="product-item w-[50%]">
          <p>
            SIÊU PHẨM] Áo Khoác Bomber Nam Nữ Unisex Mùa Hè Chữ U Phối Màu Viền
            Cổ Zenkonu AO KHOAC NAM 1000040
          </p>
        </td>
        <td className="product-item w-[10%]">
          <p className="text-center">89.000</p>
        </td>
        <td className="product-item w-[10%]">
          <p className="text-center">10</p>
        </td>
        <td className="product-item w-[10%]">
          <p className="text-center">10</p>
        </td>
        <td className="product-item w-[10%] text-center">
          <button className="btn btn-delete" type="button">
            Xoá
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductInformationBar;
