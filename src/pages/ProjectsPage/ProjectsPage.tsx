import { GoBackButton } from "@/components/ui/GoBackButton/GoBackButton";
import { DialogProject } from "@/components/ui/Projects/DialogProject/DialogProject";
import { ProjectItem } from "@/components/ui/Projects/Project/ProjectItem";
import { ProjectContext } from "@/context/Project/ProjectContext";
import { projects } from "@/data/projects";
import { useContext, useRef } from "react";

export function ProjectsPage() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { selectedProject } = useContext(ProjectContext);



  return (
    <section className="p-6 flex flex-col gap-6 overflow-hidden">
      <GoBackButton />
      <h1 
      className="font-styled-bold tracking-widest project-title" 
      data-title="Projects"
      >
        Projects
      </h1>
      <ul 
      className="grid gap-4 lg:grid-cols-2 lg:px-8 lg:p"
      >
        {
          projects.map((project, index) => (
            <ProjectItem
            dialogRef={dialogRef}
            key={index} 
            project={project}
            />
          ))
        }
      </ul>
      <DialogProject 
      dialogRef={dialogRef} 
      selectedProject={selectedProject}
      />
    </section>
  )
}