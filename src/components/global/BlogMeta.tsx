import React, { Component } from "react";
import { Calendar, User, MessageCircle } from "react-feather";
type BlogMetaType = {
  date: string;
  author?: string;
  comment: number | string;
  dark?: boolean
};
export default class BlogMeta extends Component<BlogMetaType> {
  render() {
    const { date, author, comment, dark } = this.props;
    return (
      <>
        <div className="hstack gap-3">
          {date && (
            <div className={`iconContainer date d-flex justify-content-center align-items-center ${dark? "text-body-tertiary" : "text-white"}`}>
              <Calendar className="icon" color={`${dark?"rgba(33, 37, 41, 0.5)":"#fff"}`} />
              <p className="ps-1 m-0">{date}</p>
            </div>
          )}
          {author && (
            <div className={`iconContainer date d-flex justify-content-center align-items-center ${dark? "text-body-tertiary" : "text-white"}`}>
              <User className="icon" color={`${dark?"rgba(33, 37, 41, 0.5)":"#fff"}`} />
              <p className="ps-1 m-0">{author}</p>
            </div>
          )}
          {comment && (
            <div className={`iconContainer date d-flex justify-content-center align-items-center ${dark? "text-body-tertiary" : "text-white"}`}>
              <MessageCircle className="icon" color={`${dark?"rgba(33, 37, 41, 0.5)":"#fff"}`} />
              <p className="ps-1 m-0">{comment}</p>
            </div>
          )}
        </div>
      </>
    );
  }
}
