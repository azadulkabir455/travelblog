import React, { Component, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home.web"));
const Login = lazy(() => import("../pages/Login.web"))
const Registration = lazy(() => import("../pages/Registration.web"))
const ForgotPass = lazy(() => import("../pages/ForgotPass.web"))

export default class WebRoutes extends Component {
  render() {
    return (
      <>
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Registration />} />
            <Route path="/forgotpass" element={<ForgotPass />} />
          </Routes>
        </Suspense>
      </>
    );
  }
}
