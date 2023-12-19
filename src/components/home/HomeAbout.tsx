import React, { Component } from "react";
import Card from "../global/Card";

class HomeAbout extends Component {
  render() {
    return (
      <>
        <div className="homeAboutContainer container-lg sectionPadding">
          <h2 className="homeAboutTitle text-center mx-auto mb-5 text-secondary w-75">
            Hello! I'm Caitlyn. Welcome to my blog. Here on this blog you will
            be able to find travel diary with traveling tips.
          </h2>
          <div className="row g-5">
            <div className="col-12 col-lg-4">
              <Card 
                src="https://shorturl.at/dgwxT"
                link="/"
                linkText="Read more"
                footerText="About me"
              />
            </div>
            <div className="col-12 col-lg-4">
            <Card 
                src="https://shorturl.at/aouBE"
                link="/"
                linkText="See destinations"
                footerText="Destinations"
              />
            </div>
            <div className="col-12 col-lg-4">
            <Card 
                src="https://shorturl.at/dtMV1"
                link="/"
                linkText="Follow me"
                footerText="Instagram"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomeAbout;
