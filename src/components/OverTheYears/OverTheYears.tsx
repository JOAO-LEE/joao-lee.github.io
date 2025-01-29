import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import { TechStackItem } from '../TechStackItem/TechStackItem';
const techStack = {
  frontendTech: [
    { name: "React", iconClass: "devicon-react-original" },
    { name: "Next.Js", iconClass: "devicon-nextjs-plain" },
    { name: "Angular", iconClass: "devicon-angular-plain" },
    { name: "HTML5", iconClass: "devicon-html5-plain" },
    { name: "CSS3", iconClass: "devicon-css3-plain" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain" },
    { name: "TypeScript", iconClass: "devicon-typescript-plain" },
    { name: "TailwindCSS", iconClass: "devicon-tailwindcss-original" },
    { name: "Bootstrap", iconClass: "devicon-bootstrap-plain" },
    { name: "Sass", iconClass: "devicon-sass-original" },
    { name: "Redux", iconClass: "devicon-redux-original"}
    // devicon-redux-original
  ],
  backendTech: [
    { name: "Node.js", iconClass: "devicon-nodejs-plain" },
    { name: "Express.js", iconClass: "devicon-express-original" },
    { name: "C#", iconClass: "devicon-csharp-plain" },
    { name: ".NET Core", iconClass: "devicon-dotnetcore-plain" },
    { name: "Sequelize", iconClass: "devicon-sequelize-plain" },
    { name: "MySQL", iconClass: "devicon-mysql-original" },
    { name: "PostgreSQL", iconClass: "devicon-postgresql-plain" },
    { name: "Python", iconClass: "devicon-python-plain" },
  ]
}

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
