import React from "react";
import "./AboutMe.css";

const AboutMe = ({ onBack }) => {
  return (
    <section className="aboutme">
      <div className="aboutme-image">
        <img src="/logos/ale2x2.jpg" alt="Alessandra CV" />
      </div>

      <div className="aboutme-text">
        <h2>Short <span>CV</span></h2>
        <p>
          Hi! I’m <strong>Alessandra Nicole C. Santiago</strong>, an IT student 
          passionate about technology, design, and creating projects that 
          make an impact. My goal is to become a skilled developer while 
          continuing to grow as a student leader and creative thinker.
        </p>
        <div className="info">
            <p><b>Age:</b> 21</p>
            <p><b>Birthday:</b> August 20, 2004</p>
            <p><b>Address:</b> Plaridel, Bulacan</p>
            <p><b>Nationality:</b> Filipino</p>
            <p><b>Religion:</b> Catholic</p>
          </div>

            <button className="cta-btn" onClick={onBack}>Back</button>
      </div>
    </section>
  );
};

export default AboutMe;
