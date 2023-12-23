import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";

import "react-confirm-alert/src/react-confirm-alert.css";
import "react-toastify/dist/ReactToastify.css";

import { baseURL, fileBaseURL } from "../../helpers/constanst";

const Contents = () => {
  var navigate = useNavigate();

  function createNewContent() {
    navigate("/contents/create");
  }

  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        await axios({
          baseURL,
          url: "contents",
          method: "GET",
        }).then((response) => {
          setContents(response.data);
        });
      } catch (err) {
        if (err.toJSON().message === "Network Error") {
          console.log(err.toJSON().message);

          toast.error("No Internet Connection !", {
            position: toast.POSITION.TOP_RIGHT,
          });

          // dispatch({ type: RELOAD });
        }
      }
    };

    fetchData();
  }, []);


  const deleteConfirmation = (id) => {
    confirmAlert({
      title: "Delete Content",
      message: "Are you sure to delete?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteContent(id),
        },
        {
          label: "No",
          onClick: false,
        },
      ],
    });
  };
  const deleteContent = async (id) => {
    await axios.delete(`${baseURL}Contents/${id}`);

    toast.success("Content Deleted!", {
      position: toast.POSITION.TOP_RIGHT,
    });

    setContents(contents.filter((content) => content.id !== id));
  };

  return (
    <div id="main">
      <ToastContainer />
      <div className="page-heading">
        <div className="page-title">
          <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-last">
              <h3>Contents</h3>
              <p className="text-subtitle text-muted">
                Manage of articles such as : view list of articles , create ,
                edit , delete
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <div className="row mb-2 mt-3">
                <div className="col-4">
                  <button
                    className="btn btn-outline-success"
                    onClick={createNewContent}
                  >
                    Create New <i className="fa fa-plus" />
                  </button>
                </div>
              </div>
            </div>

            <div className="card-body">
              {Object.keys(contents).length > 0 ? (
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>CreateDate</th>
                      <th>IsActive</th>
                      <th>Opt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contents.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            src={`${fileBaseURL}${item.image}`}
                            width="50"
                            height="50"
                          />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.createDate}</td>
                       
                        <td>
                          <span
                            className={
                              item.isActive
                                ? "fa fa-check text-success"
                                : "fa fa-close text-danger"
                            }
                          ></span>
                        </td>
                        <td>
                          <div
                            className="btn-group btn-group-toggle"
                            data-toggle="buttons"
                          >
                            <Link to={`/contents/edit/${item.id}`}>
                              <span className="btn btn-outline-info fa fa-pen"></span>
                            </Link>
                            <Link onClick={()=>deleteConfirmation(item.id)}>
                              <span className="btn btn-outline-danger fa fa-trash"></span>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="alert alert-info text-center">Not Found Contents !</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
