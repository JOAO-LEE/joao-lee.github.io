import  {Project } from "./pages/Project/Project";
import { Navigate, Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { Layout } from "./layout/Layout";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="projects">
          <Route element={<Navigate to="/" />} />
          <Route index path=":id" element={<Project />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
