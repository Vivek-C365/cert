import React, { useState, useEffect } from "react";
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
import { useCourselistQuery, useCertificatelistQuery } from "../../services/userAuthApi";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Nav = () => {
  const { access_token } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [isPathOpen, setIsPathOpen] = useState(false);
  const [isWidgetsOpen, setIsWidgetsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [filteredCertificates, setFilteredCertificates] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: courseData } = useCourselistQuery();
  const { data: certificateData } = useCertificatelistQuery();

  useEffect(() => {
    if (selectedCourse) {
      const filtered = certificateData.filter(cert => cert.courses === parseInt(selectedCourse));
      setFilteredCertificates(filtered);
    } else {
      setFilteredCertificates([]);
    }
  }, [selectedCourse, certificateData]);

  const handleCourseChange = (courseId) => {
    setSelectedCourse(courseId);
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <div className="backdrop" id="backdrop" onClick={() => setIsOpen(false)}></div>
        <div className="div-flex-middle">
          <div className="div">
            <div className="div">
              <div className="hamburger_icon">
                <img
                  className="menu_icon"
                  alt="Button menu"
                  src={menu}
                  onClick={() => setIsOpen(true)}
                />
              </div>
              <div id="mySidenav" className={`sidenav ${isOpen ? "open" : ""}`}>
                <div className="div-flex_sidebar">
                  <NavLink to="/">
                    <img className="side_logo" alt="Link" src={logo} />
                  </NavLink>
                </div>

                <div className="side_bar_tabs">
                  <NavLink to="/about">
                    <div className="content">
                      <div className="content_img"><InfoIcon /></div>
                      <span>About Us</span>
                    </div>
                  </NavLink>
                  {/* Add other NavLink items here */}
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
                onClick={() => setIsPathOpen(!isPathOpen)}
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
                    onClick={() => setIsPathOpen(false)}
                  >
                    <List>
                      {courseData && courseData.map(courseItem => (
                        <MenuItem key={courseItem.id} value={courseItem.id} onClick={() => handleCourseChange(courseItem.id)}>
                          {courseItem.title}
                        </MenuItem>
                      ))}
                    </List>
                    {filteredCertificates.length > 0 && (
                      <List>
                        {filteredCertificates.map(certificateItem => (
                          <MenuItem key={certificateItem.id} value={certificateItem.id}>
                            {certificateItem.certificate_title}
                          </MenuItem>
                        ))}
                      </List>
                    )}
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
                <WidgetsIcon onClick={() => setIsWidgetsOpen(!isWidgetsOpen)} />
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
            onClick={() => setIsWidgetsOpen(false)}
          >
            <List>
              {/* Add widgets items here */}
            </List>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Nav;
