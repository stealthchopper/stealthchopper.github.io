import React, { useState } from "react";
import Navbar from "../components/Navbar";
// import "../../App.css";
import HeroSection from "../components/Hero";
import SideBar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}></Navbar>
      <HeroSection></HeroSection>
    </>
  );
};

export default Home;
