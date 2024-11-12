import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartButtonText, setCartButtonText] = useState("Add to Cart");

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  function handleAddToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.find((item) => item.id === id);
    if (existingProductIndex > -1) {
      setCartButtonText("Go to Cart");
    } else {
      cart.push({ ...product, quantity: 1 });
      setCartButtonText("Add to Cart");
    }
    localStorage.setItem("cart", JSON.stringify(cart));
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
