import React, { Component } from "react";
import List from "./List";
import PopularPost from "./PopularPost";
import SocialIcons from "./SocialIcons";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer bg-dark">
          <div className="container">
            <div className="row mb-3">
              <div className="col-12 col-md-6 col-lg-4">
                <PopularPost title="Popular Posts" dark={true} />
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <List
                  title="Top Categories"
                  listData={["Teamwork (21)", "Ideas (19)", "Workspace (16)"]}
                  footer={true}
                />
                <div className="tags mt-3">
                  <h3 className="text-light mb-3">Tags</h3>
                  <span className="badge bg-secondary-subtle text-secondary text-capitalize py-2 px-3 me-2 mb-2 rounded-pill">
                    # Still life
                  </span>
                  <span className="badge bg-secondary-subtle text-secondary text-capitalize py-2 px-3 me-2 mb-2 rounded-pill">
                    # Urban
                  </span>
                  <span className="badge bg-secondary-subtle text-secondary text-capitalize py-2 px-3 me-2 mb-2 rounded-pill">
                    # Work space
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="getInTouch mb-3">
                  <h3 className="text-light mb-3">Get in Touch</h3>
                  <p className="mb-3 text-light">
                    Moonshine St. 14/05 Light City, <br /> London, United
                    Kingdom
                  </p>
                  <div className="footerContact">
                    <p className="mb-0 text-light">info@email.com </p>
                    <p className="mb-0 text-light">00 (123) 456 78 90</p>
                  </div>
                </div>
                <div className="elsewhere">
                  <h3 className="text-light mb-3">Elsewhere</h3>
                  <SocialIcons dark={true}/>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-2">
                <div className="learnMore mb-3">
                  <h3 className="text-light mb-3">Learn more</h3>
                  <div className="vstack gap-2">
                    <p className="text-white-50 mb-0">About us</p>
                    <p className="text-white-50 mb-0">Our story</p>
                    <p className="text-white-50 mb-0">Projects</p>
                  </div>
                </div>
                <div className="needHelp">
                  <h3 className="text-light mb-3">Need help?</h3>
                  <div className="vstack gap-2">
                    <p className="text-white-50 mb-0">Support</p>
                    <p className="text-white-50 mb-0">Get started</p>
                    <p className="text-white-50 mb-0">Contanct us</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="licence pt-3 border-top border-1 border-secondary">
              <p className="text-white-50 text-center text-capitalize mb-0" style={{fontSize:"14px"}}>
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
