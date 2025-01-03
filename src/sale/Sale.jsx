import { useState, useEffect } from "react";
import "./Sale.css";

function Sale() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/categories");
        const data = await response.json();

        console.log("Fetched data:", data); 

        if (Array.isArray(data)) {
          const onSaleProducts = data.flatMap((category) => {
            if (category.items && Array.isArray(category.items)) {
              return category.items.filter((product) => product.onSale === "true");
            }
            return [];
          });

          setProducts(onSaleProducts);
        } else {
          console.error("Invalid data format: Expected an array");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <section className="onSale mt-5" id="sale">
      <div className="container h-100">
        <div className="content d-flex flex-column align-items-center h-100 w-100">
          <h1 className="mb-5">onSale</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="row w-100 h-100 d-flex justify-content-center">
              {products.slice(0, visibleCount).map((product, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                  <div className="card d-flex flex-column">
                    <div className="discount position-relative">
                      <h4 className="text-white bg-danger py-1 px-2">50%</h4>
                      <div className="img-container w-100 d-flex justify-content-center">
                        <img
                          src={product.image}
                          className="h-100 w-100"
                          alt={product.title}
                        />
                      </div>
                    </div>
                    <div className="info p-2">
                      <h3>{product.title}</h3>
                      <div className="RatingIcons d-flex text-warning gap-1">
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <i key={i} className="bi bi-star-fill"></i>
                          ))}
                      </div>
                      <div className="price d-flex justify-content-between">
                        <p className="fs-5">
                          <del>{product.price}</del>
                        </p>
                        <p className="text-success fw-bold fs-3">
                          {(product.price / 2).toFixed(2)}
                          <span className="text-success fw-bold">$</span>
                        </p>
                      </div>
                      <div className="d-flex justify-content-center w-100">
                        <button>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {visibleCount < products.length && (
            <button
              className="viewBtn fw-bold py-1 px-3 mt-4"
              onClick={handleViewMore}
            >
              View More
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Sale;
