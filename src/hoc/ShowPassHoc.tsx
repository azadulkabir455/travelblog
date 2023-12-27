import React, { Component, ComponentType } from "react";
import { SignInSignUpPropsType } from "../controllers/SignInSignUpController";
type InternalStateType = {
  showPassValue: boolean;
};
const ShowPassHoc = (OriginalComponent: ComponentType<SignInSignUpPropsType>) => {
  class NewComponent extends Component<{}, InternalStateType> {
    constructor(props: any) {
      super(props);
      this.state = {
        showPassValue: false,
      };
    }
    showPassHandler = () => {
      this.setState((prevState) => ({
        showPassValue: !prevState.showPassValue,
      }));
    };
    render() {
      return (
        <OriginalComponent
          showPassValue={this.state.showPassValue}
          showPassFunc={this.showPassHandler}
          {...this.props}
          />
      );
    }
  }
  return NewComponent;
};

export default ShowPassHoc;
