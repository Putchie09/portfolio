import { useLanguage } from "../i18n/LanguageContext";
import { profile } from "../data/profile";

const LINK_CLASSES =
  "inline-flex h-12 select-none items-center justify-center rounded-full px-8 text-[15px] font-semibold";

function Hero() {
  const { t, localize } = useLanguage();

  const links = [
    { label: "LinkedIn", href: profile.links.linkedin, style: "btn-accent" },
    { label: "GitHub", href: profile.links.github, style: "btn-secondary" },
  ];

  return (
    <section id="hero" aria-labelledby="hero-title" className="pt-36 pb-14">
      <div className="mx-auto w-full max-w-container px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-8">
          {/* Initials avatar; replace with an <img> to use a photo. */}
          <div
            aria-hidden="true"
            className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-accent text-accent-ink text-[40px] font-extrabold tracking-tight ring-[6px] ring-surface sm:h-36 sm:w-36 sm:text-[48px]"
          >
            {profile.initials}
          </div>

          <div className="flex flex-col items-start">
            <h1
              id="hero-title"
              className="mb-3 text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-[52px]"
            >
              {profile.name}
            </h1>

            <p className="mb-7 max-w-xl text-[18px] leading-relaxed text-muted sm:text-[21px]">
              {localize(profile.tagline)}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {links.map(({ label, href, style }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} ${t("opensInNewTab")}`}
                  className={`${style} ${LINK_CLASSES}`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="mt-14 border-0 border-t border-card-border" />
      </div>
    </section>
  );
}

export default Hero;
