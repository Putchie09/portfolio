import htmlIcon from "../assets/techstack/html.svg";
import cssIcon from "../assets/techstack/css3.svg";
import jsIcon from "../assets/techstack/javascript.svg";
import reactIcon from "../assets/techstack/react.svg";
import pythonIcon from "../assets/techstack/python.svg";
import djangoIcon from "../assets/techstack/django.svg";
import nodeIcon from "../assets/techstack/nodejs.svg";
import javaIcon from "../assets/techstack/java.svg";
import sqlServerIcon from "../assets/techstack/sqlserver.svg";
import mysqlIcon from "../assets/techstack/mysql.svg";
import dockerIcon from "../assets/techstack/docker.svg";
import gitIcon from "../assets/techstack/git.svg";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const TECH_STACK = [
  { label: "HTML", icon: htmlIcon },
  { label: "CSS3", icon: cssIcon },
  { label: "JavaScript", icon: jsIcon },
  { label: "React", icon: reactIcon },
  { label: "Python", icon: pythonIcon },
  { label: "Django", icon: djangoIcon },
  { label: "Nodejs", icon: nodeIcon },
  { label: "Java", icon: javaIcon },
  { label: "SQL Server", icon: sqlServerIcon },
  { label: "MySql", icon: mysqlIcon, lift: true },
  { label: "Docker", icon: dockerIcon },
  { label: "Git", icon: gitIcon },
];

function TechCard({ label, icon, lift }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-4 rounded-xl bg-surface border border-card-border w-full aspect-square sm:aspect-[183/158] transition-colors duration-200 hover:bg-surface-hover hover:border-accent/60">
      <img
        src={icon}
        alt=""
        className={`w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] lg:w-[44px] lg:h-[44px] object-contain ${lift ? "brightness-[2.2] saturate-150" : ""}`}
      />
      <span className="font-medium text-text-secondary text-[14px]">
        {label}
      </span>
    </div>
  );
}

function TechStack() {
  return (
    <section
      id="techstack"
      className="py-20 scroll-mt-16"
      aria-label="Tech Stack section"
    >
      <div className="mx-auto w-full max-w-container px-6">
        <Reveal className="mb-10">
          <SectionTitle icon="layers">
            Tech Stack
          </SectionTitle>
        </Reveal>

        <ul className="grid grid-cols-2 min-[480px]:grid-cols-4 gap-3 sm:gap-4">
          {TECH_STACK.map((tech, i) => (
            <Reveal as="li" key={tech.label} delay={(i % 6) * 50}>
              <TechCard {...tech} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TechStack;
