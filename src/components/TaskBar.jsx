import useClock from "../hooks/useClock";
import { useTranslation } from "react-i18next";
import { IconHomeFilled, IconFileTextFilled } from "@tabler/icons-react";

function TaskBar({ setActiveApp }) {
  const date = useClock();
  const { i18n } = useTranslation();

  let day = date.toLocaleDateString("en-GB");

  let time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  if (i18n.language === "en") {
    day = date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    time = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleHome = () => {
    setActiveApp("intro");
  };

  return (
    <nav className="taskbar">
      <div className="taskbar-left">
        <button onClick={handleHome}>
          <IconHomeFilled /> Home
        </button>
        <a
          href="https://blog.benkraco.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconFileTextFilled /> Blog
        </a>
      </div>

      <div className="language-switcher">
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

      <div className="taskbar-right">
        <span className="taskbar-time">{day}</span>
        <span className="taskbar-time">{time}</span>
      </div>
    </nav>
  );
}

export default TaskBar;
