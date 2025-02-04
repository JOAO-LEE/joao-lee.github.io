import { AppWindow, BracketsCurly, Warning } from "@phosphor-icons/react";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

function ProjectActions({ applicationUrl, githubRepository, deployed }: { applicationUrl: string, githubRepository: string, deployed: boolean }) {
  
  return (
    <div className="space-y-2">
      <div 
      className="flex gap-2"
      >
        <AnimatedButton
        link={deployed ? applicationUrl : ""} 
        title={deployed ? "app" : "app in development"}
        icon={
          deployed 
          ? 
            <AppWindow 
            className="size-5 xl:size-max" 
            />
          :
            <Warning
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
    </div>
  )
}

export default ProjectActions;

