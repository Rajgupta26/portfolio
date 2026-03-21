import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in Information Technology</h4>
                <h5>St. John College of Engineering and Management</h5>
              </div>
              <h3>2023-27</h3>
            </div>
            <p>
              Relevant Coursework: Database Management Systems, Computer Networks, Software Engineering, Cloud Computing. Expected graduation in 2027.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AWS Certified Cloud Practitioner</h4>
                <h5>Amazon Web Services</h5>
              </div>
              <h3>CERT</h3>
            </div>
            <p>
              Certified in AWS Cloud concepts, demonstrating an understanding of AWS Cloud architecture, pricing, security, and the business value of AWS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Visualization & Analytics</h4>
                <h5>Power BI</h5>
              </div>
              <h3>SKILL</h3>
            </div>
            <p>
              Proven ability to translate complex data into actionable insights using Power BI, Data Visualization, DAX, and Dashboarding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
