import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import "./TechItem.css";
import { ReactNode } from "react";

export function TechItem({ children }: { children: ReactNode }) {
 const { ref, isVisible } = useIntersectionObserver<HTMLLIElement>({ threshold: 1 });

  return (
    <li ref={ref} className={`text-center border border-grayish ${isVisible ? "show-content swipe-origin-y" : "hidden-content hidden-stack"} h-40 content-center`}>
      {children}
    </li>
  )
}
