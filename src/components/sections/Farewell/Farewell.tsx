import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import "./Farewell.css";

export function Farewell() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section 
    ref={ref}
    className="bg-blu-100 p-6 overflow-hidden h-screen"
    >
      <div className="farewell">
        <img 
        src="src/media/habbo/habbo-waving.png"
        className={`w-1/3 lg:w-1/6 ${isVisible ? "show-content swipe-to-origin-y" : "hidden-content hidden-down"}`}
        alt="image of a habbo hotel character waving" 
        loading="lazy"
        />
        <article className="space-y-1">
          <h2 className={`font-styled-bold lg:text-3xl ${isVisible ? "swipe-to-origin-x show-content color-yel-animation" : "hidden-content hidden-left-farewell-title text-grayish"}`}>I am really glad to having you here!</h2>
          <div 
          className={`font-styled-bold space-y-3 ${isVisible ? "show-content swipe-to-origin-x" : "hidden-content hidden-right-farewell-paragraph"}`}
          >
            <p className="text-sm lg:text-3xl">Feel free to explore the rest of my portfolio</p>
            <p className={`font-styled text-2xl lg:text-4xl text-center  ${isVisible ? "color-yel-animation" : "text-grayish"}`}>&</p>
            <p className="text-sm lg:text-3xl">to contact me through the links below!</p>
          </div>
        </article>
      </div>
    </section>
  )
}
