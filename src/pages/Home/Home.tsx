import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import { Intro } from "../../components/Intro/Intro";
import OverTheYears from "../../components/OverTheYears/OverTheYears";
import Projects from "../../components/Projects/Projects";

export function Home() {
  return (
    <>
      <Intro />
      <About />
      <OverTheYears />
      <Experience />
      <Projects />
    </>
  )
}
