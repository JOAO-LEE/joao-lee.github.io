import { DialogProject } from "@/components/ui/Projects/DialogProject/DialogProject";
import { ProjectItem } from "@/components/ui/Projects/Project/ProjectItem";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { TypeOfTech } from "@/components/ui/TechStack/TypeOfTech/TypeOfTech";
import { ProjectContext } from "@/context/Project/ProjectContext";
import { projects } from "@/data/projects";
import { useContext, useRef } from "react";
import { Link } from "react-router";
import "./Projects.css";

export function Projects() {
  const { selectedProject } = useContext(ProjectContext);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <section className="p-4 h-fit">
      <SectionTitle textContent="projects" />
      <div className="space-y-3 py-12 h-full">
        <div className="flex flex-col items-center gap-2">
          <TypeOfTech techStackTitle="what i have built" />
          <p className="font-styled-bold text-3xl">&</p>
          <TypeOfTech techStackTitle="what i am building" />
        </div>
        <ul className="grid gap-4 lg:grid-cols-2 lg:px-8">
          {projects.map(project => (
            <ProjectItem
              dialogRef={dialogRef}
              key={project.id}
              project={project}
            />
          ))}
        </ul>
      </div>
      <DialogProject dialogRef={dialogRef} selectedProject={selectedProject} />
      <div className="text-center text-xl text-yel-100 font-styled-bold underline decoration-grayish underline-offset-8">
        <Link to="/projects">see all</Link>
      </div>
    </section>
  );
}
