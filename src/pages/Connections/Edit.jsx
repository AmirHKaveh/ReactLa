import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

import { baseURL } from "../../helpers/constanst";

import "react-toastify/dist/ReactToastify.css";

export default function Edit() {
  const navigate = useNavigate();
  let { id } = useParams();

  var initConnectionState = {
    id: null,
    title: "",
    value: "",
    icon: "",
    isActive: false,
  };

  const [iconValue, setInputValue] = useState("");

  const [getConnection, setConnection] = useState(initConnectionState);

  useEffect(() => {
    const getConnectionById = async () => {
      try {
        await axios({
          baseURL,
          url: `connections/${id}`,
          method: "GET",
        }).then((response) => {
          setConnection(response.data);
        });
      } catch (err) {
        console.log(err.message);
      }
    };

    if (id) {
      getConnectionById();

      console.log(getConnection.title)
    }
  }, [id]);

  const handleChange = (e) => {
    const inputType = e.target.type;
    const name = e.target.name;
    const value = inputType == "checkbox" ? e.target.checked : e.target.value;

    //const { name, value } = e.target;
    const newData = Object.assign({}, getConnection, { [name]: value });
    setConnection(newData);

    if (name == "icon") {
      setInputValue(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    axios({
      baseURL,
      url: `connections/${id}`,
      method: "put",
      data: getConnection,
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

      //
    });
  };

  const backToList = () => {
    navigate("/connections");
  };
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
              <h4>Edit Connection</h4>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="Id" value={id} />
                <div className="row">
                  <div className="col-6">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      placeholder="Please Enter Title"
                      value={getConnection.title}
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
                      value={getConnection.value}
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
                      value={getConnection.icon}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-2 mt-4">
                    <label className={iconValue}></label>
                  </div>
                  <div className="col-4 mt-4">
                    <FormControlLabel
                      control={<Switch checked={getConnection.isActive} />}
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
                      <i className="fa fa-arrow-left" />
                    </button>
                  </div>

                  <div className="col-3">
                    <button className="btn btn-info" type="submit">
                      Update
                      <i className="fa fa-pen" />
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
