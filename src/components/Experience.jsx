import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const EXPERIENCE = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Codibri",
    period: "Aug 2026 — Present",
    highlights: [
      "Took part in the analysis and design of the system, including requirements gathering and database design.",
      "Developed a high-fidelity prototype of the platform.",
      "Contributed to the development of the platform, a Europe–Costa Rica job platform that connects students with European companies.",
    ],
  },
];

function ExperienceItem({ role, company, period, highlights }) {
  return (
    <article className="flex flex-col gap-6 rounded-xl border border-card-border bg-surface p-6 sm:p-8">
      <header className="flex flex-col gap-1.5">
        <h3 className="text-[20px] sm:text-[22px] font-semibold leading-snug tracking-tight text-text-primary">
          {role}
        </h3>
        <p className="text-[16px] font-medium text-accent-light">{company}</p>
        <p className="text-[15px] text-muted">{period}</p>
      </header>

      <ul className="flex list-disc flex-col gap-3 pl-5 text-[16px] leading-relaxed text-text-secondary marker:text-accent-light">
        {highlights.map((h) => (
          <li key={h} className="pl-1">
            {h}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="py-20 scroll-mt-16"
      aria-label="Experience section"
    >
      <div className="mx-auto w-full max-w-container px-6">
        <Reveal className="mb-10">
          <SectionTitle icon="briefcase">
            Experience<span className="text-accent-light">.</span>
          </SectionTitle>
        </Reveal>

        <div className="flex flex-col gap-6">
          {EXPERIENCE.map((item) => (
            <Reveal key={item.id}>
              <ExperienceItem {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
