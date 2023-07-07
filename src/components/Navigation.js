import React from "react";
import './Navigation.css';
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  console.log(isLoggedIn);
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-bottom-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <h2>NavBar</h2>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link active" to="/signup">
                  Signup
                </Link>
              </li>
            )}

            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  Login
                </Link>
              </li>
            )}

            {isLoggedIn && (
              <li className="nav-item">
                <link className="nav-link active" to="/user/dashboard">
                  dashboard
                </link>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-tem">
                <link
                  className="nav-link active"
                  to="/"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Logout
                </link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
