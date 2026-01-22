import { useState } from "react";
import { useTheme } from "./contexts/ThemeContext"; // Add this

import "./index.css"; // must be before component CSS imports
import imageFixedWallpaper from "./Images/Untitleddesign.png";
import imageFixedWallpaperDark from "./Images/UntitleddesignDark.png";
import "./App.css";
import { Sun, Moon } from "lucide-react";

import { Link, Element } from "react-scroll";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  const { isToggled, setIsToggled } = useTheme(); // Use context!

  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSetActive = (section) => {
    console.log("Active Section:", section);
    setActiveSection(section);
  };
  const toggleMenu = (menuOpen) => {
    setMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    
    <div className={`${isToggled ? "dark" : ""} min-h-screen`}>
      {/* navigation */}

      <div
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat w-screen h-screen"
        style={{
          backgroundImage: isToggled
            ? `url(${imageFixedWallpaperDark})`
            : `url(${imageFixedWallpaper})`,
          transform: "translateZ(0)", // GPU acceleration fix
          willChange: "transform",
        }}
      />
      <div className="nav container d-none d-sm-block ">
        
        <title>Rakshit Ranpariya </title>
        <meta
          name="description"
          content="Welcome to my portfolio. Explore my latest React projects, case studies, and technical skills. Get in touch with me if you're interested in collaborating!"
        />
        <link
          rel="canonical"
          href="https://rakshitranpariya.github.io/portfolio/"
        />
        
        <div className="nav-collection fixed top-7 right-8 flex flex-row items-center gap-4 rounded-full z-40 ">
          <nav>
            <div className=" flex flex-row items-center justify-center  text-gray-800 dark:text-gray-200 font-medium ">
              <Link
                to="Home"
                smooth
                duration={500}
                onSetActive={() => handleSetActive("Home")}
                spy={true}
                activeClass={activeSection === "Home" ? "active-link" : ""}
              >
                Home
              </Link>
              <Link
                to="Education"
                smooth
                duration={500}
                onSetActive={() => handleSetActive("Education")}
                spy={true}
                activeClass={activeSection === "Education" ? "active-link" : ""}
              >
                Education{" "}
              </Link>
              <Link
                to="Experience"
                smooth
                duration={500}
                onSetActive={() => handleSetActive("Experience")}
                spy={true}
                activeClass={
                  activeSection === "Experience" ? "active-link" : ""
                }
              >
                Experience{" "}
              </Link>
              <Link
                to="Projects"
                smooth
                duration={500}
                onSetActive={() => handleSetActive("Projects")}
                spy={true}
                activeClass={activeSection === "Projects" ? "active-link" : ""}
              >
                Projects
              </Link>
              <Link
                to="Contact"
                smooth
                duration={500}
                onSetActive={() => handleSetActive("Contact")}
                spy={true}
                activeClass={activeSection === "Contact" ? "active-link" : ""}
              >
                Contact
              </Link>
            </div>
          </nav>
          <label className="toggle-button relative inline-flex items-center cursor-pointer">
            {/* Hidden checkbox */}
            <input
              type="checkbox"
              className="sr-only peer" // Screen reader only
              checked={isToggled}
              onChange={(e) => setIsToggled(e.target.checked)}
            />

            <div className="w-11 h-11 bg-white/20 dark:bg-black/20 backdrop-blur-md  shadow-xl rounded-full flex items-center justify-center cursor-pointer hover:scale-125 hover:shadow-2xl transition-all duration-300 peer-checked:bg-white/30 dark:peer-checked:bg-black/30 z-40">
              {isToggled ? (
                <Sun size={24} className="text-blue-400" />
              ) : (
                <Moon size={24} className="text-yellow-500" />
              )}
            </div>
          </label>
        </div>
      </div>
      {/* <div className='hamburger '>{activeSection}</div>       */}

      {/* Hamburger Menu for smaller screens */}
      <div className="hamburger-container d-sm-none dark:bg-black/30 bg-white/30  ">
        <div className="hamburger" onClick={toggleMenu}>
          ☰ {/* You can replace this with an icon */}
          <span>{activeSection}</span>
        </div>
        {menuOpen && (
          <div className="custom-menu bg-white/30 dark:bg-black/60 text-black dark:!text-white-900">
            <Link
              to="Home"
              smooth
              duration={500}
              onSetActive={() => handleSetActive("Home")}
              spy={true}
              onClick={closeMenu}
              className={`
                ${activeSection === "Home" ? "active-link" : "unactive-link"}
                `}
            >
              Home
            </Link>
            <Link
              to="Education"
              smooth
              duration={500}
              onSetActive={() => handleSetActive("Education")}
              spy={true}
              onClick={closeMenu}
              className={
                activeSection === "Education" ? "active-link" : "unactive-link"
              }
            >
              Education
            </Link>
            <Link
              to="Experience"
              smooth
              duration={500}
              onSetActive={() => handleSetActive("Experience")}
              spy={true}
              onClick={closeMenu}
              className={
                activeSection === "Experience" ? "active-link" : "unactive-link"
              }
            >
              Experience
            </Link>
            <Link
              to="Projects"
              smooth
              duration={500}
              onSetActive={() => handleSetActive("Projects")}
              spy={true}
              onClick={closeMenu}
              className={
                activeSection === "Projects" ? "active-link" : "unactive-link"
              }
            >
              Projects
            </Link>
            <Link
              to="Contact"
              smooth
              duration={500}
              onSetActive={() => handleSetActive("Contact")}
              spy={true}
              onClick={closeMenu}
              className={
                activeSection === "Contact" ? "active-link" : "unactive-link"
              }
            >
              Contact
            </Link>
            {/* Theme row: Label + Toggle - replace the previous toggle div */}
            {/* Clean toggle switch at bottom - NO icons */}
            <div className=" flex items-center gap-2  z-50 ">
              <span className="text-md font-small text-gray-500  whitespace-nowrap">
                {isToggled ? "Light Mode" : "Dark Mode"}
              </span>
              <label className="relative inline-flex items-center cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isToggled}
                  onChange={(e) => setIsToggled(e.target.checked)}
                />
                <div className="w-11 h-6 bg-white/30 dark:bg-black/40 rounded-full ring-1 ring-white/30 dark:ring-black/30 shadow-lg hover:shadow-xl transition-all duration-300 peer-focus:ring-2 peer-focus:ring-gray-400 relative overflow-hidden">
                  {/* Thumb: Always white */}
                  <div
                    className={`absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out transform shadow-gray-300 ${
                      isToggled
                        ? "translate-x-5 scale-100 shadow-white/50"
                        : "translate-x-0 scale-100"
                    }`}
                  />
                  {/* Track fill: White in dark, black in light */}
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      isToggled
                        ? "bg-white/60 dark:bg-black/60 shadow-white/20 dark:shadow-black/20"
                        : "bg-transparent"
                    }`}
                  />
                </div>
              </label>
            </div>
          </div>
        )}
      </div>
      {/* Sections */}
      <Element name="Home">
        <Home />
      </Element>
      <Element name="Education">
        <Education />
      </Element>
      <Element name="Experience">
        <Experience />
      </Element>
      <Element name="Projects">
        <Projects />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
    </div>
   
  );
}

export default App;
