import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Alert,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeToken } from "../../services/LocalStorageService";
import "../../Assets/CSS/Pages.css";
import logo from "../../Assets/PNG/logo.png";
import { useRegisterUserMutation } from "../../services/userAuthApi";
const Registration = () => {
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password2: data.get("password2"),
      tc: data.get("tc"),
    };
    const res = await registerUser(actualData);
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      // console.log(res.error.data.errors)
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      console.log(typeof res.data);
      console.log(res.data);
      storeToken(res.data.token);
      navigate("/dashboard");
    }
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        id="registration-form"
        onSubmit={handleSubmit}
      >
        <section className="login_page_content">
          <section className="login_content">
            <div className="login_input_field">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                name="name"
                placeholder="Name"
                type="text"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                placeholder="Email"
                type="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                placeholder="Password"
                type="password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password2"
                name="password2"
                type="password"
                placeholder="Confirm Password"
              />
              <FormControlLabel
                control={
                  <Checkbox value={true} color="primary" name="tc" id="tc" />
                }
                label="I agree to term and condition"
              />
            </div>
            <div className="login_button">
              <Box textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, px: 5 }}
                >
                  Register
                </Button>
              </Box>
              {server_error.non_field_errors ? (
                <Alert severity="error">
                  {server_error.non_field_errors[0]}
                </Alert>
              ) : (
                ""
              )}
            </div>
            <div className="bottom_paragraph">
              <p>
                By clicking "Register" above, you agree to our{" "}
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

export default Registration;
