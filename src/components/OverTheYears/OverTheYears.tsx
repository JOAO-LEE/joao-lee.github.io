import useIntersectionObserver from '../../hooks/useIntersectionObserver';


export default function OverTheYears() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className='p-6 overflow-hidden content-center min-h-[25vh]'>
      <div ref={ref} >
        <h2 className={`${isVisible ? "swipe-origin-x show-content title" : "hidden-content hidden-left-x"} font-styled tracking-widest text-3xl`}>Over the years,</h2>
        <div className={`about-article ${isVisible ? "swipe-origin-x show-content": "hidden-right-x hidden-content"} `}>
          <article className="text-justify text-xs space-y-3">
            <p>
              I worked as a freelance <b>full-stack web developer with a stronger focus on frontend</b> for a Brazilian IT consulting company, contributing to mid-to-large-scale projects.
            </p>
            <p>
              I've collaborated with a team of developers on <b>refactoring code</b>, <b>implementing new features</b>, and <b>creating reusable components</b>, while applying <b>Clean Code</b> principles and best practices to deliver scalable, high-quality solutions.
            </p>
            <p>
              Along the way, I not only put my technical knowledge <b>(hard skills)</b> into practice but also developed key abilities like assertiveness, teamwork, and adaptability <b>(soft skills)</b>, all of which are crucial for thriving in a remote work environment.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
