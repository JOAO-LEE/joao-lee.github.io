import { useEffect, useState, useRef, MutableRefObject } from "react";

type TIntersectionObserver = {ref: MutableRefObject<HTMLDivElement  | null>, isVisible: boolean, headerTitle?: string | null};  

const useIntersectionObserver = ({ threshold = 0.1 }): TIntersectionObserver => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement  | null>(null);

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
