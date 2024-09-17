import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../pages/Navbar/Navbar"
import Footer from "../pages/Footer/Footer"
import Homepage from "../Components/Homepage/Homepage"
import SignUpAs from "../Components/SignUpAs/SignUpAs"
import SignUp from "../Components/SignUp/SignUp"


const Pages = () => {


    return(

     <React.Fragment>
        <Navbar/>
        

            <Routes>

                <Route path="/" element = {<Homepage/>}/>
                <Route path="/SignupAs" element = {<SignUpAs/>}/>
                <Route path="/SignUp" element = {<SignUp/>}/>
                <Route path="/Login" element = {<Login/>}/>
                <Route path="/Services" element = {<Services/>}/>
                
                    

            </Routes>

        <Footer/>
     </React.Fragment>   


    )

}

export default Pages;