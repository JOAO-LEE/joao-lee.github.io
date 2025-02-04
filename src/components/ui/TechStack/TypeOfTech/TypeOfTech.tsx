import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

export function TypeOfTech({ techStackTitle }: { techStackTitle: string }) {
  const {ref, isVisible} = useIntersectionObserver<HTMLParagraphElement>({threshold: 1});
  
  return (
     <p 
     ref={ref} 
     className={`text-yel-200 font-styled-bold text-center ${isVisible ? "show-content" : "hidden-content"}`}
     >
      {techStackTitle}
    </p>
  )
}
