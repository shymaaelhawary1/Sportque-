import React, { useState, useEffect } from "react";
import './ProductPage.css';
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';

const ProductPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredByAside, setFilteredByAside] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAside, setSelectedAside] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

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
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
  
      let updatedCart;
      if (existingProduct) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }
  
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // تخزين السلة
      return updatedCart;
    });
  
    alert(`${product.name} has been added to the cart!`);
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

  const handleMoreClick = (productId) => {
navigate(`/product/${product.id}`, { state: { product } });  };


const handleProductClick = (product) => {
    
  navigate(`/product/${product.id}`, { state: { product } });
};
  
  return (
    <div>
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="products-container">
          <div className="grid-container">



            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="product-card"   onClick={() => handleProductClick(product)} >
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
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className="more-btn" 
                    onClick={() => handleMoreClick(product.id)}
                  >
                    ›
                  </button>
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
                <label htmlFor={cat}>{cat}</label>
              </li>
            )
          )}
        </ul>
      </aside>
    </div>
  );
};

export default ProductPage;
