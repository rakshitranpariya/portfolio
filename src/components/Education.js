import React from 'react';
import "./Education.css";
import './GeneralSection.css'

function Education() {

  const educationData = [
    {
      id: 1,
      institute: "ABC University",
      degree: "Bachelor's in Computer Science",
      stream: "Computer Science",
      from: "2018",
      to: "2022",
      gpa: "3.8",
      totalGpa: "4.0",
    },
    {
      id: 2,
      institute: "XYZ College",
      degree: "High School Diploma",
      stream: "Science",
      from: "2016",
      to: "2018",
      gpa: "3.9",
      totalGpa: "4.0",
    },
  ];

  return (
    <section id="Education" className='general about'>

      <div className="timeline">
        {educationData.map((edu) => (
          <div key={edu.id} className="timeline-item">
            <div className="timeline-content">
              <h3>{edu.institute}</h3>
              <p>
                <strong>Degree:</strong> {edu.degree}
              </p>
              <p>
                <strong>Stream:</strong> {edu.stream}
              </p>
              <p>
                <strong>Duration:</strong> {edu.from} - {edu.to}
              </p>
              <p>
                <strong>GPA:</strong> {edu.gpa}/{edu.totalGpa}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

