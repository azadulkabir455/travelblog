import React, { Component } from "react";
import BlogList from "./BlogList";
type PopularPostType = {
  title: string;
  dark?: boolean;
};

export default class PopularPost extends Component<PopularPostType> {
  render() {
    const { title, dark } = this.props;
    return (
      <>
        <div className="popularPost">
          <h3 className={`${dark?"text-light":"text-secondary"} m-0 mb-4`}>{title}</h3>
          <BlogList
            imgUrl="https://shorturl.at/lFGNX"
            title="Magna Mollis Ultricies"
            date="8 August 2022"
            comment="3"
            dark={dark ? true : false}
          />
          <BlogList
            imgUrl="https://shorturl.at/cdoxJ"
            title="Foxi Mollis Lucas"
            date="8 August 2022"
            comment="3"
            dark={dark ? true : false}
          />
          <BlogList
            imgUrl="https://shorturl.at/bjA15"
            title="Bob Ipsum moges"
            date="8 August 2022"
            comment="3"
            dark={dark ? true : false}
          />
        </div>
      </>
    );
  }
}
