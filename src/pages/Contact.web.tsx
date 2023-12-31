import ContactUsController from "../controllers/ContactUsController";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import { Mail, Map, MapPin, Phone } from "react-feather";
import IconBox from "../components/global/IconBox";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

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
            <div className="col-12 col-lg-7">
              {/* <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer> */}
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
