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
      { name: "Python", level: 95, category: "backend" },
      { name: "OpenAI API", level: 90, category: "ai" },
      { name: "LangChain", level: 90, category: "ai" },
      { name: "TensorFlow", level: 88, category: "ai" },
      { name: "PyTorch", level: 85, category: "ai" },
      { name: "Azure Cloud", level: 88, category: "devops" },
      { name: "Terraform", level: 85, category: "devops" },
      { name: "Docker", level: 85, category: "devops" },
      { name: "Kubernetes", level: 80, category: "devops" },
      { name: "CI/CD (GitHub Actions)", level: 85, category: "devops" },
      { name: "SQL", level: 90, category: "backend" },
      { name: "C/C++", level: 80, category: "backend" },
      { name: "Hugging Face", level: 88, category: "ai" },
      { name: "OpenCV", level: 85, category: "ai" },
      { name: "Mistral AI", level: 85, category: "ai" },
      { name: "SAS", level: 80, category: "tools" },
      { name: "Git", level: 95, category: "tools" },
    ];

    setSkills(allSkills);
  }, []);

  const categories = ["all", "ai", "backend", "devops", "tools"];

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const getCategoryLabel = (category: string): string => {
    const labels: Record<string, string> = {
      all: "Todas",
      ai: "IA & Machine Learning",
      backend: "Backend & Dados",
      devops: "Cloud & DevOps",
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
