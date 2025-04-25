import "../styles/SocialIcons.css";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandDribbble } from "@tabler/icons-react";
import { IconBrandX } from "@tabler/icons-react";

export default function SocialICons() {
    return (
      <div className="SocialICons-Wrapper">
        <button className="social-button" aria-label="LinkedIn">
          <IconBrandLinkedin size={24} />
        </button>
        <button className="social-button" aria-label="Dribbble">
          <IconBrandDribbble size={24} />
        </button>
        <button className="social-button" aria-label="Twitter">
          <IconBrandX size={24} />
        </button>
      </div>
    )
  }
