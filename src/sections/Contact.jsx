import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { profile } from "../data/profile";
import { CheckCircleIcon } from "../components/icons";
import Reveal from "../components/Reveal";
import Section from "../components/Section";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgepgav";

const FIELD_CLASSES = `
  w-full bg-surface border border-field-border rounded-xl
  px-5 py-4 text-[16px]
  font-normal text-text-primary placeholder-muted
  outline-none
  hover:border-accent-light
  focus:border-accent-light focus:ring-4 focus:ring-accent/30
  transition-all duration-150
`;

async function sendMessage(form) {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    body: new FormData(form),
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`Formspree responded with status ${response.status}`);
  }
}

function SuccessMessage({ text }) {
  return (
    <div
      role="status"
      className="flex flex-col items-center justify-center min-h-[300px] gap-4 text-center rounded-xl bg-surface border border-card-border"
    >
      <CheckCircleIcon className="text-accent-light" />
      <p className="font-semibold text-text-primary text-[20px]">{text}</p>
    </div>
  );
}

function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      await sendMessage(form);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  // Replace the browser's built-in validation bubbles (which use the browser's
  // language) with messages in the selected language.
  const validationProps = {
    onInvalid: (event) => {
      const { validity } = event.target;
      const key = validity.typeMismatch ? "email" : "required";
      event.target.setCustomValidity(t(`contact.validation.${key}`));
    },
    onInput: (event) => event.target.setCustomValidity(""),
  };

  return (
    <Section id="contact" icon="mail" title={t("contact.title")} titleClassName="mb-6">
      <div className="flex flex-col gap-10">
        <Reveal>
          <p className="font-medium text-text-secondary text-[16px] sm:text-[18px] leading-relaxed">
            {t("contact.emailPrompt")}{" "}
            <a
              href={`mailto:${profile.email}`}
              className="font-semibold text-accent-light underline underline-offset-4 decoration-accent-light/50 hover:text-white hover:decoration-white transition-colors duration-200 break-all"
            >
              {profile.email}
            </a>
          </p>
        </Reveal>

        <Reveal delay={100}>
          {status === "success" ? (
            <SuccessMessage text={t("contact.success")} />
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <label htmlFor="contact-name" className="sr-only">
                  {t("contact.namePlaceholder")}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder={t("contact.namePlaceholder")}
                  required
                  className={FIELD_CLASSES}
                  {...validationProps}
                />
                <label htmlFor="contact-email" className="sr-only">
                  {t("contact.emailPlaceholder")}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={t("contact.emailPlaceholder")}
                  required
                  className={FIELD_CLASSES}
                  {...validationProps}
                />
              </div>

              <label htmlFor="contact-message" className="sr-only">
                {t("contact.messagePlaceholder")}
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder={t("contact.messagePlaceholder")}
                required
                rows={8}
                className={`${FIELD_CLASSES} resize-none`}
                {...validationProps}
              />

              {status === "error" && (
                <p role="alert" className="font-medium text-red-400 text-sm">
                  {t("contact.error")}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-accent w-full py-4 rounded-full font-semibold text-[16px] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? t("contact.sending") : t("contact.send")}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}

export default Contact;
