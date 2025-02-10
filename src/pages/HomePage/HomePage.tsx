import { Intro } from "@/components/sections/Intro/Intro";
import { About } from "@/components/sections/About/About";
import { TechStack } from "@/components/sections/TechStack/TechStack";
import { MoreAbout } from "@/components/sections/MoreAbout/MoreAbout";
import { Projects } from "@/components/sections/ProjectsSection/Projects";

export function HomePage() {
  return (
    <>
      <Intro />
      <About />
      <TechStack />
      <Projects />
      <MoreAbout />
    </>
  )
}
