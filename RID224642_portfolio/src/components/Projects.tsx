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
        title: "Semi-autonomous-drone-navigation",
        description: "Projeto de controle visual semi-autônomo para TurtleBot usando ROS2. Implementação de joystick control com detecção de linhas e nó ROS2 integrado.",
        image: "🤖",
        link: "https://github.com/kiyoshi2000/Semi-autonomous-drone-navigation",
      },
      {
        id: "2",
        title: "Poleproject",
        description: "App Flutter para reconhecimento de linguagem de sinais em tempo real. Treinado com Python, TensorFlow e Mediapipe, convertido para TensorFlow Lite para mobile.",
        image: "📱",
        link: "https://github.com/kiyoshi2000/Poleproject",
      },
      {
        id: "3",
        title: "GraphMining",
        description: "Análise de estruturas de grafos através de medidas de centralidade, detecção de comunidades e embeddings de nós. Avaliações visuais e quantitativas com múltiplos datasets.",
        image: "📊",
        link: "https://github.com/kiyoshi2000/GraphMining",
      },
      {
        id: "4",
        title: "RAG---PUB",
        description: "Chatbot baseado em texto para responder perguntas em domínio aberto. Usa TF-IDF para recuperação de contexto e modelo CamemBERT para leitura e extração de respostas.",
        image: "🤖",
        link: "https://github.com/kiyoshi2000/RAG---PUB",
      },
      {
        id: "5",
        title: "Reinforcement-learning",
        description: "Projeto abrangente de RL com 4 tarefas: implementação DQN customizada, controle contínuo com policy gradients, agent SAC com Stable-Baselines3.",
        image: "🧠",
        link: "https://github.com/kiyoshi2000/Reinforcement-learning",
      },
      {
        id: "6",
        title: "SpeechRecognition",
        description: "Projeto end-to-end comparando arquiteturas Conformer e Whisper. Fine-tuning, inferência e avaliação (WER) com datasets em grande escala.",
        image: "🎤",
        link: "https://github.com/kiyoshi2000/SpeechRecognition",
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
