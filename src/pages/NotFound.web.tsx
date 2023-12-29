import React, { Component } from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import { Media } from "../resource/Media";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-lg notFound">
          <div className="contentContainer d-flex flex-column align-items-center">
            <img src={Media.notFound} alt="" className="d-block mx-auto" />
            <h3 className="text-secondary text-capitalize text-center fw-bold mt-5">
              Oops! Page Not Found.
            </h3>
            <p className="mx-auto text-center text-body-secondary mt-3">
              The page you are looking for is not available or has been moved.
              Try a different page or go to homepage with the button below.
            </p>
            <Link to="/">
              <div className="btn btn-primary px-4 py-3 rounded-pill text-light fw-bolder text-capitalize mt-3">
                Go to home
              </div>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
