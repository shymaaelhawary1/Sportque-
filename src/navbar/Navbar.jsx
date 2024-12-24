import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./Navbar.css";
import { clearUserData } from "/public/redux/userSlice.js";

function Navbar() {
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCartClick = () => {
    navigate("/cart", { state: { cart } });
  };

  const handleLogout = () => {
    dispatch(clearUserData());
  };

  const toSelectedPath = () => {
    if (userInfo) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/images/Sportique..svg" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <img src="/images/Sportique..svg" alt="" />
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav w-75 justify-content-center flex-grow-1 pe-3 fs-5 gap-5">
              <li className="nav-item">
                <Link className="nav-link" to="/" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("Categories");
                  }}
                >
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => scrollToSection("brands")}
                  data-bs-dismiss="offcanvas"
                >
                  Brands
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => scrollToSection("sale")}
                  data-bs-dismiss="offcanvas"
                >
                  Onsale
                </a>
              </li>
            </ul>
            <div className="navIcons d-flex justify-content-center align-items-center gap-3 me-5">
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="/images/mdi_user-circle.svg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      onClick={toSelectedPath}
                      className="dropdown-item"
                      href="#"
                    >
                      {userInfo
                        ? `${userInfo.firstname} ${userInfo.lastname}`
                        : "Login"}
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleLogout}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
              <img
                src="/images/mdi_shopping-cart.svg"
                className="img-fluid"
                alt=""
                onClick={handleCartClick}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
