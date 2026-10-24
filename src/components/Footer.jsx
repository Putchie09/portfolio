import { useLanguage } from "../i18n/LanguageContext";
import { profile } from "../data/profile";

function Footer() {
  const { t, localize } = useLanguage();

  return (
    <footer className="py-12 border-t border-card-border">
      <div className="mx-auto max-w-container px-6 text-center">
        <p className="text-muted text-sm">
          {t("footer.copyright", {
            year: new Date().getFullYear(),
            name: profile.name,
            role: localize(profile.role),
          })}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
