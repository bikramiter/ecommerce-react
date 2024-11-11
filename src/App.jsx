import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Products from "./pages/Products";
import "font-awesome/css/font-awesome.min.css";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Products />} />
        <Route path=":id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
