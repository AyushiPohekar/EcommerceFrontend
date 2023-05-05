import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Layout.css";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { useAuth } from "../Context/auth";
//import { toast } from "react-toastify";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../Context/cart";
import { Badge } from "antd";
import { BiCart } from "react-icons/bi";
import { toast } from "react-toast";


const Header = () => {
  const navigate = useNavigate();
  const [cart]=useCart();
  console.log(cart)
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  console.log(categories)
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");

    toast.success("Logout Success");
  };
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
          <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
            <Link to={"/"} className="navbar-brand headerlinks">
              <RiShoppingBag3Fill /> YourShop
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 leftnav">
              <SearchInput />
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link  headerlinks">
                  Home
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
               

              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to={"/register"} className="nav-link headerlinks">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/login"} className="nav-link headerlinks">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item cartl">
                 <NavLink to={"/cart"} className="nav-link headerlinks headerCart">
                {/* 🛒{cart?.length===0?(<>My Cart</>):(<>| <div><p>{cart?.length}items</p></div></>)} */}
                <Badge count={cart?.length} showZero offset={[10, -5]}>
                    <BiCart className="cartsym"/>
                  </Badge>
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
