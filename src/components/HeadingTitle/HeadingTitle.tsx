import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function HeadingTitle({ textContent }: {textContent: string}) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div ref={ref} className="outer-heading">
      <div 
      className="inner-heading" 
      >
        <p className={`heading font-styled text-center section-title ${!!isVisible && "animate-heading-up"}`}>
          &nbsp; <br />
          {textContent}
        </p>
    </div>
  </div>
  )
}
