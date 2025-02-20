import { GoBackButton } from "@/components/ui/GoBackButton/GoBackButton";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";
import { DialogProject } from "@/components/ui/Projects/DialogProject/DialogProject";
import { ProjectItem } from "@/components/ui/Projects/Project/ProjectItem";
import { ProjectContext } from "@/context/Project/ProjectContext";
import { projects } from "@/data/projects";
import { useContext, useRef } from "react";
import "./ProjectsPage.css";

export function ProjectsPage() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { selectedProject } = useContext(ProjectContext);

  return (
    <section className="p-6 flex flex-col gap-6 overflow-hidden">
      <GoBackButton />
      <PageTitle textContent="Projects" />
      <div className="text-xs lg:text-lg projects-explanation-message">
        <p className="text-justify">
          This is all the projects I have done throughout the last years. I will
          be updating this list from time to time.
        </p>
        <p className="font-styled-bold color-yel-animation">
          Feel free to explore!
        </p>
      </div>
      <ul className="grid gap-4 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectItem dialogRef={dialogRef} key={index} project={project} />
        ))}
      </ul>
      <DialogProject dialogRef={dialogRef} selectedProject={selectedProject} />
    </section>
  );
}
