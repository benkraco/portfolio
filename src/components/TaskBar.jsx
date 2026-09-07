import useClock from "../hooks/useClock";
import { useTranslation } from "react-i18next";

function TaskBar() {
  const date = useClock();
  const { i18n } = useTranslation();

  const time = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav className="taskbar">
      <div className="taskbar-right">

        <div className="language-switcher">
          <button
            className={i18n.language === "es" ? "active" : ""}
            onClick={() => changeLanguage("es")}
          >
            ES
          </button>

          <span>/</span>

          <button
            className={i18n.language === "en" ? "active" : ""}
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>
        </div>

        <span className="taskbar-time">{time}</span>

      </div>
    </nav>
  );
}

export default TaskBar;