import About from "../../components/About/About";
import { Intro } from "../../components/Intro/Intro";
import OverTheYears from "../../components/OverTheYears/OverTheYears";
import { TechStack } from "../../components/TechStack/TechStack";

export function Home() {
  return (
    <>
      <Intro />
      <About />
      <OverTheYears />
      <TechStack />
    </>
  )
}
