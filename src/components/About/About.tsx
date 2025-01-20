import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import "./About.css";

function About() {
  return (
    <section 
    className="about-container"
    >
      <HeadingTitle textContent="about" />

      {/* <div 
        className={`flex flex-col gap-20 lg:flex-row text-sm lg:w-2/3 h-full p-10 lg:items-center justify-center about-texts ${isVisible ? 'show' : 'hide'}`} 
      >
        <div className="lg:mb-40 w-96">
          <h3 className="text-clear-orangeish text-3xl">How it all started...</h3>
          <article className={`${isVisible && "about-article"} text-lg text-justify`}>
            I'm 27 years old and i've been studying web development since October 2021, when I had decided to transition my career into tech.
          </article>
        </div> 
        <div className="lg:mt-40 w-96">
          <h3 className="text-clear-orangeish text-3xl">and what's next...</h3>
          <article className={`${isVisible && "about-article"} text-lg text-justify`}> 
            I am looking for an opportunity to put into practice the knowledge I acquire everyday and have acquired so far, contributing analytically to the development of new solutions.
          </article>
        </div>  
       </div> */}
    </section>
  );
}

export default About;
