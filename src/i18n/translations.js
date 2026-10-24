// Interface strings (labels, buttons, messages, aria labels).
// Portfolio content lives in src/data; only UI text belongs here.
// Both languages must have the same keys. Use {name} placeholders for values
// that are filled in at runtime: t("footer.copyright", { year: 2026 }).

export const translations = {
  en: {
    skipToContent: "Skip to content",
    opensInNewTab: "(opens in a new tab)",
    language: {
      label: "Language",
    },
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      techStack: "Tech Stack",
      contact: "Contact",
      home: "{name} home",
      primary: "Primary navigation",
      mobile: "Mobile navigation",
      toggleMenu: "Toggle menu",
    },
    about: {
      title: "About Myself",
      education: "Education",
    },
    experience: {
      title: "Experience",
      present: "Present",
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View project",
      openCaseStudy: "open case study",
      closeCaseStudy: "Close case study",
      caseStudy: "Case study",
      technologies: "Technologies",
      privateRepository: "Private repository",
      screenshotAlt: "Screenshot of {title}",
      viewOnGitHub: "View {title} on GitHub (opens in a new tab)",
    },
    techStack: {
      title: "Tech Stack",
    },
    contact: {
      title: "Get in Touch",
      emailPrompt: "Or email me directly to:",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      send: "Send message",
      sending: "Sending...",
      success: "Your message has been sent successfully.",
      error: "Something went wrong. Please try again.",
      validation: {
        required: "Please fill out this field.",
        email: "Please enter a valid email address.",
      },
    },
    footer: {
      copyright: "© {year} {name} | {role}.",
    },
  },

  es: {
    skipToContent: "Saltar al contenido",
    opensInNewTab: "(se abre en una pestaña nueva)",
    language: {
      label: "Idioma",
    },
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      techStack: "Tecnologías",
      contact: "Contacto",
      home: "Inicio de {name}",
      primary: "Navegación principal",
      mobile: "Navegación móvil",
      toggleMenu: "Abrir o cerrar el menú",
    },
    about: {
      title: "Sobre mí",
      education: "Educación",
    },
    experience: {
      title: "Experiencia",
      present: "Actualidad",
    },
    projects: {
      title: "Proyectos destacados",
      viewProject: "Ver proyecto",
      openCaseStudy: "abrir caso de estudio",
      closeCaseStudy: "Cerrar caso de estudio",
      caseStudy: "Caso de estudio",
      technologies: "Tecnologías",
      privateRepository: "Repositorio privado",
      screenshotAlt: "Captura de pantalla de {title}",
      viewOnGitHub: "Ver {title} en GitHub (se abre en una pestaña nueva)",
    },
    techStack: {
      title: "Tecnologías",
    },
    contact: {
      title: "Contáctame",
      emailPrompt: "O escríbeme directamente a:",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu correo electrónico",
      messagePlaceholder: "Tu mensaje",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "Tu mensaje se envió correctamente.",
      error: "Algo salió mal. Inténtalo de nuevo.",
      validation: {
        required: "Completa este campo.",
        email: "Ingresa un correo electrónico válido.",
      },
    },
    footer: {
      copyright: "© {year} {name} | {role}.",
    },
  },
};
