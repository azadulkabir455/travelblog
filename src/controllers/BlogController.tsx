import React, { Component } from "react";

type BlogControllerPropsType = {};
type BlogControllerStateType = {
  blogLarge: boolean;
  blogSmall: boolean;
  blogList: boolean;
};

export default class BlogController extends Component<
  BlogControllerPropsType,
  BlogControllerStateType
> {
  constructor(props: BlogControllerPropsType) {
    super(props);
    this.state = {
      blogLarge: true,
      blogSmall: false,
      blogList: false,
    };
  }
  blogGridChangeFuntion = (blogSize: string) => {
    switch (blogSize) {
      case "blogLarge":
        this.setState({
          blogLarge: true,
          blogSmall: false,
          blogList: false,
        });
        break;
      case "blogSmall":
        this.setState({
          blogLarge: false,
          blogSmall: true,
          blogList: false,
        });
        break;
      case "blogList":
        this.setState({
          blogLarge: false,
          blogSmall: false,
          blogList: true,
        });
        break;
      default:
        this.setState({
          blogLarge: true,
          blogSmall: false,
          blogList: false,
        });
        break;
    }
  };
}
