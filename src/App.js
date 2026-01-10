import { useState } from "react";
import "./index.css"; // must be before component CSS imports
import imageFixedWallpaper from "./Images/Untitleddesign.png";
import "./App.css";

import { Link, Element } from "react-scroll";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
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
    <div className="min-h-screen">
      {/* navigation */}
      <div
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat w-screen h-screen"
        style={{
          backgroundImage: `url(${imageFixedWallpaper})`,
          transform: "translateZ(0)", // GPU acceleration fix
          willChange: "transform",
        }}
      />
      <div className="nav container d-none d-sm-block ">
        <title>Rakshit Ranpariya | React Developer</title>
        <meta
          name="description"
          content="Welcome to my portfolio. Explore my latest React projects, case studies, and technical skills. Get in touch with me if you're interested in collaborating!"
        />
        <link
          rel="canonical"
          href="https://rakshitranpariya.github.io/portfolio/"
        />

        <nav>
          <div className="options">
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
              activeClass={activeSection === "Experience" ? "active-link" : ""}
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
      </div>
      {/* <div className='hamburger '>{activeSection}</div>       */}

      {/* Hamburger Menu for smaller screens */}
      <div className="hamburger-container d-sm-none">
        <div className="hamburger" onClick={toggleMenu}>
          ☰ {/* You can replace this with an icon */}
          <span>{activeSection}</span>
        </div>
        {menuOpen && (
          <div className="custom-menu">
            <Link
              to="Home"
              smooth
              duration={500}
              onSetActive={() => handleSetActive("Home")}
              spy={true}
              onClick={closeMenu}
              className={activeSection === "Home" ? "active-link" : ""}
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
              className={activeSection === "Education" ? "active-link" : ""}
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
              className={activeSection === "Experience" ? "active-link" : ""}
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
              className={activeSection === "Projects" ? "active-link" : ""}
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
              className={activeSection === "Contact" ? "active-link" : ""}
            >
              Contact
            </Link>
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
