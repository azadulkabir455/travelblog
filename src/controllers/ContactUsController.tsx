import React, { Component } from "react";
import * as Yup from "yup";

export default class ContactUsController extends Component {
  initialValues = {
    name: "",
    message: ""
  };
  onSubmit = (values: any) => {
    console.log(values);
  };
  validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    message: Yup.string().required("Required")
  });
}
