import "../styles/ProjectPreview.css";

export default function ProjectPreview({ project }) {
  return (
    <div className={`project-preview ${project ? "visible" : ""}`}>
      {project && (
        <img src={project.image} alt={project.title} />
      )}
    </div>
  );
}