import { useTranslation } from "react-i18next";

function SocialMedia() {
  const { t } = useTranslation();

  return (
    <div className="placeholder">
      <p>🏗️ {t("placeholder.comingsoon")} 🚧</p>
    </div>
  );
}

export default SocialMedia;
