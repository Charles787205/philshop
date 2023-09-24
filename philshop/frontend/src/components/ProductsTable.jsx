import { useState, useEffect } from "react";
import iphone from "../assets/iphone.jpeg";
import macbook from "../assets/macbook.jpeg";
import tent from "../assets/tent.jpeg";
import React from "react";
import ProductWindow from "./ProductWindow";
import "../sass/products_table.scss";
const ProductsTable = ({ tableType, products, handleAddToCart }) => {
  return (
    <div
      className={`product-table ${
        tableType == "row" ? "product-row" : "product-table"
      }`}
    >
      {products.map((product) => {
        return (
          <ProductWindow
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          />
        );
      })}
    </div>
  );
};

export default ProductsTable;
