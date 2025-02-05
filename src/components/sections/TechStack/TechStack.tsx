import { Link } from "react-router";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { TypeOfTech } from "@/components/ui/TechStack/TypeOfTech/TypeOfTech";
import {TechItem} from "@/components/ui/TechStack/TechItem/TechItem";
import { BasicTechList } from "@/components/ui/TechStack/BasicTechList/BasicTechList";
import { TechList } from "@/components/ui/TechStack/TechList/TechList";
import { techStack } from "@/data/techStack";

export function TechStack() {

  return (
    <section  
    className="bg-blu-200 p-4 overflow-hidden"
    >
      <SectionTitle textContent="tech stack"/>
      <div className="flex flex-col gap-7">
        <TypeOfTech techStackTitle="basics"/>
        <BasicTechList techSection="basics"/>
        <TypeOfTech techStackTitle="frameworks"/>
        <TechList 
        itemsDirection="vertical"
        >
          {
            techStack
            .frontendTech 
              .map(({iconClass, name}, index) => (
                <TechItem key={index}>
                  <i className={`${iconClass} text-7xl p-4`}></i>
                  <p className="font-styled-tipography  text-yel-200 text-2xl">{name}</p>
                </TechItem>
              ))
          }
        </TechList>
        <TypeOfTech techStackTitle="styling"/>
        <BasicTechList techSection="styling"/>
        <TypeOfTech techStackTitle="and much more..." />
        <div>
          <p className="text-sm text-center">click <Link to="/tech-stack"><b>here</b></Link> to see all or continue to see my projects below</p>
        </div>
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