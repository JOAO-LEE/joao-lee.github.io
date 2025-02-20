import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useState } from "react";

export function About() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.9 });
  const [habboIsNotWalking, setHabboIsNotWalking] = useState(false);

  const titleOverTheYearsAnimationClass = isVisible
    ? "swipe-origin-x show-content color-yel-animation"
    : "hidden-content hidden-left-x";
  const articleAnimationClass = isVisible
    ? "swipe-origin-x show-content"
    : "hidden-right-x hidden-content";

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setHabboIsNotWalking(true);
      }, 2050);
    }
  }, [isVisible]);

  return (
    <section
      className="bg-blu-400 p-4 h-lvh overflow-hidden"
      data-header-title="about"
      ref={ref}
    >
      <SectionTitle textContent="about" />
      <br />
      <div className="flex flex-col justify-center items-center gap-4 lg:justify-around lg:flex-row min-h-[660px]">
        <article>
          <h2
            className={`font-styled tracking-widest text-3xl lg:text-4xl mb-3 ${titleOverTheYearsAnimationClass}`}
          >
            Over the years
            <span
              className={`font-styled text-yel-100 ${isVisible ? "color-grayish-animation" : ""}`}
            >
              ,
            </span>
          </h2>
          <div
            className={`about-article ${articleAnimationClass} text-justify text-xs lg:text-sm flex flex-col lg:max-w-[644px] gap-3 lg:gap-5 items-center lg:items-start`}
          >
            <p>
              I worked as a freelance{" "}
              <b>full-stack web developer with a stronger focus on frontend</b>{" "}
              for a Brazilian IT consulting company, contributing to
              mid-to-large-scale projects.
            </p>
            <p>
              Collaborating with a team of developers, I focused on{" "}
              <b>refactoring code</b>, <b>implementing new features</b>, and{" "}
              <b>creating reusable components</b>. By adhering to{" "}
              <b>Clean Code</b> principles and best practices, I ensured the
              delivery of scalable, high-quality results.
            </p>
            <p>
              Along the way, I not only applied my technical knowledge{" "}
              <b>(hard skills)</b> but I also practiced key abilities such as
              assertiveness, teamwork, and adaptability <b>(soft skills)</b>,
              all essential for success in a remote work setting.
            </p>
            <p>
              Although I still present myself as a freelance developer, willing
              to solve problems for small businesses and individuals, I am now
              seeking a formal opportunity to apply the knowledge I acquire
              daily and have gained so far, contributing analytically to the
              development of impactful solutions.
            </p>
          </div>
        </article>
        <img
          src="habbo/habbo-diagonal-smiling-holding-coffee-2.png"
          className={`lg:hidden min-w-32 lg:w-80 self-center lg:self-end object-contain  ${habboIsNotWalking ? "block lg:hidden" : "hidden lg:hidden"}`}
          alt="habbo hotel character holding a cup of coffe and smiling"
        />
        <img
          src="habbo/habbo-diagonal-smiling-holding-coffee.png"
          className={`hidden min-w-32 lg:w-80 lg:block self-center lg:self-center object-contain ${habboIsNotWalking ? "hidden lg:block" : "lg:hidden"} `}
          alt="sitting habbo hotel character holding a cup of coffe and smiling to the paragraphs"
        />
        <img
          src="habbo/habbo-walking-2.png"
          className={`min-w-32 lg:w-80 self-center lg:self-center object-contain transition-transform ease-linear duration-[2100ms] lg:duration-2000  ${isVisible ? "translate-x-0 " : "translate-x-[200%] lg:translate-x-[165%]"} ${habboIsNotWalking ? "hidden lg:hidden" : "block"}`}
          alt="habbo hotel character walking"
        />
      </div>
      <p
        className={`${isVisible ? "color-yel-animation show-content swipe-to-origin-y" : "hidden-content hidden-down"} font-styled-bold text-sm mx-auto text-center lg:text-xl mt-3`}
      >
        Check my tech stack below
        <span
          className={`font-styled-bold ${isVisible ? "color-grayish-animation" : ""}`}
        >
          !
        </span>
      </p>
    </section>
  );
}
