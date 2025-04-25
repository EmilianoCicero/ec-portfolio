import "../styles/ProjectCard.css";
import { IconArrowRight } from "@tabler/icons-react"; // or use your icon

export default function ProjectCard({ title, description, onHover, onLeave }) {
  return (
    <div
      className="project-card"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="project-content"> 
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <IconArrowRight size={32} />
    </div>
  );
}