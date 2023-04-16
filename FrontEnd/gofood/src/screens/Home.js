import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import Carousal from "../components/Carousal";
import CityCard2 from "../components/CityCard2"

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div><Carousal /></div>
      <div>
        <CityCard2 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
