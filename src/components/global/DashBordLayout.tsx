import React, { Component } from "react";
import { Outlet } from "react-router-dom";

export default class DashBordLayout extends Component {
  render() {
    return (
      <>
        <div className="sidebar">
            sideBar
        </div>
        <div className="contentArea">
            <Outlet />
        </div>
      </>
    );
  }
}
