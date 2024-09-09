import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../pages/Navbar/Navbar"
import Footer from "../pages/Footer/Footer"
import Homepage from "../Components/Homepage/Homepage"
import SignUpAs from "../Components/SignUpAs/SignUpAs"


const Pages = () => {


    return(

     <React.Fragment>
        <Navbar/>

            <Routes>

                <Route path="/" element = {<Homepage />}/>
                <Route path="/SignupAs" element = {<SignUpAs/>}/>
                

            </Routes>

        <Footer/>
     </React.Fragment>   


    )

}

export default Pages;