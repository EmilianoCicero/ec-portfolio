import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "../styles/HoverImageFollower.css";

export default function HoverImageFollower({ src, alt, mousePosition, visible }) {
  const ref = useRef();
  const [placement, setPlacement] = useState("bottom-right");
  const [initialPos, setInitialPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!visible || !mousePosition) return;

    const { clientWidth, clientHeight } = document.documentElement;
    const { x, y } = mousePosition;

    const spaceRight = clientWidth - x;
    const spaceLeft = x;
    const spaceBottom = clientHeight - y;
    const spaceTop = y;

    let pos = "bottom-right";
    if (spaceTop > 320 && spaceRight > 400) pos = "top-right";
    else if (spaceTop > 320 && spaceLeft > 400) pos = "top-left";
    else if (spaceBottom > 320 && spaceLeft > 400) pos = "bottom-left";
    else if (spaceBottom > 320 && spaceRight > 400) pos = "bottom-right";

    setPlacement(pos);
    setInitialPos({ x, y });
  }, [mousePosition, visible]);

  if (!visible || !mousePosition) return null;

  const offsetX = placement.includes("right") ? 20 : -400 - 20;
  const offsetY = placement.includes("bottom") ? 20 : -320 - 20;

  const positionStyles = {
    top: initialPos.y + offsetY,
    left: initialPos.x + offsetX,
    position: "fixed"
  };

  return ReactDOM.createPortal(
    <img
      ref={ref}
      className="hover-image"
      src={src}
      alt={alt}
      style={positionStyles}
    />,
    document.body
  );
}