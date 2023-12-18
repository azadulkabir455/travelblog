import { Component } from "react";
import Slider from "react-slick";
import { Calendar, User, MessageCircle } from "react-feather";
import { HomeCarouselType } from "../../controllers/HomeController";

type propType = {
  settings: HomeCarouselType;
};

export default class HomeCarousel extends Component<propType> {
  render() {
    return (
      <>
        <div className="container-lg">
          <Slider {...this.props.settings}>
            <div>
              <div
                className="position-relative mx-3"
                style={{ height: "440px" }}
              >
                <img
                  src="https://shorturl.at/bSXY0"
                  alt="slider-image-one"
                  className="w-100 h-100 img-fluid object-fit-cover rounded position-absolute top-0 start-0"
                />
                <div className="sliderOverlay position-absolute bottom-0 start-0 w-100 h-50 rounded-bottom"></div>
                <div className="sliderContent position-absolute bottom-0 start-0 p-4">
                  <span className="badge text-bg-light text-dark p-2 mb-3">
                    Places
                  </span>
                  <h3 className="text-light mb-3">The best moment in venice</h3>
                  <div className="sliderInfo">
                    <div className="hstack gap-4">
                      <div className="iconContainer date d-flex justify-content-center align-items-center text-white">
                        <Calendar className="icon" />
                        <p className="ps-2 m-0">8 August 2022</p>
                      </div>
                      <div className="iconContainer author d-flex justify-content-center align-items-center text-white">
                        <User className="icon" />
                        <p className="ps-2 m-0">By author</p>
                      </div>
                      <div className="iconContainer comment d-flex justify-content-center align-items-center text-white">
                        <MessageCircle className="icon" />
                        <p className="ps-2 m-0">3</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/" className="stretched-link"></a>
              </div>
            </div>
            <div>
              <div
                className="position-relative mx-3"
                style={{ height: "440px" }}
              >
                <img
                  src="https://shorturl.at/qGOT7"
                  alt="slider-image-one"
                  className="w-100 h-100 img-fluid object-fit-cover rounded position-absolute top-0 start-0"
                />
                <div className="sliderOverlay position-absolute bottom-0 start-0 w-100 h-50 rounded-bottom"></div>
                <div className="sliderContent position-absolute bottom-0 start-0 p-4">
                  <span className="badge text-bg-light text-dark p-2 mb-3">
                    Places
                  </span>
                  <h3 className="text-light mb-3">The best moment in venice</h3>
                  <div className="sliderInfo">
                    <div className="hstack gap-4">
                      <div className="iconContainer date d-flex justify-content-center align-items-center text-white">
                        <Calendar className="icon" />
                        <p className="ps-2 m-0">8 August 2022</p>
                      </div>
                      <div className="iconContainer author d-flex justify-content-center align-items-center text-white">
                        <User className="icon" />
                        <p className="ps-2 m-0">By author</p>
                      </div>
                      <div className="iconContainer comment d-flex justify-content-center align-items-center text-white">
                        <MessageCircle className="icon" />
                        <p className="ps-2 m-0">3</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/" className="stretched-link"></a>
              </div>
            </div>
            <div>
              <div
                className="position-relative mx-3"
                style={{ height: "440px" }}
              >
                <img
                  src="https://shorturl.at/jlvS3"
                  alt="slider-image-one"
                  className="w-100 h-100 img-fluid object-fit-cover rounded position-absolute top-0 start-0"
                />
                <div className="sliderOverlay position-absolute bottom-0 start-0 w-100 h-50 rounded-bottom"></div>
                <div className="sliderContent position-absolute bottom-0 start-0 p-4">
                  <span className="badge text-bg-light text-dark p-2 mb-3">
                    Places
                  </span>
                  <h3 className="text-light mb-3">The best moment in venice</h3>
                  <div className="sliderInfo">
                    <div className="hstack gap-4">
                      <div className="iconContainer date d-flex justify-content-center align-items-center text-white">
                        <Calendar className="icon" />
                        <p className="ps-2 m-0">8 August 2022</p>
                      </div>
                      <div className="iconContainer author d-flex justify-content-center align-items-center text-white">
                        <User className="icon" />
                        <p className="ps-2 m-0">By author</p>
                      </div>
                      <div className="iconContainer comment d-flex justify-content-center align-items-center text-white">
                        <MessageCircle className="icon" />
                        <p className="ps-2 m-0">3</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/" className="stretched-link"></a>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
