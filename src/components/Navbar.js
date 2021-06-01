import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

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
        <ul className="nav-menu">
          <li className="nav-item">Instagram</li>
          <li className="nav-item">WhatsApp</li>
          <li className="nav-item">Facebook</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
