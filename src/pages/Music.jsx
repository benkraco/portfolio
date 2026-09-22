import { useTranslation } from "react-i18next";

function Music() {
  const { t } = useTranslation();

  return (
    <div className="placeholder">
      <p>🏗️ {t("placeholder.comingsoon")} 🚧</p>
    </div>
  );
}

export default Music;
