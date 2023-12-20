import React, { Component } from "react";
import { Twitter, Facebook, Dribbble, Instagram, Youtube } from "react-feather";
import BlogList from "../global/BlogList";
import SideBarContent from "../global/SideBarContent";
import BlogCardLarge from "../global/BlogCardLarge";

export default class HomeBlog extends Component {
  render() {
    return (
      <>
        <div className="container-lg sectionPadding">
          <div className="row g-5">
            <div className="col-12 col-lg-8">
              <BlogCardLarge />
              <BlogCardLarge />
              <BlogCardLarge />
              <BlogCardLarge />
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
                <div className="socialContainer hstack gap-3">
                  <Twitter className="socialIcon" color="#5DAED5" />
                  <Facebook className="socialIcon" color="#4470CF" />
                  <Dribbble className="socialIcon" color="#E95297" />
                  <Instagram className="socialIcon" color="#D53581" />
                  <Youtube className="socialIcon" color="#C8312B" />
                </div>
              </div>
              <div className="sideBarPopularPost">
                <h3 className="text-secondary m-0 mb-4">Popular Posts</h3>
                <BlogList
                  imgUrl="https://shorturl.at/lFGNX"
                  title="Magna Mollis Ultricies"
                  date="8 August 2022"
                  comment="3"
                />
                <BlogList
                  imgUrl="https://shorturl.at/cdoxJ"
                  title="Foxi Mollis Lucas"
                  date="8 August 2022"
                  comment="3"
                />
                <BlogList
                  imgUrl="https://shorturl.at/bjA15"
                  title="Bob Ipsum moges"
                  date="8 August 2022"
                  comment="3"
                />
              </div>
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
