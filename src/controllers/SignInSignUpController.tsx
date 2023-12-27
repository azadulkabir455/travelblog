import React, { Component } from 'react'

export type SignInSignUpPropsType = {
  showPassValue: boolean;
  showPassFunc: () => void;
}
type SignInSignUpStateType = {

}
export default class SignInSignUpController extends Component<SignInSignUpPropsType, SignInSignUpStateType>{
  constructor(props: SignInSignUpPropsType){
    super(props)
    this.state = {

    }
  }
}
