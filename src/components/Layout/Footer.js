import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="FooterContainer">
      <h4>All rights reserved</h4>
      <p className="text-center mt-3 footerlinks">
        <Link to={"/about"}>About</Link>|<Link to={"/contact"}>Contact</Link>|
        <Link to={"/policy"}>Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
