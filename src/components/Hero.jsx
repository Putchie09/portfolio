const LINKEDIN_URL = "https://www.linkedin.com/in/yoel-putchie";
const GITHUB_URL = "https://github.com/Putchie09";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-background"
      aria-label="Hero section"
    >
      <div className="text-center px-6 max-w-screen-lg mx-auto">
        {/* Badge */}
        <span
          className="
            inline-block mb-6
            bg-accent/25 text-accent
            text-[16px] font-bold tracking-[0.14em] uppercase
            px-4 py-1.5 rounded-md
          "
        >
          Software Developer
        </span>

        {/*Heading */}
        <h1 className="font-bold leading-none tracking-tight mb-6 text-white text-[56px] sm:text-[80px] md:text-[110px] lg:text-[144px]">
          <span className="text-white">Yoel </span>
          <span className="text-accent">Putchie</span>
        </h1>

        {/* Tagline*/}
        <p className="font-normal text-text-secondary/80 mb-12 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
          Focused on building reliable software.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {/* LinkedIn */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              rounded-lg border-2 border-[#575E83]
              text-[15px] font-bold text-white
              hover:bg-accent/20
              transition-colors duration-200
              select-none
            "
            style={{
              width: "196px",
              height: "54px",
              animation: "glow-pulse 2.5s ease-in-out infinite",
            }}
          >
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              rounded-lg border border-white/70
              text-[15px] font-bold text-white
              hover:border-white hover:bg-white/10
              transition-colors duration-200
              select-none
            "
            style={{
              width: "196px",
              height: "54px",
            }}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
