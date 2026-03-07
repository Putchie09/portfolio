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
  { label: "MySql", icon: mysqlIcon },
  { label: "Docker", icon: dockerIcon },
  { label: "Git", icon: gitIcon },
];

function TechCard({ label, icon }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center gap-4
        bg-[#404560] border border-[#575E83]
        rounded-lg
        transition-colors duration-200
        hover:border-[#CFD6FF]
        w-full aspect-[183/158]
      "
    >
      <img
        src={icon}
        alt={label}
        className="w-[32px] h-[32px] sm:w-[44px] sm:h-[44px] lg:w-[64px] lg:h-[64px] object-contain"
      />
      <span className="font-medium text-[#F8F8F8] text-[13px] sm:text-[15px] lg:text-[18px]">
        {label}
      </span>
    </div>
  );
}

function TechStack() {
  return (
    <section
      id="techstack"
      className="bg-background pt-12 pb-40 sm:py-40"
      aria-label="Tech Stack section"
    >
      <div className="mx-auto w-full max-w-[1232px] px-[30px]">
        {/* Title */}
        <div className="flex flex-col items-center mb-24">
          <h2 className="font-extrabold text-center text-[40px] sm:text-[56px] lg:text-[72px] leading-tight">
            <span className="text-white">Tech </span>
            <span className="text-accent">Stack.</span>
          </h2>
          <span
            className="block bg-accent rounded-full mt-3"
            style={{ width: "260px", height: "4px" }}
          />
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6"
          style={{ gap: "21px 21px", rowGap: "29px" }}
        >
          {TECH_STACK.map((tech) => (
            <TechCard key={tech.label} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
