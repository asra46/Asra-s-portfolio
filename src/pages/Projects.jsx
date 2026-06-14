import { useState } from "react";
import { projects } from "../data/portfolioData";
import { FiExternalLink, FiGithub, FiCheck } from "react-icons/fi";
import "./Projects.css";

const filters = [
  { id: "all", label: "All" },
  { id: "react", label: "React" },
  { id: "web", label: "Web" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="projects">
      <div className="container">

        {/* HEADER */}
        <div className="projects__header">
          <h2>Featured Projects</h2>
          <p>Some of my recent work and practice projects</p>
        </div>

        {/* FILTERS */}
        <div className="projects__filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`projects__filter ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* GRID */}
<div className="projects__grid compact">
            {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">

              {/* IMAGE */}
              <div className="project-card__image">
                <img src={project.image} alt={project.title} />

                {project.featured && (
                  <span className="badge">Featured</span>
                )}
              </div>

              {/* CONTENT */}
              <div className="project-card__content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <ul className="features">
                  {project.features?.map((f) => (
                    <li key={f}>
                      <FiCheck /> {f}
                    </li>
                  ))}
                </ul>

                <div className="links">
                  <a href={project.liveUrl} target="_blank">
                    <FiExternalLink /> Live
                  </a>
                  <a href={project.githubUrl} target="_blank">
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}