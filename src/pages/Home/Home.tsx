import About from "../../components/About/About";
import { Intro } from "../../components/Intro/Intro";
import OverTheYears from "../../components/OverTheYears/OverTheYears";

export function Home() {
  return (
    <>
      <Intro />
      <About />
      <OverTheYears />
      {/* <Experience /> */}
      {/* <Projects /> */}
    </>
  )
}
