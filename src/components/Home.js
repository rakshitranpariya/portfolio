import React from "react";
import "./Home.css";
import styles from "./sectionCard.module.css";
import resumePDF from "../Assets/Rakshit_Ranpariya_Resume.pdf";
import image1 from "../Images/generated-image.png";

function Home() {
  return (
    <section id="Home" className={`${styles.general} container-fluid`}>
      <div class="home">
        <div class="hero-section row ">
          <div class="col-sm-6 order-2 order-sm-1 justify-content-md-end justify-content-center binding">
            <div class="intro">
              <div class="first-line">
                Hello, I'm <br />
                <span class="name">
                  Rakshit <br /> Ranpariya.
                </span>
              </div>
              <div class="sub-line">
                A passionate Software Developer <br /> who loves building
                Effecient Solutions.
              </div>
              <a
                href={resumePDF}
                download="Rakshit_Ranpariya_Resume.pdf"
                className="custom-button text-decoration-none" // ensure custom-button style works on <a>
                style={{ display: "inline-block", textAlign: "center" }} // fallback alignment
              >
                View My Work
              </a>
            </div>
          </div>
          <div class="col-sm-6 order-1 order-sm-2 profile-image mb-10 md:mb-0">
            <img class="image" src={image1} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
