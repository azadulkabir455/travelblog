import { ErrorMessage, Field } from "formik";
import React, { Component } from "react";
import ErrorMessageContainer from "../ErrorMessageContainer";
type TextAreaFieldType = {
  name: string;
  label: string;
  placeholder?: string;
};
export default class TextAreaField extends Component<TextAreaFieldType> {
  render() {
    const { name, label, placeholder } = this.props;
    return (
      <>
        <div className="mb-3">
          <label htmlFor={name}>{label}</label>
          <Field
            as="textarea"
            className="form-control"
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
