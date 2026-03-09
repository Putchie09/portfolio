import attendanceImg from "../assets/projects/attendance-system.png";
import dashboardImg from "../assets/projects/time-dashboard.png";
import posImg from "../assets/projects/pos-system.png";
import spaceInvadersImg from "../assets/projects/space-invaders.png";
import mazeImg from "../assets/projects/maze-game.png";

export const projects = [
  {
    id: 1,
    title: "Time Tracking Dashboard",
    description: "System to manage hours worked in a project.",
    technologies: ["Django", "MySql", "CSS"],
    image: dashboardImg,
    github: "https://github.com/Putchie09/Time_Tracking_Dashboard",
  },
  {
    id: 2,
    title: "Point of Sale & inventory management",
    description: "Point of sale system for a generic technology company.",
    technologies: ["Django", "MySql", "CSS"],
    image: posImg,
    github: "https://github.com/Putchie09/POS_System",
  },
  {
    id: 3,
    title: "Space Invaders",
    description:
      "Replica of the Space Invaders video game with data persistence.",
    technologies: ["Java", "MVC", "Sockets"],
    image: spaceInvadersImg,
    github: "https://github.com/Putchie09/Space_Invaders_Replica",
  },
  {
    id: 4,
    title: "Maze Solver",
    description: "Maze solver using DFS and BFS algorithms.",
    technologies: ["Java", "JSON", "Swing"],
    image: mazeImg,
    github: "https://github.com/Putchie09/MazeSolver",
  },
];
