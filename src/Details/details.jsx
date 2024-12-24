import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function DetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { product, count } = location.state || {};

  const [countState, setCount] = useState(count || 1); 

  const colors = product.colors;
  const sizes = product.size;

  const textStyle = {
    color: '#024F10',
    fontSize: '36px',
    fontWeight: '700',
    fontFamily: 'Carlito, sans-serif',
    marginTop: '10px',
    marginLeft: '240px',
  };

  const subTextStyle = {
    fontFamily: "Carlito, sans-serif",
    color: "#30B348",
    fontSize: "20px",
    fontWeight: "400",
    marginTop: "20px",
    marginLeft: "260px",
  };
  
  const subTextStyle1 = {
    fontFamily: 'Carlito, sans-serif',
    color: '#024F1070',
    fontSize: '24px',
    fontWeight: '700',
    marginTop: '15px',
    marginLeft: '240px',
  };
  
  const subTextStyle2 = {
    fontFamily: 'Carlito, sans-serif',
    color: '#30B348',
    fontSize: '24px',
    fontWeight: '700',
    marginTop: '25px',
    marginLeft: '240px',
  };

  const colorBoxStyle = {
    display: "flex",
    gap: "40px",
    marginTop: "10px",
    marginLeft: "240px",
  };

  const colorStyle = (color) => ({
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: color,
    cursor: "pointer",
  });

  const sizeBoxStyle = {
    display: "flex",
    gap: "20px",
    marginTop: "10px",
    marginLeft: "240px",
  };

  const sizeStyle = {
    padding: "10px 15px",
    border: "1px solid #30B348",
    borderRadius: "8px",
    fontFamily: "Carlito, sans-serif",
    fontSize: "18px",
    fontWeight: "400",
    cursor: "pointer",
  };

  const counterStyle = {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    marginTop: "50px",
    marginLeft: "240px",
  };

  const buttonStyle = {
    padding: "5px 10px",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "50%",
    border: "1px solid #30B348",
    backgroundColor: "#FFFFFF",
    marginTop: "5px",
  };

  const greenButtonStyle = {
    padding: "10px 100px",
    backgroundColor: "#30B348",
    color: "white",
    border: "none",
    borderRadius: "20px",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "20px",
    marginLeft: "260px",
  };

  const handleAddToCart = () => {
    navigate("/cart", { state: { product, count: countState } });
  };

  const handleImageClick = (imageUrl) => {
   
    navigate("/favourite", { state: { product, count } });
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginTop: "70px", marginLeft: "200px" }}>
        <img
          src={product.image}
          alt="product"
          style={{
            marginRight: "100px",
            marginLeft: "50px",
            width: "300px",
            height: "auto",
            marginTop: "30px",
            cursor: "pointer",
          }}
          onClick={() => handleImageClick(product.image)}
        />
        <div>
          <p style={textStyle}>{product.title}</p>
          <p style={subTextStyle}>Brand: {product.brand}</p>
          <p style={subTextStyle1}>{product.description}</p>
          <p style={subTextStyle2}>Price: ${product.price}</p>

          <p style={subTextStyle2}>Colors:</p>
          <div style={colorBoxStyle}>
            {colors.map((color) => (
              <div key={color} style={colorStyle(color)}></div>
            ))}
          </div>

          <p style={subTextStyle2}>Size:</p>
          <div style={sizeBoxStyle}>
            {sizes.map((size) => (
              <div key={size} style={sizeStyle}>{size}</div>
            ))}
          </div>

          <div style={counterStyle}>
            <p style={{ fontFamily: 'Carlito, sans-serif', color: '#30B348', fontSize: '24px', fontWeight: '700' }}>Count:</p>
            <button
              style={buttonStyle}
              onClick={() => setCount(countState > 1 ? countState - 1 : 1)} 
            >
              -
            </button>
            <span style={{ marginTop: '1px' }}>{countState}</span>
            <button
              style={buttonStyle}
              onClick={() => setCount(countState + 1)}
            >
              +
            </button>
            <img src="/images/heart.jpg" alt="Heart Icon" onClick={() => handleImageClick(product.image)} />

          </div>

          <button style={greenButtonStyle} onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
