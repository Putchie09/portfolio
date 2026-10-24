import { useLanguage } from "../i18n/LanguageContext";
import { about } from "../data/about";
import { BookIcon } from "../components/icons";
import Reveal from "../components/Reveal";
import Section from "../components/Section";

function EducationCard({ years, title, institution }) {
  return (
    <div className="flex items-start gap-4 w-full h-full rounded-xl bg-surface border border-card-border p-6">
      <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-accent/15 ring-1 ring-accent-light/25 text-accent-light">
        <BookIcon />
      </span>

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
  );
}

function About() {
  const { t, localize } = useLanguage();

  return (
    <Section id="about" icon="user" title={t("about.title")}>
      <div className="flex flex-col gap-10">
        <Reveal className="flex flex-col gap-5">
          <p className="font-medium text-text-primary text-[18px] sm:text-[20px] leading-relaxed">
            {localize(about.intro)}
          </p>
          <p className="font-normal text-text-secondary text-[16px] sm:text-[18px] leading-relaxed max-w-[60ch]">
            {localize(about.bio)}
          </p>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2" aria-label={t("about.education")}>
          {about.education.map((item, index) => (
            <Reveal as="li" key={item.id} delay={100 + index * 100} className="h-full">
              <EducationCard
                years={item.years}
                title={localize(item.title)}
                institution={localize(item.institution)}
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default About;
