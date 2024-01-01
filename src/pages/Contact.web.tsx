import ContactUsController from "../controllers/ContactUsController";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import { Mail, MapPin, Phone } from "react-feather";
import IconBox from "../components/global/IconBox";

export default class Contact extends ContactUsController {
  render() {
    return (
      <>
        <Navbar />
        <div className="contactUsBanner bg-primary bg-opacity-10 rounded-4 mx-4">
          <h3 className="text-center text-capitalize text-secondary fw-bolder mb-3 ">
            Get in touch
          </h3>
          <p className="text-center fw-bold text-body-secondary mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            praesentium!
          </p>
        </div>
        <div className="contactInfo">
          <div className="row g-4 bg-light rounded-4 shadow-lg">
            <div className="col-12 col-lg-7 m-0 px-0 pe-4">
              <div className="position-relative h-100 rounded-3 overflow-hidden">
                <iframe
                  src="https://shorturl.at/dmp46"
                  style={{ border: 0, width: "100%", height: "100%" }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="col-12 col-lg-5 pt-5 pb-4">
              <IconBox
                icon={<MapPin color="#d16b86" size="28px" />}
                title="Address"
              >
                <p className="text-body-secondary mb-0">
                  Moonshine St. 14/05 Light City, London, United Kingdom
                </p>
              </IconBox>
              <IconBox
                icon={<Phone color="#d16b86" size="26px" />}
                title="Phone"
              >
                <>
                  <p className="mb-1">
                    <a
                      href="tel:00 (123) 456 78 90"
                      className="link-underline link-underline-opacity-0"
                    >
                      00 (123) 456 78 90
                    </a>
                  </p>
                  <p className="mb-1">
                    <a
                      href="tel:00 (987) 654 32 10"
                      className="link-underline link-underline-opacity-0"
                    >
                      00 (987) 654 32 10
                    </a>
                  </p>
                </>
              </IconBox>
              <IconBox
                icon={<Mail color="#d16b86" size="26px" />}
                title="Email"
              >
                <>
                  <p className="mb-1">
                    <a
                      href="mailto:azad@email.com"
                      className="link-underline link-underline-opacity-0"
                    >
                      azad@email.com
                    </a>
                  </p>
                  <p className="mb-1">
                    <a
                      href="mailto:help@sandbox.com"
                      className="link-underline link-underline-opacity-0"
                    >
                      help@sandbox.com
                    </a>
                  </p>
                </>
              </IconBox>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
