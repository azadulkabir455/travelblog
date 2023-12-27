import React from "react";
import SignInSignUpContainer from "../components/form/SignInSignUpContainer";
import { Lock, Mail } from "react-feather";
import InputField from "../components/form/InputField";
import ShowPassHoc from "../hoc/ShowPassHoc";
import SignInSignUpController from "../controllers/SignInSignUpController";

class Login extends SignInSignUpController {
  render() {
    const { showPassValue, showPassFunc } = this.props;
    return (
      <>
        <SignInSignUpContainer>
          <div className="signInSignUpForm w-75">
            <div className="formHeader mb-4">
              <h3 className="text-secondary">Login</h3>
              <p className="text-body-secondary">
                It is pleasure that you are connected with us.
              </p>
            </div>
            <div className="formBody pb-4">
              <form action="">
                <InputField label="email" type="text" icon={<Mail size="18" color="#343f5281"/>} />
                <InputField
                  label="password"
                  type={`${showPassValue ? "text" : "password"}`}
                  icon={<Lock size="18"  color="#343f5281" />}
                  password={true}
                  showPassValue={showPassValue}
                  showPassFunc={showPassFunc}
                />
                <button className="btn btn-lg btn-primary rounded-5 text-light text-capitalize w-100 mt-3">
                  Sign In
                </button>
              </form>
              <div className="forgotPass">
                <a href="/" className="d-inline-block float-end link-offset-2 mt-2">
                  Forgot password
                </a>
              </div>
            </div>
            <div className="formFotter d-flex flex-column justify-content-center align-items-center mt-5">
              <div className="divider position-relative w-100 pb-4">
                <p className="text-uppercase text-secondary text-bg-light px-2 mt-0 position-absolute start-50 translate-middle-x z-3">or</p>
              </div>
              <div className="signInWithGoogle">
                <button className="btn text-secondary btn-light shadow py-2 px-3 rounded-5">
                  <img src="https://shorturl.at/lzUW1" alt="" className="me-2"/>
                  Sign in with google
                </button>
              </div>
              <div className="registrationLink">
                <p className="mt-2 text-secondary text-center">
                  Don't have account please <a href="/" className="link-underline link-underline-opacity-0 text-capitalize d-inline-block">Sign up here</a>
                </p>
              </div>
            </div>
          </div>
        </SignInSignUpContainer>
      </>
    );
  }
}

export default ShowPassHoc(Login);
