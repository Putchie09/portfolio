
const TECH_STACK = [
  { label: "HTML", icon: "/src/assets/techstack/html.svg" },
  { label: "CSS3", icon: "/src/assets/techstack/css3.svg" },
  { label: "JavaScript", icon: "/src/assets/techstack/javascript.svg" },
  { label: "React", icon: "/src/assets/techstack/react.svg" },
  { label: "Python", icon: "/src/assets/techstack/python.svg" },
  { label: "Django", icon: "/src/assets/techstack/django.svg" },
  { label: "Nodejs", icon: "/src/assets/techstack/nodejs.svg" },
  { label: "Java", icon: "/src/assets/techstack/java.svg" },
  { label: "SQL Server", icon: "/src/assets/techstack/sqlserver.svg" },
  { label: "MySql", icon: "/src/assets/techstack/mysql.svg" },
  { label: "Docker", icon: "/src/assets/techstack/docker.svg" },
  { label: "Git", icon: "/src/assets/techstack/git.svg" },
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
