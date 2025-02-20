import { techStack } from "@/data/techStack";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState } from "react";
import { BasicTechList } from "../TechStack/BasicTechList/BasicTechList";
import { TechItem } from "../TechStack/TechItem/TechItem";
import { TechList } from "../TechStack/TechList/TechList";
import { TypeOfTech } from "../TechStack/TypeOfTech/TypeOfTech";

export function SeeMoreTech() {
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 1,
  });

  return (
    <>
      {!seeMore ? (
        <div
          ref={ref}
          className={`space-y-5 text-center lg:place-self-center ${isVisible ? "show-content swipe-to-origin-y" : "hidden-content translate-y-14"}`}
        >
          <TypeOfTech techStackTitle="and much more..." />
          <button
            type="button"
            onClick={() => setSeeMore(true)}
            className="lg:text-xl font-styled-bold p-2  text-yel-200 tracking-widest underline underline-offset-8 decoration-grayish"
          >
            see all
          </button>
          <p className="font-styled-bold lg:text-lg text-grayish">or</p>
          <p className="font-styled-bold lg:text-lg text-yel-100">
            scroll to see the projects i have done
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-5 lg:w-4/5 lg:place-self-center">
            <TypeOfTech techStackTitle="backend" />
            <TechList itemsDirection="vertical">
              {techStack.backendTech.map(({ iconClass, name }, index) => (
                <TechItem key={index}>
                  <i className={`${iconClass} text-7xl p-4`} />
                  <p className="font-styled-tipography  text-yel-200 text-xl lg:text-3xl">
                    {name}
                  </p>
                </TechItem>
              ))}
            </TechList>
          </div>
          <div className="space-y-5 lg:w-2/3 lg:place-self-center">
            <TypeOfTech techStackTitle="databases" />
            <BasicTechList techSection="databases" />
          </div>
          <div className="space-y-5 lg:w-4/5 lg:place-self-center">
            <TypeOfTech techStackTitle="testing" />
            <TechList itemsDirection="vertical">
              {techStack.testing.map(({ iconClass, name }, index) => (
                <TechItem key={index}>
                  <i className={`${iconClass} text-7xl p-4`} />
                  <p className="font-styled-tipography  text-yel-200 text-xl lg:text-3xl">
                    {name}
                  </p>
                </TechItem>
              ))}
            </TechList>
          </div>
          <div className="space-y-5 lg:place-self-center">
            <TypeOfTech techStackTitle="some other tech i learned/worked with" />
            <BasicTechList techSection="otherTech" />
          </div>
        </>
      )}
    </>
  );
}
