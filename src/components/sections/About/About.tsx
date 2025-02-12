import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";

export function About() {
 const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.8 });

 const titleOverTheYearsAnimationClass = isVisible ? "swipe-origin-x show-content color-yel-animation" : "hidden-content hidden-left-x"; 
 const articleAnimationClass = isVisible ? "swipe-origin-x show-content" : "hidden-right-x hidden-content";
 
  return (
    <section 
    className="bg-blu-400 p-4 h-screen overflow-hidden"
    data-header-title="about"
    ref={ref}
    >
      <SectionTitle 
      textContent="about" 
      />
      <div 
      ref={ref} 
      className="content-center space-y-6 h-fit lg:content-normal lg:mt-20"
      >
        <h2
        className={`font-styled tracking-widest text-3xl lg:text-4xl ${titleOverTheYearsAnimationClass}`}>
          Over the years<span className={`font-styled text-yel-100 ${isVisible ? "color-grayish-animation" : "" }`}>,</span>
        </h2>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className={`about-article ${articleAnimationClass}`}>
              <article className="text-justify text-xs lg:text-sm lg:flex flex-col lg:w-3/4 gap-2 items-center lg:items-start space-y-3 lg:space-y-0">
                <p>
                  I worked as a freelance <b>full-stack web developer with a stronger focus on frontend</b> for a Brazilian IT consulting company, contributing to mid-to-large-scale projects.
                </p>
                <p>
                  Collaborating with a team of developers, I focused on <b>refactoring code</b>, <b>implementing new features</b>, and <b>creating reusable components</b>. By adhering to <b>Clean Code</b> principles and best practices, I ensured the delivery of scalable, high-quality results.
                </p>
                <p>
                  Along the way, I not only applied my technical knowledge <b>(hard skills)</b> but I also practiced key abilities such as assertiveness, teamwork, and adaptability <b>(soft skills)</b>, all essential for success in a remote work setting.
                </p>
                <p>
                  I don't consider myself a designer per se, but you'll definitely always find me in front of a screen tweaking font sizes, widths, heights & animations like the ones you're seeing on this portfolio
                <sup 
                className={`text-yel-100 font-bold lg:text-sm ${isVisible ? "color-yel-animation" : ""}`}>¹</sup>.
                <span 
                className={`text-[0.6rem] block lg:text-xs ${isVisible ? "color-yel-animation" : "text-grayish"}`}
                >
                  ¹ If you indicated to your browser/system that you have no preference to reduce motion, of course.
                </span>
              </p>
                <p>
                  Although I still present myself as a freelance developer, willing to solve problems for small businesses and individuals, I am now seeking a formal opportunity to apply the knowledge I acquire daily and have gained so far, contributing analytically to the development of impactful solutions.
                </p>
              </article>
          </div>
          <img 
          src="/public/habbo/habbo-diagonal-smiling-holding-coffee.png"
          className={`w-1/3 lg:w-1/5 self-center lg:self-end ${isVisible ? "show-content swipe-to-origin-y" : "hidden-content hidden-down"}`}
          alt="image of sitting habbo hotel character holding a cup of coffe and smiling" 
          />
        </div>
          <p 
          className={`${isVisible ? "color-yel-animation show-content swipe-to-origin-y" : "hidden-content hidden-down"} font-styled-bold text-sm lg:text-xl mt-6`}
          >
            Check my tech stack below
            <span 
            className={`font-styled-bold ${isVisible ? "color-grayish-animation" : ""}`}
            >
            !
            </span>
          </p>
      </div>
    </section>
  );
}