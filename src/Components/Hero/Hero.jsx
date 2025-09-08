import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero h-screen flex items-center justify-center w-screen bg-amber-600">
      <div className="hero-container ">
        <div className="hero-left">
          <h1>Welcome to Market</h1>
        </div>
        <div className="hero-right"></div>
      </div>
    </div>
  );
};

export default Hero;
