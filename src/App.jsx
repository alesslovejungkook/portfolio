import { useState, useRef } from 'react';
import './App.css';
import Header from './assets/components/Header.jsx';
import About from './assets/components/About.jsx';
import Aboutme from './assets/components/Aboutme.jsx';
import Skills from './assets/components/Skills.jsx';
import Footer from './assets/components/Footer.jsx';
import Projects from './assets/components/Projects.jsx';
import Api from './assets/components/Api.jsx';
import Certificates from './assets/components/Email.jsx';
import Background from './assets/components/Background.jsx';
import Quotes from './assets/components/Quotes.jsx';
import Message from './assets/components/Message.jsx'; // ← Updated import

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
    <div className="App" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Background
          colors={["#FFE4EC", "#FFD1DC", "#FFB6C1", "#9e2258ff"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

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
            <Aboutme onBack={handleHideAboutMe} />
          </section>
        )}

        <section id="quotes" className="section">
          <Quotes />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

         <section id="certificates" className="section">
          <h2 className="section-header">Certificates</h2>
          <Certificates />
        </section>

        <section id="contact" className="section">
          <h2 className="section-header">Message</h2>
          <Message />  {/* ← Pink-themed EmailJS form */}
        </section>


        <section id="funtext" className="section">
          <Api />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
