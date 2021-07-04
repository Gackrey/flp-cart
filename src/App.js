import "./styles.css";
import { ProductListing, Nav, Cart } from "./Components";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main-page">
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}
