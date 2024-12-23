import { useState, useEffect } from "react";
import "./ProductPage.css";
import 'font-awesome/css/font-awesome.min.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [selectedAside, setSelectedAside] = useState("");

  const fetchProducts = async (selectedCategory) => {
    try {
      const response = await fetch("http://localhost:5000/categories");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  return (
    <div>
      {/* App Bar */}
      <div className="app-bar">
        <h1>
          <span className="black">Sporti</span>
          <span className="green">que</span>
        </h1>
        <div className="bar">
          {["Home", "Categories", "Brands", "Onsale"].map((section) => (
            <button
              key={section}
              onClick={() => setCategory(section.toLowerCase())}
              className={category === section.toLowerCase() ? "active" : ""}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="search-box">
          <i className="fa fa-search"></i>
          <input type="text" placeholder="Search for products..." />
        </div>
        <div className="cart-icon" onClick={() => alert("Cart clicked!")}>
        <i className="fas fa-shopping-cart"></i>
        <i className="fas fa-user"></i>
        </div>
      </div>

      {/* Main Container */}
      <div className="container">
        {/* Sidebar */}
        <aside>
          <h3>Categories:</h3>
          <ul>
            {["Sneakers", "Accessories", "Training Gear", "Swimwear"].map(
              (cat, index) => (
                <li key={index}>
                  <input type="checkbox" />
                  {cat}
                </li>
              )
            )}
          </ul>
        </aside>

        {/* Products Section */}
        <div className="products-container">
          {/* Categories Nav */}
          <div className="nav-bar">
            {["All", "Womens", "Men", "Kids"].map((section) => (
              <button
                key={section}
                onClick={() => setCategory(section.toLowerCase())}
                className={category === section.toLowerCase() ? "actived" : ""}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid-container">
            {products.length > 0 ? (
              products.map((category) => (
                category.items.map((product) => (
                  <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p className="new-price">${product.price}</p>
                    <button className="add-to-cart-btn">Add to Cart</button>
                  </div>
                ))
              ))
            ) : (
              <p className="loading">Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
