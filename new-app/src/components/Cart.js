import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id,
    });
  };

  const handleClearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: "UPDATE_QUANTITY", id, quantity });
  };

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <button onClick={() => handleRemove(item.id)}>Remove</button>

          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              handleUpdateQuantity(item.id, parseInt(e.target.value))
            }
            min="1"
          />
        </div>
      ))}
      <button onClick={handleClearCart}>Clear</button>
    </div>
  );
};

export default Cart;
