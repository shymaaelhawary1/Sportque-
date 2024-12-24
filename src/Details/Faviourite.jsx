
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate

const Faviourite = () => {
  const location = useLocation();
  const { product } = location.state || {}; 
  const [cartItems, setCartItems] = useState([]); 
  const navigate = useNavigate(); 

  useEffect(() => {
    if (product) {
      setCartItems((prevItems) => {
        const isProductExists = prevItems.some((item) => item.title === product.title);
        return isProductExists ? prevItems : [...prevItems, product];
      });
    }
  }, [product]);

  const handleDelete = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const handleBack = () => {
    navigate(-2);
  };

  const containerStyle = {
    marginTop: "20px",
    marginLeft: "140px",
  };

  const productContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "10px",
    width: "80%",
    position: "relative",
  };

  const imageStyle = {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
  };

  const textContainerStyle = {
    marginLeft: "20px",
  };

  const textStyle = {
    color: "#024F10",
    fontSize: "18px",
    fontWeight: "700",
    fontFamily: "Carlito, sans-serif",
  };

  const subTextStyle = {
    color: "#30B348",
    fontSize: "16px",
    fontFamily: "Carlito, sans-serif",
  };

  const deleteIconStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    color: "red",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const backButtonStyle = {
    position: "absolute",
    top: "20px",
    left: "20px",
    cursor: "pointer",
    fontSize: "24px",
  };

  return (
    <div style={containerStyle}>
      <button style={backButtonStyle} onClick={handleBack}>
        ← 
      </button>
      <h1>Favourite Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} style={productContainerStyle}>
            <img src={item.image} alt={item.title} style={imageStyle} />
            <div style={textContainerStyle}>
              <p style={textStyle}>{item.title}</p>
              <p style={subTextStyle}>Brand: {item.brand}</p>
              <p style={subTextStyle}>Price: ${item.price}</p>
            </div>
            <button
              style={deleteIconStyle}
              onClick={() => handleDelete(index)}
            >
              X
            </button>
          </div>
        ))
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
};

export default Faviourite;
