import { techStack } from "@/data/techStack";
import { BasicTechList } from "../TechStack/BasicTechList/BasicTechList";
import { TechItem } from "../TechStack/TechItem/TechItem";
import { TechList } from "../TechStack/TechList/TechList";
import { TypeOfTech } from "../TechStack/TypeOfTech/TypeOfTech";

export function SeeMoreTech() {
  return (
    <>
      <div className="space-y-5 lg:w-4/5 lg:place-self-center">
        <TypeOfTech techStackTitle="backend" />
        <TechList 
        itemsDirection="vertical"
        >
          {
            techStack
            .backendTech 
              .map(({iconClass, name}, index) => (
                <TechItem key={index}>
                  <i className={`${iconClass} text-7xl p-4`}></i>
                  <p className="font-styled-tipography  text-yel-200 text-xl lg:text-3xl">{name}</p>
                </TechItem>
              ))
          }
        </TechList>
      </div>
      <div className="space-y-5 lg:w-2/3 lg:place-self-center">
        <TypeOfTech techStackTitle="databases"/>
        <BasicTechList techSection="databases"/>
      </div>
      <div className="space-y-5 lg:w-4/5 lg:place-self-center">
        <TypeOfTech techStackTitle="testing" />
        <TechList 
        itemsDirection="vertical"
        >
          {
            techStack
            .testing 
              .map(({iconClass, name}, index) => (
                <TechItem key={index}>
                  <i className={`${iconClass} text-7xl p-4`}></i>
                  <p className="font-styled-tipography  text-yel-200 text-xl lg:text-3xl">{name}</p>
                </TechItem>
              ))
          }
        </TechList>
      </div>
      <div className="space-y-5 lg:place-self-center">
      <TypeOfTech techStackTitle="some other tech i learned/worked with" />
        <BasicTechList techSection="otherTech"/>     
      </div>
    </>
  )
}
