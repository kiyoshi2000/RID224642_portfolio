import { useState, useEffect } from "react";
import "./Skills.css";

interface Skill {
  name: string;
  level: number;
  category: string;
}

function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    // Simulate data loading
    const allSkills: Skill[] = [
      { name: "React", level: 95, category: "frontend" },
      { name: "TypeScript", level: 90, category: "frontend" },
      { name: "JavaScript", level: 95, category: "frontend" },
      { name: "CSS/Sass", level: 90, category: "frontend" },
      { name: "Vite", level: 85, category: "frontend" },
      { name: "HTML5", level: 95, category: "frontend" },
      { name: "Node.js", level: 85, category: "backend" },
      { name: "Express", level: 80, category: "backend" },
      { name: "MongoDB", level: 80, category: "backend" },
      { name: "PostgreSQL", level: 85, category: "backend" },
      { name: "Docker", level: 75, category: "devops" },
      { name: "Git", level: 90, category: "tools" },
      { name: "REST APIs", level: 90, category: "backend" },
      { name: "GraphQL", level: 80, category: "backend" },
    ];

    setSkills(allSkills);
  }, []);

  const categories = ["all", "frontend", "backend", "devops", "tools"];

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const getCategoryLabel = (category: string): string => {
    const labels: Record<string, string> = {
      all: "Todas",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      tools: "Ferramentas",
    };
    return labels[category] || category;
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>

        <div className="skills-filters fade-in">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card fade-in">
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-cta">
          <p>Sempre aprendendo novas tecnologias e mantendo-me atualizado com as tendências do mercado.</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
