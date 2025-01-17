// import Main from "./components/Main/Main";
// import Intro from "./components/Intro/Intro";
import Projects from "./pages/Project/Project";
// import About from "./components/About/About";
// import { Header } from "./components/Header/Header";
// import { ProjectProvider } from "./context/Project/ProjectProvider";
// import { projects } from "./projects";
import { Navigate, Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import "./App.css";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route  path="projects"  element={<Projects />}>
          <Route element={<Navigate to="/" />} />
          <Route index path=":id" element={<Projects />} />
      </Route>
        </Route>
    </Routes>

  )
}



export default App;
