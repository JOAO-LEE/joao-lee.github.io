import { Intro } from "@/components/sections/Intro/Intro";
import { About } from "@/components/sections/About/About";
import { TechStack } from "@/components/sections/TechStack/TechStack";
import { Projects } from "@/components/sections/Projects/Projects";
import { MoreAbout } from "@/components/sections/MoreAbout/MoreAbout";
import { Farewell } from "@/components/sections/Farewell/Farewell";

export function HomePage() {
  return (
    <>
      <Intro />
      <About />
      <TechStack />
      <Projects />
      <MoreAbout />
      <Farewell />
    </>
  )
}
