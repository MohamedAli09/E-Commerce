import React from "react";
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import shopingCart from "../../Assets/Imgs/freshcart-logo.svg";
import { tokenContext } from "../../Context/TokenContext";
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
export default function NavBar() {
  let { token, setToken } = useContext(tokenContext);
  const { numOfCards } = useContext(cartContext);

  function logout() {
    localStorage.removeItem("userToken");
    setToken(null);
  }
  return (
    <>
      <nav className={`navbar navbar-expand-lg  p-3  ${styles.NavBar} `}>
        <div className="container ">
          <Link className="navbar-brand" to="/">
            <img src={shopingCart} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {token ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link    " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  " to="Brands">
                    Brands
                  </Link>
                </li>

                <li className="nav-item position-relative">
                  <Link className="nav-link  " to="cart">
                    Cart
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {numOfCards}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {token ? (
                <li className="nav-item">
                  <Link className="nav-link  " to="login" onClick={logout}>
                    LogOut
                  </Link>
                </li>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <Link
                      className="nav-link    "
                      aria-current="page"
                      to="register"
                    >
                      Register
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link  " to="login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
