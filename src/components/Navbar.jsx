import { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { profile } from "../data/profile";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_ITEMS = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "techStack", href: "#techstack" },
];

// Distance scrolled before the bar turns translucent with a blur.
const SCROLL_THRESHOLD = 20;

// The three hamburger lines morph into an "X" when the menu is open.
function MenuIcon({ open }) {
  const line = "block w-6 h-[2px] bg-text-primary rounded-full";
  return (
    <>
      <span
        className={line}
        style={{
          transform: open ? "rotate(45deg) translateY(7px)" : "none",
          transition: "transform 0.3s",
        }}
      />
      <span
        className={line}
        style={{ opacity: open ? 0 : 1, transition: "opacity 0.3s" }}
      />
      <span
        className={line}
        style={{
          transform: open ? "rotate(-45deg) translateY(-7px)" : "none",
          transition: "transform 0.3s",
        }}
      />
    </>
  );
}

function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const isSolid = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 ease-in-out ${
        isSolid
          ? "bg-navbar/[0.88] backdrop-blur-[14px] border-card-border"
          : "bg-navbar border-navbar-border"
      }`}
    >
      <div className="mx-auto w-full max-w-container h-16 px-6 flex items-center justify-between">
        <a
          href="#hero"
          onClick={closeMenu}
          className="text-[17px] font-bold tracking-tight leading-none select-none"
          aria-label={t("nav.home", { name: profile.name })}
        >
          <span className="text-text-primary">{profile.name}</span>
        </a>

        <div className="flex items-center gap-3 md:gap-5">
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label={t("nav.primary")}
          >
            {NAV_ITEMS.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="py-2 text-[15px] font-medium text-muted hover:text-text-primary transition-colors duration-200"
              >
                {t(`nav.${key}`)}
              </a>
            ))}
            <a
              href="#contact"
              className="text-[15px] font-semibold btn-accent rounded-full px-5 py-2.5"
            >
              {t("nav.contact")}
            </a>
          </nav>

          <LanguageSwitcher />

          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-11 h-11 cursor-pointer"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={t("nav.toggleMenu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden flex flex-col px-6 pb-6 gap-4"
          aria-label={t("nav.mobile")}
        >
          {NAV_ITEMS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              onClick={closeMenu}
              className="py-1 text-[16px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-[15px] font-semibold btn-accent rounded-full px-4 py-2.5 text-center"
          >
            {t("nav.contact")}
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
