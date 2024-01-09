import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function BreadCrumbs() {
  const location = useLocation();

  let currentLink = "";
  const Crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <li className="breadcrumb-item " key={crumb}>
          <Link
            to={currentLink}
            className="link-underline link-underline-opacity-0 text-secondary text-capitalize pe-none"
          >
            {crumb === "editprofile"? "Edit profile":
            crumb === "addpost"? "Add post" : crumb}
          </Link>
        </li>
      );
    });
  return (
    <div className="breadCrumbsContainer mt-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb d-flex justify-content-center">
          <li className="breadcrumb-item">
            <Link
              to="/"
              className="link-underline link-underline-opacity-0"
            >
              Home
            </Link>
          </li>
          {Crumbs}
        </ol>
      </nav>
    </div>
  );
}
