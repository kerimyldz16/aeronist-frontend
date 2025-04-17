import React, { useState } from "react";
import "../styles/Projects.css";
import projectsData from "../data/projects-data.json";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const years = [
    "Yıl Seçin",
    ...new Set(
      projectsData.map((project) => project.year).sort((a, b) => b - a)
    ),
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesYear = selectedYear === "All" || project.year === selectedYear;
    return matchesSearch && matchesYear;
  });

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

      <div className="projects-tools">
        <input
          type="text"
          placeholder="Projelerde Ara..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="project-search-bar"
        />
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="project-filter-dropdown"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="projects-container">
        {filteredProjects.map((project) => (
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

export default Projects;
