import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);

  console.log(products);

  return (
    <div className="product_list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <p>{product.title}</p>
          {cartItems.some((item) => item.id === product.id) ? (
            <button className="remove-button" onClick={() => removeFromCart(product)}>
              Remove from cart
            </button>
          ) : (
            <button className="add-button" onClick={() => addToCart(product)}>Add to cart</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default React.memo(ProductList);
