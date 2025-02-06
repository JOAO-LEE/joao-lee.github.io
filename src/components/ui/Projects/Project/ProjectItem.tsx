import { Project as ProjectModel } from "../../../../model/Project";
import { RefObject, useContext } from "react";
import { ProjectContext } from "../../../../context/Project/ProjectContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import "./Project.css";

export function ProjectItem({ project, dialogRef }: 
  { project: ProjectModel, dialogRef: RefObject<HTMLDialogElement> }) {
  const { selectProject } = useContext(ProjectContext);
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({threshold: 0.5})
 
  const handleProjectDisplay = () => {
    selectProject(project);
    dialogRef?.current?.showModal();
  }
  
  return (
    <div
    ref={ref}
    className="group cursor-pointer" 
    onClick={() => {
      handleProjectDisplay();
    }}
    >
      
      <div className={`relative ${isVisible ? "show-content swipe-origin-x" : "hidden-content hidden-left-x"} group-hover:scale-[1.01] transition`}>
        <img 
        src={project.images[0]} 
        alt=""
        className="object-contain" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors duration-500">
          <p className="text-2xl font-styled-bold text-yel-200 p-2 tracking-widest group-hover:opacity-0 transition-all lg:text-4xl">{project.name}</p>
          <ul className="flex gap-2 bg-blu-100 border-b-2 border-b-yel-200 p-1 group-hover:opacity-0">
            {
              project.techStackList.map((tech, index) => (
                <li key={index} className="text-yel-200 text-lg lg:text-2xl">
                  <i className={tech.iconClass}></i>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}