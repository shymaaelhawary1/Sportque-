import HomePage from "./HomePage";
import ProductPage from "./productPage/productPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from './auth/Login';
import Registration from "./auth/registration/Registration";
import Forget from "./auth/forgetPassword/Forget";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productPage" element={<ProductPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/forget" element={<Forget />} />

      </Routes>
    </Router>
    
  );
}

export default App;
