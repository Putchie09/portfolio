import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

/* ---------- icons ---------- */
function LockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  )
}

function ArrowUpRightIcon({ className }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="8 7 17 7 17 16" />
    </svg>
  )
}

/* ---------- small shared pieces ---------- */
function TechList({ technologies }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {technologies.map((tech) => (
        <li
          key={tech}
          className="rounded-md border border-card-border bg-black/20 px-3 py-1 font-medium text-text-secondary text-[14px]"
        >
          {tech}
        </li>
      ))}
    </ul>
  )
}

function PrivateBadge({ className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-card-border bg-black/25 px-3 py-1.5 text-[13px] font-semibold text-text-secondary ${className}`}
    >
      <LockIcon />
      Private repository
    </span>
  )
}

function GitHubButton({ href, title, size = 'sm', className = '' }) {
  const sizes =
    size === 'lg'
      ? 'h-12 px-7 text-[15px] btn-accent'
      : 'h-11 px-5 text-[14px] border border-accent-light/60 text-accent-light hover:bg-accent hover:text-[#10153a] hover:border-accent'
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${title} on GitHub (opens in a new tab)`}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 ${sizes} ${className}`}
    >
      <GitHubIcon />
      GitHub
    </a>
  )
}

/* ---------- case study dialog ---------- */
function CaseStudyDialog({ project, onClose }) {
  const ref = useRef(null)
  const { title, description, technologies, image, github, isPrivate, details } =
    project
  const hasRepo = Boolean(github) && !isPrivate

  useEffect(() => {
    const dialog = ref.current
    if (dialog && !dialog.open) dialog.showModal()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  return (
    <dialog
      ref={ref}
      aria-labelledby="case-study-title"
      onClose={onClose}
      onClick={(e) => {
        /* click on the backdrop closes the dialog */
        if (e.target === ref.current) ref.current.close()
      }}
      className="case-dialog m-auto w-[min(820px,calc(100%-1.5rem))] max-h-[92vh] overflow-y-auto rounded-xl border border-card-border bg-surface p-0 text-text-primary"
    >
      {/* Close button (stays visible while scrolling) */}
      <div className="sticky top-0 z-20 flex h-0 justify-end">
        <button
          type="button"
          onClick={() => ref.current.close()}
          aria-label="Close case study"
          className="mt-4 mr-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur hover:bg-black/80 transition-colors duration-200"
        >
          <CloseIcon />
        </button>
      </div>

      {/* Image */}
      <div className="relative aspect-[16/9] w-full bg-background">
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-8 p-6 sm:p-10">
        <div className="flex flex-col gap-4">
          <span className="text-[14px] font-medium text-accent-light">
            Case study
          </span>
          <h2
            id="case-study-title"
            className="text-[30px] sm:text-[40px] font-bold leading-[1.1] tracking-tight text-text-primary"
          >
            {title}
          </h2>
          <p className="max-w-2xl text-[16px] sm:text-[18px] leading-relaxed text-text-secondary">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {hasRepo ? (
              <GitHubButton href={github} title={title} size="lg" />
            ) : (
              <PrivateBadge />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-[15px] font-semibold text-muted">
            Technologies
          </h3>
          <TechList technologies={technologies} />
        </div>

        {/* Optional extra sections: add a "details" array to a project in src/data/projects.js */}
        {Array.isArray(details) &&
          details.map((d) => (
            <div key={d.heading} className="flex flex-col gap-2">
              <h3 className="text-[18px] font-semibold text-text-primary">
                {d.heading}
              </h3>
              <p className="max-w-2xl text-[16px] leading-relaxed text-muted">
                {d.text}
              </p>
            </div>
          ))}

      </div>
    </dialog>
  )
}

/* ---------- project card ---------- */
function ProjectCard({ project, featured, onOpen }) {
  const { title, description, technologies, image, github, isPrivate } = project
  const hasRepo = Boolean(github) && !isPrivate

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-card-border bg-surface outline outline-2 outline-offset-[5px] outline-transparent transition-[outline-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:outline-accent hover:shadow-[0_22px_40px_-20px_rgba(15,16,32,0.7)] has-[:focus-visible]:outline-accent ${
        featured ? 'md:flex-row' : ''
      }`}
    >
      {/* Image: fills the whole top area */}
      <div
        className={`relative aspect-[3/2] w-full shrink-0 overflow-hidden bg-background ${
          featured ? 'md:aspect-auto md:min-h-[280px] md:w-1/2' : ''
        }`}
      >
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* Bar that slides up over the screenshot on hover */}
        <div
          aria-hidden="true"
          className="absolute inset-x-3 bottom-3 flex translate-y-[calc(100%+0.75rem)] items-center justify-between rounded-lg bg-accent px-4 py-3 text-[15px] font-semibold text-[#10153a] shadow-lg transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-has-[:focus-visible]:translate-y-0"
        >
          View project
          <ArrowUpRightIcon />
        </div>
      </div>

      {/* Text */}
      <div
        className={`flex flex-1 flex-col gap-3 p-5 ${
          featured ? 'md:justify-center md:p-7' : ''
        }`}
      >
        <h3
          className={`font-semibold leading-snug tracking-tight text-text-primary text-[18px] ${
            featured ? 'md:text-[22px]' : ''
          }`}
        >
          {/* the whole card is clickable through this button's ::after */}
          <button
            type="button"
            onClick={() => onOpen(project)}
            aria-haspopup="dialog"
            className="cursor-pointer text-left focus-visible:outline-none after:absolute after:inset-0 after:rounded-xl after:content-['']"
          >
            {title}
            <span className="sr-only"> – open case study</span>
          </button>
        </h3>

        <p className="font-normal text-muted text-[15px] leading-relaxed">
          {description}
        </p>

        <TechList technologies={technologies} />

        {/* Actions: GitHub is its own button, above the clickable card */}
        <div className="mt-auto flex items-center gap-3 pt-3">
          {hasRepo ? (
            <GitHubButton
              href={github}
              title={title}
              className="relative z-10"
            />
          ) : (
            <span className="text-[13px] font-medium text-muted inline-flex items-center gap-1.5">
              <LockIcon />
              Private repository
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

/* ---------- section ---------- */
function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section
      id="projects"
      className="py-20 scroll-mt-16"
      aria-label="Featured projects section"
    >
      <div className="mx-auto w-full max-w-container px-6">
        <Reveal className="mb-10">
          <SectionTitle icon="star">
            Featured Projects
          </SectionTitle>
        </Reveal>

        {/* 2 columns; the first project spans both */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {projects.map((project, i) => {
            const featured = i === 0
            return (
              <Reveal
                key={project.id}
                delay={featured ? 0 : ((i - 1) % 2) * 100}
                className={featured ? 'md:col-span-2' : ''}
              >
                <ProjectCard
                  project={project}
                  featured={featured}
                  onOpen={setActive}
                />
              </Reveal>
            )
          })}
        </div>
      </div>

      {active && (
        <CaseStudyDialog project={active} onClose={() => setActive(null)} />
      )}
    </section>
  )
}

export default Projects
