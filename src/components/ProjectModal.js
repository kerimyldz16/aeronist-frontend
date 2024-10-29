import React from "react";
import "../styles/ProjectModal.css";

function ProjectModal({ project, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-left">
          {project.videoUrl ? (
            <iframe
              width="100%"
              height="315"
              src={project.videoUrl}
              title={project.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={project.image}
              alt={project.name}
              className="modal-image"
            />
          )}
        </div>
        <div className="modal-right">
          <h2 className="modal-title">{project.name}</h2>
          <div className="modal-description">{project.description}</div>
        </div>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}
export default ProjectModal;
