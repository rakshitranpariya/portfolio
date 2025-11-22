import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import EducationComponent from "./EducationComponent/EducationComponent";
import styles from "./sectionCard.module.css";
import leftArrow from "../Images/left-button.png";
import rightArrow from "../Images/right-button.png";

function Education() {
  const [educationData, setEducationData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const difference = startX - endX;
    console.log("calculating the difference");

    if (difference > 50) {
      if (currentIndex !== educationData.length - 1) {
        handleNext();
      }
    } else if (difference < -50) {
      if (currentIndex !== 0) {
        handlePrev();
      }
      setStartX(null);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : educationData.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < educationData.length - 1 ? prevIndex + 1 : 0
    );
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://62e2fnrj4g.execute-api.us-east-2.amazonaws.com/prod/education-function"
      );
      setEducationData(response.data);
    } catch (error) {
      console.error("Error fecthing data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section id="Education" className={`${styles.general} container `}>
      <div class={styles.particularPage}>
        <div className={styles.carouselContainer}>
          <div
            className={styles.carouselGrid}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateX(-${currentIndex === 0 ? currentIndex * 100 : currentIndex * 100 + 1}% )`,
              transition: "transform 1s ease",
            }}
          >
            {educationData.length === 0 ? (
              <p>Loading...</p>
            ) : (
              educationData.map((data, index) => (
                <div className={styles.individualCard} key={index}>
                  <EducationComponent sendData={data} />
                </div>
              ))
            )}
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button
            onClick={handlePrev}
            className={`${currentIndex === 0 ? styles.disabled : ""}`}
            disabled={currentIndex === 0}
          >
            <img src={leftArrow} alt="Previous" className={styles.navImage} />
          </button>
          <button
            onClick={handleNext}
            className={`${currentIndex === educationData.length - 1 ? styles.disabled : ""}`}
            disabled={currentIndex === educationData.length - 1}
          >
            <img src={rightArrow} alt="Next" className={styles.navImage} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Education;
