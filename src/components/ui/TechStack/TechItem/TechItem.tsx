import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import "./TechItem.css";

export function TechItem({ iconClass, name }: { iconClass: string, name: string }) {
 const { ref, isVisible } = useIntersectionObserver<HTMLLIElement>({ threshold: 1 });

  return (
    <li ref={ref} className={`text-center border border-grayish ${isVisible ? "show-content swipe-origin-y" : "hidden-content hidden-stack"} h-40 content-center`}>
      <i className={`${iconClass} text-7xl p-4`}></i>
      <p className="font-styled-tipography  text-yel-200 text-2xl">{name}</p>
    </li>
  )
}
