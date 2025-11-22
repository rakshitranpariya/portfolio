import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ExperienceComponent from "./ExperienceComponent/ExperienceComponent";
import styles from "./sectionCard.module.css";
import leftArrow from "../Images/left-button.png";
import rightArrow from "../Images/right-button.png";

function Experience() {
  const [experienceData, setExperienceData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current card index
  const [activeDotIndex, setActiveDotIndex] = useState(0); // Track the current card index

  const [startX, setStartX] = useState(0); // Track the starting position of the touch

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX); // Save the starting X coordinate
  };

  // Handle swipe end
  const handleTouchEnd = (e) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX; // Get the ending X coordinate
    const difference = startX - endX;
    console.log("calculating the difference");
    // Threshold to detect a swipe (adjust as needed)
    if (difference > 50) {
      // Swipe left
      if (currentIndex !== experienceData.length - 1) {
        handleNext();
      }
    } else if (difference < -50) {
      // Swipe right
      if (currentIndex !== 0) {
        handlePrev();
      }
      setStartX(null);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      // Calculate new index
      const newIndex =
        prevIndex > 0 ? prevIndex - 1 : experienceData.length - 1;

      setTimeout(() => {
        setActiveDotIndex((prev) => ({ ...prev, [prevIndex]: 0 }));
      }, 800);

      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      // Calculate new index
      const newIndex =
        prevIndex < experienceData.length - 1 ? prevIndex + 1 : 0;

      // Reset activeDotIndex of the previous index (prevIndex)
      setTimeout(() => {
        setActiveDotIndex((prev) => ({ ...prev, [prevIndex]: 0 }));
      }, 800);

      return newIndex;
    });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://62e2fnrj4g.execute-api.us-east-2.amazonaws.com/prod/experience-function"
      );
      console.log("API status:", response.status);
      const normalize = (d) => (Array.isArray(d) ? d : d ? [d] : []);
      const data = normalize(response.data);
      data.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
      setExperienceData(data);
    } catch (error) {
      console.error("Error fecthing data:", error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section id="Experience" className={`${styles.general} container `}>
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
            {experienceData.length === 0 ? (
              <p>Loading...</p>
            ) : (
              experienceData.map((data, index) => (
                <div className={styles.individualCard} key={index}>
                  <ExperienceComponent
                    sendData={data}
                    activeDotIndex={activeDotIndex[index] || 0}
                    setActiveDotIndex={(newIndex) =>
                      setActiveDotIndex((prev) => ({
                        ...prev,
                        [index]: newIndex,
                      }))
                    }
                  />
                </div>
              ))
            )}
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button
            onClick={handlePrev}
            className={` ${currentIndex === 0 ? styles.disabled : ""}`}
            disabled={currentIndex === 0}
          >
            <img src={leftArrow} alt="Previous" className={styles.navImage} />
          </button>

          <button
            onClick={handleNext}
            className={` ${currentIndex === experienceData.length - 1 ? styles.disabled : ""}`}
            disabled={currentIndex === experienceData.length - 1}
          >
            <img src={rightArrow} alt="Next" className={styles.navImage} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Experience;
