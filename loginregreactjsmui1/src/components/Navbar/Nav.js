import React, { Component } from "react";
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
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isPathOpen: false,
    };
  }

  openNav = () => {
    this.setState({ isOpen: true });
    document.getElementById("backdrop").style.display = "block";
  };

  closeNav = () => {
    this.setState({ isOpen: false });
    this.setState({ isPathOpen: false });
    document.getElementById("backdrop").style.display = "none";
  };

  openPath = () => {
    this.setState({ isPathOpen: true });
    document.getElementById("backdrop").style.display = "block";
  };

  // handleLogout = () => {
  //   dispatch(unsetUserInfo({ name: "", email: "" }))
  //   dispatch(unSetUserToken({ access_token: null }))
  //   removeToken()
  //   navigate('/')
  // }

  pathway = [
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

  render() {
    return (
      <>
        <div className="header">
          <div class="backdrop" id="backdrop" onClick={this.closeNav}></div>
          <div className="div-flex-middle">
            <div className="div">
              <div className="div">
                <div className="hamburger_icon">
                  <img
                    className="menu_icon"
                    alt="Button menu"
                    src={menu}
                    onClick={this.openNav}
                  />
                </div>
                <div
                  id="mySidenav"
                  className={`sidenav ${this.state.isOpen ? "open" : ""}`}
                >
                  <div className="div-flex_sidebar">
                    <NavLink to="/">
                      <img className="side_logo" alt="Link" src={logo} />
                    </NavLink>
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
                  <Stack spacing={2} direction="row">
                    <NavLink className="Login_btn credential_btn" to="/Login">
                      <Button variant="contained">Login</Button>
                    </NavLink>
                    <NavLink to="/Registration" className="credential_btn">
                      <Button variant="outlined">SignUp</Button>
                    </NavLink>
                  </Stack>
                </div>
                <div className="div-flex">
                  <NavLink to="/">
                    <img className="link" alt="Link" src={logo} />
                  </NavLink>
                </div>
              </div>
              <div className="div">
                <div
                  className="button-browse"
                  src={menu}
                  onClick={this.openPath}
                >
                  <img className="SVG" alt="Svg" src={Book} />
                  <div className="span-ttu">
                    <div className="pathways">PATHWAYS</div>
                  </div>
                </div>
                <div
                  id="pathSidenav"
                  className={`sidenav ${this.state.isPathOpen ? "open" : ""}`}
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
                    {this.pathway.map((item, index) => (
                      <NavLink to={item.link}>
                        <div className="content" key={index}>
                          <span>{item.title}</span>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="div-flex-middle-2">
              <div className="div-getstarted">
                <div className="link-register-an">
                  <NavLink
                    className="get-started"
                    rel="noopener noreferrer"
                    to="/Registration"
                  >
                    GET STARTED
                  </NavLink>
                </div>

                {/* <Button variant='contained' color='warning' size='large' onClick={handleLogout}>Logout</Button> */}
              </div>
              <img className="search_icon" alt="Button search" src={Search} />
              <NavLink to="/Login">
                <img
                  className="link-log-in-to-your"
                  alt="Link log in to your"
                  src={Profile}
                />
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
