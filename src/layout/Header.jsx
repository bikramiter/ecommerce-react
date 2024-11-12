import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

export default function Header() {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <Link className="logo" to="/">
        Biks eStore
      </Link>
      <Link to="/cart" className="cart-icon">
        <i className="fa fa-shopping-cart"></i>
        {totalQuantity > 0 && (
          <span className="cart-quantity">{totalQuantity}</span> // Display dynamic quantity
        )}
      </Link>
    </header>
  );
}
