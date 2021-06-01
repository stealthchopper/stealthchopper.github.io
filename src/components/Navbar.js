import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { GiSeagull } from "react-icons/gi";

function showBusiness(business) {
  return business.busName;
}

const business = {
  busName: "Seagullforest",
  leader: "Leonids Jefimovs",
};

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <h1 className="nav-title">{showBusiness(business)}</h1>
        <Link to="/" className="navbar-logo">
          <GiSeagull />
        </Link>
        <ul className="nav-menu">
          <a
            href="https://www.instagram.com/seagullforest/?hl=en"
            className="nav-item"
          >
            <FaInstagram />
          </a>
          <a href="https://twitter.com/seagullforest" className="nav-item">
            <FiTwitter />
          </a>
          <li className="nav-item">
            <FiFacebook />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
