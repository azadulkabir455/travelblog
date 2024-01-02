import { ErrorMessage, Field } from "formik";
import React, { Component } from "react";
import ErrorMessageContainer from "../ErrorMessageContainer";

type CheckFieldType = {
  name: string;
  label: string;
  options: {
    key: string;
    value: string;
  }[];
};

export default class CheckField extends Component<CheckFieldType> {
  render() {
    const { name, label, options } = this.props;
    return (
      <>
        <div className="mb-3">
          <label htmlFor={name} className="form-label text-body-secondary fw-bold">{label} :</label>
          <Field name={name}>
            {({ field }: any) => {
              return options.map((option) => (
                <div className="from-check">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label htmlFor={option.value} className="form-check-label text-body-secondary">{option.key}</label>
                </div>
              ));
            }}
          </Field>
          <ErrorMessage name={name} component={ErrorMessageContainer}/>
        </div>
      </>
    );
  }
}
