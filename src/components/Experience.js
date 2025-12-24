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
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute z-0 w-1 h-full bg-white shadow-md inset-0 left-13 xs:left-9 xs:top-6 md:mx-auto md:right-0 md:left-0"></div>
        {experienceData.map((item, index) => (
          <ExperienceComponent
            key={item.id ?? index}
            sendData={item} // pass full object
            left={index % 2 === 1} // optional: alternate sides
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
