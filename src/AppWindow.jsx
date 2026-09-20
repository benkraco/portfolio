import Intro from "./pages/Intro";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Development from "./pages/Development";
import Music from "./pages/Music";
import SocialMedia from "./pages/SocialMedia";

import { useTranslation } from "react-i18next";
import { useState } from "react";

import close from "./assets/x-solid.png";
import maximize from "./assets/window-restore-solid.png";
import minimize from "./assets/window-minimize-solid.png";

const date = new Date();

function AppWindow({ activeApp, setActiveApp }) {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const apps = {
    intro: <Intro />,
    aboutme: <AboutMe />,
    education: <Education />,
    projects: <Projects />,
    development: <Development />,
    music: <Music />,
    socialmedia: <SocialMedia />,
  };

  const handleClose = () => {
    setActiveApp("intro");
  };

  const handleNavigation = (app) => {
    setActiveApp(app);
    setMenuOpen(false);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="app-window">
      <div className="app-window-header">
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>

        <span>
          {t(`window.${activeApp}`)
            .toLowerCase()
            .replace(/\s+/g, "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")}
          .exe
        </span>

        <div className="windowControls">
          <img src={minimize} alt="Icon Min" />
          <img src={maximize} alt="Icon Max" />

          <button onClick={handleClose}>
            <img src={close} alt="Icon X" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <div
            className="offcanvas-overlay"
            onClick={() => setMenuOpen(false)}
          />

          <nav className="offcanvas">
            <div className="offcanvas-header">
              <span>menu.exe</span>

              <button onClick={() => setMenuOpen(false)}>
                <img src={close} alt="Cerrar menú" />
              </button>
            </div>

            <div className="offcanvas-content">
              <button onClick={() => handleNavigation("intro")}>
                🏠 {t("window.intro")}
              </button>

              <button onClick={() => handleNavigation("aboutme")}>
                👤 {t("window.aboutme")}
              </button>

              <button onClick={() => handleNavigation("education")}>
                🎓 {t("window.education")}
              </button>

              <button onClick={() => handleNavigation("projects")}>
                🗃️ {t("window.projects")}
              </button>

              <button onClick={() => handleNavigation("development")}>
                💻 {t("window.development")}
              </button>

              <button onClick={() => handleNavigation("music")}>
                🎼 {t("window.music")}
              </button>

              <button onClick={() => handleNavigation("socialmedia")}>
                🌐 {t("window.socialmedia")}
              </button>

              <div className="offcanvas-language">
                <span>{t("window.language")}</span>

                <div>
                  <button
                    className={i18n.language === "es" ? "active" : ""}
                    onClick={() => changeLanguage("es")}
                  >
                    Español
                  </button>

                  <span>/</span>

                  <button
                    className={i18n.language === "en" ? "active" : ""}
                    onClick={() => changeLanguage("en")}
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
            <p className="copyrightMobile">
              Copyright &copy; {date.getFullYear()} Benkraco / Benjamin
              Kracovitz
            </p>
          </nav>
        </>
      )}

      <div className="app-window-content">{apps[activeApp]}</div>
    </div>
  );
}

export default AppWindow;
