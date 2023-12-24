import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import LoadingScreen from "../../components/LoadingScreen";

import "react-confirm-alert/src/react-confirm-alert.css";
import "react-toastify/dist/ReactToastify.css";

import { baseURL } from "../../helpers/constanst";

const Connections = () => {
  const navigate = useNavigate();
  function createNewConnection() {
    navigate("/connections/create");
  }

  const [getConnection, setConnection] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios({
          baseURL,
          url: "connections",
          method: "GET",
        }).then((response) => {
          setConnection(response.data);
          setLoading(false);
        });

        // await axios.get(`${baseURL}connections`).then((response) => {
        //   setConnection(response.data);
        // });
        // console.log(response)
      } catch (err) {
        setLoading(false);

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
      title: "Delete Connection",
      message: "Are you sure to delete?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteConnection(id),
        },
        {
          label: "No",
          onClick: false,
        },
      ],
    });
  };
  const deleteConnection = async (id) => {
    await axios.delete(`${baseURL}Connections/${id}`);

    toast.success("Connection Deleted!", {
      position: toast.POSITION.TOP_RIGHT,
    });

    setConnection(getConnection.filter((connection) => connection.id !== id));
  };

  return (
    <div id="main">
      {isLoading && <LoadingScreen />}
      <ToastContainer />
      <div className="page-heading">
        <div className="page-title">
          <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-last">
              <h3>Connection</h3>
              <p className="text-subtitle text-muted">
                Manage of connections such as : view list of connections ,
                create , edit , delete
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
                    onClick={createNewConnection}
                  >
                    Create New <i className="fa fa-plus" />
                  </button>
                </div>
              </div>
            </div>

            <div className="card-body">
              {getConnection.length > 0 ? (
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Value</th>
                      <th>Icon</th>
                      <th>IsActive</th>
                      <th>Opt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getConnection.map((item, index) => (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.value}</td>
                        <td>
                          <span className={item.icon}></span>
                        </td>
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
                          <Link to={`/connections/edit/${item.id}`}>
                            <span className="btn btn-outline-info fa fa-pen"></span>
                          </Link>
                          <Link onClick={() => deleteConfirmation(item.id)}>
                            <span className="btn btn-outline-danger fa fa-trash"></span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="alert alert-info text-center">
                  Not Found Contents !
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connections;
