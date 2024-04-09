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

        {Type === "service" && (
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
                )
              )}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Enterprise;
