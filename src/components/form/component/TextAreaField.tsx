import { ErrorMessage, Field } from "formik";
import React, { Component } from "react";
import ErrorMessageContainer from "../ErrorMessageContainer";
type TextAreaFieldType = {
  name: string;
  label: string;
  rows?: string;
  placeholder?: string;
};
export default class TextAreaField extends Component<TextAreaFieldType> {
  render() {
    const { name, label, placeholder, rows } = this.props;
    return (
      <>
        <div className="mb-3">
          <label
            htmlFor={name}
            className="form-label text-body-secondary fw-bold"
          >
            {label} :
          </label>
          <Field
            as="textarea"
            rows={rows ? rows : "5"}
            className="form-control rounded-4"
            name={name}
            id={name}
            placeholder={placeholder ? placeholder : null}
          />
          <ErrorMessage name={name} component={ErrorMessageContainer} />
        </div>
      </>
    );
  }
}
