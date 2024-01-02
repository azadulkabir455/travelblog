import { ErrorMessage, Field } from "formik";
import React, { Component } from "react";
import ErrorMessageContainer from "../ErrorMessageContainer";

type RadioFieldType = {
  name: string;
  label: string;
  options: {
    key: string;
    value: string;
  }[];
};

export default class RadioField extends Component<RadioFieldType> {
  render() {
    const { name, label, options } = this.props;
    return (
      <>
        <div className="mb-3">
          <label className="form-label d-block text-body-secondary fw-bold">{label} :</label>
          <Field name={name}>
            {({ field }: any) =>
              options.map((option) => (
                <div className="form-check d-inline-block me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label htmlFor={option.value} className="form-check-label text-body-secondary">{option.key}</label>
                </div>
              ))
            }
          </Field>
          <ErrorMessage name={name} component={ErrorMessageContainer}/>
        </div>
      </>
    );
  }
}
