import React, { Component, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home.web"));
const Login = lazy(() => import("../pages/Login.web"))

export default class WebRoutes extends Component {
  render() {
    return (
      <>
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </>
    );
  }
}
