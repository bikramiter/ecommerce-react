import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

export default function Header() {
  return (
    <header className="header">
      <Link className="logo" to="/">
        Biks eStore
      </Link>
      <Link to="/cart" className="cart-icon">
        <i className="fa fa-shopping-cart"></i>
      </Link>
    </header>
  );
}
