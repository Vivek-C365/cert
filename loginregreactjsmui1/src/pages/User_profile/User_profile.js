import React, {useState , useEffect}from "react";
import { getToken} from '../../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../../services/userAuthApi';
import { useDispatch } from 'react-redux';
import { setUserInfo, unsetUserInfo } from '../../features/userSlice';
import Banner from "../../Assets/PNG/UserProfile/Banner.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
function User_profile() {
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)

  const [userData, setUserData] = useState({
    email: "",
    name: "",
    bio: "",
    profile_image :""
  })

  // Store User Data in Local State
  useEffect(() => {
    if (isSuccess && data && data.name) {
      setUserData({
        email: data.email,
        name: data.name,
        bio: data.bio,
        website : data.website,
        linkedin : data.linkedin,
        twitter : data.twitter,
        facebook : data.facebook,
        instagram : data.instagram,
        youtube : data.youtube,
        profile_image:`http://127.0.0.1:8000/api/user/profile${data.profile_image}` 
      });
    }
  }, [data, isSuccess]);


  // Store User Data in Redux Store
  useEffect(() => {
    if (isSuccess && data && data.name) {
      dispatch(
        setUserInfo({
          email: data.email,
          name: data.name,
          bio : data.bio
        })
      );
    }
  }, [data, isSuccess, dispatch]);


  console.log(userData)

  return (
    <>
      <div className="dash-certscope-com">
        <div className="body-paints" />
        <div className="div-bg-app">
          <div className="div-asfs">
            <div className="main">
              <div className="div-block-dars-main">
                <div className="section">
                  <div className="overlap-group">
                    <img
                      className="wave-svg-fill"
                      alt="Wave svg fill"
                      src={Banner}
                    />
                    <div className="div-p-relative">
                      <div className="div-container-tablet">
                        <div className="user_profile_content">
                          <div className="figure-margin">
                            <div className="figure">
                              <div className="div-media" />
                              <img
                                className="span-flex"
                                alt="Span flex"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              />
                            </div>
                          </div>
                          <div className="div-flex-column">
                            <div className="heading-margin">
                              <div className="heading">
                                <div className="text-wrapper">{userData.name}</div>
                              </div>
                            </div>
                            <div className="p-flex-middle">
                              <div className="span-flex-middle">
                                <div className="manager">MANAGER</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="Link_content_profile">
                          <div className="item">
                            <a
                              href={userData.website}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <LanguageIcon />
                            </a>
                          </div>
                          <div className="item">
                            <a
                              href={userData.linkedin}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <LinkedInIcon />
                            </a>
                          </div>
                          <div className="item">
                            <a
                              href={userData.twitter}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <TwitterIcon />
                            </a>
                          </div>
                          <div className="item">
                            <a
                              href={userData.facebook}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <FacebookIcon/>
                            </a>
                          </div>
                          <div className="item">
                            <a
                              href={userData.instagram}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <InstagramIcon/>
                            </a>
                          </div>
                          <div className="item">
                            <a
                              href={userData.youtube}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <YouTubeIcon/>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-2">
                  <div className="aside">
                    <div className="div-bio-card">
                      <div className="div-wrapper">
                        <div className="text-wrapper-2">About me</div>
                      </div>
                      <div className="separator" />
                      <div className="div-text-steel">
                        <p className="certified-trainer">
                        {userData.bio}
                        </p>
                      </div>
                      <div className="div-w">
                        <CalendarTodayIcon/>
                        <div className="p-profile-item">
                          <div className="text-wrapper-3">Oct 14, 2021</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-single-grid">
                    <div className="nav">
                      <div className="list">
                        <div className="link-wrapper">
                          <div className="link-2">
                            <a
                              className="text-wrapper-4"
                              href="https://certscope.com/aamirmir"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Courses
                            </a>
                          </div>
                        </div>
                        <div className="link-wrapper">
                          <div className="link-3">
                            <a
                              className="text-wrapper-5"
                              href="https://certscope.com/aamirmir/resources"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Resources
                            </a>
                          </div>
                        </div>
                        <div className="link-wrapper">
                          <div className="link-3">
                            <a
                              className="text-wrapper-5"
                              href="https://certscope.com/aamirmir/comments"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Comments
                            </a>
                          </div>
                        </div>
                        <div className="link-wrapper">
                          <div className="link-3">
                            <a
                              className="text-wrapper-5"
                              href="https://certscope.com/aamirmir/reviews"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Reviews
                            </a>
                          </div>
                        </div>
                        <div className="link-wrapper">
                          <div className="link-3">
                            <a
                              className="text-wrapper-5"
                              href="https://certscope.com/aamirmir/contact"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Contact
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User_profile;
