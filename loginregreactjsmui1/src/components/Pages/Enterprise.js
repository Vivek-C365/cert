import React from "react";
import data from "../../hambug.json";
import Footer from "../Footer/Footer";

function Enterprise({ Type }) {
  const { heading, trainings_heading, trainings_content } = data[Type];
  return (
    <>
      <main className="main-container">
        <div className="content-wrapper">
          <div className="content-container">
            {heading.map((heading, index) => (
              <div className="content-row">
                <div className="content-column">
                  <section className="content-section">
                    <div className="heading-wrapper">
                      <h1 className="heading1">{heading.title}</h1>
                    </div>
                    <p className="description">{heading.description}</p>
                  </section>
                </div>
                <div className="image-column">
                  <div className="image-wrapper">
                    <img
                      className="image"
                      loading="lazy"
                      src={heading.resource_images}
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="divider"></div>
        <div className="hero-container">
          <div className="hero-content">
            {trainings_heading.map((training_title, index) => (
              <h1 className="hero-text">{training_title.title}</h1>
            ))}
          </div>
        </div>
        <section className="training-section-wrapper Hamcom_flex">
          <div className="training-section-content">
            {trainings_content.Customised_trainings.map((training, index) => (
              <div className="training-details" key={index}>
                <div className="image-column">
                  <div className="image-wrapper">
                    <img
                      className="training-image"
                      src={training.image}
                      alt="Training"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="description-column">
                  <div className="description-wrapper">
                    <h2 className="training-title">
                      <span className="title-part-1">{training.title} </span>
                      <span className="title-part-2">{training.title_2}</span>
                      <span className="title-part-3">.</span>
                    </h2>
                    <div className="training-description">
                      <p className="training-description-text">
                        {training.description}
                      </p>
                      <p className="training-details-text">
                        {training.details}
                      </p>
                      <button className="know-more-button">Know more</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="certification-wrapper Hamcom_flex">
          <div className="certification-container">
            {trainings_content.certificationData.map((certification, index) => (
              <div className="certification-content" key={index}>
                <div className="certification-info">
                  <div className="certification-title">
                    <span className="title-text">{certification.title}</span>
                  </div>
                  <div className="certification-description">
                    <p className="description-text">
                      {certification.description}
                    </p>
                    <p className="details-text">{certification.details}</p>
                    <button className="cta-button">
                      {certification.ctaText}
                    </button>
                  </div>
                </div>
                <div className="certification-image">
                  <div className="image-wrapper">
                    <img
                      className="cert-image"
                      src={certification.imageUrl}
                      alt="Certification"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {Type === "enterprise" && (
          <section className="mentorship-wrapper Hamcom_flex">
            <div className="Mentorship_content_wrapper">
              {trainings_content.mentorshipData.map((item, index) => (
                <div className="item-wrapper" key={index}>
                  <div className="image-column">
                    <div className="image-wrapper">
                      <img
                        className="image"
                        src={item.imageSrc}
                        loading="lazy"
                        alt="Mentorship program"
                      />
                    </div>
                  </div>
                  <div className="content-column">
                    <div className="title">
                      <span className="title-text">{item.title}</span>
                    </div>
                    <div className="description">
                      <p className="description-text">{item.description}</p>
                      <p className="call-to-action">{item.callToAction}</p>
                    </div>
                    <button className="button">{item.buttonText}</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {Type === "service" && (
          <>
            <section className="certification-wrapper Hamcom_flex">
              <div className="certification-container">
                {trainings_content.certificationserivce.map(
                  (certification, index) => (
                    <div className="certification-content" key={index}>
                      <div className="certification-info">
                        <div className="certification-title">
                          <span className="title-text">
                            {certification.title}
                          </span>
                        </div>
                        <div className="certification-description">
                          <p className="description-text">
                            {certification.description}
                          </p>
                          <p className="details-text">
                            {certification.details}
                          </p>
                          <button className="cta-button">
                            {certification.ctaText}
                          </button>
                        </div>
                      </div>
                      <div className="certification-image">
                        <div className="image-wrapper">
                          <img
                            className="cert-image"
                            src={certification.imageUrl}
                            alt="Certification"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>

            <section className="LearningManagementSystemSection">
              <div className="LearningManagementSystemContainer">
                <div className="LearningManagementSystemContent">
                  <div className="ImageColumn">
                    <div className="ImageWrapper">
                      <img
                        className="LearningManagementSystemImage"
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f64fc462bf4a6af9fcd8498b365a28870207ff3878e745c5d9eb4565c109a8b6?apiKey=c0bca91966db4095b1e1b5a08f720e3b&"
                        alt="Learning Management System"
                      />
                    </div>
                  </div>
                  <div className="DescriptionColumn">
                    <div className="DescriptionWrapper">
                      <h2 className="Title">
                        <span className="title-text">
                          Learning management systems{" "}
                        </span>
                        <span className="title-highlight">(LMS)</span>
                      </h2>
                      <div className="Description">
                        <p className="DescriptionText">
                          We provide LMS as a product to the organisations with
                          features such as:
                        </p>
                        <ul className="FeatureList">
                          {trainings_content.learningManagementSystemsData.map(
                            (feature, index) => (
                              <li key={index} className="FeatureItem">
                                <img
                                  className="FeatureIcon"
                                  loading="lazy"
                                  src={feature.icon}
                                  alt={`${feature.text} Icon`}
                                />
                                <span className="FeatureText">
                                  {feature.text}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                        <div className="Note">
                          <p className="NoteText">
                            Note: The platform is SCORM Complaint (SCORM is a
                            <br />
                            collection of International standards and
                            <br />
                            specifications for web-based electronic educational
                            <br />
                            technology)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mentorship-wrapper Hamcom_flex">
              <div className="Mentorship_content_wrapper">
                {trainings_content.contentdevelopment.map((item, index) => (
                  <div className="item-wrapper" key={index}>
                    <div className="content-column">
                      <div className="title">
                        <span className="title-text">{item.title}</span>
                      </div>
                      <div className="description">
                        <p className="description-text">{item.description}</p>
                        <p className="call-to-action">{item.callToAction}</p>
                      </div>
                      <button className="button">{item.buttonText}</button>
                    </div>

                    <div className="image-column">
                      <div className="image-wrapper">
                        <img
                          className="image"
                          src={item.imageSrc}
                          loading="lazy"
                          alt="Mentorship program"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="LearningManagementSystemSection">
              <div className="LearningManagementSystemContainer">
                {trainings_content.Agile_consulting.map((feature, index) => (
                  <div className="LearningManagementSystemContent">
                    <div className="ImageColumn">
                      <div className="ImageWrapper">
                        <img
                          className="LearningManagementSystemImage"
                          loading="lazy"
                          src={feature.imageSrc}
                          alt="Learning Management System"
                        />
                      </div>
                    </div>
                    <div className="DescriptionColumn">
                      <div className="DescriptionWrapper">
                        <h2 className="Title">
                          <span className="title-text">{feature.title}</span>
                          <span className="title-highlight">
                            {feature.title_secondary}
                          </span>
                        </h2>
                        <div className="Description">
                          <p className="DescriptionText">
                            {feature.description}
                          </p>

                          <ul className="FeatureList">
                            {feature.list.map((list_items, index) => (
                              <li key={index} className="FeatureItem">
                                <img
                                  className="FeatureIcon"
                                  loading="lazy"
                                  src={feature.checkpoint}
                                  alt={`${feature.text} Icon`}
                                />
                                <span className="FeatureText">
                                  {list_items}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="mentorship-wrapper Hamcom_flex">
              <div className="Mentorship_content_wrapper">
                {trainings_content.ITSM_and_BSM_consulting.map(
                  (item, index) => (
                    <div className="item-wrapper" key={index}>
                      <div className="content-column">
                        <div className="title">
                          <span className="title-text">{item.title}</span>
                        </div>
                        <div className="description">
                          <p className="description-text">{item.description}</p>
                          <p className="call-to-action">{item.callToAction}</p>
                        </div>
                        <button className="button">{item.buttonText}</button>
                      </div>

                      <div className="image-column">
                        <div className="image-wrapper">
                          <img
                            className="image"
                            src={item.imageSrc}
                            loading="lazy"
                            alt="Mentorship program"
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>
            <section className="LearningManagementSystemSection">
              <div className="LearningManagementSystemContainer">
                {trainings_content.Training_and_development_consulting.map(
                  (feature, index) => (
                    <div className="LearningManagementSystemContent">
                      <div className="ImageColumn">
                        <div className="ImageWrapper">
                          <img
                            className="LearningManagementSystemImage"
                            loading="lazy"
                            src={feature.imageSrc}
                            alt="Learning Management System"
                          />
                        </div>
                      </div>
                      <div className="DescriptionColumn">
                        <div className="DescriptionWrapper">
                          <h2 className="Title">
                            <span className="title-text">{feature.title}</span>
                            <span className="title-highlight">
                              {feature.title_secondary}
                            </span>
                          </h2>
                          <div className="Description">
                            <p className="DescriptionText">
                              {feature.description}
                            </p>

                            <ul className="FeatureList">
                              {feature.list.map((list_items, index) => (
                                <li key={index} className="FeatureItem">
                                  <img
                                    className="FeatureIcon"
                                    loading="lazy"
                                    src={feature.checkpoint}
                                    alt={`${feature.text} Icon`}
                                  />
                                  <span className="FeatureText">
                                    {list_items}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>
          </>
        )}

        <div className="divider"></div>

        {Type === "mentorship_program" && (
          <section className="mentorship-section-container">
            <div className="mentorship-wrapper">
              <h2 className="mentorship-title">
                <span>How to commence? </span>
              </h2>
              <div className="mentorship-steps-wrapper">
                <div className="mentorship-divider" />
                {trainings_content.mentorshipSteps.map((step, index) => (
                  <div className="mentorship-step-card" key={index}>
                    <div className="mentorship-step-icon">
                      <img src={step.icon} alt="" />
                    </div>
                    <h3 className="mentorship-step-title">{step.title}</h3>
                    <div className="mentorship-step-description">
                      {step.description.paragraphs ? (
                        step.description.paragraphs.map((paragraph, i) => {
                          if (typeof paragraph === "string") {
                            return <p className="main_text" key={i}>{paragraph}</p>;
                          } else if (paragraph.note) {
                            return (
                              <p className="note_text" key={i}>
                                {paragraph.note}
                                <a
                                  href={paragraph.link.url}
                                  target={paragraph.link.target}
                                >
                                  {paragraph.link.text}
                                </a>
                                {paragraph.faq}
                              </p>
                            );
                          }
                        })
                      ) : (
                        <p>{step.description.paragraph}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Enterprise;
