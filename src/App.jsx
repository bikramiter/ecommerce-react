import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Products from "./pages/Products";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
