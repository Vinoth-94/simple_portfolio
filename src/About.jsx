import { FaLinkedinIn, FaGithub ,  } from "react-icons/fa6";

export default function About() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Vinoth 
          <span className="text-primary"> Mohan</span>
        </h1>
        <div className="subheading mb-5">Software Developer </div>
        <p className="lead mb-5">
          I am expert in developing Responsive & Interactive websites|2+ years of experience in translating PSD to HTML front-end code|Expert in CSS3, HTML5, Bootstrap, J-Query, SASS and JavaScript| Good knowledge of React, RestAPI, Axios, Ajax, Hooks.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            target="blank"
            href="https://www.linkedin.com/in/vinoth-mohan-50b954104"
          >
            <FaLinkedinIn />
          </a>
          <a className="social-icon" target="blank" href="https://github.com/Vinoth-94">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}