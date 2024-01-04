import { ErrorMessage } from "formik";
import ErrorMessageContainer from "../ErrorMessageContainer";
import { useRef } from "react";
import { Edit } from "react-feather";
type ImgInputFieldType = {
  values: string;
  name: string;
  setFieldValue: (field: string, value: File | null) => void;
};
const ImgInputField = (Props: ImgInputFieldType) => {
  const imgFileRef = useRef<HTMLInputElement>(null!);
  const { values, name, setFieldValue } = Props;

  const imgUrl = typeof values !== "string" ? URL.createObjectURL(values) : null;
  const imgFileHandler = () => {
    imgFileRef.current.click();
  };

  console.log("values", typeof values, values);
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <input
          hidden
          ref={imgFileRef}
          type="file"
          onChange={(e) =>
            setFieldValue("file", e.target.files ? e.target.files[0] : null)
          }
        />
        <div className="fileImageContainer position-relative d-block">
          <img
            src={`${imgUrl ? imgUrl : "https://shorturl.at/akAHL"}`}
            className="image-fluid rounded-circle d-block mx-auto object-fit-cover"
            alt="profile pic"
          />
          <div
            className="editIcon bg-light d-inline-block px-2 py-1 border border-3 border-body-secodary m-2 rounded-circle position-absolute"
            onClick={imgFileHandler}
          >
            <Edit size="18px" color="#d16b86" />
          </div>
        </div>
        <ErrorMessage name={name} component={ErrorMessageContainer} />
      </div>
    </>
  );
};
export default ImgInputField;
