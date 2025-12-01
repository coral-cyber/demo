import React from "react";
import HeroImg from "../../Assets/rose2.jpg";

function Hero() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "80vh", // adjust height
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="hero  "
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Welcome to Our Site
        </h1>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "1.2rem",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#ff7f50",
            color: "white",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
