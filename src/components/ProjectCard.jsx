import "../styles/ProjectCard.css";
import { ArrowRight } from "lucide-react"; // or use your icon

export default function ProjectCard({ title, description, onHover, onLeave }) {
  return (
    <div
      className="project-card"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <ArrowRight size={18} />
    </div>
  );
}