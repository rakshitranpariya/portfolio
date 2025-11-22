import React, { useEffect, useRef, useState } from "react";
import "./ExperienceFirstPage.css";
import locationImage from "../../Images/location.png";
function getRowsCount(containerHeight, chipHeight, minRows = 1) {
  return Math.max(minRows, Math.floor(containerHeight / chipHeight));
}

function ExperienceFirstPage({ sendData }) {
  const containerRef = useRef();
  const chipRef = useRef();
  const [rowCount, setRowCount] = useState(1);
  useEffect(() => {
    function updateRows() {
      if (containerRef.current && chipRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const chipHeight = 45;
        console.log("chipHeight", chipHeight);
        console.log("containerHeight", containerHeight);

        setRowCount(getRowsCount(containerHeight, chipHeight));
      }
    }
    updateRows();
    window.addEventListener("resize", updateRows);
    return () => window.removeEventListener("resize", updateRows);
  }, []);

  // Prepare as many tracks as needed
  const tracks = Array(rowCount).fill(0);
  function shuffleArray(array) {
    const arr = array.slice(); // copy array
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  // Guard against undefined
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
    TechStack = [],
    ImageLink,
  } = sendData;
  const monthNames = [
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

  const formatDate = (month, year) => {
    if (month === "~" || year === "~") {
      return "Present";
    }
    return `${monthNames[Number(month) - 1]} ${year}`;
  };
  const fromDisplay = formatDate(FromMonth, FromYear);
  const toDisplay = formatDate(ToMonth, ToYear);

  const getDurationString = (fromMonth, fromYear, toMonth, toYear) => {
    let endMonth, endYear;
    if (toMonth === "~" || toYear === "~") {
      const now = new Date();
      endMonth = now.getMonth() + 1; // Months are 0-indexed in JS Date
      endYear = now.getFullYear();
    } else {
      endMonth = Number(toMonth);
      endYear = Number(toYear);
    }
    const startMonth = Number(fromMonth);
    const startYear = Number(fromYear);
    // Calculate total months
    const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);

    // Separate into years and months
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    // Build result string
    let result = "";
    if (years > 0) {
      result += `${years} year${years > 1 ? "s" : ""}`;
    }
    if (months > 0) {
      result += result ? `, ` : "";
      result += `${months} month${months > 1 ? "s" : ""}`;
    }
    return result || "Less than 1 month";
  };
  return (
    <div className="experienceFirstPage">
      <div className="primaryInformationSection ">
        <div className="imageContainer">
          {ImageLink ? (
            <img
              src={ImageLink}
              alt={`${CompanyName} logo`}
              className="institutionImage "
            />
          ) : null}
        </div>
        <div className="descriptionContainer">
          <div className="jobTitleDiv">
            <div className="roleTitle ">{Role}</div>
            <div className="companyTitle ">{CompanyName}</div>
          </div>

          <div className="triSection">
            <div className="locationDiv">
              <img className="locationIcon" src={locationImage} />
              <div className="location">{Location}</div>
            </div>
            <div className="employmentTypeDiv">
              <span className="employmentTypeDot" aria-hidden="true" />
              <span className="employmentTypeText">{EmploymentType}</span>
            </div>
          </div>
          <div className="durationMainDiv">
            <div className="startEndDiv">{`${fromDisplay} – ${toDisplay}`}</div>
            <div className="durationDiv">
              {`{${getDurationString(FromMonth, FromYear, ToMonth, ToYear)}}`}
            </div>
          </div>
        </div>
      </div>

      <div className="secondaryInformationSection" ref={containerRef}>
        <div className="bubbleSection">
          {tracks.map((_, trackIdx) => (
            <div className="bubbleTrack" key={trackIdx}>
              {[
                ...shuffleArray(TechStack),
                ...shuffleArray(TechStack),
                ...shuffleArray(TechStack),
              ].map((tech, idx) =>
                trackIdx === 0 && idx === 0 ? (
                  // Use ref to measure the first chip
                  <span ref={chipRef} key={idx} className="bubbleChip">
                    {tech}
                  </span>
                ) : (
                  <span key={idx} className="bubbleChip">
                    {tech}
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceFirstPage;
