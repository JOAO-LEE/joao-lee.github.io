import { type ReactNode, useState } from "react";
import { ProjectContext } from "../../context/Project/ProjectContext";
import type { Project } from "../../model/Project";

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [curr, setCurr] = useState<number>(0);

  const previousSlide = () =>
    setCurr(curr =>
      curr === 0 && selectedProject
        ? selectedProject.images.length - 1
        : curr - 1
    );
  const nextSlide = () =>
    setCurr(curr =>
      selectedProject && curr === selectedProject?.images?.length - 1
        ? 0
        : curr + 1
    );

  const selectProject = (project: Project | null) => {
    setSelectedProject(project);
  };

  return (
    <ProjectContext.Provider
      value={{ selectProject, selectedProject, nextSlide, previousSlide, curr }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
