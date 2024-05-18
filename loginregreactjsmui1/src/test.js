import React, { useReducer, useCallback } from "react";
import axios from "axios"; // Import Axios library
import "./JsonForm.css"; // Import CSS file
import {
  useCertificatelistQuery,
} from "./services/userAuthApi";

const initialState = {
  certification_overview: [{ title: "", description: "" }],
  Delivery_Methods: [{ title: "", list: [], timeliness: "", view: "" }],
  steps: [{ label: "", description: "" }],
  Enterprise_Solutions: [{ title: "" }],
  faqs: [{ title: "", list: [] }],
  learning_outcomes: [{ description: [] }],
  certificationSteps: [{ title: "", description: "" }],
  certificate: null // Updated to null initially
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
        [action.field]: state[action.field].filter((_, index) => index !== action.index),
      };
    case "setCertificate":
      return {
        ...state,
        certificate: action.value,
      };
    default:
      return state;
  }
};

const JsonForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data: certificateData, error: certificateError } = useCertificatelistQuery();

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
      const response = await axios.post("http://127.0.0.1:8000/api/user/csList/", state);
      console.log("Form submitted:", response.data);
      // Reset form after successful submission if needed
      dispatch({ type: "reset" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Enter Data in JSON Format</h2>
      <form onSubmit={handleSubmit}>
        {certificateError && <p>Error fetching certificates</p>}
        <div className="form-section">
          <label>Certificate:</label>
          <select onChange={handleCertificateChange} value={state.certificate || ""}>
            <option value="" disabled>Select a certificate</option>
            {certificateData && certificateData.map((certificate) => (
              <option key={certificate.id} value={certificate.id}>
                {certificate.certificate_title}
              </option>
            ))}
          </select>
        </div>
        {fields.map((field) => (
          <div key={field} className="form-section">
            <h3>{field}</h3>
            {state[field].map((item, index) => (
              <div key={index} className="form-field">
                {Object.keys(item).map((key) => (
                  <div key={key}>
                    <label>{key}:</label>
                    {Array.isArray(item[key]) ? (
                      <textarea
                        name={`${field}[${index}][${key}]`}
                        value={item[key].join("\n")}
                        onChange={(e) =>
                          handleInputChange(field, index, key, e.target.value.split("\n"))
                        }
                      />
                    ) : (
                      <input
                        type="text"
                        name={`${field}[${index}][${key}]`}
                        value={item[key]}
                        onChange={(e) => handleInputChange(field, index, key, e.target.value)}
                      />
                    )}
                  </div>
                ))}
                <button type="button" onClick={() => handleRemoveItem(field, index)}>
                  Remove {field.slice(0, -1)}
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddItem(field, { ...initialState[field][0] })}
            >
              Add {field.slice(0, -1)}
            </button>
          </div>
        ))}
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default JsonForm;
