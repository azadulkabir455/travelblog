import React, { Component } from "react";
import { ArrowUp } from "react-feather";
type ToTopButtonProps = {};
type ToTopButtonState = {
  buttonHideToggle: boolean;
  scrollIndicatorValue: number;
};
export default class ToTopButton extends Component<
  ToTopButtonProps,
  ToTopButtonState
> {
  constructor(props: ToTopButtonProps) {
    super(props);
    this.state = {
      buttonHideToggle: true,
      scrollIndicatorValue: 0,
    };
  }

  toTopButtonToggle = () => {
    document.documentElement.scrollTop > 20
      ? this.setState({ buttonHideToggle: true })
      : this.setState({ buttonHideToggle: false });
  };

  toTop = () => {
    document.documentElement.scrollTop = 0;
  };

  scrollIndicator = () => {
    const scrollValue = document.documentElement.scrollTop;
    const totalHeight = document.documentElement.scrollHeight;
    const windowHeight = document.documentElement.clientHeight;

    const progressValue = scrollValue / (totalHeight - windowHeight);
    this.setState({
      scrollIndicatorValue: progressValue * 100,
    });
  };
  render() {
    window.onscroll = () => {
      this.toTopButtonToggle();
      this.scrollIndicator();
    };
    return (
      <>
        <div
          className={`toTop position-fixed rounded-circle d-flex justify-content-center align-items-center ${
            this.state.buttonHideToggle ? "d-block" : "d-none"
          }`}
          style={{
            backgroundImage: `conic-gradient(#d16b86 ${
              this.state.scrollIndicatorValue * 3.6
            }deg,
            #d16b8628 ${this.state.scrollIndicatorValue * 3.6}deg)`,
          }}
          onClick={this.toTop}
        >
          <ArrowUp color="#d16b86" size="22px" />
        </div>
      </>
    );
  }
}
