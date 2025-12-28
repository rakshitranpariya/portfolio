import { Download } from "lucide-react";

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
              <div className="sub-line">
                Transforming complex problems <br /> into elegant, scalable
                solutions.
              </div>

              <a
                href={resumePDF}
                download="Rakshit_Ranpariya_Resume.pdf"
                className="no-underline group relative inline-flex mt-4 items-center gap-2 overflow-hidden rounded-full bg-black/10 px-6 py-2.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-black/5 backdrop-blur-md transition-all duration-300 hover:bg-white/50 hover:shadow-md hover:ring-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 active:scale-95"
              >
                <span className="relative z-10">Download Resume</span>
                <Download
                  size={16}
                  className="relative z-10 text-gray-600 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-gray-900"
                />

                {/* Optional subtle gradient shine (like iOS 'liquid' glass) */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
