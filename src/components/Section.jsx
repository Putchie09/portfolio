import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

// Shared page section: anchor id, centered container and an animated title.
// The title doubles as the section's accessible name (aria-labelledby).
function Section({ id, icon, title, titleClassName = "mb-10", children }) {
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className="py-20 scroll-mt-16">
      <div className="mx-auto w-full max-w-container px-6">
        <Reveal className={titleClassName}>
          <SectionTitle id={titleId} icon={icon}>
            {title}
          </SectionTitle>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export default Section;
