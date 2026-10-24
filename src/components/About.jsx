import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

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
    <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-accent/15 ring-1 ring-accent-light/25">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#b6c1fc"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    </span>
  )
}

function EducationCard({ years, title, institution }) {
  return (
    <div className="flex items-start gap-4 w-full h-full rounded-xl bg-surface border border-card-border p-6">
      {/* Icon */}
      <EducationIcon />

      {/* Text block */}
      <div className="flex flex-col gap-1.5">
        <span className="font-medium text-muted text-[14px] tracking-wide">
          {years}
        </span>

        <p className="font-semibold text-text-primary leading-snug text-[18px] sm:text-[20px] tracking-tight">
          {title}
        </p>

        <span className="font-medium text-accent-light mt-1 text-[15px]">
          {institution}
        </span>
      </div>
    </div>
  )
}

function About() {
  return (
    <section
      id="about"
      className="py-20 scroll-mt-16"
      aria-label="About section"
    >
      <div className="mx-auto w-full max-w-container px-6">
        <Reveal className="mb-10">
          <SectionTitle icon="user">
            About Myself
          </SectionTitle>
        </Reveal>

        <div className="flex flex-col gap-10">
          {/* Bio */}
          <Reveal className="flex flex-col gap-5">
            <p className="font-medium text-text-primary text-[18px] sm:text-[20px] leading-relaxed">
              I'm a Software Developer from Costa Rica.
            </p>
            <p className="font-normal text-text-secondary text-[16px] sm:text-[18px] leading-relaxed max-w-[60ch]">
              I have experience developing full-stack web applications and
              building scalable systems. My background includes databases,
              networking, and project management, along with strong teamwork
              and communication skills.
            </p>
          </Reveal>

          {/* Education */}
          <ul className="grid gap-5 sm:grid-cols-2" aria-label="Education">
            {EDUCATION.map((item, i) => (
              <Reveal as="li" key={item.id} delay={100 + i * 100} className="h-full">
                <EducationCard {...item} />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
