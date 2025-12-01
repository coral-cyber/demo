import React from "react";
import HeroImg from "../assets/rose2.jpg";

function Hero() {
  return (
    <div className="hero  ">
      <img className="w-full" src={HeroImg} alt="Hero" />
      <h1>Welcome to Our Site</h1>
    </div>
  );
}

export default Hero;
