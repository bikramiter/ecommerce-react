import { useState, useEffect } from "react";

import CartItem from "../components/CartItem";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);

  function handleCartItemRemove(id) {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <>
      <h2>Cart Items</h2>
      {cartItems?.length > 0
        ? cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              item={cartItem}
              onCartItemRemove={() => handleCartItemRemove(cartItem.id)}
            />
          ))
        : "Your cart is empty"}
    </>
  );
}
