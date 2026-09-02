import { useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";

const links = ["about", "skills", "experience", "projects", "contact"];

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header>
      <nav className="container nav">
        <a className="logo" href="#home">CP<span>.</span></a>
        <div className={open ? "links open" : "links"}>
          {links.map((link) => (
            <a key={link} href={`#${link}`} onClick={close}>{link[0].toUpperCase() + link.slice(1)}</a>
          ))}
          <a className="cv nav-cv" href="/Chirag_Pithiya_CV.pdf" download><Download size={15} /> <span>Download CV</span></a>
        </div>
        <div className="actions">
          <button aria-label="Toggle theme" onClick={() => setDark(!dark)}>{dark ? <Sun /> : <Moon />}</button>
          <button className="hamb" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
    </header>
  );
}
