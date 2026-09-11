import { useState } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

import TaskBar from "./components/TaskBar";
import DesktopApp from "./components/DesktopApp";
import AppWindow from "./AppWindow";

function App() {
  const [activeApp, setActiveApp] = useState("intro");
  const { t } = useTranslation();

  return (
    <div className="content">
      <div className="desktop">
        <DesktopApp
          name={t("window.aboutme")}
          icon="👤"
          position="aboutme"
          onClick={() => setActiveApp("aboutme")}
        />

        <DesktopApp
          name={t("window.education")}
          icon="🎓"
          position="education"
          onClick={() => setActiveApp("education")}
        />

        <DesktopApp
          name={t("window.projects")}
          icon="🗃️"
          position="projects"
          onClick={() => setActiveApp("projects")}
        />

        <DesktopApp
          name={t("window.development")}
          icon="💻"
          position="development"
          onClick={() => setActiveApp("development")}
        />

        <DesktopApp
          name={t("window.music")}
          icon="🎼"
          position="music"
          onClick={() => setActiveApp("music")}
        />

        <DesktopApp
          name={t("window.socialmedia")}
          icon="🌐"
          position="socialmedia"
          onClick={() => setActiveApp("socialmedia")}
        />

        <AppWindow activeApp={activeApp} setActiveApp={setActiveApp} />
      </div>

      <TaskBar />
    </div>
  );
}

export default App;
