import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import EducationComponent from "./EducationComponent/EducationComponent";
import CertificationComponent from "./EducationComponent/CertificationComponent";

function Education() {
  const [educationData, setEducationData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://62e2fnrj4g.execute-api.us-east-2.amazonaws.com/prod/education-function",
        );
        setEducationData(Array.isArray(response.data) ? response.data : []);
        console.log("API data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  const educationItems = educationData.filter((x) => x.Type === "Education");
  const certificationItems = educationData.filter(
    (x) => x.Type === "Certification",
  );

  return (
    <section className=" py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title like screenshot */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Education & Certifications
          </h2>
          <div className="mt-3 h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded" />
        </div>

        {/* Cards grid */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white/60 mb-4">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationItems
              .sort((a, b) => Number(a.id) - Number(b.id))
              .map((item) => {
                return <EducationComponent key={item.id} data={item} />;
              })}
          </div>
        </div>
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white/60 mb-4">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationItems
              .sort((a, b) => Number(a.id) - Number(b.id))
              .map((item) => (
                <CertificationComponent key={item.id} data={item} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
