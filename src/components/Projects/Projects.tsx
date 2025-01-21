import { useState, useEffect } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { getGithubStats } from "../../services/github";
import { GithubStats as GithubStatsModel } from "../../model/Github";
import GithubStats from "./components/Github/GithubStats/GithubStats";
import { projects } from "../../projects";
import GithubIconLink from "./components/Github/GithubIconLink/GithubIconLink";
import Project from "./components/Project/Project";
import "./Projects.css";
import HeadingTitle from "../HeadingTitle/HeadingTitle";

function Projects() {
  const [githubStats, setGithubStats] = useState<GithubStatsModel>();
  const {ref} = useIntersectionObserver({ threshold: 0.1 });
  
  useEffect(() => {
    const fetchGithubStats = async () => {
      const searchedGithubStats = await getGithubStats();
      setGithubStats(searchedGithubStats);
    }
    fetchGithubStats();
  }, []);

  return (
    <section 
    className="h-[200dvh]"
    data-header-title="projects"
    ref={ref}
    >
      <HeadingTitle textContent="projects" /> 
      <div 
      className="2xl:w-4/6 rounded-xl p-4 flex flex-col lg:flex-row gap-2 justify-center"
      >
        {
          projects.map((project, index) => (
            <Project
            index={index} 
            key={index} 
            project={project}
            />
          ))
        }
      </div>
        {/* <GithubStats
        githubStats={githubStats!}
        isVisible={isVisible} 
        />
        <GithubIconLink 
        htmlUrl={githubStats?.html_url} 
        isVisible={isVisible}
        /> */}
        {/* </div> */}
    </section>
  )
}

export default Projects;

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
