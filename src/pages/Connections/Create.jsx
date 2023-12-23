import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

import { baseURL } from "../../helpers/constanst";

import "react-toastify/dist/ReactToastify.css";

export default function Create() {
  const navigate = useNavigate();
  const [iconValue, setInputValue] = useState("");

  var initConnectionState = {
    title: "",
    value: "",
    icon: "",
    isActive: true,
  };

  const [data, setData] = useState(initConnectionState);

  const handleChange = (e) => {
    const inputType = e.target.type;
    const name = e.target.name;
    const value = inputType == "checkbox" ? e.target.checked : e.target.value;

    if (name == "icon") {
      setInputValue(value);
    }
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      baseURL,
      url: "connections",
      method: "post",
      data: data,
    }).then((response) => {
     
      
      toast.success("Connection Updated!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      setTimeout(
        function () {
          navigate("/connections");
        }.bind(this),
        1000
      );


    });

    // axios.post(userData).then((response) => {
    //   console.log(response.status, response.data.token);
    // });
  };


  const backToList=()=>{
    navigate("/connections");
  }
  return (
    <div id="main">
       <ToastContainer />
      <div className="page-heading">
        <div className="page-title">
          <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-last">
              <h3>Connection</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4>New Connection</h4>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      placeholder="Please Enter Title"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6">
                    <label className="form-label">Value</label>
                    <input
                      type="text"
                      className="form-control"
                      name="value"
                      placeholder="Please Enter Value"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label className="form-label">Icon</label>
                    <input
                      type="text"
                      className="form-control"
                      name="icon"
                      placeholder="Please Enter Icon (FontAwesome)"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-2 mt-4">
                    <label className={iconValue}></label>
                  </div>
                  <div className="col-4 mt-4">
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      name="isActive"
                      label="IsActive"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  
                  <div className="col-3">
                    <button className="btn btn-primary" onClick={backToList}>
                      Back
                      <i className="fa fa-arrow-left"/>
                    </button>
                  </div>

                  <div className="col-3">
                    <button className="btn btn-success" type="submit">
                      Submit
                      <i className="fa fa-check"/>
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
