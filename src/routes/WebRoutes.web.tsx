import React, { Component, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/global/Loader";
import Blog from "../pages/Blog.web";

const Home = lazy(() => import("../pages/Home.web"));
const Blogs = lazy(() => import("../pages/Blog.web"));
const ContactUs = lazy(() => import("../pages/Contact.web"));

const Login = lazy(() => import("../pages/Login.web"))
const Registration = lazy(() => import("../pages/Registration.web"))
const ForgotPass = lazy(() => import("../pages/ForgotPass.web"))
const NotFound = lazy(()=> import("../pages/NotFound.web"))

export default class WebRoutes extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<ContactUs />}/>

            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Registration />} />
            <Route path="/forgotpass" element={<ForgotPass />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Suspense>
      </>
    );
  }
}
