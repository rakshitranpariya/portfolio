import { React, useState } from "react";

import { MapPin, CalendarDays } from "lucide-react";

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
const monthLabel = (m) => MONTHS[(Number(m) || 1) - 1];

function EducationComponent({ data }) {
  if (!data || data.length === 0) {
    console.log("No data received yet.");
    return <p>Loading...</p>;
  }

  const {
    Degree,
    Major,
    InstitutionName,
    Location,
    FromMonth,
    FromYear,
    ToMonth,
    ToYear,
    ImageLink,
    Courses,
  } = data;

  const formattedDate = `${monthLabel(FromMonth)} ${FromYear} - ${monthLabel(
    ToMonth
  )} ${ToYear}`;
  return (
    <div className="flex flex-col h-full min-h-0 bg-white rounded-xl shadow-md border border-gray-100 p-6 md:max-h-96 ">
      {/* Header row: icon + titles */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg mt-2 bg-blue-50 border border-blue-100 flex items-center justify-center overflow-hidden">
          {ImageLink ? (
            <img
              src={ImageLink}
              alt={InstitutionName}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-blue-700 text-xl">🎓</span>
          )}
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-bold text-gray-900 leading-snug text-left">
            {Degree}
            {Major ? ` of ${Major}` : ""}
          </h3>
          <div className="text-blue-600 font-semibold truncate text-left ">
            {InstitutionName}
          </div>
        </div>
      </div>

      {/* Meta rows (like screenshot) */}
      <div className="mt-4 space-y-2 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-gray-400" />
          <span>{Location}</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays size={16} className="text-gray-400" />
          <span>{formattedDate}</span>
        </div>

        {/* {Gpa != null && (
          <div className="text-gray-600 font-medium">
            GPA: {Gpa}
            {TotalGpa ? ` / ${TotalGpa}` : ""}
          </div>
        )} */}
      </div>

      {/* Optional Description */}
      {/* {Description && (
        <p className="mt-4 text-sm text-gray-700">{Description}</p>
      )} */}

      {/* Optional Courses (chips) */}
      {Array.isArray(Courses) && Courses.length > 0 && (
        <div className="mt-3 min-h-24 grow h-full flex flex-wrap gap-2 overflow-y-auto overflow-x-hidden pr-2 max-h-24 no-scrollbar">
          {Courses.map((c, i) => (
            <span
              key={i}
              className=" px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100 "
            >
              {c}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default EducationComponent;
