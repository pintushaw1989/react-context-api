import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevstate) => [...prevstate, {...product}]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
