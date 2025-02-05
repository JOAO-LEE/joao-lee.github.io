import NotFound from "@/components/ui/NotFound/NotFound";
import { useNavigate, useParams } from "react-router";
import { Project } from "@/model/Project";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import "./ProjectPage.css";
import ImageSlider from "@/components/ui/ImageSlider/ImageSlider";
import { ArrowLeft } from "@phosphor-icons/react";

export function ProjectPage() {
const [project, setProject] = useState<Project | null>(null);
const params = useParams();
const navigate = useNavigate()

useEffect(() => {
  const selectedProject = projects.find(proj => proj.id === Number(params?.id));
  if (selectedProject) {
    setProject(selectedProject);
  }
}, [project, params.id]);

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
            <section className="p-4 space-y-5 overflow-hidden">
              <button className="flex items-center gap-2 border-b border-b-grayish p-1 text-yel-100" onClick={() => navigate(-1) }>
                <ArrowLeft className="text-2xl"/>
                <p className="font-titles">Go back</p>
              </button>
              <div className="text-4xl">
                <h1 className="font-styled-bold tracking-widest project-title" data-title={project.name}>{project?.name}</h1>
              </div>
              <article className="about-project text-xs">
                <h2 className="text-yel-100 tracking-widest font-styled text-xl">About</h2>
                <p className="text-justify">{project?.description}</p>
              </article>
              <ul className="space-y-5">
                {
                  project?.images.map((image, index) => (
                    <ImageSlider imageSource={image} key={index}/>
               
                  ))
                }
              </ul>
              
            </section>
          )
      }
    </>
  )
}
