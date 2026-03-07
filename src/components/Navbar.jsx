import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "TechStack", href: "#techstack" },
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
          scrolled || menuOpen ? "rgba(52, 56, 79, 0.3)" : "#34384f",
        backdropFilter: scrolled || menuOpen ? "blur(7px)" : "none",
        WebkitBackdropFilter: scrolled || menuOpen ? "blur(9px)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out"
    >
      {/* Top bar */}
      <div className="w-full h-16 px-[30px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={closeMenu}
          className="text-[20px] font-extrabold leading-none select-none"
          aria-label="Yoel Putchie home"
        >
          <span className="text-white">Yoel </span>
          <span className="text-accent">Putchie</span>
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
              className="text-[16px] font-medium text-text-secondary hover:text-accent transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[16px] font-medium text-white border border-[#575E83] rounded-lg px-4 py-1.5 hover:border-accent hover:bg-accent/20 transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Hamburger, mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            style={{
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
              transition: "transform 0.3s",
            }}
            className="block w-6 h-[2px] bg-white rounded-full"
          />
          <span
            style={{
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s",
            }}
            className="block w-6 h-[2px] bg-white rounded-full"
          />
          <span
            style={{
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
              transition: "transform 0.3s",
            }}
            className="block w-6 h-[2px] bg-white rounded-full"
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden flex flex-col px-[30px] pb-6 gap-5"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              className="text-[16px] font-medium text-text-secondary hover:text-accent transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-[16px] font-medium text-white border border-[#575E83] rounded-lg px-4 py-2 text-center hover:border-accent hover:bg-accent/20 transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
