import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { TechList } from "../TechList/TechList";
import { techStack } from "@/data/techStack";

export function BasicTechList({ techSection }: { techSection: string }) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({threshold: 0.5});
  
  return (
    <div ref={ref}>
      <TechList 
        itemsDirection="horizontal"
        >
          {
            techStack[techSection as keyof typeof techStack]
              .map(({iconClass, name}, index) => (
              <li key={index} className={`stack-shown text-center space-y-2 border-b border-grayish ${isVisible ? "show-right show-content" : "hidden-left hidden-content"}`}>
                <i className={`${iconClass} text-2xl lg:text-5xl`}></i>
                <p className="text-xs lg:text-xl text-yel-200 font-tipography">{name}</p>
              </li>
              ))
          }
        </TechList>
    </div>
  )
} 
