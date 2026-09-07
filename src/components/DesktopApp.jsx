import { useTranslation } from "react-i18next";

function DesktopApp({ name, icon, position, onClick }) {
  const { t } = useTranslation();

  return (
    <button
      className={`desktop-app ${position}`}
      onClick={onClick}
    >
      <span className="desktop-app-icon">{icon}</span>
      <span className="desktop-app-name">
        {t(name)}
      </span>
    </button>
  );
}

export default DesktopApp;