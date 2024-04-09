import React, { useState } from "react";
import {
  useGetLoggedUserQuery,
  useUpdateProfileMutation,
} from "../../services/userAuthApi"; // Import your API hooks
import { getToken } from "../../services/LocalStorageService";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function ProfileForm() {
  const { access_token } = getToken();
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    bio: "", // New field
    phone_number: "", // New field
    website: "", // New field
    linkedin: "", // New field
    twitter: "", // New field
    instagram: "", // New field
    youtube: "", // New field
    facebook: "", // New field
  });

  const { data: loggedUserData, isLoading: isUserDataLoading } =
    useGetLoggedUserQuery(access_token);

  const [
    updateProfile,
    { isLoading: isUpdateLoading, isError: isUpdateError },
  ] = useUpdateProfileMutation(access_token);

  React.useEffect(() => {
    if (loggedUserData) {
      setUserData(loggedUserData);
    }
  }, [loggedUserData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile({ actualData: userData, access_token: access_token });
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="profile-form-container">
      <h3>{userData.name}</h3>
      <form onSubmit={handleSubmit}>
        <div className="accordion-container">
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              FULL NAME
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                NameWe’re big on real names around here on CertScope, so people
                know who’s who. As per our policy name can not be changed. To
                know more visit our help and support centre.
              </Typography>
              <TextField
                id="standard-basic"
                placeholder="Name"
                variant="outlined"
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="text-field"
              />
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="accordion-container">
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              PROFILE
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Your profile information.</Typography>
              <TextField
                fullWidth
                id="standard-basic"
                variant="outlined"
                type="text"
                name="bio"
                placeholder="Bio"
                value={userData.bio}
                onChange={handleChange}
                className="text-field"
              />
              <TextField
                fullWidth
                id="standard-basic"
                variant="outlined"
                type="number"
                name="phone_number"
                placeholder="Phone Number"
                value={userData.phone_number}
                onChange={handleChange}
                className="text-field"
              />
              <TextField
                fullWidth
                id="standard-basic"
                variant="outlined"
                type="text"
                name="website"
                placeholder="Website"
                value={userData.website}
                onChange={handleChange}
                className="text-field"
              />
              <TextField
                fullWidth
                id="standard-basic"
                variant="outlined"
                type="text"
                name="linkedin"
                placeholder="LinkedIn"
                value={userData.linkedin}
                onChange={handleChange}
                className="text-field"
              />
              <TextField
                fullWidth
                id="standard-basic"
                variant="outlined"
                type="text"
                name="twitter"
                placeholder="Twitter"
                value={userData.twitter}
                onChange={handleChange}
                className="text-field"
              />
              <TextField
                fullWidth
                id="standard-basic"
                variant="outlined"
                type="text"
                name="instagram"
                placeholder="Instagram"
                value={userData.instagram}
                onChange={handleChange}
                className="text-field"
              />
              <TextField
                fullWidth
                id="standard-basic"
                variant="outlined"
                type="text"
                name="youtube"
                placeholder="YouTube"
                value={userData.youtube}
                onChange={handleChange}
                className="text-field"
              />
              <TextField
                fullWidth
                id="standard-basic"
                variant="outlined"
                placeholder="Facebook"
                type="text"
                name="facebook"
                value={userData.facebook}
                onChange={handleChange}
                className="text-field"
              />
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="accordion-container">
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              ACCOUNT SETTINGS
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A valid email address. All emails from the system will be sent
                to this address. The email address is not made public and will
                only be used if you wish to receive a new password or wish to
                receive certain news or notifications by email.
              </Typography>
              <TextField
                fullWidth
                id="standard-basic"
                placeholder="Email"
                variant="outlined"
                label="Email"
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="text-field"
              />
            </AccordionDetails>
          </Accordion>
        </div>

        <Button
          variant="contained"
          color="success"
          type="submit"
          disabled={isUpdateLoading || isUserDataLoading}
          className="submit-button"
        >
          {isUpdateLoading ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </div>
  );
}

export default ProfileForm;
