import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectPreview from "./ProjectPreview";
import "../styles/ProjectsWrapper.css";
import lexiconDS from '../images/lexicon-design-system.webp'
import Comments from '../images/ec-comments.png'
import ImageEditor from '../images/ec-image-editor.png'
import Charts from '../images/ec-charts.png'
import Icons from '../images/ec-icons.webp'

const projects = [
  {
    id: "1",
    title: "Lexicon . Design System",
    description: "A revamp for a European fintech app.",
    image: lexiconDS
  },
  {
    id: "2",
    title: "E-commerce CMS",
    description: "Design system and UX improvements.",
    image: Comments
  },
  {
    id: "3",
    title: "E-commerce CMS",
    description: "Design system and UX improvements.",
    image: ImageEditor
  },
  {
    id: "4",
    title: "E-commerce CMS",
    description: "Design system and UX improvements.",
    image: Charts
  },
  {
    id: "5",
    title: "E-commerce CMS",
    description: "Design system and UX improvements.",
    image: Icons
  }
];

export default function ProjectsWrapper() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="projects-wrapper">
        {projects.map(project => (
          <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image} 
          onHover={() => setHoveredProject(project)}
          onLeave={() => setHoveredProject(null)}
        />
        ))}
      <ProjectPreview project={hoveredProject} />
    </div>
  );
}