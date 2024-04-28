import React, { useState, useEffect } from "react";
import {
  useCourselistQuery,
  useCertificatelistQuery,
} from "../../services/userAuthApi";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Country }  from 'country-state-city';

function ProfileForm() {
  const [course, setCourse] = useState("");
  const [certificate, setCertificate] = useState("");
  const [country, setCountry] = useState("");
  const [mrp, setMrp] = useState("");
  const [price, setPrice] = useState("");
  const [delivery, setDelivery] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { data: courseData} = useCourselistQuery();
  const { data: certificateData} = useCertificatelistQuery();
  const [filteredCertificates, setFilteredCertificates] = useState([]);

  useEffect(() => {
    if (course) {
      const filtered = certificateData.filter(cert => cert.courses === parseInt(course));
      setFilteredCertificates(filtered);
    } else {
      setFilteredCertificates([]);
    }
  }, [course, certificateData]);

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleCertificateChange = (event) => {
    setCertificate(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleMrpChange = (event) => {
    setMrp(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDeliveryChange = (event) => {
    setDelivery(event.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      delivery: delivery,
      start_date: startDate.format('YYYY-MM-DD'),
      end_date: endDate.format('YYYY-MM-DD'),
      time_zone: "Asia/Kolkata",
      MRP: mrp,
      price: price,
      certificate: parseInt(certificate),
      courses: parseInt(course)
    };

    fetch('http://127.0.0.1:8000/api/user/training_calender/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any authorization headers if needed
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Handle successful response
      console.log('Training data submitted successfully');
      // Reset form fields if needed
      setCourse("");
      setCertificate("");
      setCountry("");
      setMrp("");
      setPrice("");
      setDelivery("");
      setStartDate(null);
      setEndDate(null);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  };

  return (
    <div className="account_setting live_class_back">
      <div className="profile-form-container live_class_container">
        <div className="update_profile_form">
          <h3>Add Live online</h3>
          <form onSubmit={handleSubmit}>
            <div className="accordion-container">
              <Accordion className="accordion" defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  TRAINING INFO
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Basic information regarding this live online training.
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Channel
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={course}
                      label="Course"
                      onChange={handleCourseChange}
                    >
                      {/* Render course options */}
                      {courseData &&
                        courseData.map((course) => (
                          <MenuItem key={course.id} value={course.id}>
                            {course.title}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="accordion-container">
              <Accordion className="accordion" defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  LMS INFORMATION
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Reference the corresponding information regarding the LMS
                    training access, landing page for this training to be
                    attached to.
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      LMS course
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select-certificate"
                      variant="outlined"
                      value={certificate}
                      label="Certificate"
                      onChange={handleCertificateChange}
                    >
                      {/* Render certificate options */}
                      {filteredCertificates &&
                        filteredCertificates.map((certificate) => (
                          <MenuItem key={certificate.id} value={certificate.id}>
                            {certificate.certificate_title}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="accordion-container">
              <Accordion className="accordion" defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  LOCATION
                </AccordionSummary>
                <AccordionDetails>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      COUNTRY
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select-country"
                      value={country}
                      label="Country"
                      onChange={handleCountryChange}
                    >
                      {/* Render country options */}
                      {Country.getAllCountries() &&
                        Country.getAllCountries().map((country) => (
                          <MenuItem key={course.id} value={country.name}>
                            {country.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="accordion-container">
              <Accordion className="accordion" defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  SCHEDULE
                </AccordionSummary>
                <AccordionDetails>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      DELIVERY
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select-delivery"
                      value={delivery}
                      label="Delivery"
                      onChange={handleDeliveryChange}
                    >
                      <MenuItem value="Live online">
                        Live online
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <Typography>
                    Details about the dates, times and more for this training.
                  </Typography>
                  <Typography>
                    Starts on
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker value={startDate} onChange={handleStartDateChange} />
                  </LocalizationProvider>
                  <Typography>
                    Ends on
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker value={endDate} onChange={handleEndDateChange} />
                  </LocalizationProvider>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="accordion-container">
              <Accordion className="accordion" defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5-content"
                  id="panel5-header"
                >
                  PRODUCT INFORMATION
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Basic information regarding this live online training.
                  </Typography>
                  <FormControl fullWidth>
                    <TextField
                      id="outlined-basic-mrp"
                      label="MRP"
                      variant="outlined"
                      value={mrp}
                      onChange={handleMrpChange}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <TextField
                      id="outlined-basic-price"
                      label="Price"
                      variant="outlined"
                      value={price}
                      onChange={handlePriceChange}
                    />
                  </FormControl>
                </AccordionDetails>
              </Accordion>
            </div>
            <Button
              variant="contained"
              color="success"
              type="submit"
              className="submit-button"
            >
              Save
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
