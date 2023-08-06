import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./styles.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebarContainer">
      <div>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <ul className="menu">
            <Link to={"/"}>
              <HomeIcon
                sx={{ color: "white" }}
                fontSize="large"
                titleAccess="Home"
              />
            </Link>
            <li>
              <Link to={"/Advantages"}>Reasons</Link>
            </li>
            <li>
              <Link to={"/Membership"}>Membership</Link>
            </li>
            <li>
              <Link to={"/About"}>About</Link>
            </li>
            <li>
              <Link to={"/Trainers"}>Trainers</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
