import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ExperienceComponent from "./ExperienceComponent/ExperienceComponent";
import styles from "./sectionCard.module.css";

import { MapPin, Calendar, GraduationCap, BookOpen } from "lucide-react";

function Experience() {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const align = "left";
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://62e2fnrj4g.execute-api.us-east-2.amazonaws.com/prod/experience-function"
      );
      const normalize = (d) => (Array.isArray(d) ? d : d ? [d] : []);
      const data = normalize(response.data);
      data.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
      setExperienceData(data);
    } catch (error) {
      console.error("Error fecthing data:", error.message);
    }
  };

  const {
    CompanyName,
    Role,
    EmploymentType,
    Location,
    FromMonth,
    FromYear,
    ToMonth,
    ToYear,
    Responsibilities,
    TechStack,
    ImageLink,
    id,
  } = experienceData;
  console.log(experienceData);
  const formattedDate = `${FromMonth} ${FromYear} - ${ToMonth} ${ToYear}`;

  return (
    <div className="antialiased bg-gray-100 text-gray-800 py-5">
      <div className="text-center mb-1">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Experience
        </h2>
        <div className="mt-3 h-1 w-20 bg-blue-600 mx-auto rounded" />
      </div>
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute z-0 w-1 h-full bg-white shadow-md inset-0 left-13 xs:left-9 xs:top-6 md:mx-auto md:right-0 md:left-0"></div>

        {experienceData.map((item, index) => (
          <div
            key={item.id ?? index}
            
          >
            <ExperienceComponent sendData={item} left={index % 2 === 1} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
