import React from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart } = useCart();

  const handleCheckout = () => {
    alert("Simulated checkout successful");
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>
            {item.price} x {item.quantity}
          </p>
        </div>
      ))}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Checkout;
