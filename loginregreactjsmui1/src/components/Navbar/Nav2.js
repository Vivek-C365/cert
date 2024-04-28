import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../Assets/CSS/Nav.css";
import Stack from "@mui/material/Stack";
import menu from "../../Assets/PNG/menu.png";
import logo from "../../Assets/PNG/logo.png";
import Book from "../../Assets/PNG/book.png";
import Search from "../../Assets/PNG/search.svg";
import Profile from "../../Assets/PNG/profile.svg";
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
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { removeToken } from "../../services/LocalStorageService";
import { unSetUserToken } from "../../features/authSlice";
import { unsetUserInfo } from "../../features/userSlice";
import course from "../../course.json";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Nav = () => {
  const { access_token } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [isPathOpen, setIsPathOpen] = useState(false);
  const [isWidgetsOpen, setIsWidgetsOpen] = useState(false); // State for new side navigation
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedPathway, setSelectedPathway] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirects = [
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
      link: "mentor/mentorship-program",
    },
    {
      logo: <CalendarTodayIcon />,
      title: "Training Calendar",
      link: "training-calendar",
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
  // New set of data for Widgets side navigation
  const widgetsData = [
    {
      title: "CONTENT MANAGEMENT",
      items: [
        {
          title: "ADD COURSE",
          link: "/Course",
        },
        {
          title: "ADD RESOURCES",
          link: "/resources",
        },
      ],
    },
    {
      title: "TRAINING SCHEDULES",
      items: [
        {
          title: "Live-Online schedules",
          link: "/Classes",
        },
        {
          title: "Add Live online",
          link: "create/live-online",
        },
      ],
    },
    // Add more widgets as needed
  ];

  const openNav = () => {
    setIsOpen(true);
    document.getElementById("backdrop").style.display = "block";
  };

  const closeNav = () => {
    setIsOpen(false);
    setIsPathOpen(false);
    setIsWidgetsOpen(false); // Close Widgets side navigation
    document.getElementById("backdrop").style.display = "none";
  };

  const openPath = (selectedPathway) => {
    setIsPathOpen(true);
    setSelectedPathway(selectedPathway);
    document.getElementById("backdrop").style.display = "block";
  };

  const openWidgets = () => {
    setIsWidgetsOpen(true); // Open Widgets side navigation
    document.getElementById("backdrop").style.display = "block";
  };

  const toggleDrawer = (newOpen) => {
    setOpenDrawer(newOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

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
                  <NavLink to="/">
                    <img className="side_logo" alt="Link" src={logo} />
                  </NavLink>
                </div>

                <div className="side_bar_tabs">
                  {redirects.map((items, index) => (
                    <NavLink key={index} to={items.link}>
                      <div className="content">
                        <div className="content_img">{items.logo}</div>
                        <span>{items.title}</span>
                      </div>
                    </NavLink>
                  ))}
                </div>
                {!access_token && (
                  <Stack spacing={2} direction="row">
                    <NavLink className="Login_btn credential_btn" to="/Login">
                      <Button variant="contained">Login</Button>
                    </NavLink>
                    <NavLink to="/Registration" className="credential_btn">
                      <Button variant="outlined">SignUp</Button>
                    </NavLink>
                  </Stack>
                )}
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
                onClick={() => openPath(course.pathway[0])}
              >
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
                  <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => toggleDrawer(false)}
                  >
                    <List>
                      {course.pathway.map((item, index) => (
                        <div key={index}>
                          <ListItem disablePadding>
                            <ListItemButton onClick={() => openPath(item)}>
                              <ListItemText primary={item.title} />
                            </ListItemButton>
                          </ListItem>
                          {selectedPathway &&
                            selectedPathway.title === item.title && (
                              <List>
                                {selectedPathway.certificates.map(
                                  (certificate, index) => (
                                    <ListItem key={index} disablePadding>
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
            {access_token ? (
              <>
                <img className="search_icon" alt="Button search" src={Search} />
                <NavLink to="/dashboard/Checkout">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </NavLink>
                <WidgetsIcon onClick={openWidgets} />{" "}
                {/* New icon for Widgets */}
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
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>

      <div
        id="widgetsSidenav"
        className={`sidenav ${isWidgetsOpen ? "open" : ""}`}
      >
        <div className="div-flex_sidebar">
          <NavLink to="/">
            <img className="side_logo" alt="Link" src={logo} />
          </NavLink>
        </div>

        <div className="side_bar_tabs">
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => toggleDrawer(false)}
          >
            <List>
              {widgetsData.map((category, index) => (
                <div key={index}>
                  <ListItem disablePadding>
                    <ListItemText primary={category.title} />
                  </ListItem>
                  {category.items.map((item, subIndex) => (
                    <ListItem key={subIndex} disablePadding>
                      <ListItemButton component={NavLink} to={item.link}>
                        <ListItemText primary={item.title} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </div>
              ))}
            </List>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Nav;
