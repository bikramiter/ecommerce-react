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

  // Function to update localStorage and cartItems state
  function updateCart(updatedCart) {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function handleCartItemRemove(id) {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCart(updatedCart); // Using updateCart to update both state and localStorage
  }

  function handleQuantityChange(id, newQuantity) {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    updateCart(updatedCart); // Using updateCart to update both state and localStorage
  }

  return (
    <>
      <h2>Cart Items</h2>
      {cartItems?.length > 0
        ? cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              item={cartItem}
              onCartItemRemove={handleCartItemRemove}
              onQuantityChange={handleQuantityChange}
            />
          ))
        : "Your cart is empty"}
    </>
  );
}
