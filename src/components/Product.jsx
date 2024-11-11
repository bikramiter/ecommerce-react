import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="product">
      <Link to={`/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <div className="product-title">{product.title}</div>
        <div className="product-category">{product.category}</div>
        <div className="product-price">${product.price}</div>
        <div className="product-rating">
          {product.rating.rate} ({product.rating.count} reviews)
        </div>
      </Link>
      <button className="add-to-cart-btn">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </button>
    </div>
  );
}
