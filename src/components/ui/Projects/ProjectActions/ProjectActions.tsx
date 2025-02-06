import { AppWindow, BracketsCurly } from "@phosphor-icons/react";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

function ProjectActions({ applicationUrl, githubRepository, deployed }: { applicationUrl: string, githubRepository: string, deployed: boolean }) {
  
  return (
      <div 
      className="flex gap-2"
      >
        <AnimatedButton
        link={deployed ? applicationUrl : ""} 
        title={deployed ? "app" : "in development"}
        icon={
          deployed 
          && 
            <AppWindow 
            className="size-5 xl:size-max" 
            />
        }
        />
        <AnimatedButton
        link={githubRepository} 
        title="repo"
        icon={
          <BracketsCurly 
          className="size-5 xl:size-max"
          />
        }
        />
      </div>
  )
}

export default ProjectActions;

