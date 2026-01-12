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
            Kiyoshi Araki
          </h1>
          <p className="hero-description">
            Engenheiro de IA & Consultor de Dados | Especialista em Inteligência Artificial Generativa. Desenvolvedor com experiência em soluções em nuvem, deep learning e arquiteturas de IA.
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
