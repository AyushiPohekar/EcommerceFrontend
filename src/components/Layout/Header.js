import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Layout.css";
import {RiShoppingBag3Fill} from 'react-icons/ri'


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg headerContainer">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to={'/'} className="navbar-brand headerlinks" >
             <RiShoppingBag3Fill/> YourShop
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={'/'}
                  className="nav-link  headerlinks"
                 >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/category'}
                  className="nav-link  headerlinks"
                 >
                Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/register'} className="nav-link headerlinks" >
                 Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/login'} className="nav-link headerlinks">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/cart'} className="nav-link headerlinks" >
                cart{0}
                </NavLink>
              </li>
           
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
