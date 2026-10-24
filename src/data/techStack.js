import htmlIcon from "../assets/techstack/html.svg";
import cssIcon from "../assets/techstack/css3.svg";
import jsIcon from "../assets/techstack/javascript.svg";
import reactIcon from "../assets/techstack/react.svg";
import pythonIcon from "../assets/techstack/python.svg";
import djangoIcon from "../assets/techstack/django.svg";
import nodeIcon from "../assets/techstack/nodejs.svg";
import javaIcon from "../assets/techstack/java.svg";
import sqlServerIcon from "../assets/techstack/sqlserver.svg";
import mysqlIcon from "../assets/techstack/mysql.svg";
import dockerIcon from "../assets/techstack/docker.svg";
import gitIcon from "../assets/techstack/git.svg";

// Tools shown in the Tech Stack grid, in display order.
// brighten: true lifts logos that are too dark to see on the dark cards.

export const techStack = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React", icon: reactIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Django", icon: djangoIcon },
  { name: "Nodejs", icon: nodeIcon },
  { name: "Java", icon: javaIcon },
  { name: "SQL Server", icon: sqlServerIcon },
  { name: "MySql", icon: mysqlIcon, brighten: true },
  { name: "Docker", icon: dockerIcon },
  { name: "Git", icon: gitIcon },
];
