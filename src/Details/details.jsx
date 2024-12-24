import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './details.css'; 

function DetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {}; 

  const [countState, setCount] = useState(1); 
  const [isFavourite, setIsFavourite] = useState(false); 

  useEffect(() => {
    // تحقق إذا كان المنتج موجودًا بالفعل في المفضلة عند تحميل الصفحة
    const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const existingProduct = storedFavourites.find(item => item.id === product.id);
    setIsFavourite(existingProduct ? true : false); // تعيين الحالة بناءً على ما إذا كان المنتج في المفضلة
  }, [product.id]);

  if (!product) {
    return <p>Product not found!</p>;
  }

  const colors = product.colors;
  const sizes = product.size;

  const handleAddToFavourites = (product) => {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const existingProduct = storedFavourites.find(item => item.id === product.id);
    
    if (!existingProduct) {
      storedFavourites.push(product);
      localStorage.setItem("favourites", JSON.stringify(storedFavourites));
      setIsFavourite(true); 
    } else {
      alert("This product is already in your favourites!");
    }
  };

  const handleRemoveFromFavourites = (product) => {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const updatedFavourites = storedFavourites.filter(item => item.id !== product.id);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    setIsFavourite(false); 
  };

  const handleAddToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = storedCart.find(item => item.id === product.id);
    let updatedCart;
    
    if (existingProduct) {
      updatedCart = storedCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + countState }
          : item
      );
    } else {
      updatedCart = [...storedCart, { ...product, quantity: countState }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} has been added to the cart!`);
  };

  const handleGoToFavourites = () => {
    navigate("/favourite");
  };

  return (
    <div className="details-container">
      <div className="product-details">
        <img
          src={product.image}
          alt="product"
          className="product-image"
        />
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="product-brand">Brand: {product.brand}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>

          <p>Colors:</p>
          <div className="colors-container">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-circle"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>

          <p>Size:</p>
          <div className="sizes-container">
            {sizes.map((size, index) => (
              <div key={index} className="size-box">
                {size}
              </div>
            ))}
          </div>

          <div className="quantity-container">
            <p>Quantity:</p>
            <button className="quantity-btn" onClick={() => setCount(countState > 1 ? countState - 1 : 1)}>-</button>
            <span className="quantity-value">{countState}</span>
            <button className="quantity-btn" onClick={() => setCount(countState + 1)}>+</button>
          </div>

          <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>

          <div 
            className="favourite-icon" 
            onClick={() => isFavourite ? handleRemoveFromFavourites(product) : handleAddToFavourites(product)}
            style={{ cursor: "pointer", fontSize: "24px" }}
          >
            {isFavourite ? "❤️" : "🤍"} 
          </div>

          <button className="go-to-favourites-btn" onClick={handleGoToFavourites}>
            Go to Favourites
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
