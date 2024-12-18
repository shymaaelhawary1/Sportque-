import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";


import './index.css'
import App from './App.jsx'
import Login from './auth/Login';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* الصفحة الرئيسية */}
        <Route path="/" element={<App />} />
        
        {/* صفحة تسجيل الدخول */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </StrictMode>,
)
