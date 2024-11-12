import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../api";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [cartButtonText, setCartButtonText] = useState("Add to Cart");

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);

      // Retrieve and validate cart data from localStorage
      let cart;
      try {
        cart = JSON.parse(localStorage.getItem("cart"));
        if (!Array.isArray(cart)) {
          throw new Error("Cart data is not an array");
        }
      } catch (error) {
        // If JSON parsing fails or cart is not an array, initialize as an empty array
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage to prevent future errors
      }

      const existingProduct = cart.find((item) => item.id === Number(id));
      if (existingProduct) {
        setCartButtonText("Go to Cart");
      }
    };
    fetchProduct();
  }, [id]);

  function handleAddToCart() {
    if (cartButtonText === "Go to Cart") {
      navigate("/cart");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
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
