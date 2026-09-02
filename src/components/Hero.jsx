import { ArrowUpRight, Code2, Download, Github, Linkedin, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div>
        <small>FRONTEND-FOCUSED FULL STACK DEVELOPER</small>
        <h1>Hi, I'm <span>Chirag Pithiya.</span></h1>
        <p>I build responsive web interfaces with React.js and Tailwind CSS, and integrate backend APIs with Node.js and Express.js.</p>
        <div className="buttons">
          <a className="primary" href="#projects">View Projects <ArrowUpRight size={17} /></a>
          <a href="/Chirag_Pithiya_CV.pdf" download><Download size={17} /> Download CV</a>
        </div>
        <div className="social">
          <a href="https://github.com/Pithiyachirag" target="_blank" rel="noreferrer"><Github /> GitHub</a>
          <a href="https://linkedin.com/in/chirag-pithiya-497672296" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
          <span><MapPin /> Ahmedabad, Gujarat</span>
        </div>
      </div>
      <div className="photo">
        <img src="/chirag-profile.png" alt="Chirag Pithiya" />
        <div><Code2 /> Software Developer</div>
      </div>
    </section>
  );
}
