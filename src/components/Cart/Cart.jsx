import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let totalShipment = 0;
  for (const product of cart) {
    total = total + product.price;
    totalShipment = totalShipment + product.shipping;
  }
  let tax = total * 0.07;
  let grandTotal = total + totalShipment + tax;
  return (
    <div className="cart">
      <h4 className="sum">Order Summary</h4>
      <p>total Products: {cart.length}</p>
      <p>Total: {total}</p>
      <p>shipping:${totalShipment}</p>
      <p>Tax:{tax.toFixed(2)}</p>
      <h6 className="sum">Grand Total:{grandTotal}</h6>
    </div>
  );
};

export default Cart;
