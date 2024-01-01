import React, { Component, ComponentType } from "react";
import { Info } from "react-feather";


export default class ErrorMessageContainer extends Component<any> {
  render() {
    const { children } = this.props;
    return (
      <div className="errorMessage">
        <Info />
        {children}
      </div>
    );
  }
}
