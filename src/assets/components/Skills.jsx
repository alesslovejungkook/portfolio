import { useEffect, useRef, useState } from "react";
import "./Skills.css";
import "./Footer.css";

function Skills() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const skillsList = [
    {
      name: "Canva",
      img: "/logos/canva.png",
      desc: "Design stunning graphics, posters, and presentations with ease.",
    },
    {
      name: "Figma",
      img: "/logos/figmal.png",
      desc: "Collaborative UI/UX design tool for creating interactive prototypes.",
    },
    {
      name: "Flutter",
      img: "/logos/flutter.png",
      desc: "Build cross-platform mobile apps using a single codebase.",
    },
    {
      name: "NetBeans",
      img: "/logos/netbeans.png",
      desc: "Integrated Development Environment (IDE) for Java and other languages.",
    },
    {
      name: "Visual Studio Code",
      img: "/logos/visualcode.png",
      desc: "Lightweight, powerful code editor with extensions for any language.",
    },
    {
      name: "Visual Studio",
      img: "/logos/vslogo.png",
      desc: "Robust IDE for developing desktop, web, and enterprise applications.",
    },
    {
      name: "PyCharm",
      img: "/logos/pycharm.png",
      desc: "Professional IDE for Python development with smart code assistance.",
    },
    {
      name: "GitHub",
      img: "/logos/github.png",
      desc: "Platform for version control, collaboration, and project hosting.",
    },
    {
      name: "Godot",
      img: "/logos/godot.png",
      desc: "Godot is a free, open-source game engine for creating 2D and 3D games across multiple platforms.",
    },
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-title">My Skills</h2>

      <div ref={ref} className={`skills ${isVisible ? "show" : ""}`}>
        {skillsList.map((skill) => (
          <div key={skill.name} className="card">
            <img src={skill.img} alt={skill.name} />
            <h3>{skill.name}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
