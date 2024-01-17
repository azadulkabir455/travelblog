import React from "react";
import SignleBlogPageController from "../controllers/SignleBlogPageController";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Slider from "react-slick";
import BlogMeta from "../components/global/BlogMeta";
import { ChevronLeft, ChevronRight, MessageCircle, Send } from "react-feather";
import PopularPost from "../components/global/PopularPost";
import { Form, Formik } from "formik";
import InputField from "../components/form/component/InputField";
import BreadCrumbs from "../components/global/BreadCrumbs";

export default class SingleBlogPages extends SignleBlogPageController {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="singleBlogHeader">
            <BreadCrumbs />
            <Slider {...this.settings} ref={(c) => (this.slider = c)}>
              <div key={1}>
                <div className="imgContainer">
                  <img src="https://shorturl.at/iyLT2" alt="" />
                </div>
              </div>
              <div key={2}>
                <div className="imgContainer">
                  <img src="https://shorturl.at/ahrCP" alt="" />
                </div>
              </div>
              <div key={3}>
                <div className="imgContainer">
                  <img src="https://shorturl.at/iJNO2" alt="" />
                </div>
              </div>
            </Slider>
            <div className="headerMeta px-2 py-3 d-flex justify-content-between align-items-center">
              <div className="left">
                <BlogMeta
                  date="5 Jul 2022"
                  author="By admin"
                  comment={3}
                  dark={true}
                />
              </div>
              <div className="right hstack gap-2">
                <span
                  onClick={this.previous}
                  className="d-inline-block rounded-circle d-flex align-items-center justify-content-center"
                >
                  <ChevronLeft size="22px" />
                </span>
                <span
                  onClick={this.next}
                  className="d-inline-block rounded-circle d-flex align-items-center justify-content-center"
                >
                  <ChevronRight size="22px" />
                </span>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <div className="singleBlogContent">
                <div className="blogCardLarge p-4">
                  <h4 className="mb-2 ps-4 text-primary text-uppercase">
                    Restaurents
                  </h4>
                  <h3 className={`text-secondary "mb-3`}>
                    Fringilla Ligula Pharetra Amet
                  </h3>
                  <p className="mb-0 text-body-secondary">
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula, eget lacinia odio sem nec elit. Nullam quis risus
                    eget urna mollis ornare vel. Nulla vitae elit libero, a
                    pharetra augue. Praesent commodo cursus magna, vel
                    scelerisque nisl consectetur et.
                  </p>
                </div>
              </div>
              <div className="singleBlogComment p-3 rounded shadow">
                <h3 className="text-secondary mb-4">5 Comments</h3>
                <div className="commentContainer">
                  <div className="commentInfo d-flex justify-content-between align-items-center">
                    <div className="profile d-flex">
                      <img
                        src="https://shorturl.at/dhEQV"
                        alt=""
                        className="d-inline-block rounded-circle me-2"
                      />
                      <div className="name">
                        <h2 className="m-0 text-secondary fw-bold">
                          Connor Gibson
                        </h2>
                        <BlogMeta date="5 Jul 2022" dark={true} />
                      </div>
                    </div>
                    <div className="reply">
                      <button className="btn btn-primary py-2 px-3 rounded-pill text-light fw-bold">
                        <MessageCircle size="18px" color="#fff" /> Reply
                      </button>
                    </div>
                  </div>
                  <div className="comment">
                    <p className="m-0 mt-4 text-body-secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates quam eligendi asperiores odit accusamus iusto
                      eveniet esse distinctio quod exercitationem.
                    </p>
                  </div>
                </div>
                <div className="commentForm mt-5">
                  <div className="row">
                    <div className="col-9">
                      <Formik initialValues={{}} onSubmit={() => {}}>
                        <Form>
                          <InputField
                            icon={<MessageCircle size="24px" color="#ddd" />}
                            label=""
                            type="text"
                            name="comment"
                            placeholder="Write your comment here!"
                          />
                        </Form>
                      </Formik>
                    </div>
                    <div className="col-3 align-self-center">
                      <button className="btn btn-primary px-4 py-2 rounded-pill fw-bold text-light">
                        Comment
                        <Send size="16px" color="#fff" className="ms-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <PopularPost title="Recent post" />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
