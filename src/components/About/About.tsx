import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
// import OverTheYears from "../OverTheYears/OverTheYears";
import "./About.css";

function About() {
 const {ref, isVisible} = useIntersectionObserver({ threshold: 0.7 });
  return (
    <section 
    className="bg-blu-200 p-4"
    data-header-title="about"
    ref={ref}
    >
      <HeadingTitle textContent="about" />
      <div
      className="mx-auto about-texts-container space-y-5 text-xs content-center h-full">
        {/* <div>
          <p></p>
        </div> */}
        <div className={`about-text ${isVisible ? "show-content show-right" : "hidden-content hidden-left"}`}>
          <h3 className={`font-styled tracking-widest text-xl ${isVisible ? "title" : ""}`}>How it all started</h3>
          <article className={`${isVisible && "about-article"} text-justify space-y-3`}>
            <p>
              I'm Brazilian, 27 years old. Before developing applications, I worked as a flat-hotel receptionist on the northeastern coast of Brazil, a predominantly touristic area. My fluency in English helped me land that opportunity, and working at the front desk, I interacted with foreign tourists and residents on a daily basis.
            </p>
            <p>
              The internet has always been part of my life, but it truly caught my interest in late 2021 when I noticed the industry's rapid growth in recent years. Encouraged by my family, I decided to leave my job as a hotel receptionist and fully commit to transitioning my career.
            </p>
            <p>
              I began independently learning web programming logic and fundamentals in October of that year and later completed an intensive 12-month full-stack web development course.
            </p>
          </article>
        </div> 
        <p className={`font-styled text-3xl text-center about-text ${isVisible ? "show-content show-right title" : "hidden-content hidden-left"}`}>&</p>
        <div className={`about-text ${isVisible ? "show-content show-right" : "hidden-content hidden-left"}`}>
          <h3 className={`font-styled tracking-widest text-xl ${isVisible ? "title" : ""}`}>how it's been.</h3>
          <article className={`${isVisible && "about-article"} text-justify space-y-3`}>
          <p>
            I don't consider myself a designer per se, but you'll definitely always find me in front of a screen tweaking font sizes, widths, heights & animations like the ones you're seeing on this portfolio
            <sup className="text-yel-200">¹</sup>.
            <span className={`text-[0.6rem] block transition-colors duration-[2000ms] delay-[2000ms] ${isVisible ? "text-yel-200" : "text-grayish"}`}>
              ¹ If you indicated to your browser/system that you have no preference to reduce motion, of course.
            </span>
          </p>
          <p>
            I try to keep up with the latest technologies and market trends to stay sharp and on top of everything happening in the tech world. That means I study every day—developing personal projects to put into practice what I’ve learned, reading tech-related articles, and exploring new tools and concepts.
          </p>
          <p>
            I believe that every day is an opportunity to learn something new. In addition to building responsive applications, I am always looking for new ways to refine my skills and enhance the quality of my work.
          </p>
          </article>
        </div>
       </div>
    </section>
  );
}

export default About;
