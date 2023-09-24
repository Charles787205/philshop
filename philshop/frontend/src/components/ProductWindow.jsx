import { useState } from "react";

import React from "react";

const ProductWindows = ({ product, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="product-window">
      <span>Electronics</span>
      <img src={product.image} alt={product.name} />
      <p>{product.price}</p>
      <h1>{product.name[0].toUpperCase() + product.name.slice(1)}</h1>
      <p>{product.description}</p>
      <div className="row">
        <button
          onClick={() => {
            if (quantity > 0) {
              setQuantity(parseInt(quantity) - 1);
            }
          }}
        >
          -
        </button>

        <input
          type="number"
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          value={quantity}
        />
        <button
          onClick={() => {
            setQuantity(parseInt(quantity) + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() =>
            handleAddToCart({
              productId: product.id,
              quantity: quantity,
            })
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductWindows;
