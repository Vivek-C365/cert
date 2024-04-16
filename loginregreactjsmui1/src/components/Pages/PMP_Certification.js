import React from "react";
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

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
function PMP_Certification({ certificationType }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const {
    heading,
    certification_overview,
    Delivery_Methods,
    know_more_title,
    steps,
    Enterprise_Solutions,
    faqs,
    learning_overview_desc,
    learning_outcomes,
    certificationSteps,
    resources_data,
  } = data[certificationType];

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <>
      <section className="certification">
        <div className="certification_top_section">
          <div role="presentation" onClick={handleClick}>
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
              {heading.map((items, index) => (
                <Link
                  underline="hover"
                  sx={{ display: "flex", alignItems: "center" }}
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
                >
                  <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  {items.heading_title}
                </Link>
              ))}

              {heading.map((item, index) => (
                <Typography
                  sx={{ display: "flex", alignItems: "center" }}
                  color="text.primary"
                >
                  <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                  {item.title}
                </Typography>
              ))}
            </Breadcrumbs>
          </div>
          {heading.map((heading, index) => (
            <>
              <div className="certification_primary_content">
                <span className="upper_case">{heading.heading_title}</span>

                <div className="top_heading_content" key={index}>
                  <h1>{heading.title}</h1>
                  <p>{heading.description}</p>
                </div>
              </div>
              <div className="certification_image">
                <img src={PMP_Certificate} alt="" />
              </div>
            </>
          ))}
        </div>
        <div className="pmp_certification_overview">
          <div className="certification_overview_main_content">
            {certification_overview.map((overview, index) => (
              <div className="main_content" key={index}>
                <div className="middle_gray_tick">
                  <img src={Gray_tick} alt="" />
                </div>
                <div className="overview_content">
                  <h3>{overview.title}</h3>
                  <p>{overview.description}</p>
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
            {Delivery_Methods.map((method, index) => {
              const deliveryMethod = Object.keys(method)[0]; // Get the delivery method name ("Classroom" or "Live_online")
              const { title, list, timeliness, view } = method[deliveryMethod];

              return (
                <div key={index} className="batch_title">
                  <h3>{title}</h3>
                  <ul>
                    {list.map((item, itemIndex) => (
                      <>
                        <div className="DELIVERY_list">
                          <img src={DELIVERY_tick} alt="" />
                          <li key={itemIndex}>{item}</li>
                        </div>
                      </>
                    ))}
                  </ul>
                  <div className="delivery_redirect">
                    <p>{timeliness}</p>
                    <button>{view}</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="divider"></div>
        {certificationType === "pmp" && (
          <div className="Video_method center_div">
            <div className="Video_content common_center">
              <span className="upper_case">Video</span>
              <h1>Watch an intro.</h1>
              <p>
                Watch our video presentation to understand how CertScope
                training solution can assist with your PMP Certification
                objectives. Short and precise information for professionals like
                you.
              </p>
            </div>

            <div className="intro_video">
              <div className="video-container">
                <iframe
                  id="target"
                  src="https://www.youtube.com/embed/lA5VKW443j0"
                  title="CertScope - Pursue Your Passion - PMP | SIX SIGMA | ITIL | AGILE | DATA SCIENCES"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        <div className="about_pmp_certification">
          <div className="know_more_title center_div">
            {know_more_title.map((item, index) => (
              <div className="common_center">
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
          <div className="know_more_content">
            <div className="know_more_stepper">
              <Box sx={{ maxWidth: 400 }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step, index) => (
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
                              {index === steps.length - 1
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
                {activeStep === steps.length && (
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
                  {Enterprise_Solutions.map((solution, index) => (
                    <>
                      <div className="list_content">
                        <img src={DELIVERY_tick} alt="" />
                        <ul>
                          <li>{solution.title}</li>
                        </ul>
                      </div>
                    </>
                  ))}
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
          {learning_overview_desc.map((learn_description, index) => (
            <div className="course_content common_center">
              <span className="upper_case">Course description</span>
              <h1>What will you learn?</h1>
              <p>{learn_description.description}</p>
            </div>
          ))}

          <div className="description_content">
            <div className="faqs_content">
              <div className="faq_title">
                <h3>Course Curriculum</h3>
              </div>
              <div className="fags_list_content">
                {faqs.map((faq, index) => (
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
                        {faq.Title}
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
                    After successful completion of this course, you will have an
                    enhanced understanding of
                  </h5>
                </div>
                <div className="outcome_list">
                  <ul>
                    {learning_outcomes.map((item, index) =>
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
              {certificationSteps.map((items, index) => (
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
        <div className="resources_content center_div">
          {(certificationType === "pmp" ||
            certificationType === "CSM_Certification" ||
            certificationType ===
              "Lean_Six_Sigma_Black_Belt_certification") && (
            <>
              <div className="resources_top_content common_center">
                <span className="upper_case">resources</span>
                <h1>Ideas, Resources and Insights.</h1>
                <p>
                  Explore free resources written by professionals for
                  professionals like you. Keep up to date with what's happening
                  around the professional world with CertScope resources.
                </p>
              </div>
              <div className="resources_main_content">
                {resources_data.map((resource, index) => (
                  <div key={index} className="single_resource">
                    {resource.resource_images.map((image, innerIndex) => (
                      <div key={innerIndex} className="resource_image">
                        {/* Render the image */}
                        <img src={image} alt="" />
                        {/* Render title and description for the current image */}
                        <h3 className="upper_case resource_title">
                          {resource.resource_title}
                        </h3>
                        <p>{resource.resource_desc[innerIndex]}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default PMP_Certification;
