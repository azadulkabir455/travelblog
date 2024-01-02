import React, { Component } from "react";
import * as Yup from "yup";

export default class ContactUsController extends Component {
  initialValues = {
    name: "",
    message: "",
    select:"",
    gender:"",
    human:[]
  };
  onSubmit = (values: any) => {
    console.log(values);
  };
  validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Email is not valid").required("Required"),
    message: Yup.string().required("Required")
  });
}
