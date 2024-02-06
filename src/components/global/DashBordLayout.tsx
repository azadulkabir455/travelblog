import React from "react";
import DashbordController from "../../controllers/DashbordController";
import { Link } from "react-router-dom";
import { AlignRight, Book, ChevronRight, Home, Users } from "react-feather";
import { Outlet } from "react-router-dom";

export default class DashBordLayout extends DashbordController {
  render() {
    return (
      <>
        <div className="sidebar">
          <div
            className={`leftbar ${this.state.expand === true ? "expand" : ""}`}
          >
            <div className="expandIcon" onClick={this.leftBarExpandHandler}>
              <ChevronRight size="22px" color="#fff" />
            </div>
            <div className="leftbarMenu d-flex flex-column">
              <Link to="/dashbord" className={`${this.state.expand === true ? "expand" : ""}`}>
                <Home size="18px" />
                <span>Home</span>
              </Link>
              <Link to="users" className={`${this.state.expand === true ? "expand" : ""}`}>
                <Users size="18px" />
                <span>Users</span>
              </Link>
              <Link to="posts" className={`${this.state.expand === true ? "expand" : ""}`}>
                <Book size="18px" />
                <span>Posts</span>
              </Link>
              <Link to="categories" className={`${this.state.expand === true ? "expand" : ""}`}>
                <AlignRight size="18px" />
                <span>Categories</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`contentArea ${
            this.state.expand === true ? "expand" : ""
          }`}
        >
          <Outlet />
        </div>
      </>
    );
  }
}
