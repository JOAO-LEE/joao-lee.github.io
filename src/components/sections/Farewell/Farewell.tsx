import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import "./Farewell.css";
import { useEffect, useState } from "react";

export function Farewell() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.8 });
  const [habboIsNotWalking, setHabboIsNotWalking] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setHabboIsNotWalking(true);
      }, 2050);
    }
  }, [isVisible]);

  return (
    <section ref={ref} className="bg-blu-100  overflow-hidden h-screen">
      <div className="farewell">
        <img
          src="habbo/habbo-walking.png"
          className={`w-1/3 lg:w-1/6 transition-transform ease-linear duration-[2000ms] ${habboIsNotWalking ? "hidden" : "block"} ${isVisible ? "translate-x-0 " : "hidden-down-character"}`}
          alt="habbo hotel character walking"
        />
        <img
          src="habbo/habbo-waving.png"
          className={`w-1/3 lg:w-1/6 ${habboIsNotWalking ? "block" : "hidden"}`}
          alt="habbo hotel character waving"
        />
        <article className="space-y-1">
          <h2
            className={`font-styled-bold lg:text-3xl ${isVisible ? "swipe-to-origin-x show-content color-yel-animation" : "hidden-content hidden-left-farewell-title text-grayish"}`}
          >
            I am really glad having you here!
          </h2>
          <div
            className={`font-styled-bold space-y-3 ${isVisible ? "show-content swipe-to-origin-x" : "hidden-content hidden-right-farewell-paragraph"}`}
          >
            <p className="text-sm lg:text-3xl">
              Feel free to explore the rest of my portfolio
            </p>
            <p
              className={`font-styled text-2xl lg:text-4xl text-center  ${isVisible ? "color-yel-animation" : "text-grayish"}`}
            >
              &
            </p>
            <p className="text-sm lg:text-3xl">
              to contact me through the links below!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
