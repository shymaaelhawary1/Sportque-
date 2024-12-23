import { useNavigate } from 'react-router-dom';

import "./Categories.css";

function Categories() {
  const navigate = useNavigate();  
  
  const handleClick = () => {
    navigate("/productpage");  
  };

  return (
    <section className="categories mt-5" id='Categories'>
      <div className="container d-flex justify-content-center align-items-center h-100 p-3">
        <div className="whiteContainer bg-light rounded-5 mt-3  d-flex flex-column justify-content-center align-items-center p-3">
          <h1 className='mb-4 fw-bold'>Choose Your Sport</h1>
          <div className="row gap-2 d-flex justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="con d-flex justify-content-center align-items-center p-5 rounded  fw-bold" onClick={handleClick}>
                <h2>Swimming</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="con d-flex justify-content-center align-items-center p-5 rounded  fw-bold">
                <h2>Football</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="con d-flex justify-content-center align-items-center p-5 rounded  fw-bold">
                <h2>Basketball</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="con d-flex justify-content-center align-items-center p-5 rounded  fw-bold">
                <h2>Tennis</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
