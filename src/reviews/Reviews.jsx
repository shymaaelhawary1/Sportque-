import "./Reviews.css"
function Reviews () {
        return (
            <section className="customer-section text-center">
  <div className=" container h-100 d-flex align-items-center flex-column">
    <h2 className="mt-5 mb-5 fw-bold">Our Happy Customers</h2>
    <div id="customerCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

       
        <div className="carousel-item active">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="review-card">
              <div className="RatingIcons d-flex text-warning gap-1 justify-content-center ">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                </div>                <h5>Asmaa M. <i className="bi bi-check-circle-fill "></i></h5>
                <p>An absolutely fantastic experience! The product quality is exceptional.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="review-card">
              <div className="RatingIcons d-flex text-warning gap-1 justify-content-center ">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                </div>                <h5>Asmaa A. <i className="bi bi-check-circle-fill"></i></h5>
                <p>An absolutely fantastic experience! Delivery was faster than expected.</p>
              </div>
            </div>
            <div className="col-lg-4 d-lg-block">
              <div className="review-card">
              <div className="RatingIcons d-flex text-warning gap-1 justify-content-center ">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                </div>                <h5>Hend M. <i className="bi bi-check-circle-fill"></i></h5>
                <p>The product quality is exceptional, with impressive attention to detail.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="review-card">
              <div className="RatingIcons d-flex text-warning gap-1 justify-content-center ">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                </div>                <h5>Fatma S. <i className="bi bi-check-circle-fill"></i></h5>
                <p>The best experience I have had shopping online. Amazing attention to detail!</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="review-card">
              <div className="RatingIcons d-flex text-warning gap-1 justify-content-center ">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                </div>                <h5>Mohamed K. <i className="bi bi-check-circle-fill"></i></h5>
                <p>Fantastic product quality! Delivery was incredibly fast. Highly recommend!</p>
              </div>
            </div>
            <div className="col-lg-4  d-lg-block"> 
              <div className="review-card">
              <div className="RatingIcons d-flex justify-content-center  text-warning gap-1">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                </div>  <h5>Khaled R. <i className="bi bi-check-circle-fill"></i></h5>
                <p>Excellent quality and fast delivery. Would definitely buy again!</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#customerCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#customerCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>
    
  </div>
</section>
        );
    }

 
export default Reviews;