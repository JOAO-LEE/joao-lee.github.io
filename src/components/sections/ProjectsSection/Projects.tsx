import { useContext, useRef } from "react";
import { projects } from "@/data/projects";
import { ProjectItem } from "@/components/ui/Projects/Project/ProjectItem";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { ProjectContext } from "@/context/Project/ProjectContext";
import { DialogProject } from "@/components/ui/Projects/DialogProject/DialogProject";
import "./Projects.css";

export function Projects() {
  const { selectedProject } = useContext(ProjectContext);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <section 
    className="p-4"
    >
      <SectionTitle textContent="projects" /> 
      <div 
      className="flex flex-col gap-10"
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
      </div>
      <DialogProject 
      dialogRef={dialogRef} 
      selectedProject={selectedProject}
      />
    </section>
  )
}
