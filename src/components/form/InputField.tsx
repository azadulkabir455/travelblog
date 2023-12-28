import React, { Component, ReactNode } from "react";
import { Eye, EyeOff } from "react-feather";

type InputFieldType = {
  label: string;
  type: string;
  icon: ReactNode;
  password?: boolean;
  showPassValue?: boolean;
  showPassFunc?: () => void
};
class InputField extends Component<InputFieldType> {
  render() {
    const { label, type, icon, password, showPassValue, showPassFunc } = this.props;
    return (
      <>
        <div className="mb-2">
          <label className="form-label text-capitalize text-body-tertiary fw-bold mb-1" htmlFor={label}>
            {label} :
          </label>
          <div className="input-group rounded-5 border border-body-secondary overflow-hidden">
            <span className="input-group-text border-0">{icon}</span>
            <input type={type} className="form-control form-control-lg border-0 shadow-none" id={label} />
            {password ? (
              <span
                className="input-group-text border-0"
                onClick={showPassFunc}
              >
                {showPassValue ? <Eye size="18"  color="#343f5281" /> : <EyeOff size="18"  color="#343f5281" />}
              </span>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}
export default InputField