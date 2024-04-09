import React, { Component } from "react";
import { NavLink, Navigate } from "react-router-dom";
import "../../Assets/CSS/Nav.css";
import menu from "../../Assets/PNG/menu.png";
import logo from "../../Assets/PNG/logo.png";
import Book from "../../Assets/PNG/book.png";
import Search from "../../Assets/PNG/search.svg";
import Profile from "../../Assets/PNG/profile.svg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HelpIcon from "@mui/icons-material/Help";
import FolderIcon from "@mui/icons-material/Folder";
import ContactsIcon from "@mui/icons-material/Contacts";
import InfoIcon from "@mui/icons-material/Info";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isPathOpen: false,
      openDrawer: false,
      pathway: [
        {
          title: "Agile and Scrum",
          certificates: [
            {
              title: "CSM Certificate",
              link: "/agile-and-scrum/csm_certification",
            },
            {
              title: "CSPO Certification",
              link: "/agile-and-scrum/cspo_certification",
            },
            {
              title: "PMI-ACP Certification",
              link: "/agile-and-scrum/PMI_ACP_Certification",
            },
          ],
        },
        {
          title: "Big Data",
          certificates: [
            {
              title: "Big Data Administrator Certification",
              link: "big-data/big-data-administrator-certification",
            },
          ],
        },
        {
          title: "Cloud  Computing",
          certificates: [
            {
              title: "AWS Solution Architect Certification",
              link: "cloud-computing/aws-solution-architect-certification",
            },
            {
              title: "AWS Developer Associate Certification",
              link: "cloud-computing/aws-developer-associate-certification",
            },
          ],
        },
        {
          title: "Cyber Security",
          certificates: [
            {
              title: "CEH Certification",
              link: "cyber-security/ceh-certification",
            },
            {
              title: "CISSP Certification",
              link: "cyber-security/cissp-certification",
            },
          ],
        },
        {
          title: "Data Science",
          certificates: [
            {
              title: "Data Science with Python Certification",
              link: "data-science/data-science-python-certification",
            }
          ],
        },
        {
          title: "DevOps",
          certificates: [
            {
              title: "DevOps Certification",
              link: "devops/devops-certification",
            }
          ],
        },
        {
          title: "Digital Marketing",
          certificates: [
            {
              title: "Digital Marketing Expert Certification",
              link: "digital-marketing/digital-marketing-expert-certification",
            }
          ],
        },
        {
          title: "ISO Certifications",
          certificates: [
            {
              title: "ISO 27001 Lead Auditor Certification",
              link: "iso-certifications/iso-27001-lead-auditor-certification",
            }
          ],
        },
        {
          title: "IT Service Management",
          certificates: [
            {
              title: "ITIL-4 Foundation Certification",
              link: "it-service-management/itil-4-foundation-certification",
            }
          ],
        },
        {
          title: "Project Management",
          certificates: [
            {
              title: "PMP Certification",
              link: "/project_management/pmp_certification",
            },
            {
              title: "PfMP Certification",
              link: "project-management/pfmp-certification",
            },
            {
              title: "PgMP Certification",
              link: "project-management/pgmp-certification",
            },
          ],
        },
        {
          title: "Quality Management",
          certificates: [
            {
              title: "Lean Six Sigma Yellow Belt Certification",
              link: "quality-management/lean-six-sigma-yellow-belt-certification",
            },
            {
              title: "Lean Six Sigma Black Belt certification",
              link: "quality-management/lean-six-sigma-black-belt-certification",
            },
            {
              title: "Lean Six Sigma Green Belt certification",
              link: "quality-management/lean-six-sigma-green-belt-certification",
            },
          ],
        },
        {
          title: "UX and Design Thinking ",
          certificates: [
            {
              title: "Design Thinking Certification",
              link: "ux-and-design-thinking/design-thinking-certification",
            }
          ],
        },
      ],
      selectedPathway: null,
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

  openPath = (selectedPathway) => {
    this.setState({ isPathOpen: true, selectedPathway });
    document.getElementById("backdrop").style.display = "block";
  };

  toggleDrawer = (newOpen) => {
    this.setState({ openDrawer: newOpen });
  };

  redirects = [
    {
      logo: <BusinessCenterIcon />,
      title: "Enterprise",
      link: "business",
    },
    {
      logo: <MiscellaneousServicesIcon />,
      title: "Services",
      link: "service",
    },
    {
      logo: <PeopleAltIcon />,
      title: "Mentorship Program",
      link: "business",
    },
    {
      logo: <CalendarTodayIcon />,
      title: "Training Calender",
      link: "business",
    },
    {
      logo: <MenuBookIcon />,
      title: "Resources",
      link: "business",
    },
    {
      logo: <HelpIcon />,
      title: "Help and Support",
      link: "business",
    },
    {
      logo: <FolderIcon />,
      title: "Policies",
      link: "business",
    },
    {
      logo: <ContactsIcon />,
      title: "Contact Us",
      link: "business",
    },
    {
      logo: <InfoIcon />,
      title: "About us",
      link: "business",
    },
  ];

  render() {
    const { openDrawer, selectedPathway, pathway } = this.state;

    return (
      <>
        <div className="header">
          <div className="backdrop" id="backdrop" onClick={this.closeNav}></div>
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
                    {this.redirects.map((items, index) => (
                      <NavLink to={items.link}>
                        <div className="content">
                          <div className="content_img">{items.logo}</div>

                          <span>{items.title}</span>
                        </div>
                      </NavLink>
                    ))}
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
                  onClick={() => this.openPath(pathway[0])}
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
                    {/* Render PathwayList */}
                    <Box
                      sx={{ width: 250 }}
                      role="presentation"
                      onClick={() => this.toggleDrawer(false)}
                    >
                      <List>
                        {pathway.map((item) => (
                          <div key={item.title}>
                            <ListItem disablePadding>
                              <ListItemButton
                                onClick={() => this.openPath(item)}
                              >
                                <ListItemText primary={item.title} />
                              </ListItemButton>
                            </ListItem>
                            {selectedPathway &&
                              selectedPathway.title === item.title && (
                                <List>
                                  {selectedPathway.certificates.map(
                                    (certificate) => (
                                      <ListItem
                                        key={certificate.title}
                                        disablePadding
                                      >
                                        <ListItemButton
                                          component={NavLink}
                                          to={certificate.link}
                                        >
                                          <ListItemText
                                            primary={certificate.title}
                                          />
                                        </ListItemButton>
                                      </ListItem>
                                    )
                                  )}
                                </List>
                              )}
                          </div>
                        ))}
                      </List>
                    </Box>
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
