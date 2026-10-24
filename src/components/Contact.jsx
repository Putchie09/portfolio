import { useState } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const DIRECT_EMAIL = "joelputchie@gmail.com";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgepgav";

const fieldBase = `
  w-full bg-surface border border-field-border rounded-xl
  px-5 py-4
  font-normal text-text-primary placeholder-muted
  outline-none
  hover:border-accent-light
  focus:border-accent-light focus:ring-4 focus:ring-accent/30
  transition-all duration-150
`;

function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.target);
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="py-20 scroll-mt-16"
      aria-label="Contact section"
    >
      <div className="mx-auto w-full max-w-container px-6">
        <div className="flex flex-col gap-10">
          <Reveal>
            <SectionTitle icon="mail" className="mb-6">
              Get in Touch
            </SectionTitle>
            <p className="font-medium text-text-secondary text-[16px] sm:text-[18px] leading-relaxed">
              Or email me directly to:{" "}
              <a
                href={`mailto:${DIRECT_EMAIL}`}
                className="font-semibold text-accent-light underline underline-offset-4 decoration-accent-light/50 hover:text-white hover:decoration-white transition-colors duration-200 break-all"
              >
                {DIRECT_EMAIL}
              </a>
            </p>
          </Reveal>

          <Reveal delay={100}>
            {status === "success" ? (
            <div
              role="status"
              className="flex flex-col items-center justify-center min-h-[300px] gap-4 text-center rounded-xl bg-surface border border-card-border"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b6c1fc"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <p
                className="font-semibold text-text-primary"
                style={{ fontSize: "20px" }}
              >
                Your message has been sent successfully.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <label htmlFor="contact-name" className="sr-only">Your name</label>
                <input
                  id="contact-name"
                  autoComplete="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className={fieldBase}
                  style={{ fontSize: "16px" }}
                />
                <label htmlFor="contact-email" className="sr-only">Your email</label>
                <input
                  id="contact-email"
                  autoComplete="email"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className={fieldBase}
                  style={{ fontSize: "16px" }}
                />
              </div>

              <label htmlFor="contact-message" className="sr-only">Your message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Your message"
                required
                rows={8}
                className={`${fieldBase} resize-none`}
                style={{ fontSize: "16px" }}
              />

              {status === "error" && (
                <p role="alert" className="font-medium text-red-400 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-accent w-full py-4 rounded-full font-semibold cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ fontSize: "16px" }}
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
