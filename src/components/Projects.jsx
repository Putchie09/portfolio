import { projects } from '../data/projects'


function ArrowIcon({ className }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

/* project card */
function ProjectCard({ title, description, technologies, image, github }) {
  return (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex flex-col
        bg-[#404560] border border-[#575E83]
        rounded-lg overflow-hidden
        cursor-pointer
        transition-colors duration-200
        hover:border-[#CFD6FF]
      "
      style={{ boxShadow: "0 4px 4px rgba(0,0,0,0.1)" }}
      aria-label={`View ${title} on GitHub`}
    >
      {/* Image area */}
      <div
        className="w-full overflow-hidden rounded-t-lg shrink-0"
        style={{ aspectRatio: "360 / 211" }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            /* placeholder when image file is missing */
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.style.background = "#2e3149";
          }}
        />
      </div>

      {/* Card body  */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Technology tags */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                border border-[#575E83] rounded-lg
                px-3 py-1
                font-medium text-[#F8F8F8]
              "
              style={{ fontSize: "12px" }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-extrabold text-white leading-snug text-[17px] lg:text-[20px]">
          {title}
        </h3>

        {/* Description */}
        <p className="font-medium text-[#F8F8F8] flex-1 text-[15px] lg:text-[18px]">
          {description}
        </p>

        {/* Arrow button */}
        <div className="flex justify-end mt-2">
          <div
            className="
              flex items-center justify-center
              w-10 h-10 rounded-full
              border border-[#575E83]
              text-[#575E83]
              group-hover:border-[#CFD6FF] group-hover:text-[#CFD6FF]
              transition-colors duration-200
            "
          >
            <ArrowIcon className="transition-transform duration-200 group-hover:-rotate-45" />
          </div>
        </div>
      </div>
    </a>
  );
}

/* Section */
function Projects() {
  return (
    <section
      id="projects"
      className="bg-background pt-12 pb-24 sm:py-24"
      aria-label="Featured projects section"
    >
      <div className="mx-auto w-full max-w-[1232px] px-[30px]">
        {/* Section title */}
        <div className="flex flex-col items-center mb-24">
          <h2 className="font-extrabold text-center text-[40px] sm:text-[56px] lg:text-[72px] leading-tight">
            <span className="text-white">Featured </span>
            <span className="text-accent">Projects.</span>
          </h2>
          {/* Purple underline accent */}
          <span
            className="block bg-accent rounded-full mt-3"
            style={{ width: "120px", height: "4px" }}
          />
        </div>

        {/* Projects grid */}
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-12
          "
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects
