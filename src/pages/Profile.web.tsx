import React, { Component } from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import BlogCardLarge from "../components/global/BlogCardLarge";
import { Edit, Edit2, Edit3, Facebook, Linkedin } from "react-feather";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="profileContainer py-4">
          <div className="row g-5">
            <div className="col-12 col-lg-4">
              <div className="userProfile shadow-lg rounded-3 p-4 position-sticky">
                <img
                  src="https://shorturl.at/akAHL"
                  alt=""
                  className="rounded-circle mx-auto d-block"
                />
                <h3 className="text-center mt-4 mb-0 text-secondary">
                  Jhone Ibrahim
                </h3>
                <p className="text-center text-body-secondary">
                  jhone@gmail.com
                </p>
                <div className="socialIcon d-flex justify-content-center">
                  <Facebook size="18px" />
                  <Linkedin size="18px" />
                </div>
                <Link
                  to="/editprofile"
                  className="text-center fw-medium d-block mt-3 link-underline link-underline-opacity-0"
                >
                  <Edit3 size="16px" className="me-1"/>
                  Edit Profile
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <BlogCardLarge small={true} />
              <BlogCardLarge small={true} />
              <BlogCardLarge small={true} />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
