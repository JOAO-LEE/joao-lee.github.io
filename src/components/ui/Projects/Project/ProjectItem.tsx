import { Project as ProjectModel } from "../../../../model/Project";
import { RefObject, useContext } from "react";
// import { projects } from "../../../../data/projects";
import "./Project.css";
import { ProjectContext } from "../../../../context/Project/ProjectContext";

export function ProjectItem({ project, dialogRef }: 
  { project: ProjectModel, dialogRef: RefObject<HTMLDialogElement> }) {
  const {selectProject} = useContext(ProjectContext);

  const handleProjectDisplay = () => {
    selectProject(project);
    dialogRef?.current?.showModal();
  }
  
  return (
    <div 
    onClick={() => {
      handleProjectDisplay();
    }}
    >
      <div className="relative">
        <img 
        src={project.images[0]} 
        alt=""
        className="" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
          <p className="text-2xl font-styled-bold text-yel-200 p-2 tracking-widest">{project.name}</p>
          <ul className="flex gap-2 bg-blu-100 border-b-2 border-b-yel-200 p-1">
            {
              project.techStackList.map((tech, index) => (
                <li key={index} className="text-yel-200 text-lg">
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
    // </Link>
    // <Link
    // to={`projects/`}
    // key={index} 
    // className="border border-yel-200"
    // >
    // bg-black/30 hover:bg-black/60 transition-all duration-500 w-full border border-grayish p-4 space-y-2 group hover:scale-[1.02] shadow-xl hover:shadow-2xl
    // {/* <div 
// className="flex justify-between items-center space-y-2"
// >
//   <p 
//   className="text-lg 2xl:text-3xl text-grayish group-hover:text-pal-orange-100 project-name group-hover:after:project-name-sub transition-all duration-500"
//   >
//     {project.name}
//   </p>
//   {/* */}
// </div>
// <div className="flex gap-2 p-1">
//   <img 
//   src={project.image} 
//   alt="" 
//   className="size-32 sm:size-36 md:size-48 lg:size-60 object-contain rounded-lg" 
//   />
//   {/* <div className="flex flex-col text-justify gap-3">
//     <div className="min-h-[50%]">
//       <p 
//         className="text-xs sm:text-sm"
//         >
//           {project.description}
//         </p> 
//     </div>
//     <ul 
//     className="flex gap-1 lowercase text-[0.6rem] md:text-xs flex-wrap"
//     >
//       {
//         project.techStack
//           .map((tech, i) => (
//             <li 
//             key={i}
//             className="bg-pal-orange-100 p-1 rounded-xl text-pal-purple-800 hover:text-grayish transition duration-500"
//             >
//               #{tech}
//             </li>
//         ))
//       }
//     </ul>
//   </div> */}
// </div> */}