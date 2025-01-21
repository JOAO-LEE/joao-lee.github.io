import { useEffect } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function HeadingTitle({ textContent }: { textContent: string }) {
  const {isVisible, ref} = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
    className="outer-heading"
    ref={ref}
    >
      <div 
      className="inner-heading" 
      >
        <p 
        className={`heading font-styled text-center section-title ${isVisible && "animate-heading-up"}`}
        >
          &nbsp; <br />
          {textContent}
        </p>
    </div>
  </div>
  )
}
