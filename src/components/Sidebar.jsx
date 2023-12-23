
import { Link, useLocation } from "react-router-dom";
import { ThemeSwitch } from "../components/ThemeSwitch";
import "../css/Sidebar.css";
import sidebarLogo from "../images/content/logo192.png";

const Sidebar = () => {
  {
    const location = useLocation();
    var pathName = location.pathname;
  }

  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="row">
          <div className="col-6">
            <div className="profile">
              <img src={sidebarLogo} alt="profile_picture" />

              <p>Designer</p>
            </div>
          </div>
          <div className="col-6 switch-mode">
            <div className="row mr-0">
              <div className="col-4 ligth-mode-icon">
                <span className="fas fa-sun"></span>
              </div>
              <div className="col-4">
                {/* <FormControlLabel control={<Switch />} /> */}
                <ThemeSwitch />
              </div>
              <div className="col-4 night-mode-icon">
                <span className="fas fa-moon"></span>
              </div>
            </div>
          </div>
        </div>
        <ul>
          <li
            className={pathName == "/" ? "sidebar-item active" : "sidebar-item"}
          >
            <Link to="/" className="sidebar-link">
              <span className="icon">
                <i className="fas fa-tachometer-alt"></i>
              </span>
              <span className="item">My Dashboard</span>
            </Link>
          </li>

          {/* <li
            className={
              pathName == "/accordion" ? "sidebar-item active" : "sidebar-item"
            }
          >
            <Link to="/accordion" className="sidebar-link">
              <span className="icon">
                <i className="fas fa-credit-card"></i>
              </span>
              <span className="item">Accordion</span>
            </Link>
          </li> */}
          <li
            className={
              pathName == "/alerts" ? "sidebar-item active" : "sidebar-item"
            }
          >
            <Link to="/alerts" className="sidebar-link">
              <span className="icon">
                <i className="fas fa-info-circle"></i>
              </span>
              <span className="item">Alerts</span>
            </Link>
          </li>
          <li
            className={
              pathName == "/buttons" ? "sidebar-item active" : "sidebar-item"
            }
          >
            <Link to="/buttons" className="sidebar-link">
              <span className="icon">
                <i className="fas fa-stop"></i>
              </span>
              <span className="item">Button</span>
            </Link>
          </li>
          <li
            className={
              pathName == "/connections"
                ? "sidebar-item active"
                : "sidebar-item"
            }
          >
            <Link to="/connections" className="sidebar-link">
              <span className="icon">
                <i className="fas fa-random"></i>
              </span>
              <span className="item">Connections</span>
            </Link>
          </li>
          <li
            className={
              pathName == "/contents" ? "sidebar-item active" : "sidebar-item"
            }
          >
            <Link to="/contents" className="sidebar-link">
              <span className="icon">
                <i className="fas fa-newspaper"></i>
              </span>
              <span className="item">Articles</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
