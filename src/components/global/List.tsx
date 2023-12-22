import React, { Component } from "react";
type ListType = {
  title: string;
  listData: string[];
  footer?: boolean;
};
export default class List extends Component<ListType> {
  render() {
    const { title, listData, footer } = this.props;
    return (
      <>
        <div className={`listStyle ${footer?"": "mt-5"}`}>
          <h3 className={`mb-3 ${footer?"text-light": "text-secondary"}`}>{title}</h3>
          <ul className="categoriesList ps-4">
            {listData.map((list, index) => (
              <li key={index}>
                <p className={`${footer?"text-white-50": "text-body-secondary"} mb-2`}>{list}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
