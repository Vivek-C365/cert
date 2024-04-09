import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/Nav.css";
import menu from "../../Assets/PNG/menu.png";
import logo from "../../Assets/PNG/logo.png";
import Book from "../../Assets/PNG/book.png";
import Search from "../../Assets/PNG/search.svg";
import Profile from "../../Assets/PNG/profile.svg";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HelpIcon from "@mui/icons-material/Help";
import FolderIcon from "@mui/icons-material/Folder";
import ContactsIcon from "@mui/icons-material/Contacts";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { removeToken } from "../../services/LocalStorageService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unSetUserToken } from "../../features/authSlice";
import { setUserInfo, unsetUserInfo } from "../../features/userSlice";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPathOpen, setIsPathOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const pathway = [
    {
      title: "Agile and Scrum",
      link: "/project_management/csm_certification",
    },
    {
      title: "Big Data",
      link: "/big_data",
    },
    {
      title: "Cloud Computing",
      link: "/cloud_computing",
    },
    {
      title: "Cyber Security",
      link: "/project_management/ceh_certification",
    },
    {
      title: "Data Science",
      link: "/data_science",
    },
    {
      title: "DevOps",
      link: "/devops",
    },
    {
      title: "Digital Marketing",
      link: "/digital_marketing",
    },
    {
      title: "Health and Safety",
      link: "/health_and_safety",
    },
    {
      title: "ISO Certifications",
      link: "/iso_certifications",
    },
    {
      title: "IT Service Management",
      link: "/project_management/itil_4_foundation_certification",
    },
    {
      title: "Project Management",
      link: "/project_management/pmp_certification",
    },
    {
      title: "Quality Management",
      link: "/quality_management",
    },
    {
      title: "UX and Design Thinking",
      link: "/ux_and_design_thinking",
    },
  ];

  const openNav = () => {
    setIsOpen(true);
    document.getElementById("backdrop").style.display = "block";
  };

  const closeNav = () => {
    setIsOpen(false);
    setIsPathOpen(false);
    document.getElementById("backdrop").style.display = "none";
  };

  const openPath = () => {
    setIsPathOpen(true);
    document.getElementById("backdrop").style.display = "block";
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "" }));
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate("/");
  };

  const profile = () => {
    navigate("/dashboard/profile");
  };
  const Account_setting = () => {
    navigate("/dashboard/Account_setting");
  };

  return (
    <>
      <div className="header">
        <div className="backdrop" id="backdrop" onClick={closeNav}></div>
        <div className="div-flex-middle">
          <div className="div">
            <div className="div">
              <div className="hamburger_icon">
                <img
                  className="menu_icon"
                  alt="Button menu"
                  src={menu}
                  onClick={openNav}
                />
              </div>
              <div id="mySidenav" className={`sidenav ${isOpen ? "open" : ""}`}>
                <div className="div-flex_sidebar">
                  <a
                    href="https://certscope.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img className="side_logo" alt="Link" src={logo} />
                  </a>
                </div>

                <div className="side_bar_tabs">
                  <div className="content">
                    <div className="content_img">
                      <BusinessCenterIcon />
                    </div>
                    <span>Enterprise</span>
                  </div>
                  <div className="content">
                    <div className="content_img">
                      <MiscellaneousServicesIcon />
                    </div>
                    <span>Services</span>
                  </div>
                  <div className="content">
                    <div className="content_img">
                      <PeopleAltIcon />
                    </div>
                    <span>Mentorship Program</span>
                  </div>
                  <div className="content">
                    <div className="content_img">
                      <CalendarTodayIcon />
                    </div>
                    <span>Training Calender</span>
                  </div>
                  <div className="content">
                    <div className="content_img">
                      <MenuBookIcon />
                    </div>
                    <span>Resources</span>
                  </div>
                  <div className="content">
                    <div className="content_img">
                      <HelpIcon />
                    </div>
                    <span>Help and Support</span>
                  </div>
                  <div className="content">
                    <div className="content_img">
                      <FolderIcon />
                    </div>
                    <span>Policies</span>
                  </div>
                  <div className="content">
                    <div className="content_img">
                      <ContactsIcon />
                    </div>
                    <span>Contact Us</span>
                  </div>
                  <div className="content">
                    <div className="content_img">
                      <InfoIcon />
                    </div>
                    <span>About us</span>
                  </div>
                </div>
              </div>
              <div className="div-flex">
                <a
                  href="https://certscope.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img className="link" alt="Link" src={logo} />
                </a>
              </div>
            </div>
            <div className="div">
              <div className="button-browse" src={menu} onClick={openPath}>
                <img className="SVG" alt="Svg" src={Book} />
                <div className="span-ttu">
                  <div className="pathways">PATHWAYS</div>
                </div>
              </div>
              <div
                id="pathSidenav"
                className={`sidenav ${isPathOpen ? "open" : ""}`}
              >
                <div className="div-flex_sidebar">
                  <a
                    href="https://certscope.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img className="side_logo" alt="Link" src={logo} />
                  </a>
                </div>

                <div className="side_bar_tabs">
                  {pathway.map((item, index) => (
                    <NavLink to={item.link} key={index}>
                      <div className="content">
                        <span>{item.title}</span>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="div-flex-middle-2">
            <img className="search_icon" alt="Button search" src={Search} />
            <div>
              <Button
                id="basic-button"
                aria-controls={anchorEl ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={anchorEl ? "true" : undefined}
                onClick={handleClick}
              >
                <img
                  className="link-log-in-to-your"
                  alt="Link log in to your"
                  src={Profile}
                />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={profile}>Profile</MenuItem>
                <MenuItem onClick={Account_setting}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
