import NotFound from "@/components/ui/NotFound/NotFound";
import { useParams } from "react-router";
import { Project } from "@/model/Project";
import "./ProjectPage.css"
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";

export function ProjectPage() {
const [project, setProject] = useState<Project | null>(null);
const params = useParams();

useEffect(() => {
  const selectedProject = projects.find(proj => proj.id === Number(params?.id));
  if (selectedProject) {
    setProject(selectedProject);
  }
}, [project, params.id]);

// const 

  return (
    <>
      { 
        !project 
        ? 
          (
            <NotFound /> 
          )
        : 
          (
            <section className="p-4 space-y-5">
              <div className="relative text-4xl">
                {/* <span className="font-styled tracking-widest text-yel-200 project-title-shadow">{project?.name}</span> */}
                <h1 className="font-styled-bold tracking-widest project-title" data-title={project.name}>{project?.name}</h1>
              </div>
              <article className="text-xs">
                <h2 className="text-yel-100 tracking-widest font-styled text-3xl">About</h2>
                <p className="text-justify">{project?.description}</p>
              </article>
              <ul className="space-y-4">
                {
                  project?.images.map((image, index) => (
                    <li 
                    key={index}
                    >
                      <img 
                      src={image} 
                      alt=""
                      className="object-contain w-full" 
                      />
                    </li>
                  ))
                }
              </ul>
            </section>
          )
      }
    </>
  )
}
