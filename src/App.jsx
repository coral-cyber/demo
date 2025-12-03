import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Carousel from "./components/Carousel/Corousel.jsx";
import SoapCards from "./components/SoapCards/SoapCards";
import soapsData from "./data/soaps.json";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  const [soaps, setSoaps] = useState([]);
  useEffect(() => {
    setSoaps(soapsData.soaps); // load offline JSON
  }, []);
  return (
    <div>
      <Header />
      <Hero />
      <Carousel />
      <div>
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          Handmade Soap Collection
        </h1>

        <SoapCards soaps={soaps} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
