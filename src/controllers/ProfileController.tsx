import React, { Component } from "react";
import * as Yup from "yup";
type ProfilePropsType = {};
type ProfileStateType = {
  preview: string | ArrayBuffer | null;
};
export default class ProfileController extends Component<
  ProfilePropsType,
  ProfileStateType
> {
  constructor(props: ProfilePropsType) {
    super(props);
    this.state = {
      preview: null,
    };
  }
  Supported_Format = ["image/jpg", "image/jpeg", "image/png"];
  initialValues = {
    name: "",
    email: "",
    phone: "",
    file: "",
    bio: "",
    occuption: "",
  };
  onSubmit = (values: any) => {
    console.log("profile", values);
  };
  validationSchema = Yup.object({
    name: Yup.string().required("Name Required"),
    email: Yup.string().email("Email is not valid").required("Email Required"),
    phone: Yup.string()
      .min(11, "Minimum have 11 digit")
      .required("Phone Required"),
    bio: Yup.string().required("Bio Required"),
    occuption: Yup.string().required("Occuption Required"),
    file: Yup.mixed()
      .nullable()
      .required("Profile image required")
      .test(
        "FILE_SIZE",
        "Upload image size is too big",
        (value) => !value || (value && (value as File).size <= 1024 * 1024)
      )
      .test(
        "FILE_FORMATE",
        "Unsupported formate",
        (value) =>
          !value ||
          (value && this.Supported_Format.includes((value as File)?.type))
      ),
  });
  occuptionValues = [
    { key: "Job", value: "job" },
    { key: "Bussiness", value: "bussiness" },
    { key: "Student", value: "student" },
  ];
}
