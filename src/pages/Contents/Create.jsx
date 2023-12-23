import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-custom-build/build/ckeditor";
import { imageMimeType } from "../../helpers/constanst";
import { baseURL } from "../../helpers/constanst";
import noImage from "../../images/content/no-image.png";

import "react-toastify/dist/ReactToastify.css";

export default function Create() {
  const navigate = useNavigate();

  var initContentState = {
    title: "",
    summery: "",
    description: "",
    imageFile: null,
    isActive: true,
  };

  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [data, setData] = useState(initContentState);

  const editorHandleChange = (event, editor) => {
    const value = editor.getData();
    setData({
      ...data,
      description: value,
    });
  };

  const handleChange = (e) => {
    const inputType = e.target.type;
    const name = e.target.name;
    let value = inputType == "checkbox" ? e.target.checked : e.target.value;

    if (inputType == "file") {
      value = e.target.files[0];
      readFileHandler(e);
    }

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

  

    axios({
      baseURL,
      method: "post",
      url: "contents",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        

        toast.success("Content Added!", {
          position: toast.POSITION.TOP_RIGHT,
        });

        setTimeout(
          function () {
            navigate("/contents");
          }.bind(this),
          1000
        );
      })
      .catch(function (response) {
        //handle error
       
      });

    // axios.post(userData).then((response) => {
    //   console.log(response.status, response.data.token);
    // });
  };

  const readFileHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  const backToList = () => {
    navigate("/contents");
  };
  return (
    <div id="main">
      <ToastContainer />
      <div className="page-heading">
        <div className="page-title">
          <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-last">
              <h3>Content</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4>New Content</h4>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="col-12">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Please Enter Title"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Summery</label>
                  <textarea
                    className="form-control"
                    name="summery"
                    rows="5"
                    placeholder="Please Enter Summery"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-12">
                  <label className="form-label">Description</label>
                  <CKEditor
                    editor={ClassicEditor}
                    data=""
                    onReady={(editor) => {}}
                    onChange={(event, editor) => {
                      editorHandleChange(event, editor);
                    }}
                    onBlur={(event, editor) => {}}
                    onFocus={(event, editor) => {}}
                  />
                </div>

                <div className="row">
                  <div className="col-6">
                    <label className="form-label">Image</label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      name="imageFile"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-3">
                    {fileDataURL ? (
                      <p className="img-preview-wrapper">
                        {
                          <img
                            src={fileDataURL}
                            alt="preview"
                            width="80"
                            height="80"
                          />
                        }
                      </p>
                    ) : (
                      <img src={noImage} alt="preview" width="80" height="80" />
                    )}
                  </div>

                  <div className="col-2 mt-4">
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      name="isActive"
                      label="IsActive"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-3">
                    <button className="btn btn-primary" onClick={backToList}>
                      Back
                      <i className="fa fa-arrow-left" />
                    </button>
                  </div>

                  <div className="col-3">
                    <button className="btn btn-success" type="submit">
                      Submit
                      <i className="fa fa-check" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
