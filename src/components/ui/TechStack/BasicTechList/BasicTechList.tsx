import { techStack } from "@/data/techStack";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { TechList } from "../TechList/TechList";

export function BasicTechList({ techSection }: { techSection: string }) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      <TechList itemsDirection="horizontal">
        {techStack[techSection as keyof typeof techStack].map(
          ({ iconClass, name }, index) => (
            <li
              key={index}
              className={`text-center space-y-2 border-b border-grayish stack-shown ${isVisible ? "swipe-to-origin-x show-content" : "hidden-left-x hidden-content"}`}
            >
              <i className={`${iconClass} text-2xl lg:text-5xl`} />
              <p className="text-xs lg:text-xl text-yel-200 font-tipography">
                {name}
              </p>
            </li>
          )
        )}
      </TechList>
    </div>
  );
}
