import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import type { ReactNode } from "react";
import "./TechItem.css";

export function TechItem({ children }: { children: ReactNode }) {
  const { ref, isVisible } = useIntersectionObserver<HTMLLIElement>({
    threshold: 0.7,
  });

  return (
    <li
      ref={ref}
      className={`text-center border border-grayish ${isVisible ? "show-content swipe-origin-y" : "hidden-content hidden-stack"} h-40 lg:w-full content-center`}
    >
      {children}
    </li>
  );
}
