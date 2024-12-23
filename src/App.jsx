import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./ProductsPage/productPage";
import Cart from "./CartAndCheckout/cart";

function App() {
  const [category, setCategory] = useState("Football");

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProductPage category={category} />} />
          <Route path="/cart" element={<Cart products={[]} onCheckout={() => {}} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
