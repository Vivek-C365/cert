import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import PMP_Certificate from "../../Assets/PNG/PMP_Certification _ CertScope.svg";
import Gray_tick from "../../Assets/PNG/gray_tick.svg";
import DELIVERY_tick from "../../Assets/PNG/DELIVERY_tick.svg";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import outcome_arrow from "../../Assets/PNG/outcome_arrow.svg";
import data from "../../data.json";
import axios from "axios";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { useCertificatelistQuery } from "../../services/userAuthApi";

function TestCertificate({ certificationType }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [cdata, setcData] = useState([]);

  const { data: certificateData, error, isLoading } = useCertificatelistQuery();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/csList/"); // Replace 'YOUR_BACKEND_URL' with the actual URL of your Django backend
      const jsonData = await response.json();

      // Assuming jsonData is an array of certificates
      const filteredCertificate = jsonData.find(
        (cert) => cert.certificate.id === certificate.id
      );

      if (filteredCertificate) {
        console.log(filteredCertificate.certificate); // Set the filtered certificate data
        setcData([filteredCertificate]);
      } else {
        console.log("Certificate not found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  if (!data) {
    return <div>Loading...</div>;
  }
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading certificates</div>;

  const certificate = certificateData.find(
    (cert) => cert.certificate_title === certificationType
  );

  if (!certificate) return <div>Certificate not found</div>;

  console.log(cdata);

  function handleClick(event) {
    console.info("You clicked a breadcrumb.");
  }

  return (
    <>
      {cdata.map((overview, index) => (
        <section className="certification">
          <div key={index} className="certification_top_section">
            <div
              role="presentation"
              className="breadcrum"
              onClick={handleClick}
            >
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  underline="hover"
                  sx={{ display: "flex", alignItems: "center" }}
                  color="inherit"
                  href="/"
                >
                  <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  Home
                </Link>
                <Link
                  underline="hover"
                  sx={{ display: "flex", alignItems: "center" }}
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
                >
                  <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  {certificate.certificate_title}
                </Link>

                <Typography
                  sx={{ display: "flex", alignItems: "center" }}
                  color="text.primary"
                >
                  <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  {certificate.certificate_title}
                </Typography>
              </Breadcrumbs>
            </div>
            <div className="certification_primary_content">
              <span className="upper_case">
                {certificate.certificate_title}
              </span>

              <div className="top_heading_content">
                <h1>{certificate.certificate_title}</h1>
                <p>{certificate.description}</p>
              </div>
            </div>
            <div className="certification_image">
              <img src={PMP_Certificate} alt="" />
            </div>
          </div>
          <div className="pmp_certification_overview">
            <div className="certification_overview_main_content">
              {overview.certification_overview.map((items, index) => (
                <div className="main_content">
                  <div className="middle_gray_tick">
                    <img src={Gray_tick} alt="" />
                  </div>

                  <div className="overview_content">
                    <h3>{items.title}</h3>
                    <p>{items.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <nav className="content_nav">
            <ul>
              <li className="ABOUT">ABOUT</li>
              <li className="PATHWAY_CONTENT">PATHWAY CONTENT</li>
              <li className="CERTIFICATION_PATHWAY">CERTIFICATION PATHWAY</li>
              <li className="RESOURCES">RESOURCES</li>
              <li className="CONTACT_US">CONTACT US</li>
              <button>ENROLL NOW</button>
            </ul>
          </nav>

          <div className="delivery_method center_div">
            <div className="method_content common_center">
              <span className="upper_case">Delivery Methods</span>
              <h1>Ways to start.</h1>
              <p>
                Choose how and when you want to learn. We have multiple training
                delivery options to suit your needs, professional and lifestyle
                demands. More choices and freedom.
              </p>
            </div>
            <div className="batches_content">
              {overview.Delivery_Methods.map((item, index) => (
                <div className="batch_title">
                  <h3>{item.title}</h3>
                  <ul>
                    {item.list.map((list, index) => (
                      <div className="DELIVERY_list">
                        <img src={DELIVERY_tick} alt="" />

                        <li>{list}</li>
                      </div>
                    ))}
                  </ul>
                  <div className="delivery_redirect">
                    <p>{item.timeliness}</p>
                    <button>{item.view} </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="divider"></div>

          <div className="about_pmp_certification">
            <div className="know_more_title center_div">
              <div className="common_center">
                <h1>Know more about {certificate.certificate_title}</h1>
              </div>
            </div>

            <div className="know_more_content">
              <div className="know_more_stepper">
                <Box sx={{ maxWidth: 400 }}>
                  <Stepper activeStep={activeStep} orientation="vertical">
                    {overview.steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel
                          optional={
                            index === 3 ? (
                              <Typography variant="caption"></Typography>
                            ) : null
                          }
                        >
                          {step.label}
                        </StepLabel>
                        <StepContent>
                          <Typography>{step.description}</Typography>
                          <Box sx={{ mb: 2 }}>
                            <div>
                              <Button
                                variant="outlined"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                                color="success"
                              >
                                {index === overview.steps.length - 1
                                  ? "Finish"
                                  : "Continue"}
                              </Button>
                              <Button
                                disabled={index === 0}
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                                color="secondary"
                              >
                                Back
                              </Button>
                            </div>
                          </Box>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                  {activeStep === overview.steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                      <Typography>
                        All steps completed - you&apos;re finished
                      </Typography>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={handleReset}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Restart
                      </Button>
                    </Paper>
                  )}
                </Box>
              </div>
              <div className="solution_content">
                <div className="center_div">
                  <div className="solutions_content common_center">
                    <h1 className="upper_case">Enterprise Solutions</h1>
                    <p>
                      Customised to the training needs of your organisation and
                      teams.
                    </p>
                  </div>
                  <div className="solution_list">
                    <div className="list_content">
                      <img src={DELIVERY_tick} alt="" />
                      <ul>
                        <li>
                          Learning delivery model as per your organisational
                          requirements.
                        </li>
                      </ul>
                    </div>
                    <div className="list_content">
                      <img src={DELIVERY_tick} alt="" />
                      <ul>
                        <li>
                          Enterprise-grade Learning Management System (LMS),
                          dashboard and tools.
                        </li>
                      </ul>
                    </div>
                    <div className="list_content">
                      <img src={DELIVERY_tick} alt="" />
                      <ul>
                        <li>Flexible pricing options and models.</li>
                      </ul>
                    </div>
                    <div className="list_content">
                      <img src={DELIVERY_tick} alt="" />
                      <ul>
                        <li>24x7 learner assistance and support</li>
                      </ul>
                    </div>
                  </div>
                  <div className="solution_form">
                    <TextField
                      id="outlined-basic"
                      label="What may we call you?"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Your valid e-mail address"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Phone Number"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Name of your organization."
                      variant="outlined"
                    />
                  </div>
                  <div className="term_condition">
                    <p>
                      By clicking Contact Us, you agree to our{" "}
                      <span>Terms, Privacy, Data</span> and{" "}
                      <span>Cookie Policy.</span>
                    </p>
                  </div>
                  <div className="solution_button_contact">
                    <Button variant="outlined" color="primary">
                      Contact Us
                    </Button>
                    <Button variant="outlined" color="error">
                      Reset
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="course_description center_div">
            <div className="course_content common_center">
              <span className="upper_case">Course description</span>
              <h1>What will you learn?</h1>
              <p>
                Get an overview of the training structure, modules, and
                methodology for {certificate.certificate_title} training by
                CertScope training solutions.
              </p>
            </div>

            <div className="description_content">
              <div className="faqs_content">
                <div className="faq_title">
                  <h3>Course Curriculum</h3>
                </div>
                <div className="fags_list_content">
                  {overview.faqs.map((faq, index) => (
                    <div key={index} className="question_answer">
                      <div class="d-inline-flex gap-1">
                        <button
                          class="btn btn-primary"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseExample${index}`}
                          aria-expanded="false"
                          aria-controls={`collapseExample${index}`}
                        >
                          {faq.title}
                        </button>
                      </div>
                      <div class="collapse" id={`collapseExample${index}`}>
                        <div class="card card-body">
                          <div class="accordion-item">
                            {faq.list.map((items, index) => (
                              <>
                                <div className="list_content">
                                  <li key={index}>{items}</li>
                                </div>
                              </>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="learning_outcomes">
                <div className="outcome_title">
                  <h3>Learning Outcomes</h3>
                </div>

                <div className="outcome_content">
                  <div className="secondary_heading">
                    <h5>
                      After successful completion of this course, you will have
                      an enhanced understanding of
                    </h5>
                  </div>
                  <div className="outcome_list">
                    <ul>
                      {overview.learning_outcomes.map((item, index) =>
                        item.description.map((desc, descIndex) => (
                          <>
                            <div className="list_content">
                              <img src={outcome_arrow} alt="" />
                              <li key={descIndex}>{desc}</li>
                            </div>
                          </>
                        ))
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
        <div className="cerification_content center_div">
          <div className="cerification_method_content common_center">
            <span className="upper_case">Certification</span>
            <h1>Your certification explained</h1>
            <p>
              Get an overview of the steps involved in the completion of your
              certification, from the start to achieving your training
              objective.
            </p>
          </div>
          <div class="align-center container-tablet padding-rl">
            <div class="p-relative course-certification">
              {overview.certificationSteps.map((items, index) => (
                <div
                  key={index}
                  class="paragraph paragraph-feature paragraph-mode__full paragraph-feature__full"
                  content-data-id="26"
                >
                  <div class="field field-name__field-title field-type__string field-label__hidden field-item">
                    {items.title}
                  </div>
                  <div class="field field-name__field-text field-type__text-long field-label__hidden field-item">
                    <p>{items.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>
      ))}
      <Footer />
    </>
  );
}

export default TestCertificate;
