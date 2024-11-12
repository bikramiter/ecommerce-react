import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cartItems, updateCart } = useCart();

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

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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

      {/* Cart Summary Section */}
      {cartItems.length > 0 && (
        <div className="cart-summary-container">
          <div className="cart-summary">
            <h3>Summary</h3>
            <p>Total Items: {totalQuantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </>
  );
}
