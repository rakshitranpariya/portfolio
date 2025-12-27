import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import EducationComponent from "./EducationComponent/EducationComponent";
import CertificationComponent from "./EducationComponent/CertificationComponent";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://62e2fnrj4g.execute-api.us-east-2.amazonaws.com/prod/education-function"
    );
    setEducationData(response.data);
    console.log(educationData);
  } catch (error) {
    console.error("Error fecthing data:", error.message);
  }
};
useEffect(() => {
  fetchData();
}, []);

function Education() {
  const [educationData, setEducationData] = useState([]);

  const educationItems = educationData.filter((x) => x.Type === "Education");
  const certificationItems = educationData.filter(
    (x) => x.Type === "Certification"
  );

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title like screenshot */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Education & Certifications
          </h2>
          <div className="mt-3 h-1 w-20 bg-blue-600 mx-auto rounded" />
        </div>

        {/* Cards grid */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationItems.map((item) => {
              return <EducationComponent key={item.id} data={item} />;
            })}
          </div>
        </div>
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationItems.map((item) => {
              return <CertificationComponent key={item.id} data={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
