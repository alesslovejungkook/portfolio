import './Header.css';

function Header() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span>Alessandra Nicole</span>
        </div>

        <nav className="nav-links">
          <a className="nav-button" href="#about" onClick={(e) => handleScroll(e, "about")}>About</a>
          <a className="nav-button" href="#skills" onClick={(e) => handleScroll(e, "skills")}>Skills</a>
          <a className="nav-button" href="#projects" onClick={(e) => handleScroll(e, "projects")}>Projects</a>
          <a className="nav-button" href="#certificates" onClick={(e) => handleScroll(e, "certificates")}>Certificates</a>
          <a className="nav-button" href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
