import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import "./About.css";

function About() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section 
    className="about-container bg-blu-200"
    data-header-title="about"
    ref={ref}
    >
      <HeadingTitle textContent="about" />

      <div 
        className={`flex flex-col gap-20 lg:flex-row text-sm lg:w-2/3 h-full p-10 lg:items-center  about-texts ${isVisible ? 'show' : 'hide'}`} 
      >
        <div className="">
          <p className="font-styled text-yel-100">How it all started...</p>
          <article className={`${isVisible && "about-article"} text-justify`}>
            I'm 27 years old and i've been studying web development since October 2021, when I had decided to transition my career into tech.
          </article>
        </div> 
        <div className="">
          <p className="font-styled text-yel-100">and what's next...</p>
          <article className={`${isVisible && "about-article"} text-justify`}> 
            I am looking for an opportunity to put into practice the knowledge I acquire everyday and have acquired so far, contributing analytically to the development of new solutions.
          </article>
        </div>  
       </div>
    </section>
  );
}

export default About;
