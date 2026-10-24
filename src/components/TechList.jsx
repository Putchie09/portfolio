import { useLanguage } from "../i18n/LanguageContext";

function TechList({ technologies }) {
  const { t } = useLanguage();

  return (
    <ul className="flex flex-wrap gap-2" aria-label={t("projects.technologies")}>
      {technologies.map((tech) => (
        <li
          key={tech}
          className="rounded-md border border-card-border bg-black/20 px-3 py-1 font-medium text-text-secondary text-[14px]"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

export default TechList;
