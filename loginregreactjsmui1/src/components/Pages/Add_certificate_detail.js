import React, { useReducer, useCallback } from "react";
import axios from "axios";
import { useCertificatelistQuery } from "../../services/userAuthApi";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
const initialState = {
  certification_overview: [{ title: "", description: "" }],
  Delivery_Methods: [{ title: "", list: [], timeliness: "", view: "" }],
  steps: [{ label: "", description: "" }],
  Enterprise_Solutions: [{ title: "" }],
  faqs: [{ title: "", list: [] }],
  learning_outcomes: [{ description: [] }],
  certificationSteps: [{ title: "", description: "" }],
  certificate: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "handleInputChange":
      return {
        ...state,
        [action.field]: state[action.field].map((item, index) => {
          if (index === action.index) {
            return {
              ...item,
              [action.name]: action.value,
            };
          }
          return item;
        }),
      };
    case "addItem":
      return {
        ...state,
        [action.field]: [...state[action.field], action.item],
      };
    case "removeItem":
      return {
        ...state,
        [action.field]: state[action.field].filter(
          (_, index) => index !== action.index
        ),
      };
    case "setCertificate":
      return {
        ...state,
        certificate: action.value,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Add_certificate_detail = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data: certificateData, error: certificateError } =
    useCertificatelistQuery();

  const handleInputChange = useCallback((field, index, name, value) => {
    dispatch({ type: "handleInputChange", field, index, name, value });
  }, []);

  const handleAddItem = useCallback((field, newItem) => {
    dispatch({ type: "addItem", field, item: newItem });
  }, []);

  const handleRemoveItem = useCallback((field, index) => {
    dispatch({ type: "removeItem", field, index });
  }, []);

  const handleCertificateChange = (e) => {
    dispatch({ type: "setCertificate", value: e.target.value });
  };

  const fields = [
    "certification_overview",
    "Delivery_Methods",
    "steps",
    "Enterprise_Solutions",
    "faqs",
    "learning_outcomes",
    "certificationSteps",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/user/csList/",
        state
      );
      console.log("Form submitted:", response.data);
      dispatch({ type: "reset" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="account_setting live_class_back">
      <div className="profile-form-container live_class_container">
        <div className="update_profile_form">
          <h2>Certificate information</h2>
          <form onSubmit={handleSubmit}>
            <div className="accordion-container">
              {certificateError && <p>Error fetching certificates</p>}

              <Accordion className="accordion" defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="certificate-content"
                  id="certificate-header"
                >
                  Certificate
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Reference the LMS trainings to this course landing page.
                    Training and course landing page should have the same
                    channel.
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      LMS Course
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={handleCertificateChange}
                      value={state.certificate || ""}
                    >
                      {certificateData &&
                        certificateData.map((certificate) => (
                          <MenuItem key={certificate.id} value={certificate.id}>
                            {certificate.certificate_title}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
            </div>
            {fields.map((field) => (
              <Accordion className="accordion" key={field} defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {field.replace(/_/g, " ")}
                </AccordionSummary>
                <AccordionDetails>
                  {state[field].map((item, index) => (
                    <div key={index} className="form-field">
                      <Button
                        className="delete_btn_Certificate"
                        type="button"
                        onClick={() => handleRemoveItem(field, index)}
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                      >Remove</Button>
                      {Object.keys(item).map((key) => (
                        <div key={key}>
                          {/* <label>:</label> */}
                          {Array.isArray(item[key]) ? (
                            <TextField
                              fullWidth
                              name={`${field}[${index}][${key}]`}
                              label={key}
                              value={item[key].join("\n")}
                              onChange={(e) =>
                                handleInputChange(
                                  field,
                                  index,
                                  key,
                                  e.target.value.split("\n")
                                )
                              }
                              id="outlined-multiline-flexible"
                              multiline
                              rows={4}
                              variant="outlined"
                            />
                          ) : (
                            <TextField
                              fullWidth
                              type="text"
                              id="outlined-basic"
                              name={`${field}[${index}][${key}]`}
                              value={item[key]}
                              label={key}
                              variant="outlined"
                              onChange={(e) =>
                                handleInputChange(
                                  field,
                                  index,
                                  key,
                                  e.target.value
                                )
                              }
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  ))}

                  <Button
                    type="button"
                    onClick={() =>
                      handleAddItem(field, { ...initialState[field][0] })
                    }
                    variant="outlined"
                    startIcon={<AddIcon />}
                  >
                    Add
                  </Button>
                </AccordionDetails>
              </Accordion>
            ))}
            <div className="button-container">
              <Button type="submit" variant="contained" color="success">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add_certificate_detail;
{
  /* <input
                              type="text"
                              name={`${field}[${index}][${key}]`}
                              value={item[key]}
                              onChange={(e) =>
                                handleInputChange(
                                  field,
                                  index,
                                  key,
                                  e.target.value
                                )
                              }
                            /> */
}
{
  /* <textarea
                              name={`${field}[${index}][${key}]`}
                              value={item[key].join("\n")}
                              onChange={(e) =>
                                handleInputChange(
                                  field,
                                  index,
                                  key,
                                  e.target.value.split("\n")
                                )
                              }
                            /> */
}
