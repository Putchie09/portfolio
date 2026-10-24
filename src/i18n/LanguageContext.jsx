import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

// Shown in their own language on purpose, so visitors can always find theirs.
export const LANGUAGES = [
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
];

const DEFAULT_LANGUAGE = "en";
const STORAGE_KEY = "portfolio-language";
const SUPPORTED_CODES = LANGUAGES.map(({ code }) => code);

// localStorage can throw (private mode, blocked storage), so it is optional.
function readStoredLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_CODES.includes(stored) ? stored : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // The choice still applies for this visit.
  }
}

// Resolves a dotted key ("contact.send") and fills {placeholders}.
function translate(dictionary, key, values) {
  const text = key.split(".").reduce((node, part) => node?.[part], dictionary);

  if (typeof text !== "string") {
    if (import.meta.env.DEV) console.warn(`Missing translation: "${key}"`);
    return key;
  }
  if (!values) return text;
  return text.replace(/\{(\w+)\}/g, (match, name) => values[name] ?? match);
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(readStoredLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    storeLanguage(language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key, values) => translate(translations[language], key, values),
      // Picks the current language from a bilingual content field: { en, es }.
      localize: (field) => field[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return context;
}
