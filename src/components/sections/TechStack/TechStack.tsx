import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { SeeMoreTech } from "@/components/ui/SeeMoreTech/SeeMoreTech";
import { BasicTechList } from "@/components/ui/TechStack/BasicTechList/BasicTechList";
import { TechItem } from "@/components/ui/TechStack/TechItem/TechItem";
import { TechList } from "@/components/ui/TechStack/TechList/TechList";
import { TypeOfTech } from "@/components/ui/TechStack/TypeOfTech/TypeOfTech";
import { techStack } from "@/data/techStack";

export function TechStack() {
  return (
    <section className="bg-blu-200 p-4 overflow-hidden h-fit">
      <SectionTitle textContent="tech stack" />
      <div className="grid gap-10 py-12 lg:py-16 px-8">
        <div className="space-y-5 lg:w-2/3 lg:place-self-center">
          <TypeOfTech techStackTitle="basics" />
          <BasicTechList techSection="basics" />
        </div>
        <div className="space-y-5 lg:w-2/3 lg:place-self-center">
          <TypeOfTech techStackTitle="frameworks" />
          <TechList itemsDirection="vertical">
            {techStack.frontendTech.map(({ iconClass, name }) => (
              <TechItem key={name}>
                <i className={`${iconClass} text-7xl p-4`} />
                <p className="font-styled-tipography  text-yel-200 text-xl lg:text-3xl">
                  {name}
                </p>
              </TechItem>
            ))}
          </TechList>
        </div>
        <div className="space-y-5 lg:w-2/3 lg:place-self-center">
          <TypeOfTech techStackTitle="styling" />
          <BasicTechList techSection="styling" />
        </div>
        <SeeMoreTech />
      </div>
    </section>
  );
}
