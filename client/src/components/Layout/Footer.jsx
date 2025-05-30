import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h3 className="text-center">
        All rights reserved &copy; rishikesh Mishra
      </h3>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy" className="text-light">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
