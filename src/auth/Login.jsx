import "./Login.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux"; // استيراد useSelector
import * as yup from "yup";

// إعداد التحقق باستخدام Yup
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // استرجاع بيانات المستخدم المخزنة في Redux
  const userInfo = useSelector((state) => state.user.userInfo);

  // وظيفة التحقق عند الإرسال
  const onSubmit = (data) => {
    if (userInfo && data.email === userInfo.email && data.password === userInfo.password) {
      alert("Login Successful!");
      console.log("Logged in as:", userInfo);
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="main-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="sign-in">
              <div className="sign-in-content">
                <h2>Sign in</h2>
                <p>
                  Need an account? <Link id="sign-up" to="/register">Sign up</Link>
                </p>
              </div>
              <div className="sign-buttons">
                <button type="button" className="google d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faGoogle} style={{ color: "#e71333" }} /> Use Google
                </button>
                <button type="button" className="apple d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faApple} style={{ color: "#000000" }} /> Use Apple
                </button>
              </div>
            </div>
            <div className="OR">
              <hr />
              <span>OR</span>
              <hr />
            </div>
            <div className="inputs">
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
              <div className="pass">
                <label htmlFor="password">Password</label>
                <Link to="/forget">Forget Password?</Link>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                {...register("password")}
              />
              {errors.password && <p className="error">{errors.password.message}</p>}

              {/* Remember Me */}
              <div className="remember-checkbox">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className="fw-bold">Remember me</label>
              </div>
              <button type="submit" className="signInBtn">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
