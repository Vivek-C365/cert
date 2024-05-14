import React, { useState } from "react";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Select from "@mui/material/Select";
import { getToken } from "../../services/LocalStorageService";
import {
  useCourselistQuery,
  useCertificatelistQuery,
} from "../../services/userAuthApi";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function ProfileForm() {
  const [courseInfo, setCourseInfo] = useState({
    coursename: "",
    description: "",
    image: null,
  });
  const { data: courseData } = useCourselistQuery();
  const [certificateInfo, setCertificateInfo] = useState({
    certificatetitle: "",
    certificatedescription: "",
    selectedCourse: "",
  });

  const handleCourseChange = (event) => {
    setCourseInfo({
      ...courseInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    setCourseInfo({
      ...courseInfo,
      image: event.target.files[0],
    });
  };

  const handleCertificateChange = (event) => {
    setCertificateInfo({
      ...certificateInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleCourseSelectChange = (event) => {
    setCertificateInfo({
      ...certificateInfo,
      selectedCourse: event.target.value,
    });
  };

  const handleSubmitCourse = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", courseInfo.coursename);
    formData.append("description", courseInfo.description);
    formData.append("image", courseInfo.image);

    const { access_token } = getToken();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/Courses/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        body: formData,
      });

      if (response.ok) {
        setCourseInfo({
          coursename: "",
          description: "",
          image: null,
        });
      } else {
        console.error("Failed to add course");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmitCertificate = async (event) => {
    event.preventDefault();

    const { access_token } = getToken();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/Certificate/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify({
          certificate_title: certificateInfo.certificatetitle,
          description: certificateInfo.certificatedescription,
          courses: certificateInfo.selectedCourse,
        }),
      });

      if (response.ok) {
        setCertificateInfo({
          certificatetitle: "",
          certificatedescription: "",
          selectedCourse: "",
        });
      } else {
        console.error("Failed to add certificate");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="account_setting live_class_back">
      <div className="profile-form-container live_class_container">
        <div className="update_profile_form">
          <h3>Add Course and Certificate</h3>
          <form onSubmit={handleSubmitCourse}>
            <div className="accordion-container">
              <Accordion className="accordion" defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  COURSE INFO
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Basic information regarding Course.</Typography>
                  <FormControl fullWidth>
                    <TextField
                      id="course-name"
                      name="coursename"
                      label="Course Name"
                      variant="outlined"
                      value={courseInfo.coursename}
                      onChange={handleCourseChange}
                    />
                    <TextField
                      id="description"
                      name="description"
                      label="Description"
                      variant="outlined"
                      value={courseInfo.description}
                      onChange={handleCourseChange}
                    />
                    <VisuallyHiddenInput
                      accept="image/*"
                      id="image-upload"
                      name="image"
                      type="file"
                      onChange={handleImageChange}
                    />
                    <label htmlFor="image-upload">
                      <Button
                        variant="contained"
                        component="span"
                        startIcon={<CloudUploadIcon />}
                      >
                        Upload Image
                      </Button>
                    </label>
                  </FormControl>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="submit-button"
                  >
                    Add Course
                  </Button>
                </AccordionDetails>
              </Accordion>
            </div>
          </form>
          <form onSubmit={handleSubmitCertificate}>
            <div className="accordion-container">
              <Accordion className="accordion" defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  CERTIFICATE INFO
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Basic information regarding Certificate.</Typography>
                  <FormControl fullWidth>
                    <InputLabel id="course-select-label">Course</InputLabel>
                    <Select
                      labelId="course-select-label"
                      id="course-select"
                      value={certificateInfo.selectedCourse}
                      label="Course"
                      onChange={handleCourseSelectChange}
                    >
                      {courseData &&
                        courseData.map((course) => (
                          <MenuItem key={course.id} value={course.id}>
                            {course.title}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  <TextField
                    id="certificate-title"
                    name="certificatetitle"
                    label="Certificate Title"
                    variant="outlined"
                    value={certificateInfo.certificatetitle}
                    onChange={handleCertificateChange}
                  />
                  <TextField
                    id="certificate-description"
                    name="certificatedescription"
                    label="Description"
                    variant="outlined"
                    value={certificateInfo.certificatedescription}
                    onChange={handleCertificateChange}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="submit-button"
                  >
                    Add Certificate
                  </Button>
                </AccordionDetails>
              </Accordion>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
