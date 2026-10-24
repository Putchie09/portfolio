import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectDialog from "../components/ProjectDialog";
import Reveal from "../components/Reveal";
import Section from "../components/Section";

function Projects() {
  const { t } = useLanguage();
  const [openProject, setOpenProject] = useState(null);

  return (
    <Section id="projects" icon="star" title={t("projects.title")}>
      {/* Two columns; the first project spans both. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
        {projects.map((project, index) => {
          const featured = index === 0;
          return (
            <Reveal
              key={project.id}
              // Cards in the same row reveal slightly staggered.
              delay={featured ? 0 : ((index - 1) % 2) * 100}
              className={featured ? "md:col-span-2" : ""}
            >
              <ProjectCard project={project} featured={featured} onOpen={setOpenProject} />
            </Reveal>
          );
        })}
      </div>

      {openProject && (
        <ProjectDialog project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </Section>
  );
}

export default Projects;
