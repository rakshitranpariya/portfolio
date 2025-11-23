import React, { useEffect, useRef, useState } from "react";
import styles from "./ExperienceFirstPage.module.css";
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
        setRowCount(getRowsCount(containerHeight, chipHeight));
      }
    }
    updateRows();
    window.addEventListener("resize", updateRows);
    return () => window.removeEventListener("resize", updateRows);
  }, []);

  const tracks = Array(rowCount).fill(0);

  function shuffleArray(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

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
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec"
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
      endMonth = now.getMonth() + 1;
      endYear = now.getFullYear();
    } else {
      endMonth = Number(toMonth);
      endYear = Number(toYear);
    }
    const startMonth = Number(fromMonth);
    const startYear = Number(fromYear);
    const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
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
    <div className={styles.experienceFirstPage}>
      <div className={styles.primaryInformationSection}>
        <div className={styles.imageContainer}>
          {ImageLink ? (
            <img
              src={ImageLink}
              alt={`${CompanyName} logo`}
              className={styles.institutionImage}
            />
          ) : null}
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.jobTitleDiv}>
            <div className={styles.roleTitle}>{Role}</div>
            <div className={styles.companyTitle}>{CompanyName}</div>
          </div>
          <div className={styles.triSection}>
            <div className={styles.locationDiv}>
              <img className={styles.locationIcon} src={locationImage} />
              <div className={styles.location}>{Location}</div>
            </div>
            <div className={styles.employmentTypeDiv}>
              <span className={styles.employmentTypeDot} aria-hidden="true" />
              <span className={styles.employmentTypeText}>{EmploymentType}</span>
            </div>
          </div>
          <div className={styles.durationMainDiv}>
            <div className={styles.startEndDiv}>{`${fromDisplay} – ${toDisplay}`}</div>
            <div className={styles.durationDiv}>
              {`{${getDurationString(FromMonth, FromYear, ToMonth, ToYear)}}`}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondaryInformationSection} ref={containerRef}>
        <div className={styles.bubbleSection}>
          {tracks.map((_, trackIdx) => (
            <div className={styles.bubbleTrack} key={trackIdx}>
              {[
                ...shuffleArray(TechStack),
                ...shuffleArray(TechStack),
                ...shuffleArray(TechStack),
              ].map((tech, idx) =>
                trackIdx === 0 && idx === 0 ? (
                  <span ref={chipRef} key={idx} className={styles.bubbleChip}>
                    {tech}
                  </span>
                ) : (
                  <span key={idx} className={styles.bubbleChip}>
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
