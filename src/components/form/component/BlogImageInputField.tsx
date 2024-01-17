import { Field } from "formik";
import React, { ChangeEvent, Component, DragEvent, RefObject, createRef } from "react";
import { Upload, XCircle } from "react-feather";
type BlogImageInputFieldPropsType = {};
type BlogImageInputFieldStateType = {
  blogImages: FileList | null;
};
export default class BlogImageInputField extends Component<
  BlogImageInputFieldPropsType,
  BlogImageInputFieldStateType
> {
  inputRef: RefObject<HTMLInputElement>;
  constructor(props: BlogImageInputFieldPropsType) {
    super(props);
    this.state = {
      blogImages: null,
    };
    this.inputRef = createRef();
  }

  dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    this.setState({
      blogImages: e.dataTransfer.files,
    });
  };

  dragHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  imageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      blogImages: e.target.files,
    });
  };

  removeBlogImageHandler = () => {
    this.setState({
      blogImages: null,
    });
  };
  render() {
    return (
      <>
        <div className="mb-3">
          <label className="form-label text-body-secondary fw-bold">
            Blog Images
          </label>
          <Field>
            {(fieldProps: any) => {
              const { field, form } = fieldProps;
              const { vlaue } = field;
              const { setFieldValue } = form;
              return (
                <>
                  <div
                    className="blogImages rounded p-5 d-flex flex-column align-items-center"
                    onDrop={this.dropHandler}
                    onDragOver={this.dragHandler}
                  >
                    <input
                      type="file"
                      ref={this.inputRef}
                      multiple
                      hidden
                      onChange={this.imageHandler}
                    />
                    {this.state.blogImages === null ? (
                      <div className="blogImagesContent">
                        <p className="m-0 text-center text-body-secondary text-capitalize fw-medium">
                          Drag and drop to upload
                        </p>
                        <p className="m-0 text-center text-primary">
                          or
                        </p>
                        <p
                          className="mb-0 text-center text-body-secondary text-capitalize"
                          style={{ fontSize: "14px", marginTop: "-5px" }}
                        >
                          Click to upload
                        </p>
                      </div>
                    ) : (
                      <div className="uploadBlogImages position-relative d-flex flex-wrap rounded p-2 shadow">
                        <XCircle
                          className="position-absolute close"
                          size="22px"
                          color="#d16b86"
                          onClick={this.removeBlogImageHandler}
                        />
                        {this.state.blogImages &&
                          Array.from(this.state.blogImages).map((item) => {
                            const imgUrl: string = URL.createObjectURL(item);
                            return (
                              <>
                                <img
                                  src={imgUrl}
                                  alt=""
                                  className="rounded object-fit-cover m-2"
                                />
                              </>
                            );
                          })}
                      </div>
                    )}

                    <button
                      type="button"
                      className="btn btn-primary text-light text-capitalize fw-semibold mt-4"
                      onClick={() => this.inputRef.current?.click()}
                    >
                      <Upload size="16px" className="me-2" />
                      Upload blog images
                    </button>
                  </div>
                </>
              );
            }}
          </Field>
        </div>
      </>
    );
  }
}
