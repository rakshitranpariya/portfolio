import { React, useState } from "react";
import styles from "./ExperienceComponent.module.css";
import ExperienceFirstPage from "./ExperienceFirstPage";
import ExperienceSecondPage from "./ExperienceSecondPage";
function ExperienceComponent({ sendData, activeDotIndex, setActiveDotIndex }) {
  function toggleDot() {
    console.log("toggle was clicked");
    if (activeDotIndex === 0) {
      setActiveDotIndex(1);
    } else {
      setActiveDotIndex(0);
    }
  }

  if (!sendData || sendData.length === 0) {
    console.log("No data received yet.");
    return <p>Loading...</p>;
  }

  return (
    <div className={`container ${styles.experienceComponent}`}>
      <div className={`${styles.descriptionButtonSection}`}>
        {activeDotIndex === 1 ? (
          <button
            className={`${styles.descriptionButton} btn btn-dark rounded-pill p-x-1`}
            onClick={toggleDot}
          >
            <span className={styles.scalingText}>Close</span>
          </button>
        ) : (
          <button
            className={`${styles.descriptionButton} btn btn-grey rounded-pill p-x-1`}
            onClick={toggleDot}
          >
            <span className={styles.scalingText}>Descrip</span>
          </button>
        )}      </div>
      <div
        className={`${styles.pageGrid}`}
        style={{
          transform: `translateY(-${activeDotIndex * 100}% )`,
          transition: "transform 1s ease",
        }}
      >
        <div className={`${styles.individualPage}`}>
          <ExperienceFirstPage sendData={sendData} />
        </div>
        <div className={`${styles.individualPage}`}>
          <ExperienceSecondPage sendData={sendData} />
        </div>
      </div>
    </div>
  );
}

export default ExperienceComponent;
