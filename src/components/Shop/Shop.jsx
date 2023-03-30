import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

import "./Shop.css";

const Shop = () => {
  const [products, SetProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => SetProducts(data));
  }, []);

  const handleCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleCart={handleCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
        <h5>total Products: {cart.length}</h5>
      </div>
    </div>
  );
};

export default Shop;
