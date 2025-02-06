import { ArrowFatLinesDown } from "@phosphor-icons/react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import "./About.css";

export function About() {
 const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.7 });
  return (
    <section 
    className="bg-blu-400 p-4 h-screen overflow-hidden lg:h-[75vh]"
    data-header-title="about"
    ref={ref}
    >
      <SectionTitle textContent="about" />
      <div ref={ref} className="content-center space-y-6 h-full lg:content-normal lg:mt-20">
        <h2 
        className={`${isVisible ? "swipe-origin-x show-content title" : "hidden-content hidden-left-x"} font-styled tracking-widest text-3xl lg:text-4xl`}>
          Over the years<span className='font-styled text-grayish'>,</span>
        </h2>
        <div className={`about-article ${isVisible ? "swipe-origin-x show-content": "hidden-right-x hidden-content"}`}>
          <article className="text-justify text-xs lg:text-sm lg:flex flex-col lg:w-2/3 gap-2 items-center lg:items-start space-y-3 lg:space-y-0">
            <p>
              I worked as a freelance <b>full-stack web developer with a stronger focus on frontend</b> for a Brazilian IT consulting company, contributing to mid-to-large-scale projects.
            </p>
            <p>
              Collaborating with a team of developers, I focused on <b>refactoring code</b>, <b>implementing new features</b>, and <b>creating reusable components</b>. By adhering to <b>Clean Code</b> principles and best practices, I ensured the delivery of scalable, high-quality results.
            </p>
            <p className="">
              Along the way, I not only applied my technical knowledge <b>(hard skills)</b> but I also practiced key abilities such as assertiveness, teamwork, and adaptability <b>(soft skills)</b>, all essential for success in a remote work setting.
            </p>
            <p>
              I don't consider myself a designer per se, but you'll definitely always find me in front of a screen tweaking font sizes, widths, heights & animations like the ones you're seeing on this portfolio
            <sup className="text-yel-200 font-bold lg:text-sm">¹</sup>.
            <span className={`text-[0.6rem] lg:text-xs block transition-colors duration-[2000ms] delay-[2000ms] ${isVisible ? "text-yel-200" : "text-grayish"}`}>
              ¹ If you indicated to your browser/system that you have no preference to reduce motion, of course.
            </span>
          </p>
            <p>
              Although I still present myself as a freelance developer, willing to solve problems for small businesses and individuals, I am now seeking a formal opportunity to apply the knowledge I acquire daily and have gained so far, contributing analytically to the development of impactful solutions.
            </p>
          </article>
        </div>
          <p 
          className={`${isVisible ? "title show-content swipe-to-origin-y" : "hidden-content hidden-down"} font-styled-bold text-sm lg:text-xl`}>Check my tech stack below!
          </p>
          <div className={`${isVisible ? "arrow-shown arrow-bounce" : "arrow-hidden opacity-0"} transition-opacity duration-1000 delay-[6000ms]`}>
            <ArrowFatLinesDown 
            size={32} 
            className="mx-auto"
            />
          </div>
      </div>
    </section>
  );
}