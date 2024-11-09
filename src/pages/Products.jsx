import { useEffect, useState } from "react";
import { getProducts } from "../api";
import Product from "../components/Product";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
