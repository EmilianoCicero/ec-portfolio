import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectPreview from "./ProjectPreview";
import "../styles/ProjectsWrapper.css";

const projects = [
  {
    id: "1",
    title: "Mobile Banking Redesign",
    description: "A revamp for a European fintech app.",
    image: "/images/banking.png"
  },
  {
    id: "2",
    title: "E-commerce CMS",
    description: "Design system and UX improvements.",
    image: "/images/cms.png"
  }
];

export default function ProjectsWrapper() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="projects-wrapper">
      <div className="cards-column">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            onHover={() => setHoveredProject(project)}
            onLeave={() => setHoveredProject(null)}
          />
        ))}
      </div>
      <ProjectPreview project={hoveredProject} />
    </div>
  );
}