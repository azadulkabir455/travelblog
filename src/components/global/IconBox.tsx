import React, { Component, ReactNode } from "react";

type IconBoxPropsType = {
  icon: ReactNode;
  title: string;
  children: JSX.Element;
};

export default class IconBox extends Component<IconBoxPropsType> {
  render() {
    const { icon, title, children } = this.props;
    return (
      <>
        <div className="iconBox address d-flex mb-4">
          <div className="icon">{icon}</div>
          <div className="content ms-4">
            <h4 className="text-secondary text-capitalize fw-bold mb-2">
              {title}
            </h4>
            {children}
          </div>
        </div>
      </>
    );
  }
}
