import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function ImageSlider({ imageSource }: { imageSource: string }) {
  const { ref, isVisible } = useIntersectionObserver<HTMLLIElement>({
    threshold: 0.8,
  });

  return (
    <li ref={ref}>
      <img
        src={imageSource}
        alt=""
        className={`${isVisible ? "show-content" : "hidden-content"} object-contain`}
      />
    </li>
  );
}
