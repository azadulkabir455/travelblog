import React, { Component } from "react";
import BlogMeta from "./BlogMeta";
import { Heart } from "react-feather";

export default class BlogCardLarge extends Component {
  render() {
    return (
      <>
        <div className="card border-0 shadow-lg rounded-3 mb-4">
          <img
            src="https://shorturl.at/nxIJ2"
            alt=""
            className="img-fluid w-100 rounded-top-3"
          />
          <div className="card-body">
            <h4>RESTAURANTS</h4>
            <h3>Fringilla Ligula Pharetra Amet</h3>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis
              ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent
              commodo cursus magna, vel scelerisque nisl consectetur et. Sed
              posuere consectetur est at lobortis. Cras mattis consectetur purus
              sit amet fermentum. Fusce dapibus, tellus ac cursus commodo,
              tortor mauris condimentum nibh. Cras mattis consectetur purus sit
              amet fermentum. Sed posuere consectetur.
            </p>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <BlogMeta
              date="5 Jul 2022"
              author="By sandbox"
              comment="3"
              dark={true}
            />
            <div className="iconContainer date d-flex justify-content-center align-items-center text-body-tertiary">
              <Heart className="icon" color="rgba(33, 37, 41, 0.5)" />
              <p className="ps-1 m-0">3</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
