import { Navigate, Route, Routes } from "react-router";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProjectPage } from "./pages/ProjectPage/ProjectPage";
import { ResumePage } from "./pages/ResumePage/ResumePage";
import "./index.css";
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage";

function App() {
  
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} >
          <Route element={<Navigate to="/" />} />
          <Route index path=":id" element={<ProjectPage />} />
        </Route>
        <Route index path="/resume" element={<ResumePage />} />
      </Route>
    </Routes>
  )
}

export default App;
