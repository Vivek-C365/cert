import React, { useState } from "react";
import {
  InputLabel,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControl,
  TextField,
  Select,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ExpandMore as ExpandMoreIcon,
  CloudUpload as CloudUploadIcon,
} from "@mui/icons-material";
import { getToken } from "../../services/LocalStorageService";
import { useCourselistQuery } from "../../services/userAuthApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fab from "@mui/material/Fab";

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

const ProfileForm = () => {
  const [courseInfo, setCourseInfo] = useState({
    coursename: "",
    description: "",
    image: null,
  });

  const [certificateInfo, setCertificateInfo] = useState({
    certificatetitle: "",
    certificatedescription: "",
    selectedCourse: "",
  });

  const { data: courseData, refetch } = useCourselistQuery();

  const truncateFileName = (fileName) => {
    const name = fileName.split('.').slice(0, -1).join('.');
    const extension = fileName.split('.').pop();
    const truncatedName = name.length > 10 ? name.substring(0, 10) + '...' : name;
    return `${truncatedName}.${extension}`;
  };

  const handleInputChange = (setter) => (event) => {
    const { name, value, files } = event.target;
    const updatedValue = files ? files[0] : value;

    setter((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    if (name === "image") {
      const fileChosen = files && files.length > 0 ? truncateFileName(files[0].name) : "No file chosen";
      document.getElementById("file-chosen").textContent = fileChosen;
    }
  };

  const handleSubmit = async (
    endpoint,
    data,
    setter,
    initialState,
    validate
  ) => {
    const { access_token } = getToken();
    const isCourse = endpoint.includes("Courses");

    if (!validate()) {
      toast.warn("Please fill out all required fields!");
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/user/${endpoint}/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${access_token}`,
            ...(isCourse ? {} : { "Content-Type": "application/json" }),
          },
          body: isCourse ? data : JSON.stringify(data),
        }
      );

      if (response.ok) {
        setter(initialState);
        toast.success(
          `${isCourse ? "Course" : "Certificate"} added successfully!`
        );
        if (isCourse) {
          document.getElementById("file-chosen").textContent = "No file chosen";
          refetch();  // Refetch courses to update the list
        }
      } else {
        console.error(`Failed to add ${isCourse ? "course" : "certificate"}`);
        toast.error(`Failed to add ${isCourse ? "course" : "certificate"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleSubmitCourse = (event) => {
    event.preventDefault();

    const validate = () => {
      if (!courseInfo.coursename || !courseInfo.description) {
        return false;
      }

      const isImageValid =
        courseInfo.image &&
        ["image/jpeg", "image/jpg", "image/png"].includes(
          courseInfo.image.type
        );
      if (!isImageValid) {
        toast.error("Image must be in jpg, jpeg, or png format!");
        return false;
      }

      return true;
    };

    const formData = new FormData();
    formData.append("title", courseInfo.coursename);
    formData.append("description", courseInfo.description);
    formData.append("link", courseInfo.coursename);
    formData.append("image", courseInfo.image);

    handleSubmit(
      "Courses",
      formData,
      setCourseInfo,
      {
        coursename: "",
        description: "",
        image: null,
      },
      validate
    );
  };

  const handleSubmitCertificate = (event) => {
    event.preventDefault();

    const validate = () => {
      return (
        certificateInfo.certificatetitle &&
        certificateInfo.certificatedescription &&
        certificateInfo.selectedCourse
      );
    };

    handleSubmit(
      "Certificate",
      {
        certificate_title: certificateInfo.certificatetitle,
        description: certificateInfo.certificatedescription,
        link: certificateInfo.certificatetitle,
        courses: certificateInfo.selectedCourse,
      },
      setCertificateInfo,
      {
        certificatetitle: "",
        certificatedescription: "",
        selectedCourse: "",
      },
      validate
    );
  };

  return (
    <div className="account_setting live_class_back">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="profile-form-container live_class_container">
        <div className="update_profile_form">
          <h3>Add Course and Certificate</h3>
          <form onSubmit={handleSubmitCourse} className="add_course_certificate">
            <AccordionSection
              title="COURSE INFO"
              summary="Basic information regarding Course."
              inputs={[
                {
                  id: "course-name",
                  name: "coursename",
                  label: "Course Name",
                  value: courseInfo.coursename,
                  onChange: handleInputChange(setCourseInfo),
                },
                {
                  id: "description",
                  name: "description",
                  label: "Description",
                  value: courseInfo.description,
                  onChange: handleInputChange(setCourseInfo),
                },
              ]}
              additionalInput={
                <>
                  <VisuallyHiddenInput
                    accept="image/*"
                    id="image-upload"
                    name="image"
                    type="file"
                    onChange={handleInputChange(setCourseInfo)}
                  />
                  <label htmlFor="image-upload" className="upload_image">
                    <Fab variant="extended" color="primary" component="span">
                      <CloudUploadIcon sx={{ mr: 1 }} />
                      Upload Image
                    </Fab>
                    <span id="file-chosen">No file chosen</span>
                  </label>
                </>
              }
              submitButtonLabel="Add Course"
            />
          </form>
          <form onSubmit={handleSubmitCertificate}>
            <AccordionSection
              title="CERTIFICATE INFO"
              summary="Basic information regarding Certificate."
              inputs={[
                {
                  id: "certificate-title",
                  name: "certificatetitle",
                  label: "Title",
                  value: certificateInfo.certificatetitle,
                  onChange: handleInputChange(setCertificateInfo),
                },
                {
                  id: "certificate-description",
                  name: "certificatedescription",
                  label: "Certificate Summary",
                  value: certificateInfo.certificatedescription,
                  onChange: handleInputChange(setCertificateInfo),
                },
              ]}
              additionalInput={
                <FormControl fullWidth>
                  <InputLabel id="course-select-label">Channel</InputLabel>
                  <Select
                    labelId="course-select-label"
                    id="course-select"
                    name="selectedCourse"
                    value={certificateInfo.selectedCourse}
                    onChange={handleInputChange(setCertificateInfo)}
                  >
                    {courseData &&
                      courseData.map((course) => (
                        <MenuItem key={course.id} value={course.id}>
                          {course.title}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              }
              submitButtonLabel="Add Certificate"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

const AccordionSection = ({
  title,
  summary,
  inputs,
  additionalInput,
  submitButtonLabel,
}) => (
  <Accordion defaultExpanded>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`${title.toLowerCase()}-content`}
      id={`${title.toLowerCase()}-header`}
    >
      {title}
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{summary}</Typography>
      {inputs.map((input) => (
        <FormControl fullWidth key={input.id}>
          <TextField {...input} variant="outlined" />
        </FormControl>
      ))}
      {additionalInput}
      <Fab variant="extended" color="primary" type="submit">
        {submitButtonLabel}
      </Fab>
    </AccordionDetails>
  </Accordion>
);

export default ProfileForm;
