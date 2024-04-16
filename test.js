import React from "react";
import Footer from "../Footer/Footer";
import course from "../../course.json";
import { NavLink , Link } from "react-router-dom";

function CourseContent({ courses  }) {
  return (
    <>
      {course.pathway.map((heading, index) => (
        <React.Fragment key={index}>
          <section className="p-relative w-100 spacer page-hero">
            <div className="padding-rl align-center container-tablet hero-inner">
              <div className="tac term-text">
                <div
                  id="block-dars-main-page-content"
                  className="block block-system system-main-block"
                >
                  <div
                    id="taxonomy-term-1"
                    className="taxonomy-term vocabulary-learning-path-category"
                  >
                    <figure className="align-center term-icon">
                      <img
                        data-src="https://static.eduskape.net/assets/files/media/icons/certscope-courses-agile-and-scrum.svg"
                        width="150"
                        height="150"
                        alt="Agile and Scrum / CertScope"
                        data-sizes="auto"
                        className="full-image nope catagory-icon lazyautosizes ls-is-cached lazyloaded"
                        loading="lazy"
                        sizes="80px"
                        src="https://static.eduskape.net/assets/files/media/icons/certscope-courses-agile-and-scrum.svg"
                      />
                      <noscript>
                        <img
                          src="https://static.eduskape.net/assets/files/media/icons/certscope-courses-agile-and-scrum.svg"
                          width="150"
                          height="150"
                          alt="Agile and Scrum / CertScope"
                          className="full-image nope catagory-icon"
                          loading="lazy"
                        />
                      </noscript>
                    </figure>
                    <h1 className="fw-900 text-primary-active term-title">
                      {heading.title}
                    </h1>
                    <div className="align-center text-navy hero-kicker">
                      <p>{heading.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="page-bottom spacer" key={index}>
            <div className="align-center container-medium padding-rl">
              <div className="tac w-100 spacer-top">
                <h2 className="text-title align-center fw-700 spacer-title" id="scroll">
                  Explore courses from
                  <br />
                  <span className="text-primary-active">{heading.title}</span>.
                </h2>
              </div>
              <hr className="transparent" />
            </div>
            <div
              className="align-center container-ipad padding-rl channel-bottom view view-td-courses view-id-td_courses view-display-id-course_term js-view-dom-id-fdc70fdc21a8d8f0bf0a772db1930959e3733c70014eee52591231f21920be13"
              data-once="ajax-pager"
            >
              {heading.certificates.map((certification, certIndex) => (
                <div className="view-content" key={certIndex}>
                  <div className="align-center course-items-list">
                    <ol className="list-unstyled course-items flex-column">
                      <li className="p-relative card translateY-hover single-course">
                        <h3 className="text-navy course-title">
                          {certification.title}
                        </h3>
                        <div className="text-steel course-summary">
                          <p>{certification.description}</p>
                        </div>
                        <NavLink to={certification.link}>
                          <button className="button button--main-soft button--small">
                            Explore options
                          </button>
                        </NavLink>
                        <a
                          href={certification.externalLink}
                          title={certification.title}
                          className="p-awh"
                          hrefLang="en"
                        ></a>
                      </li>
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </React.Fragment>
      ))}
      <Footer />
    </>
  );
}

export default CourseContent;
