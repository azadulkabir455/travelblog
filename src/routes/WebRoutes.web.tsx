import React, { Component, Suspense, lazy } from "react";
import ScrollToTop from "./ScrollToTop";
import { Routes, Route, Outlet } from "react-router-dom";
import Loader from "../components/global/Loader";

const Home = lazy(() => import("../pages/Home.web"));
const Blogs = lazy(() => import("../pages/Blog.web"));
const ContactUs = lazy(() => import("../pages/Contact.web"));
const Profile = lazy(() => import("../pages/Profile.web"));
const EditProfile = lazy(() => import("../pages/EditProfile.web"));
const AddPost = lazy(() => import("../pages/AddPost.web"));
const SingleBlogPost = lazy(() => import("../pages/SingleBlogPages.web"));
const DashBordlayout = lazy(
  () => import("../components/global/DashBordLayout")
);
const DashbordHome = lazy(() => import("../pages/DashbordHome.web"))
const DashbordUsers = lazy(() => import("../pages/DashbordUsers.web"))
const DashbordPosts = lazy(() => import("../pages/DashbordPosts.web"))
const DashbordCategories = lazy(() => import("../pages/DashbordCategories.web"))

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
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="profile" element={<Profile />} />
              <Route path="editprofile" element={<EditProfile />} />
              <Route path="addpost" element={<AddPost />} />
              <Route path="blogs/:id" element={<SingleBlogPost />} />
              <Route path="dashbord" element={<DashBordlayout />}>
                <Route index element={<DashbordHome />}/>
                <Route path="users" element={<DashbordUsers />}/>
                <Route path="posts" element={<DashbordPosts />}/>
                <Route path="categories" element={<DashbordCategories />}/>
              </Route>
              <Route path="signin" element={<Login />} />
              <Route path="signup" element={<Registration />} />
              <Route path="forgotpass" element={<ForgotPass />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </>
    );
  }
}
