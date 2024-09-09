import React from "react";
import '../SignUp/SignUp.css'


function SignUp() {



    return(
        
        <div className="signup-form">

            <form className="form">
                <label>Name 
                <input
                type="text"
                placeholder="Name"  
                />
                </label>

                <label>Email

                <input 
                type="email"
                placeholder="email"   
                />
                </label>
            </form>

        </div>
    )


}

export default SignUp


