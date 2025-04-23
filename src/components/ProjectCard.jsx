import "../styles/ProjectCard.css";

export default function ProjectCard({ image, title, description, buttonText, onClick }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card__image" />
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <button className="project-card__button" onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}