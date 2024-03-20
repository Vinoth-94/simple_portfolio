import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass } from "react-icons/fa6";
import { DiJqueryLogo } from "react-icons/di";

export default function Skills() {
  return (
    <div>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          {/* <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div> */}
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <FaHtml5 />
            </li>
            <li className="list-inline-item">
              <FaCss3Alt />
            </li>
            <li className="list-inline-item">
              <FaJs />
            </li>
            <li className="list-inline-item">
              <FaReact />
            </li>
            
            <li className="list-inline-item">
              <FaSass />
            </li>
            <li className="list-inline-item">
              <DiJqueryLogo />
            </li>
            
          </ul>
          {/* <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
             Mobile-First, Responsive Design
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              MERN Stack development &amp; Debugging
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Cross Functional Teams
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Agile Development &amp; Scrum
            </li>
          </ul> */}
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}