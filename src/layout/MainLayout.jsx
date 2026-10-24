import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { profile } from "../data/profile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomScrollbar from "../components/CustomScrollbar";

function MainLayout({ children }) {
  const { t, localize } = useLanguage();
  const role = localize(profile.role);

  useEffect(() => {
    document.title = `${profile.name} | ${role}`;
  }, [role]);

  return (
    <div className="min-h-screen bg-background font-sans text-text-primary">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10000] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-ink"
      >
        {t("skipToContent")}
      </a>

      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <CustomScrollbar />
    </div>
  );
}

export default MainLayout;
