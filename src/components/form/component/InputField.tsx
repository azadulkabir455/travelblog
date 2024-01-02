import React, { Component, ReactNode } from "react";
import { ErrorMessage, Field } from "formik";
import ErrorMessageContainer from "../ErrorMessageContainer";

type InputFieldType = {
  name: string;
  label: string;
  type: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
  placeholder?: string;
};

export default class InputField extends Component<InputFieldType> {
  render() {
    const { name, label, type, icon, iconRight, placeholder } = this.props;
    return (
      <>
        <div className="mb-3">
          <label htmlFor={name} className="form-label text-body-secondary fw-bold">
            {label} :
          </label>
          <div className="input-group rounded-pill border border-body-secondary overflow-hidden">
            {icon ? (
              <span className="input-group-text border border-0 pe-0">{icon}</span>
            ) : null}
            <Field
              className="form-control form-control-lg border border-0 shadow-none"
              type={type}
              id={name}
              name={name}
              placeholder={placeholder ? placeholder : ""}
            />
            {iconRight ? (
              <span className="input-group-text border border-0">{iconRight}</span>
            ) : null}
          </div>
          <ErrorMessage name={name} component={ErrorMessageContainer} />
        </div>
      </>
    );
  }
}
