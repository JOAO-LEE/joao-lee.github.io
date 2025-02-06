import { useContext, useRef } from "react";
import { projects } from "@/data/projects";
import { ProjectItem } from "@/components/ui/Projects/Project/ProjectItem";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { ProjectContext } from "@/context/Project/ProjectContext";
import { DialogProject } from "@/components/ui/Projects/DialogProject/DialogProject";
import "./Projects.css";
import { TypeOfTech } from "@/components/ui/TechStack/TypeOfTech/TypeOfTech";

export function Projects() {
  const { selectedProject } = useContext(ProjectContext);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <section 
    className="p-4 h-fit"
    >
      <SectionTitle textContent="projects" /> 
      <div className="space-y-3 py-12 h-full">
        <div className="flex flex-col items-center gap-2">

          <TypeOfTech techStackTitle="what i have built"/>
          <p className="font-styled-bold text-3xl">&</p>
          <TypeOfTech techStackTitle="what i am building"/>

        </div>
        <div 
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
        </div>
      </div>
      <DialogProject 
      dialogRef={dialogRef} 
      selectedProject={selectedProject}
      />
    </section>
  )
}
