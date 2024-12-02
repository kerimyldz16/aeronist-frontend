import React, { useState } from "react";
import "../styles/Projects.css";
import projectsData from "../data/projects-data.json";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2 className="section-title">Faaliyetlerimiz</h2>
        <p className="section-description">
          Aeronist Aerospace olarak gerçekleştirdiğimiz faaliyetler ve projeler
          hakkında daha fazla bilgi edinebilirsiniz.
        </p>
        <hr className="divider" />
      </div>
      <div className="projects-container">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}

export default ProjectsPage;
