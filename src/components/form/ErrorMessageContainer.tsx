import React, { Component, ComponentType } from "react";
import { Info } from "react-feather";

export default class ErrorMessageContainer extends Component<any> {
  render() {
    const { children } = this.props;
    return (
      <div className="errorMessage text-danger d-flex align-items-center mt-1 ms-2">
        <Info size="16px" className="me-1" />
        <span className="text-capitalize top-1">{children}</span>
      </div>
    );
  }
}
