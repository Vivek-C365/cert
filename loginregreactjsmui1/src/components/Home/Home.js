import React from "react";
import Typewriter from "typewriter-effect";
import TextField from "@mui/material/TextField";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import "../../Assets/CSS/Pages.css";
import IT from "../../Assets/PNG/IT.png";
import ISO from "../../Assets/PNG/ISO.png";
import Digital_market from "../../Assets/PNG/Digital_market.png";
import cyber from "../../Assets/PNG/cyber.png";
import data_science from "../../Assets/PNG/data_science.png";
import Cloud_compute from "../../Assets/PNG/Cloud_compute.png";
import Scrum from "../../Assets/PNG/Scrum.png";
import DevOps from "../../Assets/PNG/DevOps.png";
import Big_data from "../../Assets/PNG/Big_data.png";
import Flexible_pathway from "../../Assets/PNG/svgexport-20.png";
import teaching from "../../Assets/PNG/teaching.png";
import Resources from "../../Assets/PNG/Resources/Resources.png";

const achieveData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e13888bfb8ff08a67b95eba8721ce071e86065d8c550324be1f8e29697d2a586?apiKey=c0bca91966db4095b1e1b5a08f720e3b&",
    title: "Learn latest skills",
    description:
      "Learn new skills like Project management, AWS, Security or anything that matters to you in your industry. New skills translate to new opportunities.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dadc5fed5ab197a2a006bfe7ff4adff495f7aa0fa76bc36478d2b47884aa3ace?apiKey=c0bca91966db4095b1e1b5a08f720e3b&",
    title: "Upgrade your skills",
    description:
      "Upskill your current skillsets to the latest trends, developments or new versions. Stay at fore-front, current and relevant in the ever changing world of skills.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/54ecde977ac2e1733aa3a7c80783b77c22b9fa098996ce3882be83159defd4a7?apiKey=c0bca91966db4095b1e1b5a08f720e3b&",
    title: "Further your career",
    description:
      "Don't let your previous skills become the bottleneck of your career growth in today's fast-changing skill demands. Upgrade your skills today.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d998ce4a1565c48cb9d7f2c33948f0574978643c665ed8c55d69172b6177fbec?apiKey=c0bca91966db4095b1e1b5a08f720e3b&",
    title: "Upskill your team",
    description:
      "With our tailored training approaches, give your team the latest skillsets needed for the optimum productivity; stay ahead of the competition.",
  },
];

const Courses_img_data = [
  {
    Courses_image: IT,
    title: "IT Service Management",
  },
  {
    Courses_image: ISO,
    title: "ISO Certifications",
  },
  {
    Courses_image: Digital_market,
    title: "Digital Marketing",
  },
  {
    Courses_image: cyber,
    title: "Cyber Security",
  },
  {
    Courses_image: data_science,
    title: "Data Science",
  },
  {
    Courses_image: Cloud_compute,
    title: "Cloud Computing",
  },
  {
    Courses_image: Scrum,
    title: "Agile and Scrum",
  },
  {
    Courses_image: DevOps,
    title: "DevOps",
  },
  {
    Courses_image: Big_data,
    title: "Big Data",
  },
];

const update_data = [
  {
    update_image: Flexible_pathway,
    primary_title: "Live online calender",
    secondary_title: "Browse latest live online trainings",
  },
  {
    update_image: teaching,
    primary_title: "Classroom calender",
    secondary_title: "Browse latest classroom trainings",
  },
  {
    update_image: Resources,
    primary_title: "Resources",
    secondary_title: "Browse latest free resources",
  },
];

const services_data = [
  { name: "Agile training and consulting" },
  { name: "Content development" },
  { name: "Onsite training" },
  { name: "Public workshops" },
  { name: "Boot camps" },
  { name: "Onsite workshops" },
  { name: "Compliance training" },
  { name: "Certification" },
  { name: "Examination services" },
  { name: "Learning management" },
  { name: "ITSM and BSM Consulting" },
  { name: "ISO certification" },
];

function Home() {
  return (
    <>
      <section className="main_home_content">
        <div className="top_content">
          <div className="side_top_content">
            <h3>
              Pursue your <span>PASSION</span>
            </h3>
            <h4>Choose, Learn, and Achieve.</h4>
          </div>
          <div className="side_search_content">
            <div className="typing_content">
              <Typewriter
                options={{
                  strings: [
                    "Achieve your objective.",
                    "Nurture the fire of your passion.",
                    "Choose the right praxis.",
                    "Walk the learning pathway.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </div>
            <div className="search_component">
              <TextField
                type="search"
                className="outlined-basic"
                id="outlined-basic"
                label="What you want to pursue?"
                variant="outlined"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="divider"></div>

      <section className="achieve_section">
        <div className="content_wrapper">
          <div className="title_wrapper">
            <h2 className="title">
              <span className="title-primary">Achieve with </span>
              <span className="title-secondary">CertScope</span>
            </h2>
          </div>
          <div className="achieve_items_wrapper">
            {achieveData.map((item, index) => (
              <div className="achieve_item" key={index}>
                <div className="icon_wrapper">
                  <img src={item.icon} alt="" />
                </div>
                <h3 className="achieve_title">{item.title}</h3>
                <p className="achieve_description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="divider"></div>
      <section className="Courses_content">
        <div className="Course_top_content">
          <div className="Courses_text_content">
            <div className="Courses_heading">
              <span>COURSES</span>
            </div>
            <div className="secondry_heading">
              <h3>
                What can <span>you</span> do?
              </h3>
            </div>
            <div className="Courses_paragraph">
              <p>
                We provide comprehensive certification services to professionals
                like you. Here are some of the learning channels we offer to
                effectuate your professional growth.
              </p>
            </div>
          </div>
        </div>
        <div className="Courses_img">
          {Courses_img_data.map((images, index) => (
            <div className="Course_wrapper" key={index}>
              <img src={images.Courses_image} alt="" />
              <h3 className="achieve_title">{images.title}</h3>
            </div>
          ))}
        </div>
      </section>
      <div className="divider"></div>
      <section className="advantages">
        <div className="advantages_text_content">
          <div className="advantages_heading">
            <span>UPDATES</span>
          </div>
          <div className="secondry_heading">
            <h3>
              What is <span>new?</span>
            </h3>
          </div>
          <div className="advantages_paragraph">
            <p>
              Check our latest updates in the training calendar, resources and
              blogs for professionals like you. We keep updating them.
            </p>
          </div>
        </div>
        <div className="advantages_images">
          {update_data.map((items, index) => (
            <div className="advantages_1" key={index}>
              <img src={items.update_image} alt="" />
              <div className="advantages_images_content">
                <h3>{items.primary_title}</h3>
                <span>{items.secondary_title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="divider"></div>
      <section className="advantages">
        <div className="advantages_text_content">
          <div className="advantages_heading">
            <span>SERVICES</span>
          </div>
          <div className="secondry_heading">
            <h3>
              What can <span>we </span>do?
            </h3>
          </div>
          <div className="advantages_paragraph">
            <p>
              We provide comprehensive services to the end-users. Our customers
              span across various industries, geographical regions, and areas of
              expertise. Here are some of the services we provide.
            </p>
          </div>
          <div className="services_list">
            <ul>
              {services_data.map((list, index) => (
                <>
                  <div className="list_details" key={index}>
                    <li> <CheckBoxTwoToneIcon />{list.name}</li>
                  </div>
                </>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
