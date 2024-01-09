import React, { Component } from "react";
import * as Yup from "yup";
type AddPostControllerPorpsType = {};
type AddPostControllerStateProps = {
  categories: {
    key: string,
    value: string
  }[];
};
export default class AddPostController extends Component<
  AddPostControllerPorpsType,
  AddPostControllerStateProps
> {
  constructor(props: AddPostControllerPorpsType) {
    super(props);
    this.state = {
      categories: [{ key:"Travel", value:"travel"}, { key: "Food blog", value:"foodvalue" }],
    };
  }
  initialValue = {
    excerpt:"",
    title:"",
    categories:"",
    blog:""
  };
  onSubmit = (values: any) => {
    console.log(values);
  };
  validationSchema = Yup.object({});
}
