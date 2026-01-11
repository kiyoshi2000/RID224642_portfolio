import { useState, useEffect } from "react";
import "./Projects.css";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Simulate loading projects data
    const allProjects: Project[] = [
      {
        id: "1",
        title: "PROJETO 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "�",
        link: "#",
      },
      {
        id: "2",
        title: "PROJETO 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "�",
        link: "#",
      },
      {
        id: "3",
        title: "PROJETO 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "�",
        link: "#",
      },
      {
        id: "4",
        title: "PROJETO 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "📄",
        link: "#",
      },
    ];

    setProjects(allProjects);
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projetos</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card fade-in">
              <div className="project-image">
                <span>{project.image}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <a href={project.link} className="project-link">
                  Clique aqui
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
