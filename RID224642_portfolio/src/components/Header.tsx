import { useState } from "react";
import "./Header.css";
import GitHubIcon from "../assets/github.svg";
import LinkedInIcon from "../assets/linkedin.svg";

interface HeaderProps {
  isScrolled: boolean;
}

function Header({ isScrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">Portfolio</div>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("projects")}>Projetos</button>
          <button onClick={() => scrollToSection("experience")}>Sobre mim</button>
          <button onClick={() => scrollToSection("contact")}>Contato</button>
        </nav>

        <div className="social-links">
          <a href="https://github.com/kiyoshi2000" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src={GitHubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/kiyoshi-araki/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
