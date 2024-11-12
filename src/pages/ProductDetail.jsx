import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getProduct } from "../api";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [cartButtonText, setCartButtonText] = useState("Add to Cart");

  const { cartItems, updateCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);

      const existingProduct = cartItems.find((item) => item.id === Number(id));
      if (existingProduct) {
        setCartButtonText("Go to Cart");
      }
    };
    fetchProduct();
  }, [id, cartItems]);

  function handleAddToCart() {
    if (cartButtonText === "Go to Cart") {
      navigate("/cart");
      return;
    }

    updateCart([...cartItems, { ...product, quantity: 1 }]);

    setCartButtonText("Go to Cart");
  }

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <h1 className="product-title">{product.title}</h1>
      <img className="product-image" src={product.image} alt={product.title} />
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: ${product.price}</p>
      <button onClick={handleAddToCart}>{cartButtonText}</button>
    </div>
  );
}
