import { useState, useEffect } from "react";
import "./Experience.css";

interface Experience {
  id: string;
  year: string;
  title: string;
  description: string;
}

function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    // Simulate loading experience data
    const allExperiences: Experience[] = [
      {
        id: "2018",
        year: "2018",
        title: "Início da Jornada",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: "2019",
        year: "2019",
        title: "Primeiro Projeto",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: "2020",
        year: "2020",
        title: "Crescimento Profissional",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: "2021",
        year: "2021",
        title: "Consolidação",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ];

    setExperiences(allExperiences);
  }, []);

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Sobre mim</h2>

        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-year">{exp.year}</div>
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
