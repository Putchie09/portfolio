import { useState } from "react";

const DIRECT_EMAIL = "joelputchie@gmail.com";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgepgav";

const fieldBase = `
  w-full bg-[#34384f] border border-[#575E83] rounded-lg
  px-4 py-3
  font-medium text-[#F8F8F8] placeholder-[#F8F8F8]/40
  outline-none
  focus:border-[#CFD6FF]
  transition-colors duration-150
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
      className="bg-background pt-12 pb-40 sm:py-40"
      aria-label="Contact section"
    >
      <div className="mx-auto w-full max-w-[1232px] px-[30px]">
        <div className="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-8">
          <div className="flex-1">
            <div className="mb-10">
              <h2 className="font-extrabold text-white leading-none text-[40px] sm:text-[56px] lg:text-[72px]">
                Get in
              </h2>
              <div className="relative inline-block">
                <h2 className="font-extrabold text-accent text-[40px] sm:text-[56px] lg:text-[72px]">
                  Touch
                </h2>
                <span
                  className="absolute left-0 block bg-accent rounded-full"
                  style={{ bottom: "-10px", width: "72px", height: "4px" }}
                />
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-1">
              <span className="font-semibold text-[#F8F8F8] text-[15px] sm:text-[18px] lg:text-[20px]">
                Or email me directly to:
              </span>
              <a
                href={`mailto:${DIRECT_EMAIL}`}
                className="font-semibold text-accent hover:underline text-[15px] sm:text-[18px] lg:text-[20px]"
              >
                {DIRECT_EMAIL}
              </a>
            </div>
          </div>

          <div
            className="w-full lg:max-w-[618px] bg-[#404560] border border-[#575E83] rounded-lg p-8"
            style={{ boxShadow: "0 0 4px rgba(0,0,0,0.1)" }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center min-h-[300px] gap-4 text-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9b6bff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p
                  className="font-semibold text-[#F8F8F8]"
                  style={{ fontSize: "20px" }}
                >
                  Your message has been sent successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className={fieldBase}
                    style={{ fontSize: "16px" }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className={fieldBase}
                    style={{ fontSize: "16px" }}
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your message"
                  required
                  rows={9}
                  className={`${fieldBase} resize-none`}
                  style={{ fontSize: "16px" }}
                />

                {status === "error" && (
                  <p className="font-medium text-red-400 text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="
                    w-full py-4 rounded-lg
                    bg-[#34384f] border border-[#575E83]
                    font-semibold text-white tracking-widest
                    hover:border-white
                    transition-colors duration-150
                    cursor-pointer
                    disabled:opacity-60 disabled:cursor-not-allowed
                  "
                  style={{ fontSize: "16px" }}
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
