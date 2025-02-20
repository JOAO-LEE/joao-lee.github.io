import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

export function SectionTitle({ textContent }: { textContent: string }) {
  const { isVisible, ref } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div className="outer-heading" ref={ref}>
      <div className="inner-heading">
        <h2
          className={`heading font-styled text-center section-title ${isVisible && "animate-heading-up"}`}
        >
          &nbsp; <br />
          {textContent}
        </h2>
      </div>
    </div>
  );
}
