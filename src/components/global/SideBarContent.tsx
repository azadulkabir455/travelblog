import React, { Component } from "react";
import List from "./List";

export default class SideBarContent extends Component {
  render() {
    return (
      <>
        <List
          title="Categories"
          listData={[
            "Teamwork (21)",
            "Ideas (19)",
            "Workspace (16)",
            "Coding (7)",
            "Meeting (12)",
            "Business Tips (14)",
          ]}
        />
        <div className="tags mt-5">
          <h3 className="text-secondary mb-3">Tags</h3>
          <span className="badge bg-secondary-subtle text-secondary text-capitalize py-2 px-3 me-2 mb-2 rounded-pill">
            # Still life
          </span>
          <span className="badge bg-secondary-subtle text-secondary text-capitalize py-2 px-3 me-2 mb-2 rounded-pill">
            # Urban
          </span>
          <span className="badge bg-secondary-subtle text-secondary text-capitalize py-2 px-3 me-2 mb-2 rounded-pill">
            # Work space
          </span>
          <span className="badge bg-secondary-subtle text-secondary text-capitalize py-2 px-3 me-2 mb-2 rounded-pill">
            # Nature
          </span>
          <span className="badge bg-secondary-subtle text-secondary text-capitalize py-2 px-3 me-2 mb-2 rounded-pill">
            # Landscape
          </span>
          <span className="badge bg-secondary-subtle text-secondary text-capitalize py-2 px-3 me-2 mb-2 rounded-pill">
            # Fun fact
          </span>
        </div>
        <List
          title="Archive"
          listData={[
            "February 2019",
            "January 2019",
            "Workspace (16)",
            "December 2018",
            "November 2018",
            "October 2018",
          ]}
        />
      </>
    );
  }
}
