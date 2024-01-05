import React, { Component, ReactNode } from "react";
import { ErrorMessage, Field } from "formik";
import DateView from "react-datepicker";
import ErrorMessageContainer from "../ErrorMessageContainer";

type DatePickerType = {
  name: string;
  label: string;
  icon?: ReactNode;
  placeholder?: string;
};
export default class DatePicker extends Component<DatePickerType> {
  render() {
    const { name, label, placeholder, icon } = this.props;
    return (
      <>
        <div className="mb-3">
          <label htmlFor={name} className="form-label text-body-secondary fw-bold">
            {label}
          </label>
          <Field name={name}>
            {({ form, field }: any) => {
              const { setFieldValue } = form;
              const { value } = field;
              return (
                <DateView
                  id={name}
                  {...field}
                  showIcon
                  icon={icon}
                  placeholderText={placeholder}
                  selected={value}
                  onChange={(value) => setFieldValue("dob", value)}
                  className="form-control form-control-lg w-100 rounded-pill datePicker"
                />
              );
            }}
          </Field>
          <ErrorMessage name={name} component={ErrorMessageContainer}/>
        </div>
      </>
    );
  }
}
