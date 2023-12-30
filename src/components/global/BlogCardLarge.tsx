import React, { Component } from "react";
import BlogMeta from "./BlogMeta";
import { Heart } from "react-feather";
import ReactPlayer from "react-player";

type BlogType = {
  small?: boolean
}
export default class BlogCardLarge extends Component<BlogType>{
  render() {
    const {small} = this.props
    return (
      <>
        <div className="card border-0 shadow-lg rounded-3 mb-5 blogCardLarge">
          {
            true?
            <div className="imgContainer position-relative">
            <img
              src="https://shorturl.at/nxIJ2"
              alt=""
              className={`img-fluid d-block w-100 rounded-top-3 object-fit-cover ${small?"large":""}`}
            />
            <div 
            className="overlay position-absolute w-100 h-100 top-0 start-0 bg-secondary bg-opacity-50 rounded-top-3 d-flex justify-content-center align-items-center">
             <p className="text-light text-capitalize fw-medium">Read more</p>
            </div>
            <a href="/" className="stretched-link"></a>
          </div>:
          <ReactPlayer className={`media  ${small?"large":""} rounded-top-3 overflow-hidden`} width="100%" height="400px" controls={true} url="https://youtu.be/HurjfO_TDlQ?si=OsW0Lknldl0B-3hN" />
          }

          
          <div className="card-body p-4">
            <h4 className="mb-2 ps-4 text-primary text-uppercase">Restaurents</h4>
            <h3 className={`text-secondary ${small?"large mb-2":"mb-3"}`}>Fringilla Ligula Pharetra Amet</h3>
            <p className="mb-0 text-body-secondary">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis
              ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent
              commodo cursus magna, vel scelerisque nisl consectetur et.
            </p>
          </div>
          <div className="card-footer d-flex justify-content-between p-4 border-top border-light-subtle">
            <BlogMeta
              date="5 Jul 2022"
              author={`${small?"": "By admin"}`}
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
