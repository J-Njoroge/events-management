import React from "react";
import '../SignUp/SignUp.css';


function SignUp() {



    return(
        
        <div className="container">
            {/* Left Section */}
            <div className="left-section">
                <div className="logo">
                    {/* Placeholder for your logo */}
                    <img src="logo.png" alt="Logo" />
                </div>
                <div className="design">
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                    <div className="circle circle-3"></div>
                    <div className="circle circle-4"></div>
                </div>
                <p className="message">Sign in to continue access</p>
            </div>

            {/* Right Section */}
            <div className="right-section">
                <h2>Sign Up</h2>
                <form className="form">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
        
    )


}

export default SignUp


