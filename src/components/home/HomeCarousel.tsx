import { Component } from "react";
import Slider from "react-slick";
import { Calendar, User, MessageCircle } from 'react-feather';
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
                <div className="sliderContainer position-relative mx-3" style={{height: "440px"}}>
                    <img src="https://shorturl.at/nOX35" 
                    alt="slider-image-one" 
                    className="w-100 h-100 img-fluid object-fit-cover rounded position-absolute top-0 start-0" />
                    <div 
                    className="sliderOverlay position-absolute bottom-0 start-0 w-100 h-50 rounded-bottom" 
                    style={{background: "linear-gradient(to top, #000, transparent)"}}></div>
                    <div className="sliderContent position-absolute bottom-0 start-0 p-4">
                      <span className="badge text-bg-light text-dark mb-3">Places</span>
                      <h3 className="text-light mb-3">The best moment in venice</h3>
                      <div className="sliderInfo">
                        <div className="hstack gap-3">
                          <div className="date d-flex justify-content-center text-white">
                              <Calendar />
                              <p className="ps-2">8 August 2022</p>
                          </div>
                          <div className="author d-flex justify-content-center text-white">
                            <User/>
                            <p>By author</p>
                          </div>
                          <div className="comment d-flex justify-content-center text-white">
                            <MessageCircle />
                            <p>3</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="sliderContainer position-relative mx-3" style={{height: "440px"}}>
                    <img src="https://shorturl.at/nOX35" 
                    alt="slider-image-one" 
                    className="w-100 h-100 img-fluid object-fit-cover rounded position-absolute top-0 start-0" />
                    <div 
                    className="sliderOverlay position-absolute bottom-0 start-0 w-100 h-50 rounded-bottom" 
                    style={{background: "linear-gradient(to top, #000, transparent)"}}></div>
                    <div className="sliderContent position-absolute bottom-0 start-0 p-4">
                      <span className="badge text-bg-light text-dark mb-3">Places</span>
                      <h3 className="text-light mb-3">The best moment in venice</h3>
                      <div className="sliderInfo">
                        <div className="hstack gap-3">
                          <div className="date d-flex justify-content-center text-white">
                              <Calendar />
                              <p className="ps-2">8 August 2022</p>
                          </div>
                          <div className="author d-flex justify-content-center text-white">
                            <User/>
                            <p>By author</p>
                          </div>
                          <div className="comment d-flex justify-content-center text-white">
                            <MessageCircle />
                            <p>3</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="sliderContainer position-relative mx-3" style={{height: "440px"}}>
                    <img src="https://shorturl.at/nOX35" 
                    alt="slider-image-one" 
                    className="w-100 h-100 img-fluid object-fit-cover rounded position-absolute top-0 start-0" />
                    <div 
                    className="sliderOverlay position-absolute bottom-0 start-0 w-100 h-50 rounded-bottom" 
                    style={{background: "linear-gradient(to top, #000, transparent)"}}></div>
                    <div className="sliderContent position-absolute bottom-0 start-0 p-4">
                      <span className="badge text-bg-light text-dark mb-3">Places</span>
                      <h3 className="text-light mb-3">The best moment in venice</h3>
                      <div className="sliderInfo">
                        <div className="hstack gap-3">
                          <div className="date d-flex justify-content-center text-white">
                              <Calendar />
                              <p className="ps-2">8 August 2022</p>
                          </div>
                          <div className="author d-flex justify-content-center text-white">
                            <User/>
                            <p>By author</p>
                          </div>
                          <div className="comment d-flex justify-content-center text-white">
                            <MessageCircle />
                            <p>3</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
