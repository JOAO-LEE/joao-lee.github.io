// import { useState, useEffect } from "react";
// import useIntersectionObserver from "../../hooks/useIntersectionObserver";
// import { getGithubStats } from "../../services/github";
// import { GithubStats as GithubStatsModel } from "../../model/Github";
// import GithubStats from "./components/Github/GithubStats/GithubStats";
// import GithubIconLink from "./components/Github/GithubIconLink/GithubIconLink";
import { projects } from "../../data/projects";
import { ProjectItem } from "./components/Project/ProjectItem";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import { useContext, useRef } from "react";
import "./Projects.css";
import { ProjectContext } from "../../context/Project/ProjectContext";
import DialogProject from "./components/DialogProject/DialogProject";

function Projects() {
  const { selectedProject } = useContext(ProjectContext);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <section 
    className="h-[200dvh] p-4"
    >
      <HeadingTitle textContent="projects" /> 
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
      <DialogProject dialogRef={dialogRef} selectedProject={selectedProject}/>
    </section>
  )
}

export default Projects;

// const [githubStats, setGithubStats] = useState<GithubStatsModel>();
// const {ref} = useIntersectionObserver({ threshold: 0.1 });

// useEffect(() => {
//   const fetchGithubStats = async () => {
//     const searchedGithubStats = await getGithubStats();
//     setGithubStats(searchedGithubStats);
//   }
//   fetchGithubStats();
// }, []);
     {/* <GithubStats
      githubStats={githubStats!}
      isVisible={isVisible} 
      />
      <GithubIconLink 
        htmlUrl={githubStats?.html_url} 
        isVisible={isVisible}
        /> */}

    // {/* <div className="p-4 flex sm:flex-row">
    //       <Carousel>
    //         {
    //           projects
    //           .map((p) => (
    //             <img 
    //             key={p.id}
    //             src={p.image} 
    //             alt="" 
    //             className="size-36 md:size-[32rem] object-contain rounded-xl lg:rounded-3xl"
    //             />
    //           ))
    //         }
    //       </Carousel>
    //       <ProjectAbout />
    //     </div> */}
    //     {/* <div className="sm:hidden">
    //       <TechStackList />
    //     </div> */}
