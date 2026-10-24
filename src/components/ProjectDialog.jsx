import { useEffect, useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { CloseIcon, LockIcon } from "./icons";
import GitHubButton from "./GitHubButton";
import TechList from "./TechList";

// Case study modal built on the native <dialog>, which provides focus
// trapping, Esc to close and returning focus to the card that opened it.
function ProjectDialog({ project, onClose }) {
  const { t, localize } = useLanguage();
  const dialogRef = useRef(null);
  const title = localize(project.title);
  const hasPublicRepo = Boolean(project.github) && !project.isPrivate;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();

    // Keep the page behind the modal from scrolling.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const close = () => dialogRef.current.close();

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="case-study-title"
      onClose={onClose}
      onClick={(event) => {
        // A click on the dialog element itself is a click on the backdrop.
        if (event.target === dialogRef.current) close();
      }}
      className="case-dialog m-auto w-[min(820px,calc(100%-1.5rem))] max-h-[92vh] overflow-y-auto rounded-xl border border-card-border bg-surface p-0 text-text-primary"
    >
      {/* Sticky, zero-height row keeps the close button visible while scrolling. */}
      <div className="sticky top-0 z-20 flex h-0 justify-end">
        <button
          type="button"
          onClick={close}
          aria-label={t("projects.closeCaseStudy")}
          className="mt-4 mr-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur hover:bg-black/80 transition-colors duration-200"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="relative aspect-[16/9] w-full bg-background">
        <img
          src={project.image}
          alt={t("projects.screenshotAlt", { title })}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>

      <div className="flex flex-col gap-8 p-6 sm:p-10">
        <div className="flex flex-col gap-4">
          <span className="text-[14px] font-medium text-accent-light">
            {t("projects.caseStudy")}
          </span>
          <h2
            id="case-study-title"
            className="text-[30px] sm:text-[40px] font-bold leading-[1.1] tracking-tight text-text-primary"
          >
            {title}
          </h2>
          <p className="max-w-2xl text-[16px] sm:text-[18px] leading-relaxed text-text-secondary">
            {localize(project.description)}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {hasPublicRepo ? (
              <GitHubButton href={project.github} projectTitle={title} size="lg" />
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-black/25 px-3 py-1.5 text-[13px] font-semibold text-text-secondary">
                <LockIcon />
                {t("projects.privateRepository")}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-[15px] font-semibold text-muted">
            {t("projects.technologies")}
          </h3>
          <TechList technologies={project.technologies} />
        </div>

        {project.details?.map((detail) => (
          <div key={detail.heading.en} className="flex flex-col gap-2">
            <h3 className="text-[18px] font-semibold text-text-primary">
              {localize(detail.heading)}
            </h3>
            <p className="max-w-2xl text-[16px] leading-relaxed text-muted">
              {localize(detail.text)}
            </p>
          </div>
        ))}
      </div>
    </dialog>
  );
}

export default ProjectDialog;
