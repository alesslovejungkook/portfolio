import { useState, useRef } from 'react';
import './App.css';
import Header from './assets/components/Header.jsx';
import About from './assets/components/About.jsx';
import AboutMe from './assets/components/Aboutme.jsx';
import Skills from './assets/components/Skills.jsx';
import Footer from './assets/components/Footer.jsx';
import Projects from './assets/components/Projects.jsx';
import API from './assets/components/Api.jsx'; 
import Contact from './assets/components/Contact.jsx';
import Certificates from './assets/components/Certificates.jsx'; // added import

function App() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  const aboutRef = useRef(null);
  const aboutMeRef = useRef(null);

  const handleShowAboutMe = () => {
    setShowAboutMe(true);
    setTimeout(() => {
      aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleHideAboutMe = () => {
    if (!aboutMeRef.current) return;
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsHiding(true);
    setTimeout(() => {
      setShowAboutMe(false);
      setIsHiding(false);
    }, 400);
  };

  return (
    <>
      <Header />
      <main className="main-content">
        <section id="about" className="section" ref={aboutRef}>
          <About onShowMore={handleShowAboutMe} />
        </section>

        {showAboutMe && (
          <section
            id="aboutme"
            className={`section aboutme-dropdown ${isHiding ? "hide" : "show"}`}
            ref={aboutMeRef}
          >
            <AboutMe onBack={handleHideAboutMe} />
          </section>
        )}

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="section">
          <h2 className="section-header">Certificates</h2>
          <Certificates /> {/* added certificates carousel */}
        </section>

        <section id="contact" className="section">
          <h2 className="section-header">Contact</h2>
          <Contact />  
        </section>

        <section id="funtext" className="section">
          <API />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
