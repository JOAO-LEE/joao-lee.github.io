import { About } from "@/components/sections/About/About";
import { Farewell } from "@/components/sections/Farewell/Farewell";
import { Intro } from "@/components/sections/Intro/Intro";
import { MoreAbout } from "@/components/sections/MoreAbout/MoreAbout";
import { Projects } from "@/components/sections/Projects/Projects";
import { TechStack } from "@/components/sections/TechStack/TechStack";

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
  );
}
