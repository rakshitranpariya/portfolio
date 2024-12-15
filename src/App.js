import { useState } from 'react';
import './App.css';
import { Link, Element } from 'react-scroll';
import Home from './components/Home';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const handleSetActive = (section) => {
    console.log("Active Section:", section);
    setActiveSection(section);
  };

  return (
    <div>
      {/* navigation */}
      <div className="nav-container">
        <nav>
          <div className="options">
            <Link to="Home" smooth duration={500} onSetActive={()=> handleSetActive("Home") } spy={true} className={activeSection === "Home" ? "active-link" : ""}>Home</Link>
            <Link to="Education" smooth duration={500} onSetActive={()=> handleSetActive("Education") } spy={true} className={activeSection === "Education" ? "active-link" : ""}>Education </Link>
            <Link to="Experience" smooth duration={500}onSetActive={()=> handleSetActive("Experience") } spy={true} className={activeSection === "Experience" ? "active-link" : ""}>Experience </Link>
            <Link to="Projects" smooth duration={500} onSetActive={()=> handleSetActive("Projects") } spy={true} className={activeSection === "Projects" ? "active-link" : ""}>Projects</Link>
            <Link to="Contact" smooth duration={500} onSetActive={()=> handleSetActive("Contact") } spy={true} className={activeSection === "Contact" ? "active-link" : ""}>Contact</Link>
          </div>       
        </nav>
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
