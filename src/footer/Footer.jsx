import "./Footer.css";

function Footer() {
  return (
    <div className="position-relative w-100 conn mt-5">
      {/* Section Above Footer */}
      <div className="d-flex justify-content-center align-items-center">
        <div className="sub d-flex justify-content-center align-items-center rounded-4 text-center">
          <h1>Stay Up To Date About Our Coming Available Sports</h1>
        </div>
      </div>

      {/* Footer Section */}
      <section className="footer w-100 position-relative">
        <div className="container-fluid">
          <div className="footer-content">
            <div className="row text-center text-md-start mt-5">
              {/* Logo Section */}
              <div className="col-lg-2 col-md-6 col-sm-12 mb-4 mb-lg-0">
                <img
                  src="/images/Sportique..svg"
                  alt="Logo"
                  className="img-fluid mb-3"
                />
              </div>

              {/* About Section */}
              <div className="col-lg-2 col-md-6 col-sm-12">
                <h6 className="fw-bolder mb-3">ABOUT</h6>
                <ul>
                  <li><a href="#">Company</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Quality Gift</a></li>
                  <li><a href="#">Cards</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>

              {/* Shop Section */}
              <div className="col-lg-2 col-md-6 col-sm-12">
                <h6 className="fw-bolder mb-3">SHOP</h6>
                <ul>
                  <li><a href="#">Loose Leaf Tea</a></li>
                  <li><a href="#">Green Teas</a></li>
                  <li><a href="#">Packaged Teas</a></li>
                  <li><a href="#">Teaware</a></li>
                  <li><a href="#">Tea Gifts</a></li>
                  <li><a href="#">Iced Tea</a></li>
                </ul>
              </div>

              {/* Help Center */}
              <div className="col-lg-2 col-md-6 col-sm-12">
                <h6 className="fw-bolder mb-3">HELP CENTER</h6>
                <ul>
                  <li><a href="#">Delivery Information</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Returns & Refunds</a></li>
                  <li><a href="#">Privacy Notice</a></li>
                  <li><a href="#">Shopping FAQs</a></li>
                </ul>
              </div>

              {/* Contact Section */}
              <div className="col-lg-4 col-md-12 col-sm-12 text-center text-md-start">
                <h6 className="fw-bolder mb-3">GET IN TOUCH</h6>
                <p className="mb-1">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </p>
                <p className="mb-1">support@example.com</p>
                <p>Need help? Call us:</p>
                <a href="tel:01244566789" className="phone">0124 456 6789</a>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="payment w-100 text-center py-3 mt-3">
            <small>PAYMENTS WE ACCEPT</small>
            <img
              src="./images/payment-img_1.avif"
              alt="Payment Methods"
              className="img-fluid mt-2"
              style={{ maxWidth: "200px" }}
            />
          </div>

          {/* Copyright Section */}
          <div className="text-center py-3">
            <p className="fw-bold mb-0">
              Copyright © 2023 Sportique. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
