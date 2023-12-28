import React, { Component, ComponentType } from "react";
import { SignInSignUpPropsType } from "../controllers/SignInSignUpController";
type InternalStateType = {
  showPassValue: boolean;
  showConfirmPassValue: boolean
};
const ShowPassHoc = (OriginalComponent: ComponentType<SignInSignUpPropsType>) => {
  class NewComponent extends Component<{}, InternalStateType> {
    constructor(props: any) {
      super(props);
      this.state = {
        showPassValue: false,
        showConfirmPassValue:false
      };
    }
    showPassHandler = () => {
      this.setState((prevState) => ({
        showPassValue: !prevState.showPassValue,
      }));
    };
    showConfirmPassFunc = () => {
      this.setState((prevState) => ({
        showConfirmPassValue: !prevState.showConfirmPassValue,
      }));
    };
    render() {
      return (
        <OriginalComponent
          showPassValue={this.state.showPassValue}
          showPassFunc={this.showPassHandler}
          showConfirmPassValue ={this.state.showConfirmPassValue}
          showConfirmPassFunc={this.showConfirmPassFunc}
          {...this.props}
          />
      );
    }
  }
  return NewComponent;
};

export default ShowPassHoc;
