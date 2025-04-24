import Tag from './Tag'
import "../styles/Content.css"
import ProjectCard from './ProjectCard' 
import ProjectsWrapper from "./ProjectsWrapper"

const skills = [
    "0 to 1 Designer", "Design Systems", "Data Visualization", "Interaction Design",
    "Visual Design", "Design Tokens", "Icon Design", "Web Design", "Illustration",
    "Prototyping", "Figma", "Sketch", "Penpot", "Framer"
  ];


export default function Content() {
    return (
      <main className="content">
        <section className="intro">
          <h3>10+ years of experience designing digital products</h3>
          <p>I helped multiple companies build SaaS and B2B solutions used by customers such as Bank of America, Hewlett Packard, Vodafone, Real Madrid Club, and Barcelona Club.</p>
        </section>
        <section>
          <h3>Skills</h3>
          <div className="tags-wrapper">
        {skills.map((skill) => (
          <Tag key={skill} label={skill} />
        ))}
      </div>
        </section>
        <section>
          <h3>Projects</h3>
          <ProjectsWrapper />
        </section>
        <section>
          <h3>About</h3>
          <p>Argentinian-Italian currently based in Madrid. I'm passionate about visual arts and music. I enjoy photography, paintings, graphic design, as well as some blues and rock music.</p>
          <p>There are tools I just can't resist such as a pencil, a photo camera, or a guitar. I also enjoy movies, TV series, and of course, listening to Hans Zimmer or Pink Floyd.</p>
        </section>
        <section>
          <h3>Work Experience</h3>
          <p>I helped multiple companies build SaaS and B2B solutions used by customers such as Bank of America, Hewlett Packard, Vodafone, Real Madrid Club, and Barcelona Club.</p>
        </section>
        <section>
          <h3>Courses & Education</h3>
          <p>I helped multiple companies build SaaS and B2B solutions used by customers such as Bank of America, Hewlett Packard, Vodafone, Real Madrid Club, and Barcelona Club.</p>
        </section>
        {/* Add more sections as needed */}
      </main>
    )
  }