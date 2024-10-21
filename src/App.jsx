import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import MobileNav from "./Components/MobileNav";
import Hero from "./Components/Hero";
import Automate from "./Components/Automate";
import Smart from "./Components/Smart";
import Benefits from "./Components/Benefits";
import Works from "./Components/Works";
import Pricing from "./Components/Pricing";
import Faq from "./Components/Faq";
import Discover from "./Components/Discover";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Nav />
      <MobileNav />
      <Hero />
      <Automate />
      <Smart />
      <Benefits />
      <Works />
      <Pricing />
      <Faq />
      <Discover />
      <Footer />
    </>
  );
}

export default App;
