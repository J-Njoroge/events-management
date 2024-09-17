import React from "react";


const Homepage = () => {

    return(
        <div className="home-container">
        <nav className="navbar">
          <h1 className="logo">My Website</h1>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="hero-section">
          <h1>Welcome to My Website</h1>
          <p>Your journey to awesome experiences begins here.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    )

}

export default Homepage;