import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import { TechStackItem } from "../TechStackItem/TechStackItem";
import "./TechStack.css";



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


export function TechStack() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });
  return (
    <section 
    ref={ref} 
    className="bg-blu-400 p-4 overflow-hidden"
    >
         <HeadingTitle textContent="tech stack"/>
          <div>
            <h4 className="font-styled tracking-widest text-2xl title">Frontend</h4>
            <ul className="grid grid-cols-2 justify-items-center  gap-4 text-center overflow-hidden">
              {
                techStack.frontendTech
                  .map((feTech, index) => (
                    <TechStackItem 
                    key={index} 
                    index={index}
                    {...feTech} 
                    />
                ))
              }
            </ul> 
        </div>
    </section>
  )
}



{/* <div className="space-y-4">
<h2 className={`${isVisible ? "swipe-origin-x show-content title" : "hidden-content hidden-left-x"} font-styled-bold tracking-widest text-3xl`}>Over the years,</h2>
  <div className={`about-article ${isVisible ? "swipe-origin-x show-content": "hidden-right-x hidden-content"} `}>
    <article className="text-justify text-xs space-y-3">
      <p>
       I worked as a freelance <b>full-stack web developer with a stronger focus on frontend</b> for a Brazilian IT consulting company, contributing to mid-to-large-scale projects..
      </p>
      <p>
        I've collaborated with a team of developers on <b>refactoring code</b>, <b>implementing new features</b>, and <b>creating reusable components</b>, while applying <b>Clean Code</b> principles and best practices to deliver scalable, high-quality solutions.
      </p>
      <p>
        Along the way, I not only put my technical knowledge <b>(hard skills)</b> into practice but also developed key abilities like assertiveness, teamwork, and adaptability <b>(soft skills)</b>, all of which are crucial for thriving in a remote work environment.
      </p>
    </article>
</div> */}


{/* <p> */}
{/* On a project for one of our clients, a contact center company, I used to maintain and implement new features in a virtual machine management system. I would also create design system components that would be reusable throughout the application.  */}
{/* </p> */}
{/* My experience includes using frameworks like React.js and Angular to contribute to medium and long-term projects. */}
// ${isVisible ? "show-content show-down title" : "hidden-content hidden-up"}
// {/* <div className={`about-article ${isVisible ? "show-up show-content": "hidden-down hidden-content"}`}>
//           
//           <i className="devicon-react-original-wordmark text-5xl"></i>
//         </div> */}
//         {/* <div className={`about-text ${isVisible ? "show-content": "hide-content"}`}>
//           <p className="font-styled text-yel-200 tracking-widest text-xl">and what's next...</p>
//           <article className={`${isVisible && "about-article"} text-justify text-xs `}> 
//             
//           </article>
//         </div>   */}

//  
// Developed a module system for the DRSAC (Social, Environmental, and Climate Risk Report) solution, utilizing Angular, Bootstrap, Sass (BEM methodology), and the client's design system. DRSAC is a report designed for the Central Bank of Brazil, focused on collecting and analyzing data related to risks in credit operations and securities.