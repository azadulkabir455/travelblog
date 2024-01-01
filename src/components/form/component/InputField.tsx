import React, { Component, ReactNode } from "react";
import { ErrorMessage, Field } from "formik";
import ErrorMessageContainer from "../ErrorMessageContainer";

type InputFieldType = {
  name: string;
  label: string;
  type: string;
  icon?: ReactNode;
  placeholder?: string;
}

export default class InputField extends Component<InputFieldType> {
  render() {
    const {name, label, type, icon, placeholder} = this.props
    return (
      <>
        <div className="mb-3">
          <label htmlFor={name}>{label}</label>
          <div className="input-group">
           {
              icon?  <span className="input-group-text">{icon}</span>: null
           }
            <Field
              className="form-control"
              type={type}
              id={name}
              name={name}
              placeholder={placeholder?placeholder:""}
            />
          </div>
          <ErrorMessage name={name} component={ErrorMessageContainer} />
        </div>
      </>
    );
  }
}
