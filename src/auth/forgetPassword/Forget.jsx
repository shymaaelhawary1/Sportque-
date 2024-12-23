import "./Forget.css";
import { useSelector } from "react-redux"; // لاستخدام البيانات من Redux
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updatePassword } from "/public/redux/userSlice"; //
import { useDispatch } from "react-redux"; // لاستخدام Redux
import { useNavigate } from 'react-router-dom';



// إعداد التحقق باستخدام Yup
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match") // التحقق من مطابقة كلمات المرور
    .required("Confirm password is required"),
});

function Forget() {
    const navigate = useNavigate();  
  
    const handleClick = (data) => {
        if(userInfo && data.email !== '')
                navigate("/login");  
    };

    const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // وظيفة الإرسال
  const onSubmit = (data) => {
    if (userInfo && data.email === userInfo.email) {
      console.log("Before dispatch:", userInfo);
      dispatch(updatePassword(data.password));
      console.log("After dispatch:", userInfo);
      alert("Password has been reset successfully!");
    } else {
      alert("Email not found. Please try again.");
    }
  };
  


  return (
    <div className="main">
    <div className="container">
      <div className="main-content d-flex align-items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <div className="forgetWord">
              <h2 className="mb-3">Forget Password</h2>
                      
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
            <label htmlFor="email">Pasword</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              {...register("password")}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}

             {/* Confirm Password */}
             <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}

            <button type="submit" className="ConfirmBtn" onClick={handleClick}>Confirm</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Forget;
