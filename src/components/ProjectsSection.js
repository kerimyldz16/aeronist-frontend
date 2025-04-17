import React, { useState } from "react";
import "../styles/ProjectsSection.css";
import projectsData from "../data/projects-data.json";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

function ProjectsSection() {
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
    { label: "Yıl Seçin", value: "All" },
    ...Array.from(
      new Set(projectsData.map((project) => project.year).sort((a, b) => b - a))
    ).map((year) => ({ label: year, value: year })),
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
        <h2 className="section-title">Projelerimiz</h2>
        <p className="section-description">
          Roketlerden insansız sistemlere kadar geliştirdiğimiz projeleri
          inceleyin.
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
          {years.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
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

export default ProjectsSection;
