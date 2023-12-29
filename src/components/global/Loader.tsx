import React, { Component } from "react";
import Spinner from "react-spinkit";

export default class Loader extends Component {
  render() {
    return (
      <>
        <div className="position-absolute top-50 start-50 translate-middle">
          <Spinner name="double-bounce" color="#d16b86"/>
        </div>
      </>
    );
  }
}
