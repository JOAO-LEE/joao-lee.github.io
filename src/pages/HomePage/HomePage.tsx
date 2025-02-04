import { Intro } from "@/components/sections/Intro/Intro";
import { About } from "@/components/sections/About/About";
import { TechStack } from "@/components/sections/TechStack/TechStack";
import { OverTheYears } from "@/components/sections/OverTheYears/OverTheYears";
import { Projects } from "@/components/sections/ProjectsSection/Projects";

export function HomePage() {
  return (
    <>
      <Intro />
      <About />
      <TechStack />
      <Projects />
      <OverTheYears />
    </>
  )
}
