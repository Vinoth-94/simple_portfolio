export default function Education() {
  return (
    <div>
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Panimalar Institute of Technology </h3>
              <div className="subheading mb-3">Bachelor of Technology (IT)</div>
              {/* <div>
                In Computer Science with One year Internship in Cloud Computing
              </div> */}
              <p>CGPA: 6.15</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">2014 - 2018</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}