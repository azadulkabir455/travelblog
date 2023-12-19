import React, { Component } from "react";

type CardPropertyType = {
    src: string;
    link: string;
    linkText: string
    footerText: string;
}

export default class Card extends Component<CardPropertyType>{
    render() {
      const {src,link,linkText, footerText} = this.props
    return (
      <>
        <div className="cardContainer card border-0 rounded-4 shadow">
          <div className="imgContainer position-relative">
            <img
              src={src}
              alt=""
              className="card-img-top d-block rounded-top-4"
              style={{ height: "280px" }}
            />
            <div 
            className="overlay w-100 position-absolute top-0 start-0 rounded-top-4 d-flex justify-content-center align-items-center bg-dark text-light text-capitalize fw-medium">
            {linkText}</div>
            <a href={link} className="stretched-link"></a>
          </div>
          <div className="card-footer">
            <h3 className="text-center p-4 m-0 cardText text-secondary">{footerText}</h3>
          </div>
        </div>
      </>
    );
  }
}
