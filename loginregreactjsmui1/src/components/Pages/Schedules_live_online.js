import React, { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../../services/LocalStorageService";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { access_token } = getToken();

const TrainingCalendarList = () => {
  const [trainingCalendars, setTrainingCalendars] = useState([]);
  const [editingCalendar, setEditingCalendar] = useState(null);
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    delivery: "",
    certificate: "",
    courses: "",
    MRP: "",
    price: "",
  });
  const [certificates, setCertificates] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchTrainingCalendars();
    fetchCertificates();
    fetchCourses();
  }, []);

  const fetchTrainingCalendars = () => {
    axios
      .get("http://127.0.0.1:8000/api/user/training_calender/")
      .then((response) => {
        setTrainingCalendars(response.data);
      })
      .catch((error) => {
        console.error("Error fetching training calendars:", error);
      });
  };

  const fetchCertificates = () => {
    axios
      .get("http://127.0.0.1:8000/api/user/Certificate/")
      .then((response) => {
        setCertificates(response.data);
      })
      .catch((error) => {
        console.error("Error fetching certificates:", error);
      });
  };

  const fetchCourses = () => {
    axios
      .get("http://127.0.0.1:8000/api/user/Courses/ ")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  };

  const handleEdit = (id) => {
    const calendarToEdit = trainingCalendars.find(
      (calendar) => calendar.id === id
    );
    if (calendarToEdit) {
      setEditingCalendar(calendarToEdit);
      setFormValues({
        delivery: calendarToEdit.delivery,
        certificate: calendarToEdit.certificate?.id || "",
        courses: calendarToEdit.courses?.id || "",
        MRP: calendarToEdit.MRP || "",
        price: calendarToEdit.price || "",
      });
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setEditingCalendar(null);
    setFormValues({
      delivery: "",
      certificate: "",
      courses: "",
      MRP: "",
      price: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Set up headers with the token
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    // Make the PUT request to update the data
    axios
      .put(
        `http://127.0.0.1:8000/api/user/training-calendars/${editingCalendar.id}/`,
        formValues,
        config
      )
      .then((response) => {
        toast.success("Training calendar updated successfully!");
        fetchTrainingCalendars();
        handleClose();
      })
      .catch((error) => {
        console.error(
          "Error updating training calendar:",
          error.response ? error.response.data : error.message
        );
        toast.error(
          `Error updating training calendar: ${
            error.response ? error.response.data : error.message
          }`
        );
      });
  };

  const handleDelete = () => {
    if (editingCalendar) {
      const config = {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      };

      axios
        .delete(
          `http://127.0.0.1:8000/api/user/training-calendars/${editingCalendar.id}/`,
          config
        )
        .then((response) => {
          toast.success("Training calendar deleted successfully!");
          fetchTrainingCalendars();
          handleClose();
        })
        .catch((error) => {
          console.error(
            "Error deleting training calendar:",
            error.response ? error.response.data : error.message
          );
          toast.error(
            `Error deleting training calendar: ${
              error.response ? error.response.data : error.message
            }`
          );
        });
    }
  };

  return (
    <div>
      <h1>Training Calendars</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>CHANNEL</TableCell>
              <TableCell>TYPE</TableCell>
              <TableCell>LOCATION</TableCell>
              <TableCell>STARTS</TableCell>
              <TableCell>ENDS</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trainingCalendars.map((calendar) => (
              <TableRow key={calendar.id}>
                <TableCell>{calendar.id}</TableCell>
                <TableCell>{calendar.courses.title}</TableCell>
                <TableCell>{calendar.delivery}</TableCell>
                <TableCell>{calendar.time_zone}</TableCell>
                <TableCell>{calendar.start_date}</TableCell>
                <TableCell>{calendar.end_date}</TableCell>
                <TableCell>Published</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(calendar.id)}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Training Calendar</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel id="delivery-label">Delivery</InputLabel>
            <Select
              labelId="delivery-label"
              id="delivery"
              name="delivery"
              value={formValues.delivery}
              onChange={(e) =>
                setFormValues({ ...formValues, delivery: e.target.value })
              }
            >
              <MenuItem value="Live online">Live online</MenuItem>
              <MenuItem value="Self-placed">Self-placed</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="certificate-label">Certificate</InputLabel>
            <Select
              labelId="certificate-label"
              id="certificate"
              name="certificate"
              value={formValues.certificate}
              onChange={handleChange}
            >
              {certificates.map((certificate) => (
                <MenuItem key={certificate.id} value={certificate.id}>
                  {certificate.certificate_title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="courses-label">Courses</InputLabel>
            <Select
              labelId="courses-label"
              id="courses"
              name="courses"
              value={formValues.courses}
              onChange={handleChange}
            >
              {courses.map((course) => (
                <MenuItem key={course.id} value={course.id}>
                  {course.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="MRP"
            name="MRP"
            value={formValues.MRP}
            onChange={handleChange}
            fullWidth
            margin="normal"
            type="number"
          />
          <TextField
            label="Price"
            name="price"
            value={formValues.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
            type="number"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <ToastContainer />
    </div>
  );
};

export default TrainingCalendarList;
