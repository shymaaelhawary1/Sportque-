import React, { useState, useEffect } from "react";
import './ProductPage.css'; 
import ReactStars from "react-rating-stars-component"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const ProductPage = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredByAside, setFilteredByAside] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAside, setSelectedAside] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/categories");
      const data = await response.json();
      console.log("Fetched data:", data);
      setProducts(data);
      filterProductsByCategory(data, category); 
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const filterProductsByCategory = (allProducts, selectedCategory) => {
    const categoryData = allProducts.find(
      (product) => product.categoryName === selectedCategory
    );
    if (categoryData) {
      setFilteredByAside(categoryData.items); 
      setFilteredProducts(categoryData.items); 
    } else {
      setFilteredProducts([]);
      setFilteredByAside([]);
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value === "") {
      setFilteredProducts(filteredByAside);
    } else {
      const filtered = filteredByAside.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  useEffect(() => {
    if (selectedAside) {
      const filtered = filteredByAside.filter(
        (product) => product.category === selectedAside
      );
      setFilteredProducts(filtered);
    }
  }, [selectedAside, filteredByAside]);

  return (
    <div>
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
          <FontAwesomeIcon icon={faSearch} />
          <input 
            type="text" 
            placeholder="Search for products..." 
            value={searchTerm}
            onChange={handleSearch} 
          />
        </div>
        <div className="cart-icon" onClick={() => alert("Cart clicked!")}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="products-container">
          <div className="grid-container">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <ReactStars
                    count={5} 
                    value={product.rating} 
                    size={15} 
                    activeColor="#ffd700" 
                    isHalf={true} 
                    edit={false} 
                  />
                  <p className="new-price">${product.price}</p>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              ))
            ) : (
              <div className="no-products-message">
              <p>Sorry, But This product isn't available Now</p>
              </div>
            )}
          </div>
        </div>
      )}

      <aside>
        <h3>Categories:</h3>
        <ul>
          {["Accessories", "Tools", "Training Gear", "Clothes", "Sneakers"].map(
            (cat, index) => (
              <li
                key={index}
                className={selectedAside === cat ? "selected" : ""}
              >
                <input
                  type="radio"
                  id={cat}
                  name="category"
                  onChange={() => setSelectedAside(cat)}
                  checked={selectedAside === cat}
                />
                <label htmlFor={cat}>
                  {cat}
                </label>
              </li>
            )
          )}
        </ul>
      </aside>
    </div>
  );
};

export default ProductPage;
