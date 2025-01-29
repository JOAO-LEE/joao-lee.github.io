import { useEffect, useState, useRef, MutableRefObject } from "react";

type TIntersectionObserver<T extends HTMLElement> = {ref: MutableRefObject<T | null>, isVisible: boolean, headerTitle?: string | null};  

const useIntersectionObserver = <T extends HTMLElement>({ threshold = 0.1 }): TIntersectionObserver<T> => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(entry.isIntersecting);
        }
      })
    }, { threshold }
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
  
  return {ref, isVisible};
};

export default useIntersectionObserver;
