import React, { Component, ReactNode } from "react";
import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";

type SignInSignUpContainerType = {
  children: ReactNode;
};
export default class SignInSignUpContainer extends Component<SignInSignUpContainerType> {
  render() {
    const { children } = this.props;
    return (
      <>
        <div className="container-fuild">
          <div className="signInSignUpContainer position-absolute h-100 w-100 overflow-x-hidden">
            <div className="row align-items-stretch h-100">
              <div className="col-12 col-lg-7 signInSignUpContainerLeftSide d-flex flex-column align-items-center justify-content-center">
                <div className="contentContainer">
                  <h4 className="text-light text-capitalize mb-4">
                    Journey <span className="break">make your</span>{" "}
                    <span className="break">life memorable</span>
                  </h4>
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <div className="homeLink position-relative">
                  <Link to="/" 
                  className="position-absolute text-capitalize fw-bold link-underline link-underline-opacity-0" 
                  style={{top:"20px", right: "20px"}}>Back to home <ArrowRight size="18"/></Link>
                </div>
                <div className="formContainer">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
