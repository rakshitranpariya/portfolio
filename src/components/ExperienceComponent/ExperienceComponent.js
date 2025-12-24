import { React, useState } from "react";
import styles from "./ExperienceComponent.module.css";
import ExperienceFirstPage from "./ExperienceFirstPage";
import ExperienceSecondPage from "./ExperienceSecondPage";
import { MapPin, Calendar, GraduationCap, BookOpen } from "lucide-react";

const ExperienceComponent = ({ sendData, left = false }) => {
  if (!sendData) return null;
  
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
  } = sendData;

  if (!sendData || sendData.length === 0) {
    console.log("No data received yet.");
    return <p>Loading...</p>;
  }
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthToLabel = (m) => MONTHS[(Number(m) || 1) - 1];

  const formattedDate =
    ToYear === "~"
      ? `${monthToLabel(FromMonth)} ${FromYear} – Present`
      : `${monthToLabel(FromMonth)} ${FromYear} – ${monthToLabel(
          ToMonth
        )} ${ToYear}`;

  return (
    <div className="relative z-10">
      {/* <img src={ImageLink} alt="" className="timeline-img" /> */}
      <div className="relative timeline-img " />
      <div
        className={`timeline-container ${
          left ? "timeline-container-left" : ""
        }`}
      >
        <div
          className={`timeline-pointer ${left ? "timeline-pointer-left" : ""}`}
          aria-hidden="true"
        />
        <div className="bg-white p-6 rounded-md shadow-md">
          {/* Header: Role + Company */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            {Role}
          </h2>
          <p className="mt-1 text-blue-600 font-semibold">{CompanyName}</p>

          {/* Meta row */}
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-500">
            {Location && (
              <span className="flex items-center gap-1">
                <MapPin size={14} className="text-gray-400" />
                {Location}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Calendar size={14} className="text-gray-400" />
              {formattedDate}
            </span>
            {EmploymentType && (
              <span className="flex items-center gap-1">
                <BookOpen size={14} className="text-gray-400" />
                {EmploymentType}
              </span>
            )}
          </div>

          {/* Responsibilities */}
          {Array.isArray(Responsibilities) && Responsibilities.length > 0 && (
            <ul className="mt-4 list-disc list-outside ml-4 space-y-1 text-sm text-gray-700">
              {Responsibilities.map((item, idx) => (
                <li key={idx} className="text-justify pr-6">{item}</li>
              ))}
            </ul>
          )}

          {/* Tech stack chips */}
          {Array.isArray(TechStack) && TechStack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {TechStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* //arrange the available data here. */}
        </div>
      </div>
    </div>
  );
};
export default ExperienceComponent;
