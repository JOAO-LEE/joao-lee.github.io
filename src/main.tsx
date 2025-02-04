import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import { NavigationProvider } from "./providers/MobileNavigationProvider/MobileNavigationProvider.tsx";
import { ProjectProvider } from "./providers/ProjectProvider/ProjectProvider.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <NavigationProvider>
        <ProjectProvider>
          <App />
        </ProjectProvider>
      </NavigationProvider>
    </HashRouter>
  </React.StrictMode>,
)
