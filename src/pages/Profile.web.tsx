import ProfileController from "../controllers/ProfileController";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import { Form, Formik } from "formik";
import InputField from "../components/form/component/InputField";
import { Calendar, Facebook, Linkedin, Mail, Phone, User } from "react-feather";
import TextAreaField from "../components/form/component/TextAreaField";
import SelectField from "../components/form/component/SelectField";
import ImgInputField from "../components/form/component/ImgInputField";
import DatePicker from "../components/form/component/DatePicker";

export default class Profile extends ProfileController {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="contactUsBanner bg-primary bg-opacity-10 rounded-4 mx-4">
          <h3 className="text-center text-capitalize text-secondary mb-3 ">
            User profile
          </h3>
          <p className="text-center fw-bold text-body-secondary mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            praesentium!
          </p>
        </div>
        <div className="profileContainer">
          <Formik
            initialValues={this.initialValues}
            onSubmit={this.onSubmit}
            validationSchema={this.validationSchema}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className="row g-4">
                  <div className="col-12 col-lg-5 mt-0">
                    <ImgInputField
                      values={values.file}
                      name="file"
                      setFieldValue={setFieldValue}
                    />
                  </div>
                  <div className="col-12 col-lg-7 mt-0">
                    <InputField
                      icon={<User color="#343f52" size="18px" />}
                      type="text"
                      name="name"
                      label="Name"
                      placeholder="Write your name"
                    />
                    <InputField
                      icon={<Mail color="#343f52" size="18px" />}
                      type="email"
                      name="email"
                      label="Email"
                      placeholder="Write your email"
                    />
                    <InputField
                      icon={<Phone color="#343f52" size="18px" />}
                      type="tel"
                      name="phone"
                      label="Phone"
                      placeholder="Write your phone"
                    />
                  </div>
                  <div className="col-12">
                    <TextAreaField name="bio" label="Bio" />
                  </div>
                  <div className="col-12 col-lg-6 mt-0">
                    <SelectField
                      name="occuption"
                      label="Occuption"
                      options={this.occuptionValues}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mt-0">
                    <DatePicker
                      icon={<Calendar color="#343f52" size="18px"/>}
                      name="dob"
                      label="Date of birth"
                      placeholder="Select your date of birth"
                    />
                  </div>
                  <div className="col-12 col-lg-6 mt-0">
                  <InputField 
                    type="text"
                    name="facebook"
                    label="Facebook"
                    icon={<Facebook color="#343f52" size="18px" />}
                    placeholder="/username"
                  />
                  </div>
                  <div className="col-12 col-lg-6 mt-0">
                  <InputField 
                    type="text"
                    name="linkdin"
                    label="Linkdin"
                    icon={<Linkedin color="#343f52" size="18px" />}
                    placeholder="/username"
                  />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary rounded-pill text-light fw-medium mt-1 float-end w-25"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <Footer />
      </>
    );
  }
}
