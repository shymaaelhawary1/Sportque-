import "./profile.css";
import { useSelector } from "react-redux";


function Profile() {
  const userInfo = useSelector((state) => state.user.userInfo);

    return ( 
        <div className="profile-main">
            <div className="container h-100">
                <div className="profile-content w-100 h-100">
                    <div className="row h-100">
                        <div className="col-lg-4 cl-md-6 col-sm-12  d-flex align-items-center flex-column iden">
                           <h1 className="mt-5">{userInfo.firstname.charAt(0).toUpperCase()}</h1>        
                            <div className="profileInfo text-center">
                                <h5>{userInfo.firstname + ' ' + userInfo.lastname}</h5>
                                <h5>{userInfo.email}</h5>
                                <p className="mt-3">Number of orders: <span></span></p>
                            </div>
                          
                            
                            

                        </div>
                        <div className="col-lg-8 cl-md-6 col-sm-12 orders d-flex flex-column justify-content-center align-items-center ">
                            <img src="/public/images/empty.svg" alt="" />
                            <p className="mt-4 fw-bold fs-3"> My orders here</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Profile;