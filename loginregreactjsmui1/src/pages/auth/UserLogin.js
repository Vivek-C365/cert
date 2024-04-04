import { TextField, Button, Box, Alert, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUserToken } from "../../features/authSlice";
import { getToken, storeToken } from "../../services/LocalStorageService";
import { useLoginUserMutation } from "../../services/userAuthApi";
import "../../Assets/CSS/Pages.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const UserLogin = () => {
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    const res = await loginUser(actualData);
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      // console.log(res.error.data.errors)
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      // console.log(typeof (res.data))
      // console.log(res.data)
      storeToken(res.data.token);
      let { access_token } = getToken();
      dispatch(setUserToken({ access_token: access_token }));
      navigate("/");
    }
  };
  let { access_token } = getToken();
  useEffect(() => {
    dispatch(setUserToken({ access_token: access_token }));
  }, [access_token, dispatch]);

  return (
    <>
      <Box component="form" noValidate id="login-form" onSubmit={handleSubmit}>
        <section className="login_page_content">
          <section className="login_content">
            <div className="login_titles">
              <h3>Welcome Back</h3>
              <h5>
                Don't have an account?
                <NavLink to="/Registration">
                  <span>
                    Register <ArrowForwardIcon fontSize="small" />
                  </span>
                </NavLink>
              </h5>
            </div>
            <div className="login_input_field">
              <div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  placeholder="Email Address"
                />
                {server_error.email ? (
                  <Typography
                    style={{ fontSize: 12, color: "red", paddingLeft: 10 }}
                  >
                    {server_error.email[0]}
                  </Typography>
                ) : (
                  ""
                )}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                {server_error.password ? (
                  <Typography
                    style={{ fontSize: 12, color: "red", paddingLeft: 10 }}
                  >
                    {server_error.password[0]}
                  </Typography>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="form_bottom">
              <div className="keep_login">
                <div id="checkboxes">
                  <div class="checkbox">
                    <input type="checkbox" id="checkbox-1" name="example" />
                    <label for="checkbox-1"></label>
                    <span>Keep me logged in</span>
                  </div>
                </div>
              </div>

              <div className="forgot_password">
                <span>
                  <NavLink to="/sendpasswordresetemail">
                    Forgot Password ?
                  </NavLink>
                  {server_error.non_field_errors ? (
                    <Alert severity="error">
                      {server_error.non_field_errors[0]}
                    </Alert>
                  ) : (
                    ""
                  )}
                </span>
              </div>
            </div>
            <div className="login_button">
              <Button type="submit" variant="contained">
                Login
              </Button>
            </div>

            {/* <div className="social_button_content">
            <div className="social_button">
              <Button variant="outlined" startIcon={<GoogleIcon />}>
                Google
              </Button>
              <Button variant="outlined" startIcon={<LinkedInIcon />}>
                LinkedIn
              </Button>
            </div>
          </div> */}
            <div className="bottom_paragraph">
              <p>
                By clicking "Log in" above, you agree to our{" "}
                <span>Terms of use, Privacy </span> and{" "}
                <span>Cookie Policy</span>. This site is protected by reCAPTCHA
                and the Google <span> Privacy Policy</span> and{" "}
                <span> Terms of Service </span> apply.
              </p>
            </div>
            <div className="copyright">
              <span>CERTSCOPE © 2024</span>
              <div className="company_contact_link">
                <span>Help</span>
                <span>Contact</span>
              </div>
            </div>
          </section>
          <aside>
            <h3>
              Pursue your <span>PASSION</span>{" "}
            </h3>
          </aside>
        </section>
      </Box>
    </>
  );
};

export default UserLogin;
