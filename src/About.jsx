import React from "react";
import "./About.css";


const About = () => {
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
        <button className="cta-btn">About Me</button>
      </div>

      <div className="about-image">
        <img src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.15752-9/543034643_2012315442866772_3858446321822092809_n.png?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGPmjUY34NR4gQcG8HuaJzSjwLeuUaWhhiPAt65RpaGGLuLb2WYRccvdLVoqCrPqElXJbP_QbxEfomigLeDo66r&_nc_ohc=_F49vRZea2UQ7kNvwGae_bl&_nc_oc=Admc9ReN6Th69YuczyU2b7PZc8Ogeyendwpl9esfUyPx2cDhE-tcFOuy6BC18raQeok&_nc_zt=23&_nc_ht=scontent.fmnl8-2.fna&oh=03_Q7cD3QHde4AlvU1hDPpf5tT44X1EkNPMMwGADVUw3kJDsDikrQ&oe=68E7433D" alt="Alessandra" />
      </div>
    </section>
  );
};

export default About;
