import { useContext } from "react";
import About from "../../components/About/About";
import { Intro } from "../../components/Intro/Intro";
import OverTheYears from "../../components/OverTheYears/OverTheYears";
import Projects from "../../components/Projects/Projects";
import { TechStack } from "../../components/TechStack/TechStack";
import { ProjectContext } from "../../context/Project/ProjectContext";

export function Home() {
  // const { dialogIsOpen, toggleDialog } = useContext(ProjectContext);
  return (
    // <div className="relative">
    <>
      <Intro />
      <About />
      <TechStack />
      <Projects />
      <OverTheYears />
    </>
  )
}
