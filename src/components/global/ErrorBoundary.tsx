import React, { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
type ErrorBoundaryPropsType = {
  children: ReactNode;
};
type ErrorBoundaryStateType = {
  hasError: boolean;
};
export default class ErrorBoundary extends Component<
  ErrorBoundaryPropsType,
  ErrorBoundaryStateType
> {
  constructor(props: ErrorBoundaryPropsType) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error: Error) {
    return {
        hasError: true,
    }
  }
  render() {

    if (this.state.hasError) {
      return (
        <>
          <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center">
            <h2 className="text-capitalize text-align-center">Something went wrong</h2>
            <Link to="/"><button className=" btn btn-primary text-light mt-3 text-capitalize">Back to home</button></Link>
          </div>
        </>
      );
    } else {
      return this.props.children;
    }
  }
}
