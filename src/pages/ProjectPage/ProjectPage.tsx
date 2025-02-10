import NotFound from "@/components/ui/NotFound/NotFound";
import { Link, useNavigate, useParams } from "react-router";
import { Project } from "@/model/Project";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import "./ProjectPage.css";
import ImageSlider from "@/components/ui/ImageSlider/ImageSlider";
import { AppWindow, ArrowLeft, BracketsCurly, Gear } from "@phosphor-icons/react";

export function ProjectPage() {
const [project, setProject] = useState<Project | null>(null);
const params = useParams();
const navigate = useNavigate();

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
              <button className="flex items-center gap-2 p-1 text-yel-100" onClick={() => navigate(-1) }>
                <ArrowLeft className="text-2xl"/>
                <p className="font-titles underline underline-offset-8 decoration-grayish">Go back</p>
              </button>
              <div className="text-4xl lg:text-5xl">
                <h1 className="font-styled-bold tracking-widest project-title" data-title={project.name}>{project?.name}</h1>
              </div>
              <div className="space-y-4 lg:space-y-0 lg:flex lg:items-start lg:justify-between">
                <article className="about-project text-xs lg:w-1/2 lg:text-sm">
                  <h2 className="text-yel-100 tracking-widest font-styled text-xl lg:text-3xl">About</h2>
                  <p className="text-justify">{project?.description}</p>
                </article>
                <article className="about-project text-xs space-y-2">
                  <h2 className="text-yel-100 tracking-widest font-styled text-xl lg:text-3xl">Tech Stack</h2>
                  <ul className="flex lowercase text-xs lg:text-sm gap-2 justify-between flex-wrap lg:justify-start">
                    {
                      project.techStackList
                        .map((techStack, index) => (
                          <li 
                          key={index}
                          className="flex items-center gap-1 bg-yel-100  text-blu-100 p-1"
                          >
                            <i className={techStack.iconClass}></i>
                            <span className="bg-yel-100">{techStack.name}</span>
                          </li>
                      ))
                    }
                  </ul>
                </article>
              </div>
              <div 
              className={`flex flex-col-reverse lg:flex-row gap-4 ${project.inDevelopment ? "lg:justify-between" : "lg:justify-start"} lg:items-end text-xs lg:text-sm`}>
                {
                  project.inDevelopment 
                  && 
                    (
                      <div className="flex gap-2 items-center border border-yel-100 px-2 py-1 h-min group hover:bg-yel-100 hover:text-blu-100 w-fit">
                        <Gear className="text-2xl text-yel-100 group-hover:animate-spin group-hover:text-blu-100"/>
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
                          <li 
                          className="bg-yel-100 px-2 py-1 hover:bg-blu-100 hover:text-yel-100">
                            <Link 
                            className="flex items-center gap-2"
                            to={project.applicationUrl}
                            >
                            <AppWindow className="text-2xl"/>  
                            <p>app</p>
                            </Link>
                          </li>
                        )
                    }
                      <li 
                      className="bg-yel-100 px-2 py-1 hover:bg-blu-100 hover:text-yel-100">
                        <Link
                        className="flex items-center gap-2" 
                        to={project.githubRepository}
                        >
                          <BracketsCurly className="text-2xl"/>  <p>repository</p>
                        </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
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
