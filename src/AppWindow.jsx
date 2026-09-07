import Intro from "./pages/Intro";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import { useTranslation } from "react-i18next";

function AppWindow({ activeApp, setActiveApp }) {
  const { t } = useTranslation();

  const apps = {
    intro: <Intro />,
    about: <AboutMe />,
    projects: <Projects />,
  };

  const handleClose = () => {
    setActiveApp("intro");
  };

  return (
    <div className="app-window">
      <div className="app-window-header">
        <span>{t(`window.${activeApp}`)}.exe</span>

        <div className="windowControls">
          <img src="" alt="Icon Min" />
          <img src="" alt="Icon Max" />

          <button onClick={handleClose}>
            <img src="" alt="Icon X" />
          </button>
        </div>
      </div>

      <div className="app-window-content">
        {apps[activeApp]}
      </div>
    </div>
  );
}

export default AppWindow;