import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { TypeOfTech } from '@/components/ui/TechStack/TypeOfTech/TypeOfTech';
import "./MoreAbout.css";

export function MoreAbout() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.7 });

  return (
    <section 
    className='p-6 overflow-hidden bg-blu-400 h-screen'
    ref={ref}
    >
      <SectionTitle textContent='+ about'/>

      <TypeOfTech techStackTitle=""/>
      <div
      className="about-texts-container space-y-5 text-xs lg:text-sm h-full lg:space-y-0 mx-auto lg:mx-0">
        <div className={`about-text ${isVisible ? "show-content show-right" : "hidden-content hidden-left hidden-down"}`}>
          <h3 className={`font-styled tracking-widest text-xl lg:text-3xl ${isVisible ? "title" : ""}`}>How it all started</h3>
          <article className={`${isVisible && "about-article"} text-justify space-y-3`}>
            <p>
              Before developing applications, I worked as a flat-hotel receptionist on the northeastern coast of Brazil, a predominantly touristic area. My fluency in English helped me land that opportunity, and working at the front desk, I interacted with foreign tourists and residents on a daily basis.
            </p>
            <p>
              The internet has always been part of my life, but web development truly caught my interest in late 2021 when I noticed the industry's rapid growth in recent years. Encouraged by my family, I decided to leave my job as a hotel receptionist and fully commit to transitioning my career.
            </p>
            <p>
              I began independently learning web programming logic and fundamentals in October of that year and later completed an intensive 12-month full-stack web development course.
            </p>
          </article>
        </div> 
        <p className={`font-styled text-3xl lg:text-5xl text-center about-text ${isVisible ? "show-content show-right title" : "hidden-content hidden-left hidden-down"}`}>&</p>
        <div className={`about-text ${isVisible ? "show-content show-right show-up" : "hidden-content hidden-left hidden-down" }`}>
          <h3 className={`font-styled tracking-widest text-xl lg:text-3xl ${isVisible ? "title" : ""}`}>how it's been.</h3>
          <article className={`${isVisible && "about-article"} text-justify space-y-3`}>
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
  )
}
