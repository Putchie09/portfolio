# Yoel Putchie — Portfolio

This is my personal portfolio website where I showcase my projects, skills, and experience as a junior developer.

## Tech Stack

This project was built using the following technologies:

- **React** – Frontend library for building the user interface
- **Vite** – Fast development build tool and bundler
- **JavaScript** – Main programming language
- **Tailwind CSS** – Utility-first CSS framework for styling

The site is available in English and Spanish, with a language switcher in the navbar.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Project structure

```text
src/
├── data/          Portfolio content (edit these to update the site)
│   ├── profile.js     name, role, tagline, email, social links
│   ├── about.js       intro, bio, education
│   ├── experience.js  jobs and internships
│   ├── projects.js    projects shown in the grid and case study modal
│   └── techStack.js   tools shown in the Tech Stack grid
├── i18n/
│   ├── translations.js    interface text (buttons, labels, messages) in en/es
│   └── LanguageContext.jsx language state, t() and localize() helpers
├── sections/      One component per page section (Hero, About, ...)
├── components/    Shared pieces (Navbar, Footer, ProjectCard, icons, ...)
├── layout/        Page shell: navbar, footer, skip link, page title
├── pages/         Home page that lists the sections in order
└── assets/        Images and logos
```

## Editing content

Text that changes with the language is written as `{ en: "...", es: "..." }`.
Always fill in both.

- **About:** edit `src/data/about.js`. Add a school by adding an object to `education`.
- **Experience:** add an object to the top of the array in `src/data/experience.js`.
  Dates use `"YYYY-MM"` and are formatted automatically; use `endDate: null` for a current job.
- **Projects:** add an object to `src/data/projects.js` and import its image at the top
  of the file. The first project is shown as the wide featured card. The comment at the
  top of the file lists every field.
- **Interface text:** edit `src/i18n/translations.js`. The `en` and `es` objects must keep
  the same keys. Components read these with `t("section.key")`.