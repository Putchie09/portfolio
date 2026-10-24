import { LANGUAGES, useLanguage } from "../i18n/LanguageContext";

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("language.label")}
      className="flex items-center rounded-full border border-card-border bg-surface p-0.5"
    >
      {LANGUAGES.map(({ code, label, name }) => {
        const isActive = code === language;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            onClick={() => setLanguage(code)}
            aria-pressed={isActive}
            aria-label={name}
            title={name}
            className={`cursor-pointer rounded-full px-2.5 py-1 text-[13px] font-semibold transition-colors duration-200 ${
              isActive
                ? "bg-surface-hover text-text-primary"
                : "text-muted hover:text-text-primary"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
