import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contactgrid">
        <div><small>05 / CONTACT</small><h2>Let's build something<br /><span>useful.</span></h2></div>
        <div>
          <p>Open to frontend and full-stack opportunities.</p>
          <a className="mail" href="mailto:pithiyachirag96@gmail.com"><Mail /> pithiyachirag96@gmail.com</a>
          <div className="contact-social">
            <a className="contact-link github-link" href="https://github.com/Pithiyachirag" target="_blank" rel="noreferrer"><span className="contact-icon"><Github /></span><span><b>GitHub</b><small>@Pithiyachirag</small></span><strong>↗</strong></a>
            <a className="contact-link linkedin-link" href="https://linkedin.com/in/chirag-pithiya-497672296" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin /></span><span><b>LinkedIn</b><small>chirag-pithiya</small></span><strong>↗</strong></a>
          </div>
        </div>
      </div>
    </section>
  );
}
