import React, { Component, Suspense, lazy } from "react";
import ScrollToTop from "./ScrollToTop";
import { Routes, Route, Outlet } from "react-router-dom";
import Loader from "../components/global/Loader";

const Home = lazy(() => import("../pages/Home.web"));
const Blogs = lazy(() => import("../pages/Blog.web"));
const ContactUs = lazy(() => import("../pages/Contact.web"));
const Profile = lazy(() => import("../pages/Profile.web"));
const EditProfile = lazy(() => import("../pages/EditProfile.web"));

const Login = lazy(() => import("../pages/Login.web"));
const Registration = lazy(() => import("../pages/Registration.web"));
const ForgotPass = lazy(() => import("../pages/ForgotPass.web"));
const NotFound = lazy(() => import("../pages/NotFound.web"));

export default class WebRoutes extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ScrollToTop />
                  <Outlet />
                </>
              }
            >
              <Route index element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/editprofile" element={<EditProfile />} />

              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<Registration />} />
              <Route path="/forgotpass" element={<ForgotPass />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </>
    );
  }
}
