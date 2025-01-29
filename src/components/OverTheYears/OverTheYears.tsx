import useIntersectionObserver from '../../hooks/useIntersectionObserver';


export default function OverTheYears() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className='p-6 overflow-hidden h-[50vh]'>
      <div ref={ref} className='content-center space-y-5 h-full'>
        <h2 
        className={`${isVisible ? "swipe-origin-x show-content title" : "hidden-content hidden-left-x"} font-styled tracking-widest text-3xl`}>
          Over the years,
        </h2>
        <div className={`about-article ${isVisible ? "swipe-origin-x show-content": "hidden-right-x hidden-content"}`}>
          <article className="text-justify text-xs space-y-3">
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
              Although I still present myself as a freelance developer, willing to solve problems for small businesses and individuals, I am now seeking a formal opportunity to apply the knowledge I acquire daily and have gained so far, contributing analytically to the development of impactful solutions.
            </p>
          </article>
        </div>
          <p className={`${isVisible ? "title" : ""} font-semibold font-styled-bold text-xs`}>Check my tech stack below!</p>
      </div>
    </section>
  )
}
