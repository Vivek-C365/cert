import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../../Assets/CSS/Footer.css";
import atc_gov from "../../Assets/PNG/atc-gov.png";
import Microsoft_logo from "../../Assets/PNG/Microsoft_logo.png";
import IBM_logo from "../../Assets/PNG/IBM_logo.png";
import Sap from "../../Assets/PNG/Sap.png";
import Dell from "../../Assets/PNG/Dell.png";
import infosys_logo from "../../Assets/PNG/infosys-logo.png";
import zebra_logo from "../../Assets/PNG/zebra-logo.png";
import holcim_logo from "../../Assets/PNG/holcim_logo.png";
import SETE from "../../Assets/PNG/SETE.png";
import enterprise from "../../Assets/PNG/Enterprise/CertScope Trainings.png";
import Mentorship from "../../Assets/PNG/Mentorship/CertScope Trainings.png";
import Accredited from "../../Assets/PNG/svgexport-19.png";
import teaching from "../../Assets/PNG/teaching.png";
import Flexible_pathway from "../../Assets/PNG/svgexport-20.png";
import solution_mindset from "../../Assets/PNG/solution_mindset.png";
import interview from "../../Assets/PNG/interview.png";
import project_training from "../../Assets/PNG/project_training.png";
import contact from "../../Assets/PNG/Contact/CertScope Trainings.png";
import passion from "../../Assets/PNG/passion.png";
import Money_back from "../../Assets/PNG/Money_back.png";
import support from "../../Assets/PNG/support.png";
import Secure from "../../Assets/PNG/Secure.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <>
      <div className="divider"></div>
      <footer>
        <section className="client">
          <div className="client_text_content">
            <div className="client_heading">
              <span>CLIENTS</span>
            </div>
            <div className="secondry_heading">
              <h3>
                Who we have <span>worked</span> with?
              </h3>
            </div>
            <div className="client_paragraph">
              <p>
                We are a trusted name for many top-tier companies. We have
                worked with many organisations across different sectors and
                geographical regions, assisting them in achieving their
                organisational objectives. We take pride in lending our hand in
                creating the kind of professional environment that would fulfill
                the vision that enterprises are built upon. Some of our notable
                clients are:
              </p>
            </div>
          </div>
          <div className="client_images">
            <div className="client_1">
              <img src={atc_gov} alt="" />
            </div>
            <div className="client_1">
              <img src={Microsoft_logo} alt="" />
            </div>
            <div className="client_1">
              <img src={IBM_logo} alt="" />
            </div>
            <div className="client_1">
              <img src={Sap} alt="" />
            </div>
            <div className="client_1">
              <img src={Dell} alt="" />
            </div>
            <div className="client_1">
              <img src={infosys_logo} alt="" />
            </div>
            <div className="client_1">
              <img src={zebra_logo} alt="" />
            </div>
            <div className="client_1">
              <img src={holcim_logo} alt="" />
            </div>
            <div className="client_1">
              <img src={SETE} alt="" />
            </div>
          </div>
        </section>
        <section className="enterprise">
          <div className="enterprise_image">
            <img src={enterprise} alt="" />
          </div>
          <div className="enterprise_content">
            <div className="enterprise_title">
              <span>ENTERPRISE</span>
            </div>
            <div className="enterprise_secondary_title">
              <h3>
                Scale new <span>heights</span>
              </h3>
            </div>
            <div className="enterprise_description">
              <p>
                Engage the workplace with Certscope's custom learning solutions.
                Enhance your employees' skills in Data Science, IT, Project
                Management and more with Cerscope's Business Solutions.
              </p>
              <p>
                New and upgraded skills translate into better productivity and
                opportunities for growth, for you and your team.
              </p>
            </div>
            <div className="enterprise_button">
              <Stack spacing={2} direction="row">
                <Button variant="contained">FIND OUT HOW</Button>
                <Button variant="outlined">GET IN TOUCH</Button>
              </Stack>
            </div>
          </div>
        </section>
        <div className="divider"></div>
        <section className="Mentorship">
          <div className="Mentorship_image">
            <img src={Mentorship} alt="" />
          </div>
          <div className="Mentorship_content">
            <div className="Mentorship_title">
              <span>MENTORSHIP PROGRAM</span>
            </div>
            <div className="Mentorship_secondary_title">
              <h3>
                Unfurl your <span>passion</span>
              </h3>
            </div>
            <div className="Mentorship_description">
              <p>
                Engage the workplace with Certscope's custom learning solutions.
                Enhance your employees' skills in Data Science, IT, Project
                Management and more with Cerscope's Business Solutions.
              </p>
              <p>
                New and upgraded skills translate into better productivity and
                opportunities for growth, for you and your team.
              </p>
            </div>
            <div className="Mentorship_button">
              <Stack spacing={2} direction="row">
                <Button variant="contained">FIND OUT HOW</Button>
                <Button variant="outlined">GET STARTED</Button>
              </Stack>
            </div>
          </div>
        </section>
        <section className="advantages">
          <div className="advantages_text_content">
            <div className="advantages_heading">
              <span>ADVANTAGES</span>
            </div>
            <div className="secondry_heading">
              <h3>
                Who <span>Choose</span> us?
              </h3>
            </div>
            <div className="advantages_paragraph">
              <p>
                We provide dedicated and customized services to our customers,
                no matter what. We try our best to set ourselves apart from the
                crowd, so you can get what you require.
              </p>
            </div>
          </div>
          <div className="advantages_images">
            <div className="advantages_1">
              <img src={Accredited} alt="" />
              <div className="advantages_images_content">
                <h3>Accredited</h3>
                <span>Accredited content from governing bodies.</span>
              </div>
            </div>
            <div className="advantages_1">
              <img src={teaching} alt="" />
              <div className="advantages_images_content">
                <h3>Assured sessions</h3>
                <span>Assured on-time training delivery globally.</span>
              </div>
            </div>
            <div className="advantages_1">
              <img src={Flexible_pathway} alt="" />
              <div className="advantages_images_content">
                <h3>Flexible pathways</h3>
                <span>Choose which delivery method suits you and when.</span>
              </div>
            </div>
            <div className="advantages_1">
              <img src={solution_mindset} alt="" />
              <div className="advantages_images_content">
                <h3>Measurable solutions</h3>
                <span>Assessable and scalabale training solutions.</span>
              </div>
            </div>
            <div className="advantages_1">
              <img src={interview} alt="" />
              <div className="advantages_images_content">
                <h3>Mentorship program</h3>
                <span>One-on-one mentoring for professionals by experts.</span>
              </div>
            </div>
            <div className="advantages_1">
              <img src={project_training} alt="" />
              <div className="advantages_images_content">
                <h3>Project based training</h3>
                <span>Industry based live case studies for all classes.</span>
              </div>
            </div>
          </div>
        </section>
        <section className="contact">
          <div className="contact_image">
            <img src={contact} alt="" />
          </div>
          <div className="contact_content">
            <div className="contact_title">
              <span>CONTACT US</span>
            </div>
            <div className="contact_secondary_title">
              <h3>Looking for something else?</h3>
            </div>
            <div className="contact_description">
              <p>
                We are here with you along the journey you may take on any
                pathway you choose on CertScope. We are passionate about
                supporting our members, whom we regard as part of our family. If
                you have a question or questions, need assistance, or just want
                to say hi, feel free to connect with us.
              </p>
              <p>We will, for sure, get back to you.</p>
            </div>
            <div className="contact_button">
              <Stack spacing={2} direction="row">
                <Button variant="contained">GET IN TOUCH</Button>
              </Stack>
            </div>
          </div>
        </section>
        <div className="divider"></div>
        <section className="secondary_footer">
          <div className="content_1">
            <div className="content_img">
              <img src={passion} alt="" />
            </div>
            <div className="content_title">
              <h3>Pursue your passion</h3>
            </div>
            <div className="content_description">
              <span>
                Learn what you want, when you want from experts in their
                respective fields.
              </span>
            </div>
          </div>
          <div className="content_1">
            <div className="content_img">
              <img src={Money_back} alt="" />
            </div>
            <div className="content_title">
              <h3>Money back guarantee</h3>
            </div>
            <div className="content_description">
              <span>
                We have a robust money back guarantee on purchases for your
                peace of mind.
              </span>
            </div>
          </div>
          <div className="content_1">
            <div className="content_img">
              <img src={support} alt="" />
            </div>
            <div className="content_title">
              <h3>Prompt customer support</h3>
            </div>
            <div className="content_description">
              <span>
                Friendly and timely support. Available via phone, email and
                social media.
              </span>
            </div>
          </div>
          <div className="content_1">
            <div className="content_img">
              <img src={Secure} alt="" />
            </div>
            <div className="content_title">
              <h3>Secure online payments</h3>
            </div>
            <div className="content_description">
              <span>
                We only use modern encryption and security, for added peace of
                mind.
              </span>
            </div>
          </div>
        </section>
        <section className="primary_footer">
          <div className="content_links">
            <ul className="contents_titles">
              <li>Enterprise</li>
              <li>Services</li>
              <li>Mentorship</li>
              <li>Resources</li>
              <li>Contact</li>
              <li>Refunds</li>
              <li>Help</li>
              <li>Policies</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Data</li>
              <li>Cookies</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="company_content">
            <div className="copyright_content">
              <span>CERTSCOPE IN © 2024</span>
            </div>
            <div className="company_social_links">
              <LinkedInIcon fontSize="large" />
              <FacebookIcon fontSize="large" />
              <XIcon fontSize="large" />
              <InstagramIcon fontSize="large" />
              <YouTubeIcon fontSize="large" />
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
