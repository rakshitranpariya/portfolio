import { Download } from "lucide-react";
import "./Home.css"; // Keep if needed for non-Tailwind, else remove
import styles from "./sectionCard.module.css";
import resumePDF from "../Assets/Rakshit_Ranpariya_Resume.pdf";
import image1 from "../Images/generated-image.png";
import { useTheme } from "../contexts/ThemeContext";

function Home() {
  const { isToggled } = useTheme();
  console.log("Home isToggled:", isToggled);

  return (
   
    <section id="Home" className={`${styles.general}  `}>
      {/* Hero container - Flex for responsive row/col */}
      <div className="flex h-full lg:w-full flex-col  lg:flex-row  justify-center items-center gap-0 0">
        {/* Left: Text content */}
        <div className="flex w-full lg:justify-center flex-1 flex-col  order-2 lg:order-1 space-y-8 mt-0 pb-10 lg:pb-0 h-[40vh] lg:h-[70vh] justify-center items-start mb-20 lg:mb-0 lg:pl-20 pl-0">
          {/* Greeting + Name */}
          <div className="flex flex-col items-start text-5xl text-left space-y-4  lg:text-left pl-[90px] lg:pl-0">
            <div className="  dark:text-white/50 text-gray-700  text-stroke-7 text-stroke-white font-large  ">
              Hello, I'm
            </div>
            <div className="flex leading-none flex-col font-extrabold mt-0">
              <div className=" text-black dark:!text-white">Rakshit</div>
              <div className=" text-black dark:!text-white">Ranpariya.</div>
            </div>
          </div>

          {/* Subtitle */}
          <div className="text-md lg:text-md flex text-left lg:text-left text-gray-700 dark:text-white/50 text-white-900/90 mt-3  pl-[90px] lg:pl-0">
            Transforming complex problems <br className="hidden xs:inline " />
            into elegant, scalable solutions.
          </div>

          {/* Download Button */}
          <div className=" pl-[80px] lg:pl-0">
            <a
              href={resumePDF}
              download="Rakshit_Ranpariya_Resume.pdf"
              className={`no-underline group relative bg-white/10 dark:bg-black/70 backdrop-blur-lg text-white inline-flex items-center gap-3 px-6 py-2 lg:px-8 lg:py-3 text-base lg:text-lg font-semibold focus:outline-none rounded-[25px] max-w-max lg:mx-0 shadow-lg transition-all duration-300 ease-in-out border border-white/30 dark:!border-black/10 hover:scale-[1.05] hover:shadow-2xl `}
            >
              <span
                className={`relative z-10 ${
                  isToggled ? "text-white/95" : "text-gray-900"
                }`}
              >
                Download Resume
              </span>
              <Download
                size={20}
                className={`relative z-10 transition-all duration-300 group-hover:-translate-y-0.5 shrink-0 ${
                  isToggled
                    ? "text-white/80 group-hover:text-white"
                    : "text-gray-900 group-hover:text-gray-900"
                }`}
              />
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className=" flex flex-1  justify-end order-1 lg:order-2 lg:text-right h-[50vh]  aspect-auto lg:items-end  mt-20 lg:mt-0 p-6 lg:p-0 lg:pr-20 pr-0 ">
          <img
            className=" image rounded-[40px] h-full lg:h-full object-cover rounded-5xl  dark:brightness-110 dark:saturate-110 transition-all duration-700   origin-center "
            src={image1}
            alt="Rakshit Ranpariya - React Developer Profile"
            loading="eager"
          />
        </div>
      </div>
    </section>
    
  );
}

export default Home;
