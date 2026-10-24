import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#techstack" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      style={{
        backgroundColor:
          scrolled || menuOpen ? "rgba(24, 26, 34, 0.88)" : "rgba(24, 26, 34, 1)",
        backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
        borderBottom:
          scrolled || menuOpen
            ? "1px solid #343949"
            : "1px solid #2a2e3b",
      }}
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out"
    >
      {/* Top bar */}
      <div className="mx-auto w-full max-w-container h-16 px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={closeMenu}
          className="text-[17px] font-bold tracking-tight leading-none select-none"
          aria-label="Yoel Putchie home"
        >
          <span className="text-text-primary">Yoel Putchie</span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="py-2 text-[15px] font-medium text-muted hover:text-text-primary transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[15px] font-semibold btn-accent rounded-full px-5 py-2.5"
          >
            Contact
          </a>
        </nav>

        {/* Hamburger, mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-11 h-11 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span
            style={{
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
              transition: "transform 0.3s",
            }}
            className="block w-6 h-[2px] bg-text-primary rounded-full"
          />
          <span
            style={{
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s",
            }}
            className="block w-6 h-[2px] bg-text-primary rounded-full"
          />
          <span
            style={{
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
              transition: "transform 0.3s",
            }}
            className="block w-6 h-[2px] bg-text-primary rounded-full"
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden flex flex-col px-6 pb-6 gap-4"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              className="py-1 text-[16px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-[15px] font-semibold btn-accent rounded-full px-4 py-2.5 text-center"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
