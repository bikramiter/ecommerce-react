import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link className="logo" to="/">
        Biks eStore
      </Link>
      <div className="cart-icon">
        <i className="fa fa-shopping-cart"></i>
      </div>
    </header>
  );
}
