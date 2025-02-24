import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import "./MoreAbout.css";

export function MoreAbout() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });

  return (
    <section className="p-6 overflow-hidden bg-blu-400 min-h-lvh" ref={ref}>
      <SectionTitle textContent="+ about" />
      <div className="about-texts-container text-xs lg:text-sm mx-auto lg:mx-0 min-h-lvh">
        <div
          className={`about-text ${isVisible ? "show-content shown-texts" : "hidden-content hidden-texts"}`}
        >
          <h3
            className={`font-styled tracking-widest text-xl lg:text-3xl ${isVisible ? "color-yel-animation" : ""}`}
          >
            How it all started
          </h3>
          <article
            className={`${isVisible && "about-article"} text-justify space-y-3`}
          >
            <p>
              Before developing applications, I worked as a flat-hotel
              receptionist on the northeastern coast of Brazil, a predominantly
              touristic area. My fluency in English helped me land that
              opportunity, and working at the front desk, I interacted with
              foreign tourists and residents on a daily basis.
            </p>
            <p>
              The internet has always been part of my life, but web development
              truly caught my interest in late 2021 when I noticed the
              industry's rapid growth in recent years. Encouraged by my family,
              I decided to leave my job as a hotel receptionist and fully commit
              to transitioning my career.
            </p>
            <p>
              I began independently learning web programming logic and
              fundamentals in October of that year and later completed an
              intensive 12-month full-stack web development course.
            </p>
          </article>
        </div>
        <p
          className={`font-styled text-3xl lg:text-5xl text-center about-text ${isVisible ? "show-content  color-yel-animation shown-texts" : "hidden-content hidden-texts"}`}
        >
          &
        </p>
        <div
          className={`about-text ${isVisible ? "show-content shown-texts" : "hidden-content hidden-texts"}`}
        >
          <h3
            className={`font-styled tracking-widest text-xl lg:text-3xl ${isVisible ? "color-yel-animation" : ""}`}
          >
            how it's been.
          </h3>
          <article
            className={`${isVisible && "about-article"} text-justify space-y-3`}
          >
            <p>
              I try to keep up with the latest technologies and market trends to
              stay sharp and on top of everything happening in the tech world.
              That means I study every day—developing personal projects to put
              into practice what I’ve learned, reading tech-related articles,
              and exploring new tools and concepts.
            </p>
            <p>
              I don't consider myself a designer per se, but you'll definitely
              always find me in front of a screen tweaking font sizes, widths,
              heights & animations like the ones you're seeing on this portfolio
              <sup
                className={`text-yel-100 font-bold lg:text-sm ${isVisible ? "color-yel-animation" : ""}`}
              >
                ¹
              </sup>
              .
              <span
                className={`text-[0.6rem] block lg:text-xs ${isVisible ? "color-yel-animation" : "text-grayish"}`}
              >
                ¹ If you indicated to your browser/system that you have no
                preference to reduce motion, of course.
              </span>
            </p>
            <p>
              I believe that every day is an opportunity to learn something new.
              In addition to building responsive applications, I am always
              looking for new ways to refine my skills and enhance the quality
              of my work.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
