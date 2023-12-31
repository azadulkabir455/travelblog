import React, { Component } from "react";
import { Media } from "../../resource/Media";
import { Link, NavLink } from "react-router-dom";
import { Grid, LogIn, LogOut, User } from "react-feather";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="position-sticky top-0 z-3">
          <div className="navbar navbar-expand bg-light menubar">
            <div className="container-lg">
              <Link to="/" className="navbar-brand">
                <img src={Media.logo} alt="" className="logo" />
              </Link>
              <ul className="navbar-nav menu">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link fw-bold">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/blogs" className="nav-link fw-bold">
                    Blogs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link fw-bold">
                    Contact
                  </NavLink>
                </li>
                {/* <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle fw-bold"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src="https://shorturl.at/akAHL"
                      alt=""
                      className="rounded-circle"
                    />
                  </span>
                  <ul className="dropdown-menu border-0 rounded-0 shadow">
                    <li>
                      <Link
                        to="/"
                        className="dropdown-item fw-bold d-flex align-items-center"
                      >
                        <User size="16" className="me-2" />
                        Profile
                      </Link>
                      <Link
                        to="/"
                        className="dropdown-item fw-bold d-flex align-items-center"
                      >
                        <Grid size="16" className="me-2" />
                        Dashbord
                      </Link>
                      <div className="dropdown-divider border-light-subtle"></div>
                      <Link
                        to="/"
                        className="dropdown-item fw-bold d-flex align-items-center"
                      >
                        <LogOut size="16" className="me-2" />
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li> */}
                <li className="nav-item dropdown ms-2">
                  <span
                    className="nav-link dropdown-toggle bg-primary text-light fw-bold rounded-pill py-2 px-3"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    As Guest
                  </span>
                  <ul className="dropdown-menu border-0 rounded-0 shadow">
                    <li>
                      <Link
                        to="/signin"
                        className="dropdown-item fw-bold d-flex align-items-center"
                      >
                        <LogIn size="16" className="me-2" /> Login
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
