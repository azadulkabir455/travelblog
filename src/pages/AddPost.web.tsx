import React, { Component } from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import BreadCrumbs from "../components/global/BreadCrumbs";
import { Form, Formik } from "formik";
import BlogImageInputField from "../components/form/component/BlogImageInputField";
import AddPostController from "../controllers/AddPostController";
import TextAreaField from "../components/form/component/TextAreaField";
import SelectField from "../components/form/component/SelectField";
import InputField from "../components/form/InputField";
import { Edit } from "react-feather";

export default class AddPost extends AddPostController {
  render() {
    return (
      <>
        <Navbar />
        <div className="addPostBanner sectionPadding bg-primary bg-opacity-10 mx-4 rounded-4">
          <h3 className="text-secondary text-center text-capitalize mb-3">
            Add Post
          </h3>
          <p className="text-body-secondary w-25 text-center mx-auto">
            Welcome to our journal. Here you can find the latest company news
            and business articles.
          </p>
          <BreadCrumbs />
        </div>
        <div className="addPostContainer mx-auto">
          <Formik
            initialValues={this.initialValue}
            onSubmit={this.onSubmit}
            validationSchema={this.validationSchema}
          >
            <Form>
              <div className="row g-5">
                <div className="col-12 col-md-6">
                  <TextAreaField name="excerpt" label="Blog excerpt" />
                </div>
                <div className="col-12 col-md-6">
                  <InputField
                    type="text"
                    label="title"
                    icon={<Edit color="#343f52" size="18px" />}
                  />
                  <SelectField
                    label="Categories"
                    name="categories"
                    options={this.state.categories}
                  />
                </div>
                <div className="col-12 m-0">
                  <TextAreaField label="Blog" name="blog" rows="10" />
                </div>
              </div>
              <div className="mt-4">
                <button
                  className="btn btn-primary rounded-pill text-light fw-medium mt-1 float-end w-25"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <Footer />
      </>
    );
  }
}
