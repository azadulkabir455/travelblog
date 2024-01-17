import React, { Component } from "react";
import Slider from "react-slick";

export default class SignleBlogPageController extends Component {
  slider: any;
  settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  next = () => {
    this.slider.slickNext();
  };
  previous = () => {
    this.slider.slickPrev();
  }


}
