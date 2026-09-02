import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <label>03</label><h2>Experience</h2>
      <div className="experience">
        <Briefcase />
        <div>
          <div className="exphead"><div><h3>Frontend Developer Intern</h3><p>Way To Web Pvt. Ltd. · Ahmedabad</p></div><small>Feb 2025 — Aug 2025</small></div>
          <ul>
            <li>Developed responsive interfaces using HTML5, CSS3, Tailwind CSS and React.js.</li>
            <li>Converted UI designs into reusable React components.</li>
            <li>Implemented form validation and REST API integration.</li>
            <li>Optimized layouts for mobile and cross-browser compatibility.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
