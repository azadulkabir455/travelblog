import React, { Component } from 'react'
type FormControlType = {
    component: string;
}
export default class FormControl extends Component<FormControlType> {
  render() {
    const {component} = this.props
    switch(component) {
        case "input":
        return("")
        break;
        case "textarea":
        break;
        case "select":
        break;
        case "radio":
        break;
        case "checkbox":
        break;
        default:
        return null
        break;
    }
  }
}
