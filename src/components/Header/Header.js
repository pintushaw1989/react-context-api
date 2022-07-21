import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./Header.css";

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="app_header">
      <h1>Shopping Cart</h1>
      <p>Cart<span>{cartItems.length}</span></p>
    </div>
  );
};

export default Header;
