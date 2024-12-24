import React, { useState, useEffect } from "react";
import './Favourite.css';

function FavouritesPage() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);
  }, []); 

  return (
    <div>
      <h1>Your Favourites</h1>
      <div className="favourites-list">
        {favourites.length === 0 ? (
          <p>No favourites added yet!</p>
        ) : (
          favourites.map((product, index) => (
            <div key={index} className="favourite-item">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FavouritesPage;
