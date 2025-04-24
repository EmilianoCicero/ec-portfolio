import "../styles/ProjectCard.css";
import { ArrowRight } from "lucide-react"; // or use your icon

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
      <ArrowRight size={32} />
    </div>
  );
}