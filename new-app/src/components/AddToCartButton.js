import React from "react";
import { useCart } from "../context/CartContext";

const AddToCartButton = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", product: { ...product, quantity: 1 } });
  };

  return <button onClick={handleAddToCart}>Add to Cart</button>;
};

export default AddToCartButton;
