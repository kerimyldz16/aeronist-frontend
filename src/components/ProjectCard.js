import React from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <img
        src={project.image}
        alt={project.name}
        className="project-card-img"
      />
      <h3 className="project-card-title">{project.name}</h3>
    </div>
  );
}

export default ProjectCard;
