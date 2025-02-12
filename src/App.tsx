import {  Route, Routes } from "react-router";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProjectPage } from "./pages/ProjectPage/ProjectPage";
import { ResumePage } from "./pages/ResumePage/ResumePage";
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage";
import "./index.css";

function App() {
  
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<ProjectPage />} />
        <Route path="resume" element={<ResumePage />} />
      </Route>
    </Routes>
  )
}

export default App;
