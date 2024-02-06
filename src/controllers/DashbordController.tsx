import React, { Component } from 'react'
type DashbordPropsType = {};
type DashbordStateType= {
    expand: boolean
}
export default class DashbordController extends Component<DashbordPropsType, DashbordStateType > {
  constructor(props: DashbordPropsType){
    super(props)
    this.state = {
        expand: false
    }
  }

  leftBarExpandHandler = () => {
    this.setState((prevState) => ({
        expand: !prevState.expand
    }), () => console.log("value", this.state.expand))
  }
}
