import About from "../../components/About/About";
import Intro from "../../components/Intro/Intro";
import Main from "../../components/Main/Main";
import Projects from "../../components/Projects/Projects";

export function Home() {
  return (
    <Main>
      <Intro />
      <About />
      <Projects />
    </Main>
  )
}
