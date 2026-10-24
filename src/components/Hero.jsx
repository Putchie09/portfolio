const LINKEDIN_URL = "https://www.linkedin.com/in/yoel-putchie";
const GITHUB_URL = "https://github.com/Putchie09";

function Hero() {
  return (
    <section
      id="hero"
      className="pt-36 pb-14"
      aria-label="Hero section"
    >
      <div className="mx-auto w-full max-w-container px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-8">
          {/* Avatar (initials; swap for a photo if you like) */}
          <div
            aria-hidden="true"
            className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-accent text-[#10153a] text-[40px] font-extrabold tracking-tight ring-[6px] ring-surface sm:h-36 sm:w-36 sm:text-[48px]"
          >
            YP
          </div>

          <div className="flex flex-col items-start">
            {/* Name */}
            <h1 className="mb-3 text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-[52px]">
              Yoel Putchie
            </h1>

            {/* Tagline */}
            <p className="mb-7 max-w-xl text-[18px] leading-relaxed text-muted sm:text-[21px]">
              Focused on building reliable software.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
                className="btn-accent inline-flex h-12 select-none items-center justify-center rounded-full px-8 text-[15px] font-semibold"
              >
                LinkedIn
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in a new tab)"
                className="btn-secondary inline-flex h-12 select-none items-center justify-center rounded-full px-8 text-[15px] font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-14 border-0 border-t border-card-border" />
      </div>
    </section>
  );
}

export default Hero;
