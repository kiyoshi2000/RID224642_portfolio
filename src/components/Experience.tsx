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
        id: "2020-2023",
        year: "2020 - 2023",
        title: "Bacharelado em Engenharia Mecatrônica",
        description: "Universidade de São Paulo (USP) | GPA 8.6/10 (Top 10%). Formação multidisciplinar em robótica, visão computacional e inteligência artificial aplicada.",
      },
      {
        id: "2023",
        year: "Jan - Set 2023",
        title: "Consultor de Data Science & Analytics",
        description: "Visagio | Rio de Janeiro. Construção de pipelines ETL, dashboards em Power BI/Tableau, algoritmos de segmentação. Processamento 20% mais rápido e aumento de receita com repricing direcionado.",
      },
      {
        id: "2023-2025",
        year: "Set 2023 - Set 2025",
        title: "Mestrado em Inteligência Artificial",
        description: "CentraleSupélec | GPA 4.15/4.33. Especialização em IA generativa, deep learning e computação em nuvem. Projetos com Azure, LangChain, OpenAI e Mistral.",
      },
      {
        id: "2024-2025",
        year: "Set 2024 - Set 2025",
        title: "Data IA & Cloud Solutions Intern",
        description: "Onepoint | Paris. Infraestrutura Azure com Terraform, agentes conversacionais com LangChain e OpenAI. Redução de 20% custos e adoção por 1200+ usuários.",
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
