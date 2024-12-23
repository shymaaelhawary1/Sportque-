import "./Registration.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatch } from "react-redux";
import { saveUserData } from "/public/redux/userSlice.js"; // استيراد الـ action
import { useNavigate } from 'react-router-dom';


// إعداد التحقق باستخدام Yup
const schema = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function Registration() {
  const navigate = useNavigate();  
  
  const handleClickm = (data) => {
      if( data.email !== '')
              navigate("/login");  
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch(); // استخدام dispatch لإرسال البيانات

  const onSubmit = (data) => {
    dispatch(saveUserData(data)); // إرسال البيانات إلى Redux
    alert("Registration Successful!");
  };


  return (
    <div className="main">
      <div className="container">
        <div className="main-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="sign-in">
              <div className="sign-in-content">
                <h2>Sign up</h2>
              </div>
             
            </div>
          
            <div className="inputs">
              {/* Firstname */}
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Enter First Name"
                {...register("firstname")}
              />
              {errors.firstname && <p className="error">{errors.firstname.message}</p>}

              {/* Lastname */}
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Enter Last Name"
                {...register("lastname")}
              />
              {errors.lastname && <p className="error">{errors.lastname.message}</p>}

              {/* Email */}
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@email.com"
                {...register("email")}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}

              {/* Password */}
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                {...register("password")}
              />
              {errors.password && <p className="error">{errors.password.message}</p>}

              <div className="remember-checkbox">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="fw-bold">
                  I agree to the terms and conditions
                </label>
              </div>
              <button type="submit" className="Confirm" onClick={handleClickm}>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
