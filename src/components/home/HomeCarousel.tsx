import { Component } from "react";
import Slider from "react-slick";
import { HomeCarouselType } from "../../controllers/HomeController";

type propType = {
    settings: HomeCarouselType
}

export default class HomeCarousel extends Component<propType> {
  render() {
    return (
      <>
        <div className="container-lg">
          <Slider {...this.props.settings}>
            <div>
                <h1>Hello there</h1>
            </div>
            <div>
                <h1>Hi there</h1>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
