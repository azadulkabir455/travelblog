import { ErrorMessage, Field } from "formik";
import React, { Component } from "react";
import ErrorMessageContainer from "../ErrorMessageContainer";

type SelectFieldType = {
  name: string;
  label: string;
  options: {
    key: string;
    value: string;
  }[];
};

export default class SelectField extends Component<SelectFieldType> {
  render() {
    const { name, label, options } = this.props;
    return (
      <>
        <div className="mb-3">
          <label htmlFor={name} className="form-label text-body-secondary fw-bold">
            {label} :
          </label>
          <Field as="select" name={name} id={name} className="form-select">
            <option selected>
              Selected your option
            </option>
            {options.map((option) => (
              <option value={option.value} key={option.key}>
                {option.key}
              </option>
            ))}
          </Field>
          <ErrorMessage name={name} component={ErrorMessageContainer} />
        </div>
      </>
    );
  }
}
