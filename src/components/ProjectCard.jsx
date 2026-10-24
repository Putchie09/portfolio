import { useLanguage } from "../i18n/LanguageContext";
import { ArrowUpRightIcon, LockIcon } from "./icons";
import GitHubButton from "./GitHubButton";
import TechList from "./TechList";

// featured: the wide card (image left, text right on desktop).
function ProjectCard({ project, featured, onOpen }) {
  const { t, localize } = useLanguage();
  const title = localize(project.title);
  const hasPublicRepo = Boolean(project.github) && !project.isPrivate;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-card-border bg-surface outline outline-2 outline-offset-[5px] outline-transparent transition-[outline-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:outline-accent hover:shadow-[0_22px_40px_-20px_rgba(15,16,32,0.7)] has-[:focus-visible]:outline-accent ${
        featured ? "md:flex-row" : ""
      }`}
    >
      <div
        className={`relative aspect-[3/2] w-full shrink-0 overflow-hidden bg-background ${
          featured ? "md:aspect-auto md:min-h-[280px] md:w-1/2" : ""
        }`}
      >
        <img
          src={project.image}
          alt={t("projects.screenshotAlt", { title })}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* Slides up over the screenshot on hover or keyboard focus. Focus uses
            :focus-visible so it doesn't stick after closing the modal by mouse. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-3 bottom-3 flex translate-y-[calc(100%+0.75rem)] items-center justify-between rounded-lg bg-accent px-4 py-3 text-[15px] font-semibold text-accent-ink shadow-lg transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-has-[:focus-visible]:translate-y-0"
        >
          {t("projects.viewProject")}
          <ArrowUpRightIcon />
        </div>
      </div>

      <div
        className={`flex flex-1 flex-col gap-3 p-5 ${
          featured ? "md:justify-center md:p-7" : ""
        }`}
      >
        <h3
          className={`font-semibold leading-snug tracking-tight text-text-primary text-[18px] ${
            featured ? "md:text-[22px]" : ""
          }`}
        >
          {/* The ::after overlay makes the whole card clickable. */}
          <button
            type="button"
            onClick={() => onOpen(project)}
            aria-haspopup="dialog"
            className="cursor-pointer text-left focus-visible:outline-none after:absolute after:inset-0 after:rounded-xl after:content-['']"
          >
            {title}
            <span className="sr-only"> – {t("projects.openCaseStudy")}</span>
          </button>
        </h3>

        <p className="font-normal text-muted text-[15px] leading-relaxed">
          {localize(project.description)}
        </p>

        <TechList technologies={project.technologies} />

        <div className="mt-auto flex items-center gap-3 pt-3">
          {hasPublicRepo ? (
            // z-10 lifts the link above the card's clickable overlay.
            <GitHubButton
              href={project.github}
              projectTitle={title}
              className="relative z-10"
            />
          ) : (
            <span className="text-[13px] font-medium text-muted inline-flex items-center gap-1.5">
              <LockIcon />
              {t("projects.privateRepository")}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
