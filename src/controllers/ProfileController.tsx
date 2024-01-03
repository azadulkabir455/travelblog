import React, { Component } from "react";
import * as Yup from "yup"

export default class ProfileController extends Component {
  initialValues = {};
  onSubmit = (values: any) => {};
  validationSchema = Yup.object({})

  occuptionValues = [
    {key:"Job", value:"job"},
    {key:"Bussiness", value:"bussiness"},
    {key:"Student", value:"student"},
  ]
}
