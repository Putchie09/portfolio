import supplierPortalImg from "../assets/projects/supplier-portal.webp";
import dashboardImg from "../assets/projects/time-dashboard.webp";
import posImg from "../assets/projects/pos-system.webp";
import spaceInvadersImg from "../assets/projects/space-invaders.webp";
import mazeImg from "../assets/projects/maze-game.webp";

// Projects in display order; the first one is shown as the wide featured card.
//
// Shape of a project:
//   id           unique string
//   title        { en, es }
//   description  { en, es }
//   technologies string[]      (names are not translated)
//   image        imported image
//   github       repository URL, or null
//   isPrivate    true when the code can't be shown (optional)
//   details      optional extra blocks for the case study modal:
//                [{ heading: { en, es }, text: { en, es } }]

export const projects = [
  {
    id: "supplier-portal",
    title: {
      en: "Supplier Portal – Compre Bien Supermercados",
      es: "Portal de Proveedores – Compre Bien Supermercados",
    },
    description: {
      en: "Supplier management portal for a Costa Rican retail chain: contracts, purchase orders, meetings and profile change requests.",
      es: "Portal de gestión de proveedores para una cadena minorista costarricense: contratos, órdenes de compra, reuniones y solicitudes de cambio de perfil.",
    },
    technologies: ["Nestjs", ".Net", "Blazor", "Sql server"],
    image: supplierPortalImg,
    github: null,
    isPrivate: true,
  },
  {
    id: "time-tracking-dashboard",
    title: {
      en: "Time Tracking Dashboard",
      es: "Panel de registro de horas",
    },
    description: {
      en: "System to manage hours worked in a project.",
      es: "Sistema para gestionar las horas trabajadas en un proyecto.",
    },
    technologies: ["Django", "MySql", "CSS"],
    image: dashboardImg,
    github: "https://github.com/Putchie09/Time_Tracking_Dashboard",
  },
  {
    id: "pos-system",
    title: {
      en: "Point of Sale & inventory management",
      es: "Punto de venta y gestión de inventario",
    },
    description: {
      en: "Point of sale system for a generic technology company.",
      es: "Sistema de punto de venta para una empresa de tecnología genérica.",
    },
    technologies: ["Django", "MySql", "CSS"],
    image: posImg,
    github: "https://github.com/Putchie09/POS_System",
  },
  {
    id: "space-invaders",
    title: {
      en: "Space Invaders",
      es: "Space Invaders",
    },
    description: {
      en: "Replica of the Space Invaders video game with data persistence.",
      es: "Réplica del videojuego Space Invaders con persistencia de datos.",
    },
    technologies: ["Java", "MVC", "Sockets"],
    image: spaceInvadersImg,
    github: "https://github.com/Putchie09/Space_Invaders_Replica",
  },
  {
    id: "maze-solver",
    title: {
      en: "Maze Solver",
      es: "Solucionador de laberintos",
    },
    description: {
      en: "Maze solver using DFS and BFS algorithms.",
      es: "Solucionador de laberintos usando los algoritmos DFS y BFS.",
    },
    technologies: ["Java", "JSON", "Swing"],
    image: mazeImg,
    github: "https://github.com/Putchie09/MazeSolver",
  },
];
