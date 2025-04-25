import "../styles/ProjectCard.css";
import { IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";
import HoverImageFollower from "./HoverImageFollower";

export default function ProjectCard({ title, description, image }) {
  const [hover, setHover] = useState(false);
  const [mousePos, setMousePos] = useState(null);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="project-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <IconArrowRight size={32} />

      <HoverImageFollower
        src={image}
        alt={title}
        mousePosition={mousePos}
        visible={hover}
      />
    </div>
  );
}