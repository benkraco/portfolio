import Nutrinfo from "../assets/Nutrinfo.png";
import Quorum from "../assets/Quorum.jpg";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="projects">
      <h1>{t("projects.title")}</h1>
      <div className="project nutrinfo">
        <div className="projectName">
          <h1>Nutrinfo (2025)</h1>
          <img src={Nutrinfo} alt="Nutrinfo Isologo" />
        </div>
        <div className="projectText">
          <p>{t("projects.nutrinfoText")}</p>
        </div>
      </div>
      <div className="project quorum">
        <div className="projectText">
          <p>{t("projects.quorumText")}</p>
        </div>
        <div className="projectName">
          <h1>Quórum (2026)</h1>
          <img src={Quorum} alt="Quórum Isologo" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
