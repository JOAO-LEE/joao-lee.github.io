import { Navigate, Route, Routes } from "react-router";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProjectPage } from "./pages/ProjectPage/ProjectPage";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="projects">
          <Route element={<Navigate to="/" />} />
          <Route index path=":id" element={<ProjectPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
