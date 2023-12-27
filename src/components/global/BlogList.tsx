import React, { Component } from "react";
import BlogMeta from "./BlogMeta";

type BlogListType = {
  imgUrl: string;
  title: string;
  date: string;
  comment: string;
  dark?: boolean;
};

export default class BlogList extends Component<BlogListType> {
  render() {
    const { imgUrl, title, date, comment, dark } = this.props;
    return (
      <>
        <div className="row g-3 blogList pb-4">
          <div className="col-3">
            <img
              src={imgUrl}
              alt=""
              className="w-100 img-fuild object-cover rounded-3"
            />
          </div>
          <div className="col-9">
            <h4 className={`${dark?"whiteTitle":""}`}>{title}</h4>
            <div className="blogDetails">
              <BlogMeta
                date={date}
                comment={comment}
                dark={dark ? false : true}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
