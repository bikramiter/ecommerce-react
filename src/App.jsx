import Products from "./pages/Products";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">Biks eStore</div>
        <div className="cart-icon">
          <i className="fa fa-shopping-cart"></i>
        </div>
      </header>
      <main className="main">
        <div className="product-grid">
          <Products />
        </div>
      </main>
      <footer className="footer">
        <p>© 2024 My eStore. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
