import React, { useState, useEffect } from "react";
import ProductPage from "./productPage";

function App() {
  const [category, setCategory] = useState("Basketball Gear"); 

  useEffect(() => {
  }, [category]); 

  return (
    <div>
      <ProductPage category={category} />
    </div>
  );
}

export default App;
