import React, { Component } from "react";
type ListType = {
  title: string;
  listData: string[];
};
export default class List extends Component<ListType> {
  render() {
    const { title, listData } = this.props;
    return (
      <>
        <div className="listStyle mt-5">
          <h3 className="mb-3 text-secondary">{title}</h3>
          <ul className="categoriesList ps-4">
            {listData.map((list, index) => (
              <li key={index}>
                <p className="text-body-secondary mb-2">{list}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
