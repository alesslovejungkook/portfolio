import React from "react";
import './About.css';

const About = ({ onShowMore }) => {
  return (
    <section className="about">
      <div className="about-text">
        <h2>
          Hey, <span>there</span>
        </h2>
        <h1>
          I AM <span className="highlight">ALESSANDRA</span>
        </h1>
        <h3>IT Student • Aspiring Developer</h3>
        <p>
          As an IT student, I love exploring technology and design. 
          My goal is to grow my skills and build projects that 
          make a difference.
        </p>

        <button onClick={onShowMore} className="cta-btn">About Me</button>
      </div>

      <div className="about-image">
        <img 
          src="/logos/alessnobg (2).png" 
          alt="Alessandra" 
        />
      </div>
    </section>
  );
};

export default About;
