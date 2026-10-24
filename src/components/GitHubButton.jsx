import { useLanguage } from "../i18n/LanguageContext";
import { GitHubIcon } from "./icons";

const SIZE_CLASSES = {
  sm: "h-11 px-5 text-[14px] border border-accent-light/60 text-accent-light hover:bg-accent hover:text-accent-ink hover:border-accent",
  lg: "h-12 px-7 text-[15px] btn-accent",
};

function GitHubButton({ href, projectTitle, size = "sm", className = "" }) {
  const { t } = useLanguage();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("projects.viewOnGitHub", { title: projectTitle })}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 ${SIZE_CLASSES[size]} ${className}`}
    >
      <GitHubIcon />
      GitHub
    </a>
  );
}

export default GitHubButton;
