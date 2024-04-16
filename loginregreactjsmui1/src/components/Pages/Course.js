import React from "react";
import Footer from "../Footer/Footer";
import course from "../../course.json";
import { NavLink } from "react-router-dom";

function CourseContent({ title }) {
  // Find the pathway object with the matching title
  const pathway = course.pathway.find((path) => path.title === title);


  return (
    <>
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
                    data-src=""
                    width="150"
                    height="150"
                    alt="Agile and Scrum / CertScope"
                    data-sizes="auto"
                    className="full-image nope catagory-icon lazyautosizes ls-is-cached lazyloaded"
                    loading="lazy"
                    sizes="80px"
                    src={pathway.Courses_image}
                  />
                </figure>
                <h1 className="fw-900 text-primary-active term-title">
                  {title}
                </h1>
                <div className="align-center text-navy hero-kicker">
                  <p>{pathway.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="page-bottom spacer">
        <div className="align-center container-medium padding-rl">
          <div className="tac w-100 spacer-top">
            <h2
              className="text-title align-center fw-700 spacer-title"
              id="scroll"
            >
              Explore courses from
              <br />
              <span className="text-primary-active">{title}</span>
            </h2>
          </div>
          <hr className="transparent" />
        </div>
        
        <div
          className="align-center container-ipad padding-rl channel-bottom view view-td-courses view-id-td_courses view-display-id-course_term js-view-dom-id-fdc70fdc21a8d8f0bf0a772db1930959e3733c70014eee52591231f21920be13"
          data-once="ajax-pager"
        >
          <div className="view-content">
            <div className="align-center course-items-list">
              <ol className="list-unstyled course-items flex-column">
                {/* Render certificates links */}
                {pathway.certificates.map((certificate, index) => (
                  <>
                    <li
                      className="p-relative card translateY-hover single-course"
                      key={index}
                    >
                      <h3 className="text-navy course-title">
                        {certificate.title}
                      </h3>
                      <div className="text-steel course-summary">
                        <p>{certificate.description}</p>
                      </div>
                      <NavLink to={certificate.link}>
                        <button className="button button--main-soft button--small">
                          Explore options
                        </button>
                      </NavLink>
                    </li>
                  </>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CourseContent;
