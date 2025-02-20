import { type MutableRefObject, useEffect, useRef, useState } from "react";

type TIntersectionObserver<T extends HTMLElement> = {
  ref: MutableRefObject<T | null>;
  isVisible: boolean;
  headerTitle?: string | null;
};

export const useIntersectionObserver = <T extends HTMLElement>({
  threshold = 0.1,
}): TIntersectionObserver<T> => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver(
      entries => {
        for (let index = 0; index <= entries.length; index++) {
          const element = entries[index];
          const isElementIntersecting = element?.isIntersecting;
          if (isElementIntersecting) {
            setIsVisible(element.isIntersecting);
          }
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current;
    }

    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};
