import { useLanguage } from "../i18n/LanguageContext";
import { techStack } from "../data/techStack";
import Reveal from "../components/Reveal";
import Section from "../components/Section";

function TechCard({ name, icon, brighten }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-4 rounded-xl bg-surface border border-card-border w-full aspect-square sm:aspect-[183/158] transition-colors duration-200 hover:bg-surface-hover hover:border-accent/60">
      <img
        src={icon}
        alt=""
        className={`w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] lg:w-[44px] lg:h-[44px] object-contain ${
          brighten ? "brightness-[2.2] saturate-150" : ""
        }`}
      />
      <span className="font-medium text-text-secondary text-[14px]">{name}</span>
    </div>
  );
}

function TechStack() {
  const { t } = useLanguage();

  return (
    <Section id="techstack" icon="layers" title={t("techStack.title")}>
      <ul className="grid grid-cols-2 min-[480px]:grid-cols-4 gap-3 sm:gap-4">
        {techStack.map((tech, index) => (
          <Reveal as="li" key={tech.name} delay={(index % 6) * 50}>
            <TechCard {...tech} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export default TechStack;
