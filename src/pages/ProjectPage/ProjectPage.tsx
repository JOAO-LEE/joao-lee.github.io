import NotFound from "@/components/ui/NotFound/NotFound";
import { useNavigate, useParams } from "react-router";
import { Project } from "@/model/Project";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import "./ProjectPage.css";
import ImageSlider from "@/components/ui/ImageSlider/ImageSlider";
import { ArrowLeft } from "@phosphor-icons/react";
import ProjectActions from "@/components/ui/Projects/ProjectActions/ProjectActions";

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
            <section className="p-4 flex flex-col gap-6 overflow-hidden">
              <button className="flex items-center gap-2  p-1 text-yel-100" onClick={() => navigate(-1) }>
                <ArrowLeft className="text-2xl"/>
                <p className="font-titles underline underline-offset-8 decoration-grayish">Go back</p>
              </button>
              <div className="text-4xl">
                <h1 className="font-styled-bold tracking-widest project-title" data-title={project.name}>{project?.name}</h1>
              </div>
              <div className="flex justify-end project-actions">
                <div className="space-y-1">
                  <p className="font-styled-bold text-xs text-center">explore the project</p>
                  <ProjectActions 
                  applicationUrl={project.applicationUrl}
                  githubRepository={project.githubRepository}
                  deployed={project.deployed}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <article className="about-project text-xs">
                  <h2 className="text-yel-100 tracking-widest font-styled text-xl">About</h2>
                  <p className="text-justify">{project?.description}</p>
                </article>
                <article className="about-project text-xs space-y-2">
                  <h2 className="text-yel-100 tracking-widest font-styled text-xl">Tech Stack</h2>
                  <p>This project was created using</p>
                  <ul className="flex lowercase text-xs gap-2 justify-between flex-wrap">
                  {
                    project.techStackList
                      .map((techStack, index) => (
                        <li 
                          key={index}
                          className="flex items-center gap-1 bg-yel-100  text-blu-100 p-1"
                          >
                            <i className={techStack.iconClass}></i>
                            <span className="bg-yel-100 ">{techStack.name}</span>
                          </li>
                    ))
                  }
                </ul>
                </article>
              </div>
              <ul className="space-y-5">
                {
                  project?.images
                  .map((image, index) => (
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
