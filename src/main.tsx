import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import { ScrollWrapper } from "./components/utils/ScrollWrapper.tsx";
import { NavigationProvider } from "./providers/MobileNavigationProvider/MobileNavigationProvider.tsx";
import { ProjectProvider } from "./providers/ProjectProvider/ProjectProvider.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error('Elemento com id "root" não foi encontrado.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollWrapper>
        <NavigationProvider>
          <ProjectProvider>
            <App />
          </ProjectProvider>
        </NavigationProvider>
      </ScrollWrapper>
    </HashRouter>
  </React.StrictMode>
);
