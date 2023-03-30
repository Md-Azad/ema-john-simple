import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, ratings } = props.product;

  return (
    <div className="product">
      <img src={img ? img : "no Image"} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <h4>Price: ${price}</h4>
        <h5>Seller: {seller}</h5>
        <h5>Ratings: {ratings} stars</h5>
      </div>
      <button
        onClick={() => props.handleCart(props.product)}
        className="btn-cart"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
