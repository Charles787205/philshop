import SimpleImageSlider from "react-simple-image-slider";
import iphone from "../assets/iphone.jpeg";
import macbook from "../assets/macbook.jpeg";
import tent from "../assets/tent.jpeg";
import React from "react";

import ProductsTable from "../components/ProductsTable";
const Home = () => {
  const products = [
    {
      id: 1,
      name: "iphone",
      image: iphone,
      description: "An iphone that is new",
      price: "40.50",
    },
    {
      id: 2,
      name: "macbook",
      image: macbook,
      description: "A macbook that is new",
      price: "40.50",
    },
    {
      id: 3,
      name: "tent",
      image: tent,
      description: "An tent that is new",
      price: "40.50",
    },
    {
      id: 1,
      name: "iphone",
      image: iphone,
      description: "An iphone that is new",
      price: "40.50",
    },
    {
      id: 2,
      name: "macbook",
      image: macbook,
      description: "A macbook that is new",
      price: "40.50",
    },
    {
      id: 3,
      name: "tent",
      image: tent,
      description: "An tent that is new",
      price: "40.50",
    },
    {
      id: 1,
      name: "iphone",
      image: iphone,
      description: "An iphone that is new",
      price: "40.50",
    },
    {
      id: 2,
      name: "macbook",
      image: macbook,
      description: "A macbook that is new",
      price: "40.50",
    },
    {
      id: 3,
      name: "tent",
      image: tent,
      description: "An tent that is new",
      price: "40.50",
    },
  ];

  const handleAddToCart = ({ productId, quantity }) => {
    console.log(productId, quantity);
  };
  return (
    <div className="home">
      <div className="hero">
        <h1>Philippines #1 online shop</h1>
      </div>
      <ProductsTable
        tableType="row"
        products={products}
        handleAddToCart={handleAddToCart}
      />
      <ProductsTable
        tableType="table"
        products={products}
        handleAddToCart={handleAddToCart}
      />
      <ProductsTable
        tableType="row"
        products={products}
        handleAddToCart={handleAddToCart}
      />
      <div className="cart-button">
        <span className="material-symbols-outlined">shopping_cart</span>
      </div>
    </div>
  );
};

export default Home;
