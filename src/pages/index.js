import React, { useState } from 'react';
import Navbar from '../components/Navbar';
// import "../../App.css";
import HeroSection from '../components/Hero';
import SideBar from '../components/Sidebar';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Footer from '../components/Footer';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../components/InfoSection/Data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}></Navbar>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Services />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Footer />
    </>
  );
};

export default Home;
