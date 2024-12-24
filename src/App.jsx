import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomePage from "./HomePage";
import ProductPage from "./ProductsPage/productPage";
import Login from './auth/Login';
import Registration from "./auth/registration/Registration";
import Forget from "./auth/forgetPassword/Forget";
import Cart from './CartAndCheckout/cart';
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Profile from "./profile/Profile";
import DetailsPage from "./Details/details";
import Faviourite from "./Details/Faviourite";

function App() {
  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
}

function AppWithRouter() {
  const location = useLocation();
  const hideNavbarFooterPaths = ["/login", "/register", "/forget"];
  const shouldHideNavbarFooter = hideNavbarFooterPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbarFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productPage/:category" element={<ProductPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/cart" element={<Cart products={[]} onCheckout={() => {}} />} />
        <Route path="/checkout" element={<Cart products={[]} onCheckout={() => {}} />} /> 
        <Route path="/product/:id" element={<DetailsPage />} />
        <Route path="/favourite" element={<Faviourite />} />
        <Route path="/profile" element={<Profile />} />     
      </Routes>

      {!shouldHideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
