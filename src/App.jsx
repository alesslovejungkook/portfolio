import { useState, useRef } from 'react';
import './App.css';
import Header from './assets/components/Header.jsx';
import About from './assets/components/About.jsx';
import AboutMe from './assets/components/Aboutme.jsx';
import Skills from './assets/components/Skills.jsx';
import Footer from './assets/components/Footer.jsx';
import Projects from './assets/components/Projects.jsx';

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
        {/* About Section */}
        <section id="about" className="section" ref={aboutRef}>
          <About onShowMore={handleShowAboutMe} />
        </section>

        {/* AboutMe Dropdown */}
        {showAboutMe && (
          <section
            id="aboutme"
            className={`section aboutme-dropdown ${isHiding ? "hide" : "show"}`}
            ref={aboutMeRef}
          >
            <AboutMe onBack={handleHideAboutMe} />
          </section>
        )}

        {/* Projects Section */}
        <section id="projects" className="section">
          <Projects />
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <Skills />
        </section>

        {/* Certificates Section */}
       <section id="certificates" className="section">
  <h2 className="section-header">Certificates</h2>
  <p>Coming Soon...</p>
</section>

{/* Contact Section */}
<section id="contact" className="section">
  <h2 className="section-header">Contact</h2>
  <p>Coming Soon...</p>
</section>
      </main>

      <Footer />
    </>
  );
}

export default App;
