import { projects } from "../data";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="section soft">
      <div className="container">
        <label>04</label><h2>Projects</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <article className={project.featured ? "project featured" : "project"} key={project.title}>
              <small>{String(index + 1).padStart(2, "0")}{project.featured ? " · FEATURED" : ""}</small>
              <strong>{project.short}</strong>
              <h3>{project.title}</h3><p>{project.description}</p>
              {project.highlights && <ul className="project-highlights">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>}
              <div className="project-bottom">{project.tech.map((tech) => <em key={tech}>{tech}</em>)}</div>
              <div className="project-actions">
                {project.liveUrl && <a className="project-btn live-demo" href={project.liveUrl} target="_blank" rel="noreferrer"><ExternalLink size={15} /> Live Demo</a>}
                {project.githubUrl && <a className="project-btn" href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
