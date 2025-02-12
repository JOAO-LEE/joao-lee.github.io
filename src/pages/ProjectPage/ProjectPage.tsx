import NotFound from "@/components/ui/NotFound/NotFound";
import {  useParams } from "react-router";
import { Project } from "@/model/Project";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import ImageSlider from "@/components/ui/ImageSlider/ImageSlider";
import { AppWindow, BracketsCurly, Gear } from "@phosphor-icons/react";
import { IconedLink } from "@/components/ui/IconedLink/IconedLink";
import { LittleTechStackItem } from "@/components/ui/TechStack/LittleTechStackItem/LittleTechStackItem";
import "./ProjectPage.css";
import {GoBackButton} from "@/components/ui/GoBackButton/GoBackButton";

export function ProjectPage() {
const [project, setProject] = useState<Project | null>(null);
const params = useParams();

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
             <GoBackButton />
              <div 
              className="text-4xl lg:text-5xl"
              >
                <h1 
                className="font-styled-bold tracking-widest project-title" 
                data-title={project.name}
                >
                  {project?.name}
                </h1>
              </div>
              <div className="space-y-4 lg:space-y-0 lg:flex lg:items-start lg:justify-between">
                <article className="about-project text-xs lg:w-1/2 lg:text-sm">
                  <h2 
                  className="text-yel-100 tracking-widest font-styled text-xl lg:text-3xl"
                  >
                    About
                  </h2>
                  <p className="text-justify">{project?.description}</p>
                </article>
                <div className="about-project text-xs space-y-2">
                  <h2 className="text-yel-100 tracking-widest font-styled text-xl lg:text-3xl">Tech Stack</h2>
                  <ul className="flex lowercase text-xs lg:text-sm gap-2 justify-between flex-wrap lg:justify-start">
                    {
                      project.techStackList
                        .map((tech, index) => (
                        <LittleTechStackItem 
                        key={index} 
                        {...tech} 
                        />
                      ))
                    }
                  </ul>
                </div>
              </div>
              <div 
              className="flex gap-4 text-xs lg:text-sm items-end lg:justify-between"
              >
                {
                  project.inDevelopment 
                  && 
                    (
                      <div className="flex gap-2 items-center border border-yel-100 px-1 py-1 h-min group hover:bg-yel-100 hover:text-blu-100 w-fit">
                        <Gear 
                        className="text-2xl text-yel-100 group-hover:animate-spin group-hover:text-blu-100"
                        />
                        <p>app is currently in development</p>
                      </div>
                    )
                }
                <div className="space-y-2">
                  <p className="font-styled-bold text-yel-100">explore the project</p>
                  <ul className={`flex gap-2 text-blu-100 ${!project.deployed ? "justify-end" : "justify-start"}`}>
                    {
                      project.deployed 
                      &&
                        (
                          <IconedLink 
                          icon={<BracketsCurly className="text-2xl" />} 
                          title='app' 
                          url={project.applicationUrl} 
                          />
                        )
                    }
                    <IconedLink 
                    icon={<AppWindow className='text-2xl'/>} 
                    title='app' 
                    url={project.applicationUrl} 
                    />
                  </ul>
                </div>
              </div>
              <ul 
              className="space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4"
              >
                {
                  project?.images
                  .map((image, index) => (
                    <ImageSlider 
                    imageSource={image} 
                    key={index}
                    />
                  ))
                }
              </ul>
            </section>
          )
      }
    </>
  )
}
