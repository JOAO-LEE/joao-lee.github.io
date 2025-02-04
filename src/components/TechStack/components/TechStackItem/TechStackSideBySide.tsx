import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";
import TechStackList from "../TechStackList/TechStackList";
import { techStack } from "../../../../data/techStack";

export default function TechStackSideBySideContainer({techSection}: {techSection: string}) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({threshold: 0.5});
  return (
    <div ref={ref}>
      <TechStackList 
        itemsDirection="horizontal"
        >
          {
            techStack[techSection as keyof typeof techStack]
              .map(({iconClass, name}, index) => (
              <li key={index} className={`stack-shown text-center space-y-2 border-b border-grayish ${isVisible ? "show-right show-content" : "hidden-left hidden-content"}`}>
                <i className={`${iconClass} text-2xl`}></i>
                <p className="text-xs text-yel-200 font-tipography">{name}</p>
              </li>
              ))
          }
        </TechStackList>
    </div>
  )
}
