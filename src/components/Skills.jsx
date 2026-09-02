import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section soft">
      <div className="container">
        <label>02</label><h2>Skills</h2>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <div className="skill-group-head">
                <span>{group.title}</span>
                <small>{String(group.items.length).padStart(2, "0")} SKILLS</small>
              </div>
              <div className="skills">
                {group.items.map(([name, Icon], index) => (
                  <div className="skill" key={name}>
                    <Icon /><div><small>{String(index + 1).padStart(2, "0")}</small><b>{name}</b></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
