import React, { Component } from "react";
import SideBarContent from "../global/SideBarContent";
import BlogCardLarge from "../global/BlogCardLarge";
import PopularPost from "../global/PopularPost";
import SocialIcons from "../global/SocialIcons";

export default class HomeBlog extends Component {
  render() {
    return (
      <>
        <div className="container-lg sectionPadding">
          <div className="row g-5">
            <div className="col-12 col-lg-8">
              <BlogCardLarge />
              <BlogCardLarge />
              <div className="row">
                <div className="col-12 col-lg-6">
                  <BlogCardLarge large={true} />
                </div>
                <div className="col-12 col-lg-6">
                  <BlogCardLarge large={true} />
                </div>
              </div>
              <a href="/" className="d-block text-end text-capitalize link-offset-2">Read more</a>
            </div>
            <div className="col-12 col-lg-4">
              <div className="sideBarAboutSection mb-5">
                <h3 className="text-secondary m-0 mb-4">About Us</h3>
                <img
                  src="http://surl.li/okwnj"
                  alt=""
                  className="img-fluid rounded-3 d-block mb-4"
                />
                <p className="text-body-secondary m-0 mb-4">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum. Nulla vitae elit libero, a
                  pharetra augue. Donec id elit non mi porta gravida at eget
                  metus.
                </p>
                <SocialIcons />
              </div>
              <PopularPost title="Popular Posts" />
              <div className="sideBarContent">
                <SideBarContent />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
