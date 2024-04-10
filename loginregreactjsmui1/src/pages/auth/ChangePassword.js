import { Box, TextField, Button, Alert, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useChangeUserPasswordMutation } from "../../services/userAuthApi";
import { getToken } from "../../services/LocalStorageService";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const ChangePassword = () => {
  const [server_error, setServerError] = useState({});
  const [server_msg, setServerMsg] = useState({});
  const [changeUserPassword] = useChangeUserPasswordMutation();
  const { access_token } = getToken();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get("password"),
      password2: data.get("password2"),
    };
    const res = await changeUserPassword({ actualData, access_token });
    if (res.error) {
      setServerMsg({});
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      console.log(res.data);
      setServerError({});
      setServerMsg(res.data);
      document.getElementById("password-change-form").reset();
    }
  };
  // Getting User Data from Redux Store
  const myData = useSelector((state) => state.user);
  // console.log("Change Password", myData)

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
        id="password-change-form"
      >
        <div className="accordion-container">
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              UPDATE PASSWORD
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                To change the current user password, enter the new password in
                both fields.
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="New Password"
                type="password"
                id="password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password2"
                label="Confirm New Password"
                type="password"
                id="password2"
              />
              {server_error.non_field_errors ? (
                <Alert severity="error">
                  {server_error.non_field_errors[0]}
                </Alert>
              ) : (
                ""
              )}
              {server_msg.msg ? (
                <Alert severity="success">{server_msg.msg}</Alert>
              ) : (
                ""
              )}
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                {" "}
                Update{" "}
              </Button>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
    </>
  );
};

export default ChangePassword;
