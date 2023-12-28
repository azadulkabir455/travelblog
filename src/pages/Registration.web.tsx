import React from "react";
import SignInSignUpContainer from "../components/form/SignInSignUpContainer";
import { Lock, Mail } from "react-feather";
import InputField from "../components/form/InputField";
import ShowPassHoc from "../hoc/ShowPassHoc";
import SignInSignUpController from "../controllers/SignInSignUpController";
import { Link } from "react-router-dom";

class Registration extends SignInSignUpController {
  render() {
    const { showPassValue, showPassFunc, showConfirmPassValue, showConfirmPassFunc } = this.props;
    return (
      <>
        <SignInSignUpContainer>
          <div className="signInSignUpForm w-75">
            <div className="formHeader mb-4">
              <h3 className="text-secondary">Sign up</h3>
              <p className="text-body-secondary">Thanks for connecting us</p>
            </div>
            <div className="formBody pb-4">
              <form action="">
                <InputField
                  label="email"
                  type="text"
                  icon={<Mail size="18" color="#343f5281" />}
                />
                <InputField
                  label="password"
                  type={`${showPassValue ? "text" : "password"}`}
                  icon={<Lock size="18" color="#343f5281" />}
                  password={true}
                  showPassValue={showPassValue}
                  showPassFunc={showPassFunc}
                />
                <InputField
                  label="confirm-password"
                  type={`${showConfirmPassValue ? "text" : "password"}`}
                  icon={<Lock size="18" color="#343f5281" />}
                  password={true}
                  showPassValue={showConfirmPassValue}
                  showPassFunc={showConfirmPassFunc}
                />
                <button className="btn btn-lg btn-primary rounded-5 text-light text-capitalize w-100 mt-3">
                  Sign up
                </button>
              </form>
            </div>
            <div className="formFotter d-flex flex-column justify-content-center align-items-center mt-4">
              <div className="divider position-relative w-100 pb-5">
                <p className="text-uppercase text-secondary text-bg-light px-3 mt-0 position-absolute start-50 translate-middle-x z-3">
                  or
                </p>
              </div>
              <div className="registrationLink">
                <p className="text-body-tertiary text-center">
                  You have already an account{" "}
                  <Link
                    to="/signin"
                    className="link-underline link-underline-opacity-0 text-capitalize d-inline-block"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </SignInSignUpContainer>
      </>
    );
  }
}

export default ShowPassHoc(Registration);
