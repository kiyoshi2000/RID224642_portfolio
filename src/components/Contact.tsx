import "./Contact.css";
import GitHubIcon from "../assets/github.svg";
import LinkedInIcon from "../assets/linkedin.svg";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Meu Contato</h2>

        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-phone">
              <strong>Telefone:</strong> +33 7 81 29 52 37
            </p>
            <p className="contact-email">
              <strong>Email:</strong> kiyoshi.araki@hotmail.com
            </p>
          </div>

          <div className="contact-social">
            <a href="https://github.com/kiyoshi2000" className="social-link" target="_blank" rel="noopener noreferrer" title="GitHub">
              <img src={GitHubIcon} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/kiyoshi-araki/" className="social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
