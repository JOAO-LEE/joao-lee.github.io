import useIntersectionObserver from "../../../../hooks/useIntersectionObserver"

export default function TechStackHeading({ techStackTitle }: { techStackTitle: string }) {
  const {ref, isVisible} = useIntersectionObserver<HTMLParagraphElement>({threshold: 0.5})
  return (
     <p 
     ref={ref} 
     className={`text-yel-200 font-styled-bold text-center ${isVisible ? "show-content" : "hidden-content"}`}
     >
      {techStackTitle}
    </p>
  )
}
