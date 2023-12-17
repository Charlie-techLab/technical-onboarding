import React from "react";

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Education</h2>
            <p>
              <strong>Universidad Centroamericana</strong>
              <br />
              Bachelor of Industrial Engineering
              <br />
            </p>
            <p>
              <strong>Universidad Centroamericana</strong>
              <br />
              Bachelor of Information Systems Engineering
              <br />
            </p>
          </div>
          <div className="col-md-6">
            <h2>Skills</h2>
            <p>
              <strong>Programming Languages</strong>
              <br />
              <em>C, C++, Java, Python</em>
            </p>
            <p>
              <strong>Technologies</strong>
              <br />
              <em> Microsoft Azure, SQL Server, Git, GitHub, AZ900-Microsoft Azure Fundamentals certified</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
