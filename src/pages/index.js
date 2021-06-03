import React, { useState } from "react";
import Navbar from "../components/Navbar";
// import "../../App.css";
import HeroSection from "../components/Hero";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle}></Navbar>
      <HeroSection></HeroSection>
    </>
  );
};

export default Home;
