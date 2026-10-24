import { useLanguage } from "../i18n/LanguageContext";
import { experience } from "../data/experience";
import Reveal from "../components/Reveal";
import Section from "../components/Section";

// "2026-08" -> "Aug 2026" (en) / "Ago 2026" (es)
function formatMonth(isoMonth, language) {
  const [year, month] = isoMonth.split("-").map(Number);
  const label = new Intl.DateTimeFormat(language, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1)));
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function ExperienceItem({ role, company, period, description }) {
  return (
    <article className="flex flex-col gap-6 rounded-xl border border-card-border bg-surface p-6 sm:p-8">
      <header className="flex flex-col gap-1.5">
        <h3 className="text-[20px] sm:text-[22px] font-semibold leading-snug tracking-tight text-text-primary">
          {role}
        </h3>
        <p className="text-[16px] font-medium text-accent-light">{company}</p>
        <p className="text-[15px] text-muted">{period}</p>
      </header>

      <p className="text-[16px] leading-relaxed text-text-secondary">
        {description}
      </p>
    </article>
  );
}

function Experience() {
  const { t, localize, language } = useLanguage();

  const formatPeriod = ({ startDate, endDate }) => {
    const end = endDate ? formatMonth(endDate, language) : t("experience.present");
    return `${formatMonth(startDate, language)} — ${end}`;
  };

  return (
    <Section id="experience" icon="briefcase" title={t("experience.title")}>
      <div className="flex flex-col gap-6">
        {experience.map((job) => (
          <Reveal key={job.id}>
            <ExperienceItem
              role={localize(job.role)}
              company={job.company}
              period={formatPeriod(job)}
              description={localize(job.description)}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
