
const EDUCATION = [
  {
    id: 1,
    years: '2023 – 2026',
    title: "Bachelor's Degree in Business Informatics",
    institution: 'University of Costa Rica',
  },
  {
    id: 2,
    years: '2020 – 2022',
    title: 'Intermediate Technician in Software Development',
    institution: 'Professional Technical High School F.J. Orlich',
  },
]

/** Book icon */
function EducationIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9b6bff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 mt-0.5"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function EducationCard({ years, title, institution }) {
  return (
    <div
      className="
        flex items-start gap-5
        max-w-[505px] min-h-[200px] w-full
        bg-[#404560] border border-[#575E83]
        rounded-lg p-7
        transition-colors duration-200
        hover:border-[#CFD6FF]
      "
      style={{ boxShadow: "0 4px 4px rgba(0,0,0,0.1)" }}
    >
      {/* Icon */}
      <EducationIcon />

      {/* Text block */}
      <div className="flex flex-col gap-1">
        <span
          className="font-semibold text-[#F8F8F8]"
          style={{ fontSize: "18px" }}
        >
          {years}
        </span>

        <p className="font-bold text-white leading-snug text-[18px] sm:text-[20px] lg:text-[24px] tracking-normal">
          {title}
        </p>

        <span
          className="font-semibold text-accent mt-1"
          style={{ fontSize: "16px" }}
        >
          {institution}
        </span>
      </div>
    </div>
  );
}

function About() {
  return (
    <section
      id="about"
      className="bg-background pt-24 pb-40 scroll-mt-44"
      aria-label="About section"
    >
      <div className="mx-auto w-full max-w-[1232px] px-[30px]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-8">
          {/* title and bio */}
          <div className="flex-1 w-full lg:max-w-[560px]">
            {/* Title block */}
            <div className="mb-8">
              <h2 className="font-extrabold text-white text-[40px] sm:text-[56px] lg:text-[72px] leading-tight">
                About
              </h2>

              <div className="relative inline-block">
                <h2
                  className="font-extrabold text-accent"
                  style={{ fontSize: "72px", lineHeight: "76px" }}
                >
                  Myself.
                </h2>
                {/* Underline accent */}
                <span
                  className="absolute left-0 block bg-accent rounded-full"
                  style={{ bottom: "-10px", width: "72px", height: "4px" }}
                />
              </div>
            </div>

            {/* Bio */}
            <div className="mt-8 flex flex-col gap-6">
              <p className="font-normal text-[#F8F8F8] text-[15px] sm:text-[17px] lg:text-[20px] leading-relaxed">
                I'm a Software Developer from Costa Rica.
              </p>
              <p
                className="font-normal text-[#F8F8F8] text-[15px] sm:text-[17px] lg:text-[20px] leading-relaxed"
              >
                I have experience developing full-stack web applications and
                building scalable systems. My background includes databases,
                networking, and project management, along with strong teamwork
                and communication skills.
              </p>
            </div>
          </div>

          {/* education cards*/}
          <div className="flex flex-col gap-6 lg:items-end">
            {EDUCATION.map((item) => (
              <EducationCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
