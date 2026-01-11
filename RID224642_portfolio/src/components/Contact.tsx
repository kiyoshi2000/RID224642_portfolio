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
              <strong>Meu contato:</strong> 12 9888888888
            </p>
            <p className="contact-email">
              <strong>Email:</strong> xxx@xyz.com
            </p>
          </div>

          <div className="contact-social">
            <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer" title="GitHub">
              <img src={GitHubIcon} alt="GitHub" />
            </a>
            <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
