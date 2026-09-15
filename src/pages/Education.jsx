import { useTranslation } from "react-i18next";

import ORT from "../assets/313416834_488003286689501_5681123809060293358_n.png";
import Nichia from "../assets/309015878_470708511762062_4993681746446052396_n.png";
import Cambridge from "../assets/secondary-logo-stacked.png.webp";
import UP from "../assets/logo@2x.png";

function Education() {
  const { t } = useTranslation();

  return (
    <>
      <div className="educationContainer">
        <div className="collage">
          <div className="educationLogo">
            <img src={ORT} alt="Icono ORT Argentina" />
          </div>
          <div className="educationInfo">
            <h2>ORT Argentina</h2>
            <h3>{t("education.highschool")}</h3>
            <span>2021 — 2026</span>
          </div>
        </div>
        <div className="collage">
          <div className="educationLogo">
            <img src={ORT} alt="Icono ORT Argentina" />
          </div>
          <div className="educationInfo">
            <h2>ORT Argentina</h2>
            <h3>{t("education.elementaryschool")}</h3>
            <span>2016 — 2020</span>
          </div>
        </div>
        <div className="collage">
          <div className="educationLogo">
            <img src={Nichia} alt="Icono Nichia Gakuin" />
          </div>
          <div className="educationInfo">
            <h2>Nichia Gakuin</h2>
            <h3>{t("education.kindergarten")}</h3>
            <span>2010 — 2015</span>
          </div>
        </div>
      </div>
      <div className="separador"></div>
      <div className="educationContainer">
        <div className="collage">
          <div className="educationLogo">
            <img src={Cambridge} alt="Icono Cambridge" />
          </div>
          <div className="educationInfo">
            <h2>Cambridge English</h2>
            <h3>B2 First Certificate</h3>
            <span>{t("education.cambridge")}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
