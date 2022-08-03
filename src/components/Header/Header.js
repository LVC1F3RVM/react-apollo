import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.svg";
import "./Header.css";

export const Header = () => {
  return (
    <div className="app-header">
      <div className="header-nav">
        <Link to="/" className="header-link">
          <div className="">All</div>
        </Link>
        <Link to="/tech" className="header-link">
          tech
        </Link>
        <Link to="/clothes" className="header-link">
          clothes
        </Link>
      </div>
      <img src={logo} alt="Logo" id="branding" />
      <div className="cart-currency-bar">
        <div className="currency-change">
          <div>&#36;</div>
          <div className="">&#8250;</div>
        </div>
        <div>
          <Link to="/cart" className="header-link">
            &#128722;
          </Link>
        </div>
      </div>
    </div>
  );
};
