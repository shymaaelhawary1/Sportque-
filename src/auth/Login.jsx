import  { Component } from 'react';
import "./Login.css";

class  Login extends Component {
    state = {  } 
    render() { 
        return (
            <div className="main">
            <div className="container">
                <div className="main-content">
                <form action="">
                    <div className="sign-in">
                    <div className="sign-in-content">
                        <h2>Sign in</h2>
                        <p>Need an account? <a id="sign-up" href="">Sign up</a></p>
                    </div>
                    <div className="sign-buttons">
                        <button className="google">
                        <img src="google.png" alt="" />Use Google
                        </button>
                        <button className="apple">
                        <img src="apple.png" alt="" />Use Apple
                        </button>
                    </div>
                    </div>
                    <div className="OR">
                    <hr />
                    <span>OR</span>
                    <hr />
                    </div>
                    <div className="inputs">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email@email.com"
                    />
                    <div className="pass">
                        <label htmlFor="password">Password</label>
                        <a href="">Forget Password?</a>
                    </div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                    />
                    <div className="remember-checkbox">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <button className="signInBtn">Sign In</button>
                    </div>

                </form>
                </div>
            </div>
            </div>

        );
    }
}

export default Login ;