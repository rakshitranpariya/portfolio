import { React, useState } from "react";
import styles from "./EducationComponent.module.css";
import EducationFirstPage from "./EducationFirstPage";
import EducationSecondPage from "./EducationSecondPage";
function EducationComponent({ sendData }) {
  const [activeDotIndex, setActiveDotIndex] = useState(0);

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
    <div className={`container ${styles.educationComponent}`}>
      {/* <div className={`${styles.dotSection}`}>
        <div className={activeDotIndex===0?styles.activeDot:styles.dot} onClick={toggleDot}></div>
        <div className={activeDotIndex===1?styles.activeDot:styles.dot} onClick={toggleDot}></div>
      </div> */}
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
        )}{" "}
      </div>

      <div
        className={`${styles.pageGrid}`}
        style={{
          transform: `translateY(-${activeDotIndex * 100}% )`,
          transition: "transform 1s ease",
        }}
      >
        <div className={`${styles.individualPage}`}>
          <EducationFirstPage sendData={sendData} />
        </div>
        <div className={`${styles.individualPage}`}>
          <EducationSecondPage sendData={sendData} />
        </div>
      </div>
    </div>
  );
}

export default EducationComponent;
