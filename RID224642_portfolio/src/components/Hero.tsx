import "./Hero.css";

function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollToSection("projects")}>
              Saber mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
